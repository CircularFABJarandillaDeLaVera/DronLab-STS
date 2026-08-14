# DRONLAB STS · INGENIERÍA PROFUNDA BLOQUE 6

Este documento constituye la **Ingeniería del Conocimiento** detallada para el **Bloque 6: Meteorología**, diseñada para ser procesada por el agente DronLab-SDK 1.0. Toda la información contenida proviene exclusivamente del syllabus oficial de AESA y fuentes normativas complementarias verificadas.

---

# 0. TRAZABILIDAD DOCUMENTAL
- **Organismo:** AESA
- **Documento:** MATERIAS DEL EXAMEN DE CONOCIMIENTOS TEÓRICOS DE LA CATEGORÍA «ESPECÍFICA» PARA OPERACIONES DE UAS BAJO ESCENARIOS ESTÁNDAR (STS)
- **Código / referencia:** Syllabus oficial STS
- **Edición / versión:** 2
- **Fecha:** 17/04/2023
- **Páginas relacionadas:** 8–10 (Materia 6 completa)
- **Estado:** VALIDADO

---

## 1. CONCEPTOS PRINCIPALES
- **Efectos del viento:** Influencia de la fricción superficial, tipos de turbulencia (mecánica, térmica, orográfica) y peligros operacionales asociados.
- **Atmósfera y Temperatura:** Estructura de la troposfera y la variación vertical de la temperatura.
- **Visibilidad y Precipitaciones:** Diferenciación técnica entre fenómenos (niebla vs. bruma) y métodos de evaluación en el lugar de operación.
- **Densidad del Aire:** Relación física entre presión, temperatura y densidad, y su impacto directo en la sustentación de los rotores.
- **Recursos Meteorológicos Aeronáuticos:** Interpretación de informes oficiales (**METAR, TAF, SPECI**) y herramientas de visualización (radar, satélite).

---

## 2. CONCEPTOS PUENTE Y RELACIONES
- **Densidad ↔ Rendimiento (Bloque 7):** Una menor densidad (por calor o altitud) reduce la sustentación, obligando a ajustar la masa máxima o la envolvente de vuelo.
- **Meteorología ↔ Procedimientos Pre-vuelo (Bloque 3):** El briefing meteorológico es una obligación legal para la planificación segura (Go/No-Go).
- **Viento local ↔ Mitigación de Riesgo en Aire (Bloque 4):** Las ráfagas repentinas pueden desplazar al UAS fuera de su volumen, aumentando el riesgo de colisión si no se evalúa el entorno orográfico.

---

## 3. DEPENDENCIAS Y GRAFO DE CONOCIMIENTO
1. **Física del aire:** Presión, temperatura y densidad (Base).
2. **Dinámica del viento:** Fricción, turbulencia y efectos locales (Intermedio).
3. **Interpretación Aeronáutica:** METAR, TAF y códigos UTC (Avanzado).
4. **Toma de decisiones:** Evaluación local frente a partes oficiales (Aplicación).

---

## 4. DESARROLLO COMPLETO DE EPÍGRAFES OFICIALES (PÁGS. 8–10)

### I. Efectos de la meteorología en los UAS [Syllabus págs. 8–9]

#### a) Viento
- **Interpretación:** Uso de la rosa de los vientos para determinar dirección (de donde viene el viento).
- **Unidades:** Conversión entre nudos (**kt**), kilómetros por hora (**km/h**), metros por segundo (**m/s**) y escala **Beaufort**.
- **Fricción superficial:** La rugosidad del terreno reduce la velocidad del viento y altera su dirección respecto a las capas superiores.
- **Turbulencia:** Identificación de formas: **convectiva** (calor), **orográfica** (montañas), **fricción** (suelo) y **debido a obstáculos** (edificios).
- **Nubes Cumulonimbos:** Detección de zonas críticas con turbulencia severa y corrientes descendentes bajo estas nubes en formación.
- **Entorno cercano al suelo:** Turbulencias causadas por hileras de árboles o calentamiento diferencial de superficies (asfalto vs. vegetación).

#### b) Temperatura
- **Troposfera:** Distribución vertical; la temperatura disminuye con la altitud de forma estándar.

#### c) Precipitaciones
- **Peligros:** Efectos de la lluvia, granizo o nieve en la electrónica y la visibilidad.

#### d) Visibilidad
- **Evaluación:** Uso de objetos de referencia conocidos en el terreno para estimar la distancia visual.
- **Niebla vs. Bruma:** Diferenciación basada en la densidad de partículas y la visibilidad horizontal (niebla < 1 km).

#### e) Densidad del aire
- **Relaciones:** Si la temperatura aumenta (presión constante), la densidad disminuye. Si la altitud aumenta, la densidad disminuye.
- **Impacto:** La disminución de densidad reduce la sustentación generada por las palas del rotor.

#### f) Efectos regionales
- **Brisas:** Comportamiento diurno de la brisa marina (hacia tierra de día) y terrestre (hacia el mar de noche).
- **Montañas:** Peligros por vientos fuertes a sotavento y baja densidad.
- **Desiertos:** Problemas por arena en suspensión, calor extremo y vientos racheados.

### II. Obtención de predicciones meteorológicas [Syllabus págs. 9–10]

#### a) Recursos e información
- **Briefing prevuelo:** Obligatoriedad de obtener datos sobre viento, temperaturas extremas y precipitaciones fuertes.
- **UTC (Tiempo Universal Coordinado):** Uso de la referencia temporal estándar en aviación para interpretar partes.

#### b) Partes meteorológicos
- **Actual vs. Pronóstico:** Diferencia entre lo que está sucediendo y lo que se espera.
- **METAR:** Informe meteorológico ordinario de aeródromo (actualizado cada 30 o 60 min).
- **SPECI:** Informe especial por cambios significativos en las condiciones.
- **TAF:** Pronóstico de aeródromo para periodos de 9 a 30 horas.

#### c) Mapas y Evaluaciones Locales
- **Herramientas:** Interpretación de radar de tormentas, imágenes de satélite y mapas de superficie.
- **Microclima:** Consciencia de que el tiempo local puede diferir drásticamente de los partes de aeródromos lejanos.

---

## 5. RELACIÓN STS-01 / STS-02
- **STS-01 (VLOS):** La meteorología debe permitir mantener siempre el contacto visual. Las turbulencias por edificios son críticas por el entorno urbano.
- **STS-02 (BVLOS):** Requisito crítico de **visibilidad horizontal mínima de 5 km** para que los observadores puedan detectar tráfico.

---

## 6. DATOS CRÍTICOS PARA EXAMEN
- **Índice K Planetario:** Menor a 4 para operar (evidencia técnica de estabilidad para sensores).
- **Umbral de Niebla:** Visibilidad inferior a 1000 metros.
- **Relación T/D:** Mayor temperatura = Menor densidad = Menor sustentación.
- **Conversión rápida:** 1 m/s ≈ 2 nudos (kt) ≈ 3,6 km/h.

---

## 7. ERRORES Y CONFUSIONES FRECUENTES
1. **Confundir METAR con TAF:** El METAR es "ahora", el TAF es "luego".
2. **Dirección del viento:** Olvidar que en aviación el viento se nombra por **de dónde viene**, no hacia dónde va.
3. **UTC:** No saber aplicar el desfase horario local al leer un reporte (Z).
4. **Brisa Marina:** Creer que sopla hacia el mar de día (es al revés, por el calentamiento de la tierra).

---

## 8. PREGUNTAS QUE NACEN DEL CONTENIDO
- ¿Qué ocurre con la densidad del aire si la temperatura aumenta mientras la presión se mantiene constante?
- ¿Cuál es la principal diferencia entre un informe METAR y un informe SPECI?
- ¿Qué tipo de nube es indicativa de fuertes turbulencias y corrientes descendentes peligrosas para un UAS?
- ¿Cómo afecta la fricción superficial a la dirección del viento cerca del suelo?

---

## 9. ESCENARIOS PRÁCTICOS
- **Escenario 1:** Un piloto lee un TAF que indica ráfagas de 25 kt para la hora de la misión. El manual del UAS limita el vuelo a 10 m/s. El piloto debe cancelar (25 kt ≈ 12,8 m/s).
- **Escenario 2:** Operación en un valle entre montañas. El parte indica calma, pero el piloto detecta **turbulencia orográfica** severa y decide abortar.

---

## 10. VOCABULARIO Y SIGLAS
- **METAR:** Aerodrome Routine Meteorological Report.
- **TAF:** Terminal Aerodrome Forecast.
- **UTC / Zulu (Z):** Coordinated Universal Time.
- **kt:** Nudos (knots).
- **AGL:** Above Ground Level (Sobre el nivel del suelo).

---

## 11. CONTENIDO COMPLEMENTARIO (Otras fuentes oficiales)
- **MAE22 (EAS ENAIRE):** El ATSP puede requerir el uso de una **estación meteorológica portátil** en el lugar de operación para medir viento en tiempo real (dirección e intensidad).
- **MMT9 (Catálogo ENAIRE):** Comprobación obligatoria de que el **índice K planetario es < 4**. En caso contrario, se debe abortar la operación por riesgo de pérdida de control.

---

## 12. AUDITORÍA DE EPÍGRAFES
- [x] **I.a Viento:** Rosa de los vientos, unidades, fricción, turbulencia, cumulonimbos, obstáculos.
- [x] **I.b Temperatura:** Distribución en la troposfera.
- [x] **I.c Precipitaciones:** Peligros asociados.
- [x] **I.d Visibilidad:** Evaluación en terreno, niebla vs. bruma.
- [x] **I.e Densidad:** Relación P/T/D, altitud, sustentación.
- [x] **I.f Efectos regionales:** Brisas, montañas, desiertos.
- [x] **II.a Recursos:** Briefing, UTC, fuentes.
- [x] **II.b Partes:** Actual vs. Pronóstico, METAR, SPECI, TAF.
- [x] **II.c Mapas:** Radar, satélite, superficie.
- [x] **II.d Evaluaciones locales:** Viento local, cambios y diferencias con partes.

**Ingeniería del Bloque 6 finalizada y auditada bajo estándares Syllabus STS Ed.2.**