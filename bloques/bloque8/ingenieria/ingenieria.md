# DRONLAB STS · INGENIERÍA PROFUNDA BLOQUE 8

Este documento constituye la **Ingeniería del Conocimiento** detallada para el **Bloque 8: Mitigaciones técnicas y operacionales del riesgo en tierra**, diseñada para ser procesada por el agente DronLab-SDK 1.0. La información se basa estrictamente en el syllabus oficial de AESA y el marco normativo de los escenarios estándar nacionales y europeos.

---

# 0. TRAZABILIDAD DOCUMENTAL
- **Organismo:** AESA
- **Documento:** MATERIAS DEL EXAMEN DE CONOCIMIENTOS TEÓRICOS DE LA CATEGORÍA «ESPECÍFICA» PARA OPERACIONES DE UAS BAJO ESCENARIOS ESTÁNDAR (STS)
- **Código / referencia:** Syllabus oficial STS
- **Edición / versión:** 2
- **Fecha:** 17/04/2023
- **Páginas relacionadas:** 11–12 (Materia 8 completa)
- **Estado:** VALIDADO

---

## 1. CONCEPTOS PRINCIPALES
- **Riesgo en tierra (Ground Risk):** Probabilidad y gravedad de que un UAS cause daños a personas no participantes o infraestructuras en la superficie durante una operación.
- **Zona Terrestre Controlada:** Área en la superficie donde el operador garantiza que solo se encuentran personas participantes en la operación y que no comprende ninguna concentración de personas.
- **Margen de riesgo en tierra:** Distancia de seguridad adicional que rodea al volumen operacional para mitigar el riesgo ante una pérdida de control.
- **Entorno escasamente poblado:** Requisito operativo para STS-02 que limita la exposición de terceros al riesgo en tierra.
- **Mitigación por FTS:** Uso del sistema de terminación de vuelo como barrera técnica para evitar que la aeronave impacte fuera de las zonas seguras.

---

## 2. CONCEPTOS PUENTE Y RELACIONES
- **FTS (Bloque 5) ↔ Riesgo en tierra:** El FTS es el puente técnico. Su activación en el momento oportuno impide que la UA vuele fuera del volumen de operación, conteniendo el riesgo en tierra.
- **VLOS (Bloque 3/4) ↔ Despegue y Aterrizaje:** El mantenimiento del alcance visual (VLOS) durante las fases críticas de despegue y aterrizaje es una mitigación operacional obligatoria en STS-02 para asegurar el área de contacto.
- **Geografía de vuelo ↔ Zona terrestre controlada:** La zona terrestre controlada debe comprender las proyecciones en superficie tanto del volumen operacional como de la zona de prevención.

---

## 3. DEPENDENCIAS Y GRAFO DE CONOCIMIENTO
1. **Definiciones Base:** Riesgo en tierra y Zona terrestre controlada.
2. **Mitigación STS-01:** Contención en entornos poblados mediante FTS y zona controlada.
3. **Mitigación STS-02:** Operación en entornos escasamente poblados y márgenes de seguridad calculados.
4. **Procedimientos de Vuelo:** Gestión de la trayectoria y vigilancia VLOS en fases críticas.

---

## 4. DESARROLLO COMPLETO DE EPÍGRAFES OFICIALES (PÁGS. 11–12)

### I. Definiciones y responsabilidades
- **a) Riesgo en tierra:** Definición técnica de la amenaza a terceros en superficie.
- **b) Zona terrestre controlada:** Concepto de área segregada bajo responsabilidad del operador.
- **l) Margen de riesgo en tierra (STS-02):** El piloto debe ser capaz de describir la distancia necesaria para cubrir este margen, la cual depende de la velocidad y altura de la aeronave para asegurar que, en caso de fallo, el impacto ocurra dentro de un área segura.

### II. Riesgo en tierra en STS-01 (VLOS / Poblado)
- **a) Riesgo Intrínseco:** Se debe explicar que el riesgo en tierra en STS-01 es significativamente mayor que en la categoría abierta debido a la operación en **entornos poblados**. Por ello, la finalidad de la zona terrestre controlada es crear un "escudo" físico libre de personas ajenas.
- **b) Mitigación Técnica (FTS):** El Sistema de Terminación de Vuelo no solo sirve para el riesgo en aire; es una herramienta crítica para mitigar el riesgo en tierra al forzar la caída controlada del UAS dentro del perímetro de seguridad si se pierde el mando.

### III. Riesgo en tierra en STS-02 (BVLOS / Poco poblado)
- **a) Riesgo Intrínseco:** El riesgo es mayor que en categoría abierta debido a la **falta de visión directa constante** (BVLOS) y las velocidades/pesos de los UAS de clase C6.
- **b) Entorno Escasamente Poblado:** Es un requisito operativo fundamental. El hecho de que la zona terrestre controlada esté en un entorno rural o poco poblado reduce drásticamente la probabilidad de que haya personas no participantes expuestas.
- **c) Despegue y Aterrizaje en VLOS:** Aunque el vuelo de crucero sea BVLOS, el despegue y el aterrizaje deben realizarse **siempre en VLOS**. Este es un requisito operacional específico para mitigar el riesgo de impacto accidental con personas u obstáculos cercanos al punto de contacto con el suelo.

---

## 5. RELACIÓN STS-01 / STS-02
- **STS-01:** Zona controlada en entorno poblado; alta dependencia del FTS para evitar impactos fuera del área.
- **STS-02:** Zona controlada en entorno escasamente poblado; despegue/aterrizaje obligatorio en VLOS y aplicación de márgenes de riesgo calculados.

---

## 6. DATOS CRÍTICOS PARA EXAMEN
- **Concentraciones de personas:** Prohibición absoluta de que la zona terrestre controlada comprenda alguna concentración de personas.
- **VLOS STS-02:** El despegue y aterrizaje deben ser obligatoriamente en alcance visual.
- **Función dual del FTS:** Mitiga el riesgo tanto en aire como en tierra.
- **Proyecciones en superficie:** La zona controlada debe incluir la proyección de todo el volumen operacional y la zona de prevención.

---

## 7. ERRORES Y CONFUSIONES FRECUENTES
1. **Confundir VLOS en STS-02:** Creer que toda la misión puede ser BVLOS; se olvida que el despegue/aterrizaje exige VLOS.
2. **Criterio de Población:** Pensar que STS-01 y STS-02 operan bajo las mismas condiciones de población (STS-01 es para poblado, STS-02 para poco poblado).
3. **Responsabilidad de Zona:** Creer que la zona controlada es solo un papel; el piloto debe asegurar físicamente que no hay intrusos.

---

## 8. PREGUNTAS QUE NACEN DEL CONTENIDO
- ¿Por qué se considera que el riesgo intrínseco en tierra de un STS-01 es mayor que el de la categoría abierta?
- ¿En qué fase de una operación STS-02 es obligatorio para el piloto mantener el dron dentro de su alcance visual (VLOS)?
- ¿Cuál es la finalidad técnica del Sistema de Terminación de Vuelo (FTS) en relación con el riesgo en tierra?
- ¿Qué áreas en superficie debe comprender obligatoriamente la zona terrestre controlada?
- ¿Qué limitación poblacional existe para la ubicación de una zona terrestre controlada en STS-ES-NE?

---

## 9. ESCENARIOS PRÁCTICOS
- **Escenario 1 (STS-01):** Un piloto opera en una plaza urbana vallada. Si el dron experimenta una pérdida de mando y deriva hacia la valla, el piloto activa el **FTS** para asegurar que la UA caiga dentro de la zona controlada y no sobre los peatones fuera del vallado.
- **Escenario 2 (STS-02):** Un operador planifica un vuelo BVLOS en un campo de cultivo. Sitúa al piloto en una loma para asegurar el **despegue y el aterrizaje en VLOS**, mientras el dron realiza la inspección a 3 km de distancia en modo BVLOS.

---

## 10. VOCABULARIO Y SIGLAS
- **FTS:** Flight Termination System (Sistema de Terminación de Vuelo).
- **VLOS:** Visual Line of Sight (Alcance visual).
- **BVLOS:** Beyond Visual Line of Sight (Más allá del alcance visual).
- **Zona Terrestre Controlada:** Área delimitada libre de personas ajenas.
- **Margen de riesgo:** Distancia de amortiguación para seguridad en tierra.

---

## 11. MATERIAL PARA PROFESOR PLUS (Contenido Complementario)

*Basado en Resolución 10/11/2024 y RD 517/2024:*

- **Identificación de Obstáculos:** Antes del vuelo, el piloto debe detectar obstáculos en el volumen operacional que puedan dificultar la misión o afectar a las corrientes de viento locales.
- **Intrusión de personas:** Ante la entrada de una persona no participante en la zona terrestre controlada, el piloto debe adoptar medidas inmediatas para mantener la seguridad (ej. estacionario, alejamiento o aterrizaje).
- **UAS de Construcción Privada (STS-ES-02NE):** Si no hay MTOM del fabricante, el operador debe garantizar que la masa es inferior a **25 kg**.
- **Luz verde intermitente:** Obligatoria para vuelos nocturnos para asegurar la visibilidad de la aeronave (mitigación operativa de riesgo).

---

## 12. AUDITORÍA DE EPÍGRAFES
- [x] **I. Definiciones y responsabilidades:** Riesgo, zona controlada y márgenes cubiertos.
- [x] **II. Riesgo en tierra STS-01:** Comparación con categoría abierta y uso del FTS cubiertos.
- [x] **III. Riesgo en tierra STS-02:** Comparación con categoría abierta, entorno poco poblado y requisito VLOS cubiertos.

**Ingeniería del Bloque 8 finalizada y auditada bajo estándares Syllabus STS Ed.2.**