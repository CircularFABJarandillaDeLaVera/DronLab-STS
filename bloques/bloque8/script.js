(() => {
  const data = window.DRONLAB_BLOQUE;
  const stage = document.getElementById('stage');
  const menuDialog = document.getElementById('menuDialog');
  const menuList = document.getElementById('menuList');
  const progress = document.getElementById('progress');
  const counter = document.getElementById('counter');
  const help = document.getElementById('help');
  const notesKey = 'dronlab_sts_bloque8_notes';
  let current = 0;
  const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  function slideTemplate(item, index) {
    const comp = item.id === 'b8-10' ? '<div class="callout"><b>Trazabilidad complementaria:</b> Resolucion 10/11/2024 y RD 517/2024 se mantienen separadas del Syllabus AESA paginas 11-12.</div>' : '';
    if (index === 0) return `<section class="slide active" data-id="${esc(item.id)}"><div class="hero-grid"><div><p class="eyebrow">Bloque 8 STS</p><h1>${esc(data.meta.titulo)}</h1><p class="subtitle">${esc(data.meta.subtitulo)}</p><div class="hero-tags"><span>AESA ${esc(data.meta.paginas_relacionadas)}</span><span>${esc(data.meta.estado)}</span><span>Ground Risk / FTS / VLOS</span></div></div><div class="meteo-visual" aria-hidden="true"><div class="cloud"><b>ZTC</b><span>Riesgo | Margen | FTS | VLOS</span></div></div></div><div class="cue">${esc(item.docente)}</div><aside class="notes"><b>Notas de clase</b><textarea data-note="${esc(item.id)}"></textarea></aside></section>`;
    return `<section class="slide" data-id="${esc(item.id)}"><p class="eyebrow">Bloque 8 STS</p><h2>${esc(item.titulo)}</h2><div class="compare"><article><div class="badge">OBJETIVO</div><h3>${esc(item.titulo)}</h3><p>${esc(item.contenido)}</p></article><article><div class="badge alt">TRAZA</div><h3>Syllabus STS</h3><p>Temario oficial AESA | Paginas relacionadas: ${esc(data.meta.paginas_relacionadas)} | Estado ${esc(data.meta.estado)}</p></article></div>${comp}<div class="callout"><b>Profesor Plus:</b> ${esc(item.docente)}</div><div class="cue">${esc(item.docente)}</div><aside class="notes"><b>Notas de clase</b><textarea data-note="${esc(item.id)}"></textarea></aside></section>`;
  }
  function bindNotes(){document.querySelectorAll('textarea[data-note]').forEach(area=>{const key=`${notesKey}_${area.dataset.note}`;area.value=localStorage.getItem(key)||'';area.addEventListener('input',()=>localStorage.setItem(key,area.value));});}
  function readHashIndex(){const hash=decodeURIComponent(location.hash.replace('#',''));const found=data.pantallas.findIndex(item=>item.id===hash);return found>=0?found:0}
  function go(index){current=Math.max(0,Math.min(data.pantallas.length-1,index));document.querySelectorAll('.slide').forEach((s,i)=>s.classList.toggle('active',i===current));location.hash=data.pantallas[current].id;progress.style.width=`${((current+1)/data.pantallas.length)*100}%`;counter.textContent=`${current+1}/${data.pantallas.length}`}
  function render(){stage.innerHTML=data.pantallas.map(slideTemplate).join('');menuList.innerHTML=data.pantallas.map((item,index)=>`<button class="menu-item" data-index="${index}"><b>${esc(item.titulo)}</b><small>${esc(item.contenido)}</small></button>`).join('');menuList.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{go(Number(b.dataset.index));menuDialog.close();}));bindNotes();go(readHashIndex())}
  document.getElementById('prevBtn').onclick=()=>go(current-1);document.getElementById('nextBtn').onclick=()=>go(current+1);document.getElementById('menuBtn').onclick=()=>menuDialog.showModal();document.getElementById('closeMenu').onclick=()=>menuDialog.close();document.getElementById('notesBtn').onclick=()=>document.body.classList.toggle('show-notes');document.getElementById('fullscreenBtn').onclick=()=>document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.();document.getElementById('resetBtn').onclick=()=>go(0);window.addEventListener('keydown',e=>{if(e.key==='ArrowRight')go(current+1);if(e.key==='ArrowLeft')go(current-1);if(e.key.toLowerCase()==='m')menuDialog.showModal();if(e.key.toLowerCase()==='n')document.body.classList.toggle('show-notes');if(e.key==='?'){help.classList.add('show');setTimeout(()=>help.classList.remove('show'),3200);}});window.addEventListener('hashchange',()=>go(readHashIndex()));render();
})();


