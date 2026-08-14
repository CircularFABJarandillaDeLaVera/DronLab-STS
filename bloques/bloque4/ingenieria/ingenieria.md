# DRONLAB STS · INGENIERÍA PROFUNDA BLOQUE 4

Este documento constituye la **Ingeniería del Conocimiento** definitiva para el **Bloque 4: Mitigación técnica y operacional del riesgo en aire**, diseñada para ser procesada por el agente DronLab-SDK. El núcleo académico se basa estrictamente en el syllabus oficial de AESA para la categoría «específica», páginas 6 y 7, integrando únicamente los contenidos complementarios cuya fuente oficial ha sido verificada.

---

# 0. TRAZABILIDAD DOCUMENTAL
- **Organismo:** AESA
- **Documento:** MATERIAS DEL EXAMEN DE CONOCIMIENTOS TEÓRICOS DE LA CATEGORÍA «ESPECÍFICA» PARA OPERACIONES DE UAS BAJO ESCENARIOS ESTÁNDAR (STS)
- **Código / referencia:** Syllabus oficial STS
- **Edición / versión:** 2
- **Fecha:** 17/04/2023
- **Páginas relacionadas:** 6–7 (Materia 4: Mitigación técnica y operacional del riesgo en aire)
- **Estado:** VALIDADO

---

## 1. CONCEPTOS PRINCIPALES DESARROLLADOS (Syllabus pág. 6–7)

### Definición y Clasificación del Riesgo
*   **Conceptos de "riesgo" y "riesgo en aire":** Familiarización con la probabilidad de colisión en el espacio aéreo.
*   **Mitigaciones Técnicas:** Basadas en el equipamiento del UAS (ej. FTS o Geocaging).
*   **Mitigaciones Operacionales:** Basadas en procedimientos o personal (ej. VLOS u observadores).
*   **Mitigaciones Estratégicas:** Medidas aplicadas antes de la operación para reducir la probabilidad de encuentro.
*   **Mitigaciones Tácticas:** Medidas aplicadas en tiempo real para evitar una colisión tras detectar una amenaza.

### Principios de Separación
*   **"Ver y evitar" (See and Avoid):** El piloto detecta visualmente y maniobra; es el pilar de las operaciones VLOS.
*   **"Detectar y evitar" (Detect and Avoid):** Uso de medios humanos (observadores) o técnicos para cumplir la función de separación cuando no hay contacto visual directo.

---

## 2. RIESGO EN EL AIRE EN EL ESCENARIO STS-01 (VLOS)
*   **Abordaje principal:** Se gestiona mediante la mitigación operacional **VLOS**.
*   **Responsabilidad del piloto:** Mantener un **reconocimiento exhaustivo del espacio aéreo** que rodea a la aeronave para cumplir el principio de "ver y evitar".
*   **Asistencia:** El piloto puede estar asistido por un **observador de la aeronave** (UAS observer) para cumplir su responsabilidad de vigilancia, requiriendo una comunicación clara y eficaz entre ambos.
*   **Mitigación técnica:** El UAS debe estar equipado obligatoriamente con un **Sistema de Terminación de Vuelo (FTS)**.

---

## 3. RIESGO EN EL AIRE EN EL ESCENARIO STS-02 (BVLOS)
*   **Abordaje del incremento de riesgo:** Al ser una operación más allá del alcance visual, el riesgo se mitiga principalmente mediante:
    1.  Presencia obligatoria de **observador(es) del espacio aéreo** (Airspace Observers).
    2.  O bien, una **trayectoria pre-programada obligatoria** para la aeronave no tripulada.
*   **Requisito de visibilidad:** Es obligatorio garantizar una **visibilidad horizontal de 5 km o más**.
*   **Mitigaciones técnicas principales:**
    1.  Equipamiento con una **función de geocaging** que impida físicamente que la aeronave salga del volumen operacional.
    2.  Provisión de **información sobre la posición geográfica** de la aeronave no tripulada al piloto.

---

## 4. CONTENIDO ACADÉMICO COMPLEMENTARIO (Fuentes oficiales verificadas)

*Las siguientes medidas no constan en el syllabus de las páginas 6–7, pero están respaldadas por otras fuentes oficiales cargadas:*

*   **MME8 (Mitigación Estratégica):** Reducción o acotación del volumen de operación reforzado por software, limitando la **altura AGL** (ej. a 50 metros) para minimizar la exposición al riesgo en aire. (Fuente: Guía ENAIRE EAS v2.5).
*   **MMT9 / MAT16 / MAT17 (Mitigación Táctica):** Comprobación de que el **índice K planetario es < 4**. Si es igual o superior, se debe abortar la operación para evitar fallos de posicionamiento que incrementen el riesgo en aire. (Fuente: Catálogo Atenuaciones ENAIRE v1.4).
*   **MAE36 / MMT11 (Medida de Vigilancia):** Uso de un **transpondedor Modo S** para que los sistemas de control de tránsito aéreo (radar) y otras aeronaves detecten al UAS en espacio aéreo controlado. (Fuente: Catálogo Atenuaciones ENAIRE v1.4).
*   **Función de Geoconsciencia:** El piloto debe activarla y cargarle la información de las zonas geográficas UAS antes del vuelo (Fuente: RD 517/2024).

---

## 5. TABLA COMPARATIVA STS-01 / STS-02 (Riesgo en Aire)

| Parámetro | STS-01 (VLOS) | STS-02 (BVLOS) |
| :--- | :--- | :--- |
| **Mitigación Operacional Principal** | Vigilancia visual del piloto (VLOS) | Observadores del espacio aéreo o trayectoria pre-programada |
| **Principio de Separación** | "Ver y evitar" | "Detectar y evitar" |
| **Visibilidad Horizontal** | Suficiente para ver el UAS | **Mínimo 5 km** |
| **Mitigación Técnica UA** | Sistema de Terminación de Vuelo (FTS) | Geocaging e información de posición geográfica |
| **Reconocimiento del Aire** | Exhaustivo por parte del piloto | Realizado por los observadores asignados |
| **Equipamiento de Seguridad** | FTS obligatorio | FTS independiente de la controladora y del geocaging |

---

## 6. DATOS CRÍTICOS PARA EXAMEN
*   **Visibilidad en STS-02:** 5 kilómetros o más.
*   **Independencia técnica:** El FTS debe ser independiente de la controladora de vuelo y de la función de geocaging en drones clase C6.
*   **Función del Geocaging:** Debe **impedir** físicamente que la UA salga del volumen operacional (no solo avisar).
*   **UAS Observer (STS-01):** Solo asiste al piloto; la responsabilidad de "ver y evitar" sigue siendo de este último.

---

## 7. ERRORES Y CONFUSIONES FRECUENTES
1.  **Confundir mitigación operativa con técnica:** Creer que el geocaging es una mitigación operativa (es técnica, basada en software/hardware).
2.  **Visibilidad en STS-01:** Pensar que existe un límite de km prefijado; el requisito es mantener el **alcance visual (VLOS)** y un reconocimiento exhaustivo.
3.  **Observadores en STS-02:** Creer que son opcionales; su presencia es obligatoria a menos que se use una trayectoria pre-programada obligatoria.
4.  **Geocaging vs Geoconsciencia:** El geocaging es un requisito de mitigación técnica en STS-02 que **impide** la salida del volumen, mientras que la geoconsciencia es informativa.

---

## 8. PREGUNTAS QUE NACEN DEL CONTENIDO
*   ¿Qué diferencia existe entre el principio de "ver y evitar" y el de "detectar y evitar"?
*   ¿Qué requisito de visibilidad horizontal es indispensable para una operación sujeta al escenario estándar STS-02?
*   ¿A qué tipo de mitigación (estratégica o táctica) pertenece la acotación del volumen de operación antes del vuelo?
*   ¿Puede un piloto de STS-01 delegar totalmente la vigilancia del espacio aéreo en un observador?
*   En un UAS de clase C6, ¿de qué sistemas debe ser independiente el mecanismo de activación del FTS?

---

## 9. ESCENARIOS PRÁCTICOS
*   **Escenario 1 (STS-01):** Un piloto opera en un entorno urbano. Un observador detecta un helicóptero médico aproximándose. Informa al piloto mediante comunicación eficaz y este realiza una maniobra evasiva inmediata ("ver y evitar").
*   **Escenario 2 (STS-02):** En una llanura, con 6 km de visibilidad horizontal confirmada, el piloto opera a 2 km de distancia (BVLOS). Los observadores del espacio aéreo vigilan los flancos para detectar aviación general.
*   **Escenario 3 (Técnico):** Durante la configuración del vuelo en STS-02, el piloto programa un cilindro de seguridad (geocaging). Si la UA intenta superar ese límite por un error de mando, el sistema corrige automáticamente la trayectoria para mantenerla dentro.

---

## 10. VOCABULARIO Y SIGLAS ESENCIALES
*   **FTS:** Flight Termination System (Sistema de Terminación de Vuelo).
*   **Geocaging:** Función técnica de confinamiento en un volumen operacional.
*   **VLOS:** Visual Line of Sight (Alcance visual).
*   **BVLOS:** Beyond Visual Line of Sight (Más allá del alcance visual).
*   **UAS Observer:** Observador de la aeronave no tripulada.
*   **Airspace Observer:** Observador del espacio aéreo.

---

## 11. AUDITORÍA DE EPÍGRAFES (PÁGS. 6–7)
- [x] **I. General:** Conceptos de riesgo, tipos de mitigaciones y principios de separación cubiertos.
- [x] **II. Riesgo aire STS-01:** Mitigación VLOS, reconocimiento exhaustivo, observador de apoyo y FTS cubiertos.
- [x] **III. Riesgo aire STS-02:** Mitigación por observadores/trayectoria, visibilidad 5km, geocaging e información de posición cubiertos.

**Ingeniería del Bloque 4 finalizada y auditada bajo estándares Syllabus STS Ed.2.**