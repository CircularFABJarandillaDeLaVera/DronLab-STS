# DronLab STS · Refuerzo pedagógico

Fecha: 6 de noviembre de 2026. Copia de trabajo basada en `0a481454a899c6f21ccf2e4a7967056edd227bad` de `CircularFABJarandillaDeLaVera/DronLab-STS`.

Revisión técnica de cierre completada sobre la copia de trabajo. Solo se ha trabajado en STS.

## Resultado

- Ocho bloques con 64 unidades de explicación, ejemplo resuelto, error habitual, comprobación y transferencia.
- 160 flashcards: 20 por bloque, con conceptos breves, aplicación y contraste del error.
- 164 preguntas: 100 retenidas y revisadas, 64 nuevas de decisión aplicada. Se retiraron 68 por duplicación, simplificación problemática o contenido fuera del ámbito actual del curso. El registro conserva los IDs retirados y el commit de origen.
- 24 casos con datos para decidir y solución desplegable; 24 prácticas de aula con entrega, criterios y resultado esperado.
- Presentación, ficha de alumno, guía de profesor, Profesor Plus, chuletas, mapas y prompts actualizados.
- Dos vías del simulacro: completa 40/40 min y reducida desde A2 30/30 min. Umbrales de 30 y 23 aciertos, respectivamente. La distribución del simulador es didáctica.
- Tabla de márgenes STS-01 y esquemas SVG de zona terrestre y equilibrio de palanca.
- Glosario de siglas por bloque.

## Decisiones normativas y pedagógicas

Las referencias formativas se contrastaron con el syllabus enlazado por AESA, las Easy Access Rules EASA de junio de 2026, el índice de normativa posterior, la información de formación AESA actualizada en julio de 2026 y el BOE. Se añadió la actualización de clasificación de sucesos del Reglamento 2026/1821. Las fechas de publicación no se usan para descartar una disposición que continúa aplicándose: se verifica su versión y su ámbito.

El material del ZIP se utilizó como referencia de ideas y ejemplos. No se incorporaron sus instrucciones administrativas históricas ni sus regímenes ajenos al STS europeo EASA. Se corrigieron PDRA/autorización, alcance con observadores, visibilidad estrictamente superior a 5 km, modo C5 frente a operación STS-01, geoconsciencia condicional C5/C6, FTS y riesgo residual, geometría de zonas y energía de baterías.

No se presenta el material adaptado como banco oficial de AESA ni como formación/evaluación práctica acreditativa. El refuerzo no pretende desarrollar exhaustivamente cada subepígrafe del syllabus; la matriz de revisión identifica ampliaciones útiles.

## Validación

Resultado real de las comprobaciones del 6 de noviembre de 2026:

- Verificador ejecutado con la invocación normal de Windows: 164 preguntas, 32 bancos, 160 flashcards, IDs únicos, datos JS/JSON concordantes, dos vías de simulacro y enlaces locales válidos.
- Sintaxis válida en los 27 JavaScript y estructura válida en los 45 JSON revisados.
- Revisión visual automatizada y mediante capturas de 88 páginas de los bloques en escritorio (1440 × 900) y móvil (390 × 844), en claro y oscuro: 352 estados sin desbordamientos de página, imágenes rotas, contenido vacío, errores de carga ni excepciones. Los mapas conservan su lienzo interno desplazable y ampliable.
- Interacciones comprobadas en los ocho bloques: anterior/siguiente, hash, índice, notas, ficha de alumno, navegación docente, corrección y reinicio de tests y giro/filtro de flashcards.
- Simulacro completo y reducido comprobados en escritorio y móvil, claro y oscuro, con recorridos hasta resultado de 40 y 30 preguntas y bancos de 164/8 y 101/5 respectivamente.
- Durante la revisión se corrigieron el ajuste móvil de contenedores y cabeceras documentales, el selector de bloque del simulacro, el contraste del simulacro claro y la apariencia del botón de repaso de falladas.
- No se detectaron archivos ajenos al cambio entre los que se preparan para seguimiento; `skills-lock.json` queda expresamente fuera.
- La web de GitHub Pages existente responde, pero su fuente de publicación no ha podido confirmarse mediante el endpoint autenticado disponible. El push puede activar una actualización automática; no se realizará un despliegue adicional.

Ver también `REVISION_STS_2026.md`. La revisión documental y las pruebas técnicas no equivalen a una certificación del contenido por AESA ni sustituyen la revisión humana. El estado se mantiene en **PENDIENTE_REVISION_EXPERTA**.
