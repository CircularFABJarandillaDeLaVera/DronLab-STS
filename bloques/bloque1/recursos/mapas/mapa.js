(function () {
  const canvas = document.getElementById("mapCanvas");
  const viewport = document.getElementById("mapViewport");
  let scale = 1;
  let collapsed = false;
  let dragging = false;
  let startX = 0;
  let startY = 0;
  let offsetX = 0;
  let offsetY = 0;

  function applyTransform() {
    canvas.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
  }

  document.getElementById("zoomIn")?.addEventListener("click", () => {
    scale = Math.min(1.8, scale + 0.1);
    applyTransform();
  });
  document.getElementById("zoomOut")?.addEventListener("click", () => {
    scale = Math.max(0.6, scale - 0.1);
    applyTransform();
  });
  document.getElementById("toggleAll")?.addEventListener("click", () => {
    collapsed = !collapsed;
    document.querySelectorAll(".map-node.leaf").forEach(node => {
      node.hidden = collapsed;
    });
  });
  document.getElementById("fullScreen")?.addEventListener("click", () => {
    if (!document.fullscreenElement) viewport?.requestFullscreen?.();
    else document.exitFullscreen?.();
  });

  viewport?.addEventListener("pointerdown", event => {
    dragging = true;
    startX = event.clientX - offsetX;
    startY = event.clientY - offsetY;
    viewport.setPointerCapture(event.pointerId);
  });
  viewport?.addEventListener("pointermove", event => {
    if (!dragging) return;
    offsetX = event.clientX - startX;
    offsetY = event.clientY - startY;
    applyTransform();
  });
  viewport?.addEventListener("pointerup", () => { dragging = false; });
})();
