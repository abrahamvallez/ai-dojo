import './style.css';
import { createDrawing, getDrawing, listDrawings } from './api';

// TODO: ordenar todo esto algún día, ahora mismo funciona y no se toca
let canvas = document.getElementById('canvas') as HTMLCanvasElement;
let ctx = canvas.getContext('2d')!;
let drawing = false;
let lastX = 0;
let lastY = 0;
let color = '#000000';
let tool = 'pencil'; // de momento solo hay lápiz
let saved: any[] = [];
let currentName = '';

const colors = ['#000000', '#ffffff', '#e63946', '#f4a261', '#e9c46a', '#2a9d8f', '#457b9d', '#9b5de5'];

function getPos(clientX: number, clientY: number) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: ((clientX - rect.left) * canvas.width) / rect.width,
    y: ((clientY - rect.top) * canvas.height) / rect.height,
  };
}

function init() {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, 800, 500);
  ctx.lineWidth = 4;
  ctx.lineCap = 'round';
  // ctx.globalAlpha = 0.5;

  const toolbar = document.getElementById('toolbar')!;

  colors.forEach((c) => {
    const b = document.createElement('button');
    b.className = 'swatch';
    b.style.background = c;
    b.style.border = c === color ? '3px solid #333' : '1px solid #999';
    b.onclick = () => {
      color = c;
      document.querySelectorAll('.swatch').forEach((el) => {
        (el as HTMLElement).style.border = '1px solid #999';
      });
      b.style.border = '3px solid #333';
    };
    toolbar.appendChild(b);
  });

  const clearBtn = document.createElement('button');
  clearBtn.textContent = 'Limpiar';
  clearBtn.onclick = () => {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 800, 500);
  };
  toolbar.appendChild(clearBtn);

  // ratón
  canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    const p = getPos(e.clientX, e.clientY);
    lastX = p.x;
    lastY = p.y;
  });

  canvas.addEventListener('mousemove', (e) => {
    if (!drawing) return;
    const p = getPos(e.clientX, e.clientY);
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    lastX = p.x;
    lastY = p.y;
  });

  canvas.addEventListener('mouseup', () => {
    drawing = false;
  });

  canvas.addEventListener('mouseleave', () => {
    drawing = false;
  });

  // táctil
  canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    const t = e.touches[0];
    drawing = true;
    const p = getPos(t.clientX, t.clientY);
    lastX = p.x;
    lastY = p.y;
  });

  canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    if (!drawing) return;
    const t = e.touches[0];
    const p = getPos(t.clientX, t.clientY);
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    lastX = p.x;
    lastY = p.y;
  });

  canvas.addEventListener('touchend', () => {
    drawing = false;
  });

  document.getElementById('save-btn')!.addEventListener('click', saveDrawing);
  document.getElementById('drawing-name')!.addEventListener('keydown', (e) => {
    if ((e as KeyboardEvent).key === 'Enter') saveDrawing();
  });
}

async function saveDrawing() {
  const input = document.getElementById('drawing-name') as HTMLInputElement;
  const name = input.value;
  if (!name) {
    alert('Ponle un nombre al dibujo');
    return;
  }

  try {
    const dataUrl = canvas.toDataURL('image/png');
    await createDrawing(name, dataUrl);
    input.value = '';
    document.getElementById('status')!.textContent = '¡Guardado!';
    setTimeout(() => (document.getElementById('status')!.textContent = ''), 2000);
    await refreshList();
  } catch (e: any) {
    alert('Error al guardar: ' + e.message);
  }
}

async function loadDrawing(id: string) {
  const d = await getDrawing(id);
  const img = new Image();
  img.onload = () => {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 800, 500);
    ctx.drawImage(img, 0, 0);
  };
  img.src = d.dataUrl;
  currentName = d.name;
  document.title = 'Dojo Paint - ' + currentName;
}

async function refreshList() {
  const list = document.getElementById('drawings')!;
  try {
    saved = await listDrawings();
  } catch (e) {
    list.innerHTML = '<li>No se pudo cargar la lista</li>';
    return;
  }

  list.innerHTML = '';
  if (saved.length === 0) {
    list.innerHTML = '<li class="empty">Todavía no hay dibujos</li>';
  }
  saved.forEach((d) => {
    list.innerHTML += `<li><a href="#" data-id="${d.id}">${d.name}</a><small>${new Date(d.createdAt).toLocaleString()}</small></li>`;
  });

  list.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', async (ev) => {
      ev.preventDefault();
      await loadDrawing((a as HTMLElement).dataset.id!);
    });
  });
}

init();
refreshList();
