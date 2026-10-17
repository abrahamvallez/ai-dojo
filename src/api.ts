import type { Drawing, DrawingSummary } from './types';

async function request<T>(input: string, init?: RequestInit): Promise<T> {
  const response = await fetch(input, init);
  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(body.error ?? `La petición falló (${response.status})`);
  }
  return response.json() as Promise<T>;
}

export function listDrawings(): Promise<DrawingSummary[]> {
  return request<DrawingSummary[]>('/api/drawings');
}

export function getDrawing(id: string): Promise<Drawing> {
  return request<Drawing>(`/api/drawings/${encodeURIComponent(id)}`);
}

export function createDrawing(name: string, dataUrl: string): Promise<DrawingSummary> {
  return request<DrawingSummary>('/api/drawings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, dataUrl }),
  });
}
