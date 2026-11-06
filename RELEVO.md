# Relevo de cierre · DronLab STS

Fecha: 6 de noviembre de 2026.

## Rama y base

- Rama de trabajo: `main`.
- Remoto: `origin` → `https://github.com/CircularFABJarandillaDeLaVera/DronLab-STS.git`.
- Commit base de la revisión: `0a481454a899c6f21ccf2e4a7967056edd227bad`.
- Estado experto que debe conservarse: `PENDIENTE_REVISION_EXPERTA`.

## Cambios conservados

- Refuerzo pedagógico de los ocho bloques: 64 unidades, 164 preguntas, 160 flashcards, 24 casos y 24 prácticas.
- Consolidación de aula, alumno, profesor, tests, casos y prácticas en `assets/js/sts-learning.js`; los controladores locales eliminados ya no tienen referencias HTML.
- Dos vías del simulacro: completa (40 preguntas) y reducida desde A2 (30 preguntas).
- Documentación de revisión, mantenimiento, estado, glosario, diseño pedagógico y registro de preguntas retiradas.
- Ajustes finales detectados en navegador: contenedores y cabeceras documentales en móvil, título de chuletas, selector móvil del simulacro, contraste del simulacro claro y botón de repaso de falladas.
- `scripts/verificar_sts.py` lee explícitamente con `utf-8-sig` para funcionar con la invocación normal en Windows.

No se ha descartado, restaurado ni sustituido la copia de trabajo: los cambios rastreados, eliminaciones intencionadas y archivos nuevos permanecen en el repositorio.

## Verificaciones realizadas

- `python scripts/verificar_sts.py`: OK, 164 preguntas, 32 bancos, IDs únicos, JS/JSON concordantes, dos vías y enlaces locales válidos.
- Sintaxis: 27 JavaScript sin errores; 45 JSON válidos.
- `git diff --check`: sin errores.
- Navegador: 88 páginas de los bloques × escritorio/móvil × claro/oscuro = 352 estados sin fallos de página. Los nodos que quedan fuera del viewport en mapas pertenecen al lienzo interno desplazable/zoomable.
- Interacciones de los ocho bloques: teoría, hash, índice, notas, alumno, profesor, test y flashcards.
- Simulacro: 8 estados visuales y recorridos completos de 40 y 30 preguntas hasta resultado.
- Navegación de teoría B1–B8: sin enlaces `Recursos` ni `Profesor Plus`.
- Registro experto: `PENDIENTE_REVISION_EXPERTA` confirmado.
- Revisión de secretos añadidos: sin coincidencias; no hay binarios nuevos.

## Archivos pendientes de seguimiento

Nuevos del cambio:

- `ESTADO.md`
- `GUIA_MANTENIMIENTO.md`
- `RELEVO.md`
- `REVISION_STS_2026.md`
- `assets/js/sts-learning.js`
- `examen-final/exam-config-a2.json`
- `ingenieria/glosario-sts.json`
- `ingenieria/refuerzo-sts-2026.json`
- `ingenieria/registro-revision-sts.json`
- `scripts/verificar_sts.py`

Archivo ajeno que debe permanecer sin seguimiento y fuera del commit:

- `skills-lock.json`

Además entran las modificaciones y eliminaciones rastreadas que muestra `git status --short`; las eliminaciones son controladores JavaScript sustituidos por el controlador compartido.

## Publicación

- No hay `.github/workflows`, `netlify.toml`, `vercel.json` ni rama `gh-pages` visibles.
- La URL pública `https://circularfabjarandilladelavera.github.io/DronLab-STS/` responde, pero eso no confirma por sí solo qué fuente publica ni que un push concreto vaya a desplegarse.
- La consulta pública del endpoint Pages devolvió 404. El conector GitHub autenticado confirma permisos de administración sobre el repositorio, pero no expone el endpoint de Pages; el intento mediante el gestor de credenciales Git no produjo una respuesta autenticada utilizable. La fuente de publicación queda, por tanto, **no confirmada**.
- No se debe ejecutar ningún despliegue adicional. Tras el push hay que comprobar por separado el SHA remoto y la versión servida por la web.

## Siguiente paso autorizado

1. Confirmar, si es posible con acceso autenticado, la configuración de GitHub Pages.
2. Revisar la lista exacta que se añadirá y excluir `skills-lock.json`.
3. Añadir explícitamente cada archivo del cambio.
4. Ejecutar `python scripts/verificar_sts.py` y `git diff --cached --check`.
5. Si todo pasa, crear un commit y un tag descriptivo nuevo, y hacer push de `main` y del tag.
6. Verificar el remoto y la web, distinguiendo push completado de publicación confirmada.
