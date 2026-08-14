# DRONLAB STS · INGENIERÍA PROFUNDA BLOQUE 1

Este documento constituye la **Ingeniería del Conocimiento** detallada para el **Bloque 1: Reglamentación de la aviación**, diseñada específicamente para ser procesada por el agente DronLab-SDK. Toda la información contenida proviene exclusivamente de los documentos del syllabus oficial de AESA y el marco legal vigente (RD 517/2024).

---

# 0. TRAZABILIDAD DOCUMENTAL
- **Organismo:** AESA
- **Documento:** MATERIAS DEL EXAMEN DE CONOCIMIENTOS TEÓRICOS DE LA CATEGORÍA «ESPECÍFICA» PARA OPERACIONES DE UAS BAJO ESCENARIOS ESTÁNDAR (STS)
- **Código / referencia:** Syllabus oficial STS
- **Edición / versión:** 2
- **Fecha:** 17/04/2023
- **Páginas relacionadas:** 3–4 (Sección 1 completa)
- **Estado:** VALIDADO

---

## 1. CONCEPTOS PRINCIPALES DESARROLLADOS

### Categoría «Específica»
Es la categoría de operación de UAS destinada a misiones que no cumplen con los requisitos de la categoría «abierta». Se caracteriza por estar basada en el **riesgo operacional**, requiriendo una evaluación previa para garantizar la seguridad.

### Evaluación de Riesgos y Metodología SORA
- **SORA (Specific Operations Risk Assessment):** Metodología armonizada por EASA para evaluar sistemáticamente el riesgo de una operación con UAS.
- **Principio de evaluación:** Las operaciones en categoría específica requieren mitigar riesgos tanto en el aire (colisión con otras aeronaves) como en tierra (daños a personas o infraestructuras).

### PDRA (Pre-Defined Risk Assessment)
Evaluación de riesgo predefinida que publica la autoridad (EASA o AESA) para tipos de misiones comunes. Facilita la obtención de autorizaciones al estandarizar los requisitos de seguridad necesarios para misiones como la aplicación de fitosanitarios (ej. **PDRA-S01[F]**).

### Declaración Operacional
Trámite administrativo mediante el cual el operador de UAS comunica a la autoridad competente su intención de realizar una operación que se ajusta a un escenario estándar (STS), declarando bajo su responsabilidad que cumple íntegramente con los requisitos técnicos y operativos del mismo.

---

## 2. CONCEPTOS PUENTE Y RELACIONES

- **SORA ↔ STS:** Los escenarios estándar (STS) nacen de una evaluación de riesgo (SORA) ya realizada previamente por la autoridad competente. Al acogerse a un STS, el operador no necesita realizar su propia evaluación SORA desde cero.
- **Observador del espacio aéreo ↔ Piloto (en STS-02):** El observador es el puente sensorial que permite al piloto operar en modo BVLOS, detectando aeronaves tripuladas y obstáculos que el piloto no puede ver directamente.
- **Geografía de vuelo ↔ Volumen operacional:** La geografía de vuelo incluye los márgenes de seguridad para contingencias, mientras que el volumen operacional es el espacio total fuera del cual se activan los procedimientos de emergencia.

---

## 3. DEPENDENCIAS Y GRAFO DE CONOCIMIENTO

### Grafo de conocimiento jerárquico
1. **Fundamento Legal:** Reglamento (UE) 2019/947 y RD 517/2024.
2. **Requisito Previo:** Certificado A1/A3 (Formación en línea).
3. **Núcleo Técnico:** Diferenciación entre escenarios STS-01 y STS-02.
4. **Instrumentación del Vuelo:** Información aeronáutica (AIP, NOTAM, ENAIRE).
5. **Certificación Final:** Superación del examen teórico STS (mínimo 40 preguntas / 75% acierto).

---

## 4. DESARROLLO COMPLETO DE EPÍGRAFES OFICIALES (PÁGS. 3–4)

### I. Introducción a la categoría «específica» [Syllabus pág. 3]
- **Elementos generales:** El operador debe estar registrado en el Estado miembro de residencia o actividad principal y el piloto debe poseer las competencias teóricas y prácticas específicas para el escenario.
- **Operaciones transfronterizas:** Procedimiento para operar en un país distinto al de registro, requiriendo confirmación de la declaración o autorización.
- **Responsabilidades generales:** El **operador** establece procedimientos, manuales y asegura el mantenimiento. El **piloto** es responsable de la conducción segura del vuelo y de no operar bajo efectos de sustancias psicoactivas o fatiga.

### II. Escenarios estándar [Syllabus pág. 3]
- **Declaración operacional:** Concepto y pasos para su presentación telemática.
- **STS-01 (VLOS en entorno poblado):**
  - Requiere zona terrestre controlada.
  - Prohibido volar sobre concentraciones de personas.
  - Exige drones de clase **C5**.
- **STS-02 (BVLOS en entorno poco poblado):**
  - Permite volar fuera del alcance visual del piloto.
  - Requiere **observadores del espacio aéreo** dedicados.
  - Exige drones de clase **C6**.

### III. Espacio aéreo e información aeronáutica [Syllabus pág. 4]
- **Soberanía y designaciones:** El Estado tiene soberanía plena sobre su espacio aéreo. Se definen clases de espacio aéreo (controlado, no controlado) y restricciones operacionales según el tipo de tráfico.
- **Zonas Geográficas UAS:** 
  - **P (Prohibidas):** El vuelo está totalmente prohibido salvo excepciones de estado.
  - **R (Restringidas):** Vuelo sujeto a condiciones o autorizaciones específicas.
  - **D (Peligrosas):** Zonas con actividades peligrosas para la navegación aérea.
- **Fuentes de información:**
  - **AIP (Aeronautical Information Publication):** Manual básico que contiene información aeronáutica de carácter duradero.
  - **AIC (Aeronautical Information Circular):** Avisos sobre cambios en legislación o reglamentación.
  - **ENAIRE Drones:** Herramienta digital oficial para consultar las zonas geográficas UAS representadas en mapas.

---

## 5. DIFERENCIAS STS-01 / STS-02

| Característica | STS-01 | STS-02 |
| :--- | :--- | :--- |
| **Alcance visual** | VLOS (Visible para el piloto) | BVLOS (Más allá de la vista) |
| **Entorno** | Poblado (Zona terrestre controlada) | Poco poblado |
| **Marcado de clase** | C5 | C6 |
| **Observadores** | No obligatorios para detectar tráfico | **Obligatorios** (Espacio aéreo) |
| **Visibilidad horizontal** | Suficiente para ver la aeronave | Mínimo **5 km** |

---

## 6. DATOS, REQUISITOS Y CONDICIONES CRÍTICAS

- **Preguntas mínimas del examen:** 40 preguntas.
- **Nota de corte:** 75%.
- **Vigencia STS-ES (Nacionales):** Válidos hasta el **31/12/2025**.
- **MTOM en STS-ES-01NE:** Inferior a **10 kg** (si no tiene marcado de clase).
- **Identificación remota (Remote ID):** Obligatoria y debe estar activa en todo momento.
- **Manual de Operaciones:** Obligatorio para el operador, debe estar actualizado y ser accesible para los pilotos.

---

## 7. ERRORES Y CONFUSIONES FRECUENTES

1. **Confundir Declaración con Autorización:** El STS es una declaración (proceso rápido); si la misión no encaja en STS o PDRA, se requiere autorización (SORA, proceso lento).
2. **Responsabilidad del Observador en STS-02:** El observador detecta peligros, pero la responsabilidad última de la maniobra evasiva y la seguridad recae siempre en el **piloto a distancia**.
3. **Marcado de Clase:** Creer que un dron C1 o C2 sirve para STS. Para STS europeo solo sirven drones con marcado **C5 o C6**.
4. **Vuelo sobre concentraciones:** Está **prohibido** tanto en STS-01 como en STS-02.

---

## 8. PREGUNTAS QUE NACEN DEL CONTENIDO

- ¿Cuál es la diferencia fundamental entre una AIC y una AIP?
- En una operación STS-02, ¿quién tiene la obligación de realizar la vigilancia del espacio aéreo circundante?
- ¿Qué metodología se ha utilizado para realizar la evaluación de riesgos de los escenarios estándar vigentes?
- ¿Hasta qué fecha puede un operador volar bajo una declaración nacional STS-ES-01?
- ¿Qué información técnica mínima debe consultar un piloto para verificar zonas geográficas UAS antes del vuelo?

---

## 9. ESCENARIOS PRÁCTICOS

- **Escenario 1:** Un operador desea grabar un comercial en el centro de Madrid (entorno poblado) utilizando un dron de 4kg con marcado C5. Debe presentar una declaración para **STS-01** y acotar una **zona terrestre controlada** libre de personas no participantes.
- **Escenario 2:** Una empresa necesita inspeccionar 10 km de vía férrea en una zona rural. El piloto no puede ver el dron a esa distancia. Debe contratar **observadores del espacio aéreo**, usar un dron **C6** y operar bajo **STS-02**.

---

## 10. VOCABULARIO Y SIGLAS ESENCIALES

- **AESA:** Agencia Estatal de Seguridad Aérea.
- **BVLOS:** Beyond Visual Line of Sight (Más allá del alcance visual).
- **VLOS:** Visual Line of Sight (Alcance visual).
- **SORA:** Specific Operations Risk Assessment.
- **STS:** Escenario Estándar Europeo.
- **STS-ES:** Escenario Estándar Nacional.
- **NOTAM:** Notice to Airmen (Aviso a navegantes).
- **FTS:** Flight Termination System (Sistema de terminación de vuelo).

---

## 11. MATERIAL PARA PROFESOR PLUS (PÍLDORAS ACADÉMICAS)

> **Píldora 1:** "Recuerda que en la categoría específica el centro de todo es el **riesgo**. El SORA es la balanza que mide ese riesgo para decidir qué medidas de seguridad (mitigaciones) debes aplicar".
>
> **Píldora 2:** "La diferencia clave entre STS-01 y STS-02 es **la vista**. En el 01 miras tú al dron (VLOS); en el 02 el dron está lejos (BVLOS) y necesitas 'ojos extra' llamados observadores".
>
> **Píldora 3:** "Las zonas geográficas UAS no son opcionales. Consulta siempre **ENAIRE Drones**; si entras en una zona P (prohibida) sin permiso, te enfrentas a sanciones graves aunque sea una zona abierta".

---

## 12. AUDITORÍA FINAL DE EPÍGRAFES (PÁGS. 3–4)

- [x] **I.a:** Elementos generales de la categoría específica (Pág. 3).
- [x] **I.b:** SORA y PDRA (Pág. 3).
- [x] **II.a:** Concepto de declaración operacional (Pág. 3).
- [x] **II.b:** Requisitos y responsabilidades STS-01 (Pág. 3).
- [x] **II.c:** Requisitos y responsabilidades STS-02 (Pág. 3).
- [x] **II.d:** Responsabilidades del observador en STS-02 (Pág. 4).
- [x] **III.a:** Designaciones y clases de espacio aéreo (Pág. 4).
- [x] **III.b:** Zonas restringidas, prohibidas y peligrosas (Pág. 4).
- [x] **III.c:** Interpretación de AIP y AIC (Pág. 4).

**Ingeniería del Bloque 1 finalizada y auditada.**