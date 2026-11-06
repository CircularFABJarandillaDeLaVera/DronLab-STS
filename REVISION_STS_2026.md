# Revisión y refuerzo pedagógico de DronLab STS

6 de noviembre de 2026 · cambios sobre el commit `0a481454a899c6f21ccf2e4a7967056edd227bad`.

## Criterio aplicado

Cada idea debe permitir que una persona explique qué significa, vea cómo se usa, detecte un error frecuente, tome una decisión y justifique por qué cambia al variar una condición. Las preguntas nuevas contienen cuatro opciones completas y razones por opción. Las preguntas retenidas conservan sus identificadores y ofrecen explicación, error habitual y referencias. Se revisaron por significado para retirar repeticiones del mismo planteamiento; se mantienen algunos conceptos en distintos recursos porque cumplen funciones de recuerdo y aplicación.

Se ha dado prioridad a calidad y coherencia, no a mantener un número artificial de preguntas. Los escenarios no se deciden por palabras clave como «rural» o «C5». Si falta una condición, se enseña a identificarla en lugar de inventarla.

## Qué se revisó del material aportado

El ZIP contiene 12 PDF (465 páginas) y una imagen. Se extrajo el texto de todos los PDF y se examinó su estructura, contenido y puntos sensibles frente al curso y las fuentes actuales. La revisión visual fue de muestras, no una inspección gráfica de las 465 páginas.

| Material | Uso en el refuerzo |
| --- | --- |
| Reglamentación de la aviación | Reorganización según fuentes actuales; no se trasladaron calendarios de transición ni condiciones históricas. |
| Limitaciones del rendimiento humano | Fatiga, percepción, presión comercial, atención y decisiones. Se evita prohibir toda medicación sin atender a sus efectos. |
| Procedimientos operacionales | Preparación, contingencia, emergencia, ERP y cierre; se separan maniobra y respuesta organizada. |
| Atenuaciones del riesgo en aire | Vigilancia, comunicaciones y límites STS-02. No se trasladan medidas particulares como obligaciones universales. |
| Atenuaciones del riesgo en tierra | Zona completa, contingencia y margen; se desarrollan tabla, esquema y ejemplos propios de STS. |
| Conocimiento general del UAS | Funciones y limitaciones de sistemas; corregida la equiparación universal de geoconsciencia C3 a C5/C6. |
| Meteorología | Conversiones, partes, vigencia, observación local y decisión. Se evita un umbral geomagnético universal sin ámbito. |
| Rendimiento de vuelo | Masa, CG, envolvente, energía y baterías. No se promete seguridad garantizada ni autonomía exacta. |
| Documento AESA de materias aportado | Se usa el syllabus vigente enlazado actualmente por AESA, no se importa automáticamente la revisión antigua aportada. |
| Syllabus del curso privado | Solo referencia de estructura; las condiciones y prácticas se contrastan con las fuentes actuales. |
| Instrucciones del curso privado | No se integran accesos, pasos o plazos históricos. |
| Nota sobre entidades de formación | Se utiliza la información actual de AESA. |
| Imagen de equilibrio de masas | Ejemplo de estática: 100 kg × 0,25 m = 25 kg × 1 m. Se explicita que no acredita una instalación real en un UAS. |

## Cambios que afectan al razonamiento

| Problema observado en el curso | Tratamiento aplicado |
| --- | --- |
| Inspección de 10 km aceptada sin delimitar alcance desde el piloto | Se diferencia longitud recorrida de separación instantánea. No se acepta alejar la UA 10 km por añadir observadores. |
| Caso STS-02 a 3 km | Se convierte en ejemplo de incumplimiento del máximo de separación de 2 km con observadores. |
| Observadores descritos como requisito de cualquier STS-02 | Se enseñan configuraciones con y sin observadores y condiciones simultáneas. |
| «5 km o más» | Se emplea la redacción superior a 5 km de UAS.STS-02.020(3), diferenciando visibilidad y alcance. |
| PDRA confundida con vía declarativa | Se explica que apoya una solicitud de autorización. |
| Geoconsciencia C3 universalmente heredada | Se atiende a las excepciones de las partes 16 y 17 del Reglamento 2019/945. |
| FTS como caída controlada siempre dentro del perímetro | Se diferencia terminación, reducción de consecuencias y riesgo residual. No garantiza impacto exacto o sin daños. |
| Límite técnico C5 y operación STS-01 confundidos | Modo técnico sin anclaje ≤ 5 m/s; condición operacional sin anclaje < 5 m/s. |
| Regla A2 usada para explicar márgenes STS | Se usa tabla STS-01 y criterio del fabricante para STS-02; no se sustituye por 1:1. |
| Cifras de archivo o indicadores como recetas universales | Se remite a tipo de registro, disposición, manual y condición aplicable. |
| Ah interpretados como energía | Se diferencia carga Ah de energía Wh y se resuelven ejemplos. |
| Casos sin devolución y docente con respuestas genéricas | Soluciones desplegables y guías vinculadas a cada concepto y error. |

## Recursos resultantes

| Bloque | Preguntas anteriores | Preguntas actuales | Tarjetas | Casos | Prácticas |
| --- | ---: | ---: | ---: | ---: | ---: |
| 1 · Reglamentación | 25 | 24 | 20 | 3 | 3 |
| 2 · Rendimiento humano | 24 | 23 | 20 | 3 | 3 |
| 3 · Procedimientos | 24 | 18 | 20 | 3 | 3 |
| 4 · Riesgo en aire | 15 | 15 | 20 | 3 | 3 |
| 5 · Conocimiento UAS | 22 | 21 | 20 | 3 | 3 |
| 6 · Meteorología | 26 | 26 | 20 | 3 | 3 |
| 7 · Rendimiento UAS | 22 | 24 | 20 | 3 | 3 |
| 8 · Riesgo en tierra | 10 | 13 | 20 | 3 | 3 |
| **Total** | **168** | **164** | **160** | **24** | **24** |

El registro `ingenieria/registro-revision-sts.json` identifica las 68 preguntas retiradas. Las nuevas usan IDs `R26`; no se reciclan IDs históricos para otro enunciado. El examen reducido utiliza las materias 1 a 5 según el syllabus AESA enlazado; no se deduce su selección de la numeración de otro documento.

## Fuentes actuales consultadas

- [AESA · Syllabus STS revisión 2, actualmente enlazado](https://www.seguridadaerea.gob.es/sites/default/files/Temario.formaci%C3%B3n.conocimientos.te%C3%B3ricos.STS_v2.pdf).
- [AESA · Formación en STS europeos](https://www.seguridadaerea.gob.es/es/ambitos/drones/formacion-de-pilotos-a-distancia-de-uas-drones/formacion-de-pilotos-uas-drones-en-escenarios-estandar-europeos-sts).
- [EASA · Easy Access Rules, junio de 2026](https://www.easa.europa.eu/en/document-library/easy-access-rules/easy-access-rules-unmanned-aircraft-systems).
- [EASA · UAS.STS-01 y AMC/GM](https://www.easa.europa.eu/en/document-library/easy-access-rules/online-publications/easy-access-rules-unmanned-aircraft-systems?erules-id=ERULES-1963177438-17777).
- [EASA · UAS.STS-02 y AMC/GM](https://www.easa.europa.eu/en/document-library/easy-access-rules/online-publications/easy-access-rules-unmanned-aircraft-systems?erules-id=ERULES-1963177438-17399).
- [EASA · Reglamento 2019/945, partes 16 y 17](https://www.easa.europa.eu/en/document-library/easy-access-rules/online-publications/easy-access-rules-unmanned-aircraft-systems?erules-id=ERULES-1963177438-17523).
- [EASA · Índice de normativa y cambios posteriores a junio de 2026](https://www.easa.europa.eu/en/domains/civil-drones/regulations).
- [BOE · RD 517/2024 consolidado](https://www.boe.es/buscar/act.php?id=BOE-A-2024-11377).
- [BOE · Reglamento 2026/1821, clasificación de sucesos](https://www.boe.es/buscar/doc.php?id=DOUE-L-2026-81188).
- [AESA · Notificación de operadores UAS](https://www.seguridadaerea.gob.es/es/ambitos/gestion-de-la-seguridad-operacional/sistema-de-notificacion-de-sucesos/notifica-un-suceso/notificacion-de-operadores-uas).

La referencia de una norma incluye su ámbito: STS europeo EASA. Los regímenes nacionales o de actividades no EASA no se enseñan como si fueran STS europeo. Una fecha antigua en una norma vigente no equivale a normativa obsoleta. Las reglas se han parafraseado; las dudas operativas se resuelven en el texto vigente y las condiciones de la misión.

## Cobertura y ampliaciones

Este trabajo refuerza las ideas centrales de las ocho materias. No se declara que 64 unidades breves desarrollen exhaustivamente cada objetivo específico del syllabus. Como ampliaciones docentes posteriores quedan ejercicios específicos de operación en otro Estado miembro, clasificación detallada del espacio aéreo y lectura de cartas, más interpretación completa de partes, distintos diseños y límites delantero/trasero del CG, notificación de sucesos y expedientes de misión. Deben elaborarse con datos completos y fuente actual, sin introducir preguntas evaluables incompletas.

## Verificación técnica

- `python scripts/verificar_sts.py`: 164 preguntas, 32 bancos, IDs únicos, cuatro opciones, claves válidas, fuentes, soluciones, concordancia JS/JSON, umbrales y rutas locales correctos.
- Comprobación de sintaxis de todos los JavaScript y `git diff --check`.
- Navegador: 88 páginas de los ocho bloques comprobadas en 1440 × 900 y 390 × 844 px, en claro y oscuro (352 estados), sin desbordamientos de página, imágenes rotas, contenido vacío, errores JavaScript ni recursos locales fallidos. Los nodos fuera del viewport en los mapas pertenecen a su lienzo interno desplazable y ampliable.
- Se corrigieron durante el cierre el ajuste móvil de contenedores y cabeceras documentales, el ancho del selector de bloque del simulacro, el contraste del simulacro en claro y la apariencia del botón de repaso de falladas. Las páginas afectadas se volvieron a comprobar tras cada corrección.
- Interacciones en los ocho bloques: anterior/siguiente, hash, índice, notas, ficha de alumno, navegación docente, corrección y reinicio de tests y giro/filtro de tarjetas. Ambas vías del simulacro completaron recorridos de 40 y 30 preguntas hasta su resultado.
- Las capturas se utilizaron para revisión interna, no se incorporan al curso ni al paquete.

## Revisión humana y publicación

La revisión experta debe comprobar los casos límite y la claridad didáctica. No se atribuye validación oficial al material y la integración técnica no sustituye esa revisión. El estado registrado se mantiene en `PENDIENTE_REVISION_EXPERTA`.
