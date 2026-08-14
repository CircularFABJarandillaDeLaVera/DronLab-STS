# DRONLAB STS · INGENIERÍA PROFUNDA BLOQUE 3

Este documento constituye la **Ingeniería del Conocimiento** definitiva para el **Bloque 3: Procedimientos operacionales**, diseñada para ser procesada por el agente DronLab-SDK. El núcleo académico se basa estrictamente en el syllabus oficial de AESA para la categoría específica, páginas 5 y 6.

---

# 0. TRAZABILIDAD DOCUMENTAL
- **Organismo:** AESA
- **Documento:** MATERIAS DEL EXAMEN DE CONOCIMIENTOS TEÓRICOS DE LA CATEGORÍA «ESPECÍFICA» PARA OPERACIONES DE UAS BAJO ESCENARIOS ESTÁNDAR (STS)
- **Código / referencia:** Syllabus oficial STS
- **Edición / versión:** 2
- **Fecha:** 17/04/2023
- **Páginas relacionadas:** 5–6 (Materia 3: Procedimientos operacionales)
- **Estado:** VALIDADO

---

## 1. CONCEPTOS PRINCIPALES DESARROLLADOS (Syllabus pág. 5–6)

### Acciones Pre-vuelo Específicas
Conjunto de verificaciones obligatorias antes del despegue que varían según el escenario:
- **Verificación del FTS (STS-01):** Comprobación de que los medios de terminación de vuelo están operativos.
- **Identificación remota directa (STS-01):** Asegurar que el sistema está activo y actualizado.
- **Configuración de Geocaging (STS-02):** Requisito de que esta función esté configurada y operativa para impedir que la aeronave salga del volumen operacional.
- **Adecuación de la Zona Terrestre Controlada:** Responsabilidad del piloto de asegurar que el área definida por el operador es adecuada para la misión.

### Procedimientos de Contingencia (Incursiones)
Gestión de situaciones anómalas en vuelo, centradas en la seguridad de terceros:
- **Intrusión de personas:** Acciones a realizar por el piloto y personal esencial en caso de que personas no participantes entren en la zona terrestre controlada.

### Procedimientos de Emergencia (Fallos Técnicos)
- **Fallo del FTS:** Protocolos de actuación específicos para el caso de que el Sistema de Terminación de Vuelo no funcione correctamente.

### Plan de Respuesta ante Emergencias (ERP)
- **Definición:** El ERP es el conjunto de procedimientos que definen las acciones ante situaciones críticas.
- **Activación por salida de zona:** Acciones típicas a realizar cuando la aeronave vuela fuera del volumen representado por la zona terrestre controlada.

---

## 2. CONCEPTOS PUENTE Y RELACIONES

- **FTS ↔ Mitigación de Riesgo:** El FTS es la herramienta técnica verificada en el pre-vuelo que permite ejecutar el procedimiento de emergencia si la aeronave pierde el control o sale de la zona terrestre controlada.
- **Zona Terrestre Controlada ↔ ERP:** La zona terrestre controlada es el límite geográfico cuya superación por parte de la aeronave activa inmediatamente el Plan de Respuesta ante Emergencias.

---

## 3. DEPENDENCIAS Y GRAFO DE CONOCIMIENTO (Nivel STS)

### Grafo de conocimiento jerárquico
1. **Configuración Técnica:** FTS, ID Remota y Geocaging (Pre-vuelo).
2. **Seguridad Perimetral:** Adecuación de la Zona Terrestre Controlada.
3. **Gestión de Incursiones:** Contingencia ante personas no participantes (En vuelo).
4. **Gestión de Fallos Críticos:** Emergencia ante fallo de FTS (En vuelo).
5. **Protocolo Final:** Ejecución del ERP por salida del volumen (En vuelo).

---

## 4. DESARROLLO DE EPÍGRAFES OFICIALES (PÁGS. 5–6)

### I. Pre-vuelo [Syllabus pág. 5]
- **Acciones para STS-01:**
    - Verificar que los medios de terminación de vuelo (**FTS**) están operativos.
    - Verificar que la **identificación remota directa** está activa y actualizada.
- **Acciones para STS-02:**
    - Verificar que la función de **geocaging** está configurada y operativa.
- **Acciones comunes:**
    - Asegurarse de la **adecuación de la zona terrestre controlada** definida por el operador.

### II. En vuelo [Syllabus pág. 6]
- **a) Procedimientos de contingencia:**
    - Manejo de la **intrusión de personas no participantes** en la zona terrestre controlada.
- **b) Procedimientos de emergencia:**
    - Acciones ante un **mal funcionamiento del FTS**.
- **c) Plan de Respuesta ante Emergencias (ERP):**
    - Definición y descripción del concepto ERP.
    - Acciones ante una **UA que vuela fuera del volumen** de la zona terrestre controlada.

---

## 5. CONTENIDO ACADÉMICO COMPLEMENTARIO (Otras fuentes oficiales)

*Las siguientes afirmaciones son herramientas pedagógicas o requisitos normativos adicionales al syllabus de las páginas 5–6:*

- **Metodología MEUH:** Herramienta pedagógica para la verificación sistemática (Meteorología, Entorno, UAS, Humanos).
- **Ciclo OODA:** Técnica de consciencia situacional (Observar, Opciones, Decidir, Actuar).
- **Acciones posteriores al vuelo:** Incluyen el apagado seguro, inspección y registro de datos de los sistemas y la **fatiga de la tripulación** (RD 517/2024).
- **Conservación de registros:** Los registros de formación, mantenimiento y sucesos deben guardarse durante **3 años**.
- **Índice K Planetario:** Se recomienda abortar la operación si el índice K es **≥ 4** para evitar interferencias electromagnéticas (Catálogo ENAIRE).
- **Asistencia Barométrica:** Recomendada para mejorar la precisión del cálculo de altura AGL.
- **Limitación de altura:** El ATSP puede requerir alturas inferiores a la general de 120 m. La limitación puede reforzarse por software.
- **Comunicaciones:** La solicitud de "clearance" al ATC/AFIS se realizará según lo acordado en la coordinación pre-táctica.

---

## 6. DATOS, REQUISITOS Y CONDICIONES CRÍTICAS

- **STS-01:** Obligatorio FTS operativo e ID remota activa.
- **STS-02:** Obligatorio Geocaging configurado.
- **Emergencia principal:** Salida de la aeronave de la zona terrestre controlada.
- **Aviso ATC:** Medida principal del ERP ante pérdida de control (fly-away).

---

## 7. ERRORES Y CONFUSIONES FRECUENTES DE EXAMEN

1. **Confundir STS-01 y STS-02:** Creer que el geocaging es obligatorio para STS-01 en el pre-vuelo (es específico de STS-02 según syllabus pág. 5-6).
2. **Responsabilidad de la zona:** Creer que la zona controlada solo la define el operador; el piloto debe asegurar su **adecuación** real antes de volar.
3. **FTS y ERP:** No identificar que el fallo del FTS es por sí mismo un procedimiento de emergencia.
4. **Fly-away:** No saber que la salida del volumen de la zona terrestre controlada obliga a activar el ERP.

---

## 8. PREGUNTAS QUE NACEN DEL CONTENIDO

- ¿Qué dos elementos técnicos específicos debe verificar el piloto de un STS-01 antes del vuelo?
- En una operación STS-02, ¿qué función debe estar operativa para evitar que la aeronave abandone el volumen operacional?
- ¿Qué acción debe tomar el personal esencial si una persona no participante entra en la zona terrestre controlada durante el vuelo?
- ¿Qué protocolo debe activarse si la aeronave vuela accidentalmente fuera de la zona terrestre controlada?
- ¿A qué categoría de procedimiento (contingencia o emergencia) pertenece el fallo del sistema de terminación de vuelo (FTS)?

---

## 9. ESCENARIOS PRÁCTICOS

- **Escenario 1:** Durante la inspección pre-vuelo de un dron clase C5 (STS-01), el piloto detecta que el sistema de identificación remota no emite señal. Debe abortar la operación hasta que el sistema esté activo y actualizado.
- **Escenario 2:** Un piloto de STS-02 configura un límite de geocaging para rodear una antena. Durante el vuelo, el dron se acerca al límite; el piloto debe reaccionar para que la aeronave no supere el volumen definido.
- **Escenario 3:** Una persona ajena a la operación cruza el perímetro de seguridad en un entorno urbano. El piloto activa el procedimiento de contingencia para gestionar la intrusión.

---

## 10. VOCABULARIO Y SIGLAS ESENCIALES

- **ERP:** Emergency Response Plan (Plan de Respuesta ante Emergencias).
- **FTS:** Flight Termination System (Sistema de Terminación de Vuelo).
- **Geocaging:** Función para confinar el UAS en un volumen de espacio aéreo.
- **ID Remota Directa:** Sistema de transmisión de datos de identificación y posición.
- **Zona Terrestre Controlada:** Área en la superficie donde el operador garantiza que solo hay personas participantes.

---

## 11. AUDITORÍA DE EPÍGRAFES (PÁGS. 5–6)

- [x] **I. Pre-vuelo:** Cubierto (Acciones STS-01, STS-02 y comunes).
- [x] **II. En vuelo:** Cubierto (Contingencia, Emergencia y ERP).
- [x] **ERP:** Cubierto (Definición, descripción y salida de zona).

**Ingeniería del Bloque 3 finalizada y auditada bajo estándares Syllabus STS Ed.2.**