# DRONLAB STS · INGENIERÍA PROFUNDA BLOQUE 7

Este documento constituye la **Ingeniería del Conocimiento** detallada para el **Bloque 7: Rendimiento de vuelo del UAS**, diseñada para ser procesada por el agente DronLab-SDK 1.0. La información se basa estrictamente en el syllabus oficial de AESA para la categoría específica y normativas técnicas de apoyo.

---

# 0. TRAZABILIDAD DOCUMENTAL
- **Organismo:** AESA
- **Documento:** MATERIAS DEL EXAMEN DE CONOCIMIENTOS TEÓRICOS DE LA CATEGORÍA «ESPECÍFICA» PARA OPERACIONES DE UAS BAJO ESCENARIOS ESTÁNDAR (STS)
- **Código / referencia:** Syllabus oficial STS
- **Edición / versión:** 2
- **Fecha:** 17/04/2023
- **Páginas relacionadas:** 11 (Materia 7 completa)
- **Estado:** VALIDADO

---

## 1. CONCEPTOS PRINCIPALES
- **Masa Máxima al Despegue (MTOM):** Limitación estructural absoluta definida por el fabricante que incluye la aeronave, la batería y la carga útil.
- **Envolvente de operación:** Rango de condiciones técnicas (peso, velocidad, altitud) dentro del cual el UAS opera con seguridad garantizada.
- **Centro de Gravedad (CG):** Punto imaginario donde se concentra la masa total del UAS y sobre el cual rotan sus tres ejes (longitudinal, lateral y vertical).
- **Equilibrio de masas:** Distribución compensada del peso para mantener el CG dentro de los límites de diseño.
- **Carga Útil (Payload):** Equipamiento adicional (cámaras, sensores, sistemas de dispersión) que afecta directamente al peso y centrado del UAS.

---

## 2. CONCEPTOS PUENTE Y RELACIONES
- **Masa ↔ Energía (Bloque 5):** Un incremento en la masa total (dentro de la MTOM) conlleva un aumento proporcional en el consumo de batería y una reducción de la autonomía de vuelo.
- **Masa ↔ Mitigación en Tierra (Bloque 8):** El riesgo en tierra es directamente proporcional a la energía de impacto, la cual depende de la masa y la velocidad del UAS en el momento del fallo.
- **Meteorología (Bloque 6) ↔ Envolvente:** Factores como la baja densidad del aire (por calor o altitud) reducen el rendimiento de los motores, pudiendo obligar a volar por debajo de la MTOM para mantener la envolvente de seguridad.

---

## 3. DEPENDENCIAS Y GRAFO DE CONOCIMIENTO
1. **Límites Estructurales:** Conocimiento de la MTOM (Base).
2. **Dinámica del UAS:** Localización y límites del Centro de Gravedad (Intermedio).
3. **Configuración de Misión:** Instalación y aseguramiento de la Carga Útil (Avanzado).
4. **Seguridad en Vuelo:** Mantenimiento de la aeronave dentro de su envolvente segura (Aplicación).

---

## 4. DESARROLLO COMPLETO DE EPÍGRAFES OFICIALES (PÁG. 11)

### I. Envolvente de operación
*   **Identificación de límites:** El piloto debe conocer la masa máxima permitida y los límites geométricos del centro de gravedad establecidos en el manual del fabricante.
*   **Limitación estructural:** Se debe comprender que la **MTOM es una limitación estructural** infranqueable definida por el fabricante; superarla compromete la integridad del chasis, motores y hélices.
*   **Factores de degradación:** Identificación de variables que expulsan al UAS de su envolvente segura:
    *   Exceso de peso (sobrepasar MTOM).
    *   Viento excesivo que impida el control de trayectoria.
    *   Calibración defectuosa de la IMU.
    *   Hielo en las palas (en condiciones de frío extremo).

### II. Centro de gravedad y equilibrio de masas
*   **Consecuencias de CG fuera de límites:**
    *   **Inestabilidad:** Dificultad para mantener el vuelo estacionario o la actitud nivelada.
    *   **Incontrolabilidad:** Incapacidad de los motores para compensar el desequilibrio, pudiendo provocar el vuelco de la aeronave.
    *   **Fatiga prematura:** Desgaste desigual de los motores que trabajan en exceso para compensar el peso mal distribuido.
*   **Influencia de la carga útil:** Reconocer que cualquier sensor o accesorio instalado altera el equilibrio original de fábrica y requiere una nueva verificación del CG.

### III. Aseguramiento de la carga útil
*   **Procedimientos de fijación:** Obligación de utilizar sistemas de anclaje mecánicos o químicos que impidan el desprendimiento o desplazamiento de la carga durante maniobras bruscas.
*   **Verificación pre-vuelo:** Comprobar que todos los componentes desmontables están debidamente asegurados antes del despegue.

---

## 5. RELACIÓN STS-01 / STS-02
*   **STS-01 (Clase C5):** El rendimiento se centra en el control a baja velocidad (≤ 5 m/s) para permitir la activación efectiva de dispositivos de reducción de energía (paracaídas).
*   **STS-02 (Clase C6):** El rendimiento incluye la gestión de velocidades elevadas (hasta **50 m/s**) en vuelo horizontal, lo que exige una envolvente de operación mucho más robusta debido a la energía cinética involucrada.

---

## 6. DATOS CRÍTICOS PARA EXAMEN
*   **Prohibición absoluta:** No se puede superar la MTOM ni realizar modificaciones no autorizadas en el UAS.
*   **Ejes de rotación:** El UAS pivota sobre el CG en sus tres ejes: **longitudinal** (alabeo), **lateral** (cabeceo) y **vertical** (guiñada).
*   **Velocidad Máxima C6:** 50 m/s respecto al suelo.

---

## 7. ERRORES Y CONFUSIONES FRECUENTES
1.  **Carga útil vs MTOM:** Creer que la carga útil es adicional a la MTOM (es parte de ella; MTOM = UAS + Batería + Carga).
2.  **Modificaciones:** Pensar que añadir una cámara extra no afecta al rendimiento si "el dron tiene potencia suficiente" (altera el CG y la certificación de clase).
3.  **Fijación:** Confundir fijar la carga con simplemente "ponerle cinta" (debe resistir las tensiones del uso sin deformación).

---

## 8. PREGUNTAS QUE NACEN DEL CONTENIDO
*   ¿Quién define la Masa Máxima al Despegue (MTOM) de un UAS y por qué se considera una limitación estructural?
*   ¿Qué efecto tiene un Centro de Gravedad desplazado hacia un extremo lateral en un multirotor durante el vuelo estacionario?
*   ¿Qué factores ambientales pueden reducir el rendimiento del UAS y hacer que opere fuera de su envolvente segura?
*   ¿A qué eje de vuelo corresponde el movimiento de cabeceo (pitch)?

---

## 9. ESCENARIOS PRÁCTICOS
*   **Escenario 1:** Un piloto instala una cámara térmica de 800g en un soporte lateral de un dron C5. Antes de despegar, realiza una prueba de equilibrio para verificar que el CG sigue dentro de los márgenes del fabricante.
*   **Escenario 2:** Durante una inspección en alta montaña con calor intenso, el piloto nota que el dron requiere un 90% de potencia para mantener el vuelo estacionario. Identifica que la baja densidad del aire ha reducido el rendimiento y decide aterrizar para no salir de la envolvente segura.

---

## 10. VOCABULARIO Y SIGLAS
*   **MTOM:** Masa Máxima al Despegue.
*   **CG:** Centro de Gravedad.
*   **Envolvente de vuelo:** Espacio de parámetros de operación segura.
*   **Cabeceo / Pitch:** Rotación sobre el eje lateral.
*   **Alabeo / Roll:** Rotación sobre el eje longitudinal.
*   **Guiñada / Yaw:** Rotación sobre el eje vertical.

---

## 11. CONTENIDO COMPLEMENTARIO (Fuentes oficiales verificadas)
*   **MME8 (Guía ENAIRE):** El rendimiento de vuelo puede limitarse artificialmente mediante software (geocaging) para restringir el volumen de operación y mejorar la seguridad.
*   **Masa STS-ES-01NE:** Para drones nacionales (sin marcado de clase) bajo este escenario, la masa debe ser inferior a **10 kg**.
*   **Masa STS-ES-02NE:** Para drones nacionales bajo este escenario, la masa debe ser inferior a **25 kg**.

---

## 12. AUDITORÍA DE EPÍGRAFES
- [x] **I. Envolvente de operación:** Identificación, MTOM estructural y factores de riesgo cubiertos.
- [x] **II. Centro de gravedad y equilibrio de masas:** Consecuencias de desequilibrio e influencia de carga útil cubiertas.
- [x] **III. Aseguramiento de la carga útil:** Procedimientos de fijación y verificación cubiertos.

**Ingeniería del Bloque 7 finalizada y auditada bajo estándares Syllabus STS Ed.2.**