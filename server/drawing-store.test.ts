import { promises as fs } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { createDrawingStore, validateNewDrawing, ValidationError } from './drawing-store';

const PNG = 'data:image/png;base64,iVBORw0KGgo=';

let tmpDir: string;
let filePath: string;

beforeEach(async () => {
  tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'dojo-paint-'));
  filePath = path.join(tmpDir, 'drawings.json');
});

afterEach(async () => {
  await fs.rm(tmpDir, { recursive: true, force: true });
});

describe('createDrawingStore', () => {
  it('devuelve una lista vacía si el fichero no existe', async () => {
    const store = createDrawingStore(filePath);
    expect(await store.list()).toEqual([]);
  });

  it('crea un dibujo y lo devuelve sin la imagen', async () => {
    const store = createDrawingStore(filePath);
    const created = await store.create({ name: 'Casa', dataUrl: PNG });

    expect(created).toMatchObject({ name: 'Casa' });
    expect(created).not.toHaveProperty('dataUrl');
    expect(created.id).toEqual(expect.any(String));
  });

  it('recupera el dibujo completo por id', async () => {
    const store = createDrawingStore(filePath);
    const { id } = await store.create({ name: 'Casa', dataUrl: PNG });

    expect(await store.get(id)).toMatchObject({ id, name: 'Casa', dataUrl: PNG });
  });

  it('devuelve undefined si el id no existe', async () => {
    const store = createDrawingStore(filePath);
    expect(await store.get('no-existe')).toBeUndefined();
  });

  it('lista del más reciente al más antiguo', async () => {
    const store = createDrawingStore(filePath);
    await store.create({ name: 'Primero', dataUrl: PNG });
    await new Promise((resolve) => setTimeout(resolve, 5));
    await store.create({ name: 'Segundo', dataUrl: PNG });

    const names = (await store.list()).map((drawing) => drawing.name);
    expect(names).toEqual(['Segundo', 'Primero']);
  });

  it('persiste entre instancias del almacén', async () => {
    await createDrawingStore(filePath).create({ name: 'Casa', dataUrl: PNG });

    const names = (await createDrawingStore(filePath).list()).map((drawing) => drawing.name);
    expect(names).toEqual(['Casa']);
  });

  it('no pierde dibujos si se crean varios a la vez', async () => {
    const store = createDrawingStore(filePath);
    await Promise.all(
      Array.from({ length: 10 }, (_, index) => store.create({ name: `Dibujo ${index}`, dataUrl: PNG })),
    );

    expect(await store.list()).toHaveLength(10);
  });
});

describe('validateNewDrawing', () => {
  it('acepta un dibujo válido y recorta el nombre', () => {
    expect(validateNewDrawing({ name: '  Casa  ', dataUrl: PNG })).toEqual({ name: 'Casa', dataUrl: PNG });
  });

  it.each([
    ['sin cuerpo', null],
    ['nombre vacío', { name: '   ', dataUrl: PNG }],
    ['sin nombre', { dataUrl: PNG }],
    ['nombre demasiado largo', { name: 'a'.repeat(61), dataUrl: PNG }],
    ['imagen que no es PNG', { name: 'Casa', dataUrl: 'data:image/jpeg;base64,AAAA' }],
    ['sin imagen', { name: 'Casa' }],
  ])('rechaza %s', (_caso, input) => {
    expect(() => validateNewDrawing(input)).toThrow(ValidationError);
  });
});
