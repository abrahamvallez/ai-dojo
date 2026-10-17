import type { IncomingMessage, ServerResponse } from 'node:http';
import path from 'node:path';
import type { Connect, Plugin } from 'vite';
import { createDrawingStore, validateNewDrawing, ValidationError } from './drawing-store.ts';

const MAX_BODY_BYTES = 5 * 1024 * 1024;

function readJsonBody(req: IncomingMessage): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    let size = 0;

    req.on('data', (chunk: Buffer) => {
      size += chunk.length;
      if (size > MAX_BODY_BYTES) {
        reject(new ValidationError('La petición es demasiado grande'));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => {
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString('utf-8')));
      } catch {
        reject(new ValidationError('El cuerpo no es un JSON válido'));
      }
    });
    req.on('error', reject);
  });
}

function sendJson(res: ServerResponse, status: number, body: unknown): void {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(body));
}

export function createApiMiddleware(dataFile: string): Connect.NextHandleFunction {
  const store = createDrawingStore(dataFile);

  return async (req, res, next) => {
    const url = new URL(req.url ?? '/', 'http://localhost');
    if (!url.pathname.startsWith('/api/')) {
      next();
      return;
    }

    try {
      if (url.pathname === '/api/drawings' && req.method === 'GET') {
        sendJson(res, 200, await store.list());
        return;
      }

      if (url.pathname === '/api/drawings' && req.method === 'POST') {
        const input = validateNewDrawing(await readJsonBody(req));
        sendJson(res, 201, await store.create(input));
        return;
      }

      const match = url.pathname.match(/^\/api\/drawings\/([\w-]+)$/);
      if (match && req.method === 'GET') {
        const drawing = await store.get(match[1]);
        if (!drawing) {
          sendJson(res, 404, { error: 'Dibujo no encontrado' });
          return;
        }
        sendJson(res, 200, drawing);
        return;
      }

      sendJson(res, 404, { error: 'Ruta no encontrada' });
    } catch (error) {
      if (error instanceof ValidationError) {
        sendJson(res, 400, { error: error.message });
        return;
      }
      console.error(error);
      sendJson(res, 500, { error: 'Error interno del servidor' });
    }
  };
}

/**
 * Monta la API REST en el servidor de Vite (dev y preview),
 * así todo el proyecto arranca con un solo comando.
 */
export function apiPlugin(
  dataFile: string = path.resolve(process.cwd(), 'data/drawings.json'),
): Plugin {
  const middleware = createApiMiddleware(dataFile);
  return {
    name: 'dojo-paint-api',
    configureServer(server) {
      server.middlewares.use(middleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware);
    },
  };
}
