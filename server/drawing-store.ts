import { promises as fs } from 'node:fs';
import { randomUUID } from 'node:crypto';
import path from 'node:path';

export interface DrawingRecord {
  id: string;
  name: string;
  /** PNG codificado como data URL: `data:image/png;base64,...` */
  dataUrl: string;
  createdAt: string;
}

export type DrawingSummary = Omit<DrawingRecord, 'dataUrl'>;

export interface NewDrawing {
  name: string;
  dataUrl: string;
}

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

const PNG_PREFIX = 'data:image/png;base64,';
const MAX_NAME_LENGTH = 60;

export function validateNewDrawing(input: unknown): NewDrawing {
  if (typeof input !== 'object' || input === null) {
    throw new ValidationError('El cuerpo debe ser un objeto JSON');
  }
  const { name, dataUrl } = input as Record<string, unknown>;

  if (typeof name !== 'string' || name.trim() === '') {
    throw new ValidationError('El nombre es obligatorio');
  }
  if (name.trim().length > MAX_NAME_LENGTH) {
    throw new ValidationError(`El nombre no puede superar ${MAX_NAME_LENGTH} caracteres`);
  }
  if (typeof dataUrl !== 'string' || !dataUrl.startsWith(PNG_PREFIX)) {
    throw new ValidationError('La imagen debe ser un PNG en formato data URL');
  }

  return { name: name.trim(), dataUrl };
}

function toSummary({ dataUrl: _dataUrl, ...summary }: DrawingRecord): DrawingSummary {
  return summary;
}

/**
 * Almacén de dibujos sobre un único fichero JSON.
 * Pensado para uso local: simple, sin dependencias y con escrituras serializadas.
 */
export function createDrawingStore(filePath: string) {
  // Serializa las operaciones para que dos peticiones simultáneas no pisen el fichero.
  let queue: Promise<unknown> = Promise.resolve();
  function run<T>(task: () => Promise<T>): Promise<T> {
    const result = queue.then(task);
    queue = result.catch(() => undefined);
    return result;
  }

  async function readAll(): Promise<DrawingRecord[]> {
    try {
      const raw = await fs.readFile(filePath, 'utf-8');
      return JSON.parse(raw) as DrawingRecord[];
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === 'ENOENT') return [];
      throw error;
    }
  }

  async function writeAll(records: DrawingRecord[]): Promise<void> {
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    const tmpPath = `${filePath}.tmp`;
    await fs.writeFile(tmpPath, JSON.stringify(records, null, 2), 'utf-8');
    await fs.rename(tmpPath, filePath);
  }

  return {
    /** Dibujos sin la imagen, del más reciente al más antiguo. */
    list(): Promise<DrawingSummary[]> {
      return run(async () => {
        const records = await readAll();
        return records
          .map(toSummary)
          .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
      });
    },

    get(id: string): Promise<DrawingRecord | undefined> {
      return run(async () => {
        const records = await readAll();
        return records.find((record) => record.id === id);
      });
    },

    create(input: NewDrawing): Promise<DrawingSummary> {
      return run(async () => {
        const records = await readAll();
        const record: DrawingRecord = {
          id: randomUUID(),
          name: input.name,
          dataUrl: input.dataUrl,
          createdAt: new Date().toISOString(),
        };
        await writeAll([...records, record]);
        return toSummary(record);
      });
    },
  };
}

export type DrawingStore = ReturnType<typeof createDrawingStore>;
