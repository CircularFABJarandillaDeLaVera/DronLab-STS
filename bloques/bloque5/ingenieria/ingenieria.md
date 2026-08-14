# DRONLAB STS · INGENIERÍA PROFUNDA BLOQUE 5

Este documento constituye la **Ingeniería del Conocimiento** detallada para el **Bloque 5: Conocimientos generales del UAS**, diseñada para ser procesada por el agente DronLab-SDK. Toda la información contenida proviene exclusivamente del syllabus oficial de AESA para la categoría específica.

---

# 0. TRAZABILIDAD DOCUMENTAL
- **Organismo:** AESA
- **Documento:** MATERIAS DEL EXAMEN DE CONOCIMIENTOS TEÓRICOS DE LA CATEGORÍA «ESPECÍFICA» PARA OPERACIONES DE UAS BAJO ESCENARIOS ESTÁNDAR (STS)
- **Código / referencia:** Syllabus oficial STS
- **Edición / versión:** 2
- **Fecha:** 17/04/2023
- **Páginas relacionadas:** 7–8 (Materia 5 completa)
- **Estado:** VALIDADO

---

## 1. CONCEPTOS PRINCIPALES DESARROLLADOS

### Etiquetas de Identificación de Clase C5 y C6
Son los marcados técnicos obligatorios para operar en los escenarios estándar europeos. Estos drones deben cumplir requisitos de geoconsciencia equivalentes a la clase C3 y proporcionar al piloto alertas en tiempo real sobre la degradación o pérdida del enlace de mando y control (enlace C2).

### Sistema de Terminación de Vuelo (FTS)
Mecanismo de seguridad crítica diseñado para finalizar el vuelo de forma segura e inmediata. En drones de clase C5, este sistema debe ser **independiente de la controladora de vuelo**. Su objetivo principal es evitar que la aeronave abandone el volumen operacional en caso de pérdida de control.

### Función de Geocaging
Función técnica de confinamiento que impide físicamente que la aeronave no tripulada traspase los límites de un volumen de espacio aéreo preconfigurado. Es una mitigación técnica fundamental, especialmente para operaciones BVLOS (STS-02).

### Parámetros y Configuración de Baterías
Conocimiento técnico sobre la gestión de energía, incluyendo la capacidad (Ah), tensión y los ratios de carga y descarga. Se distingue entre configuraciones en **serie** (aumenta tensión) y en **paralelo** (aumenta capacidad/autonomía).

---

## 2. CONCEPTOS PUENTE Y RELACIONES

- **FTS ↔ Mitigación de Riesgo:** El FTS es el puente técnico entre el **Conocimiento General (Bloque 5)** y la **Mitigación de Riesgo en Tierra (Bloque 8)**, ya que su activación reduce la energía de impacto mediante dispositivos como paracaídas.
- **C2 Link ↔ Consciencia Situacional:** La calidad del enlace de mando y control es el puente sensorial; sin alertas de degradación del C2, el piloto no puede anticipar una pérdida de control.
- **Geocaging ↔ STS-02:** Esta función es el puente técnico que habilita la seguridad en vuelos fuera del alcance visual (BVLOS), actuando como barrera donde el ojo del piloto no llega.

---

## 3. DEPENDENCIAS Y GRAFO DE CONOCIMIENTO (Nivel STS)

### Grafo de conocimiento jerárquico
1.  **Requisitos de Clase:** Cumplimiento de geoconsciencia C3 y alertas de C2.
2.  **Especificaciones C5:** Configuración (no ala fija), modo lento y FTS independiente.
3.  **Especificaciones C6:** Límites de velocidad (50 m/s) y telemetría completa.
4.  **Sistemas Críticos:** Lógica de funcionamiento del FTS y Geocaging.
5.  **Gestión de Energía:** Parámetros avanzados de baterías.

---

## 4. DESARROLLO DE EPÍGRAFES OFICIALES (PÁGS. 7–8)

### I. Conocimientos técnicos sobre etiquetas C5 y C6 [Syllabus pág. 7]
- **a) Generales:** 
    - Obligación de cumplir los requisitos técnicos de la función de geoconsciencia de clase C3.
    - Provisión de información sobre la calidad del enlace C2 y generación de alertas por degradación o pérdida.
- **b) Específicos Clase C5 (STS-01):**
    - La configuración debe ser distinta a la de ala fija (salvo si está anclado).
    - El **modo de baja velocidad** debe limitar la velocidad de avance a un máximo de **5 m/s**.
    - El sistema debe informar al piloto sobre la **altura** de la aeronave.
    - El **FTS debe ser independiente** de la controladora de vuelo.
    - Debe existir un dispositivo (ej. paracaídas) que reduzca la energía de impacto si se activa el FTS.
    - El manual del usuario debe contener una descripción detallada del FTS.
- **c) Específicos Clase C6 (STS-02):**
    - La velocidad en tierra en vuelo nivelado no debe superar los **50 m/s**.
    - El piloto debe recibir información constante de **altura, velocidad y posición geográfica**.

### II. Conocimientos generales avanzados de UAS [Syllabus pág. 8]
- **a) Flight Termination System (FTS):** Comprensión del principio de funcionamiento y descripción de su objetivo principal como última barrera de seguridad.
- **b) Función de geocaging:** Familiarización con su funcionamiento para confinar el vuelo en un volumen definido.
- **c) Baterías:** 
    - Descripción de parámetros: **Ah** (capacidad), **Tensión** (voltaje), ratios de carga/descarga.
    - Configuración en **serie** (sumar voltajes) y en **paralelo** (sumar capacidades).

---

## 5. DIFERENCIAS TÉCNICAS STS-01 / STS-02

| Parámetro Técnico | Clase C5 (STS-01) | Clase C6 (STS-02) |
| :--- | :--- | :--- |
| **Configuración** | No ala fija (salvo anclado). | Puede ser ala fija o multirotor. |
| **Velocidad Máxima** | 5 m/s (en modo lento). | **50 m/s** (en vuelo nivelado). |
| **Telemetría obligatoria** | Altura. | Altura, Velocidad y Posición. |
| **Reducción de energía** | Paracaídas/dispositivo obligatorio. | Basado en confinamiento (geocaging). |

---

## 6. DATOS, REQUISITOS Y CONDICIONES CRÍTICAS PARA EXAMEN

- **Velocidad C5 (Modo lento):** ≤ 5 m/s.
- **Velocidad C6 (Máxima):** ≤ 50 m/s.
- **Independencia del FTS:** Obligatoria respecto a la controladora de vuelo en clase C5.
- **Alertas C2:** Obligatorio que el sistema avise antes de perder el enlace totalmente.
- **Geoconsciencia:** Los C5/C6 deben cumplir el estándar técnico de la Clase C3.

---

## 7. ERRORES Y CONFUSIONES FRECUENTES

1.  **Independencia del FTS:** Creer que el FTS es una función del software de vuelo principal. Debe ser un hardware o canal de ejecución **independiente**.
2.  **C5 y Ala Fija:** Pensar que un dron de ala fija convencional puede ser C5. El syllabus especifica que la configuración C5 debe ser distinta a ala fija a menos que esté anclado.
3.  **Configuración de Baterías:** Confundir serie con paralelo. En **serie** se gana potencia (tensión); en **paralelo** se gana tiempo de vuelo (capacidad).
4.  **Geocaging vs Geoconsciencia:** La geoconsciencia avisa (C3); el geocaging impide físicamente la salida (C6/STS-02).

---

## 8. PREGUNTAS QUE NACEN DEL CONTENIDO

- ¿Qué velocidad máxima puede alcanzar un UAS de clase C5 cuando el piloto activa el modo de baja velocidad?
- En un UAS de clase C5, ¿por qué el sistema de terminación de vuelo (FTS) debe ser independiente de la controladora de vuelo?
- ¿Qué información técnica adicional a la altura debe recibir el piloto de un escenario STS-02 respecto al de un STS-01?
- ¿Qué sucede con la tensión total de un sistema si conectamos dos baterías en paralelo?
- ¿A qué clase de marcado debe ajustarse la función de geoconsciencia de un UAS con etiqueta C6?

---

## 9. ESCENARIOS PRÁCTICOS

- **Escenario 1:** Un piloto de STS-01 verifica antes del despegue que el paracaídas está correctamente plegado y que el sistema de disparo (FTS) tiene batería independiente, cumpliendo los requisitos C5.
- **Escenario 2:** Durante una inspección lineal (STS-02), el piloto monitoriza en su estación de control la velocidad en tierra, asegurándose de no superar los 50 m/s permitidos para la clase C6.
- **Escenario 3:** Un operador necesita aumentar la autonomía de su dron de carga. Decide conectar dos baterías iguales en **paralelo**, manteniendo el voltaje pero duplicando los Ah.

---

## 10. VOCABULARIO Y SIGLAS ESENCIALES

- **Ah (Amperio-hora):** Unidad de capacidad de carga eléctrica de la batería.
- **C2 Link:** Enlace de mando y control entre la estación y la aeronave.
- **FTS:** Flight Termination System (Sistema de Terminación de Vuelo).
- **Geocaging:** Confinamiento electrónico en un volumen de vuelo.
- **RPS:** Remote Pilot Station (Estación de pilotaje remoto).

---

## 11. MATERIAL PARA PROFESOR PLUS (PÍLDORAS ACADÉMICAS)

> **Píldora 1:** "El FTS es como el freno de mano de emergencia de un tren: debe funcionar aunque falle todo lo demás, por eso el syllabus exige que sea **independiente de la controladora de vuelo**".
>
> **Píldora 2:** "Recuerda la regla del 5: un C5 en modo lento no puede superar los **5 m/s**. Es la velocidad de una carrera suave, diseñada para que el paracaídas tenga tiempo de actuar".
>
> **Píldora 3:** "Las baterías en **Serie suman Voltios** (S-V); las baterías en **Paralelo suman Amperios** (P-A). Un truco mnemotécnico vital para las preguntas técnicas del examen".

---

## 12. AUDITORÍA DE EPÍGRAFES (PÁGS. 7–8)

- [x] **I. Etiquetas C5/C6:** Cubierto (Geoconsciencia, alertas C2, requisitos específicos C5 y C6).
- [x] **II. Conocimientos avanzados:** Cubierto (FTS, Geocaging y Baterías).

**Ingeniería del Bloque 5 finalizada y auditada bajo estándares Syllabus STS Ed.2.**