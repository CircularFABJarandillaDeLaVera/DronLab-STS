# Bloque 7 · Rendimiento de vuelo del UAS

Revisión documental: 13/11/2026. Material didáctico propio; pendiente de revisión experta antes de publicar.

## Objetivo y conexión

Comprobar masa, centrado, energía y límites ambientales con ejemplos calculados.

Una carga cambia rendimiento y margen de riesgo; conecta con los bloques 5 y 8.

## Método

Recuperar una idea previa → explicar → resolver un ejemplo → decidir sin ver la solución → contrastar → transferir cambiando una condición.

Las preguntas nuevas son adaptadas, no preguntas oficiales de AESA. Los ejemplos son ficticios y no autorizan vuelos. Los límites del escenario, del equipo y del lugar deben cumplirse simultáneamente.

## MTOM y masa real

MTOM es la masa máxima al despegue especificada para el UAS. La masa real incluye aeronave, batería, fijaciones y carga útil. No se suma la carga por fuera del máximo. Además, las condiciones pueden imponer una masa de despegue limitada por rendimiento menor que la MTOM.

**Ejemplo resuelto:** MTOM 6 kg, aeronave con batería 4,8 kg y carga con soporte 1,4 kg: total 6,2 kg. No cumple el máximo, aunque consiga despegar.

**Error habitual:** Tomar la capacidad de elevarse como prueba de cumplimiento.

**Comprobación:** Con esos datos, ¿qué conclusión corresponde?

**Respuesta razonada:** La masa real de 6,2 kg supera la MTOM de 6 kg.

**Fuente:** [AESA · Syllabus STS, revisión 2 (17/04/2023), actualmente enlazado por AESA](https://www.seguridadaerea.gob.es/sites/default/files/Temario.formaci%C3%B3n.conocimientos.te%C3%B3ricos.STS_v2.pdf).

## Centro de gravedad y momentos

El CG representa el punto de aplicación de la resultante del peso. Su posición depende de la distribución de masas. En un modelo unidimensional, xCG = suma(m × x) / suma(m). Los límites admisibles proceden del diseño y manual de esa aeronave, no de que parezca equilibrada a simple vista.

**Ejemplo resuelto:** Masas de 2 kg a -0,10 m y 1 kg a +0,20 m dan momentos -0,20 y +0,20 kg·m: xCG = 0/3 = 0 m. Es un modelo didáctico; no autoriza una instalación real.

**Error habitual:** Mirar solo la masa total y olvidar dónde está situada.

**Comprobación:** En el ejemplo, ¿dónde queda xCG?

**Respuesta razonada:** En 0 m respecto a la referencia elegida.

**Fuente:** [AESA · Syllabus STS, revisión 2 (17/04/2023), actualmente enlazado por AESA](https://www.seguridadaerea.gob.es/sites/default/files/Temario.formaci%C3%B3n.conocimientos.te%C3%B3ricos.STS_v2.pdf).

## Equilibrio de palanca

Para equilibrar dos masas bajo la misma gravedad respecto a un apoyo ideal se igualan momentos: m1 × d1 = m2 × d2. Se conserva la unidad de distancia en ambos lados. La imagen aportada sirve para este modelo de estática, no para establecer por sí sola el CG válido de un UAS.

**Ejemplo resuelto:** 100 kg a 0,25 m equilibran 25 kg a 1 m: 100 × 0,25 = 25 × 1. Si el brazo derecho se reduce a 0,5 m, la masa equivalente sería 50 kg.

**Error habitual:** Responder 100 kg por simetría visual sin comparar brazos.

**Comprobación:** ¿Qué masa a 1 m equilibra 100 kg situados a 25 cm del apoyo ideal?

**Respuesta razonada:** 25 kg.

**Fuente:** [AESA · Syllabus STS, revisión 2 (17/04/2023), actualmente enlazado por AESA](https://www.seguridadaerea.gob.es/sites/default/files/Temario.formaci%C3%B3n.conocimientos.te%C3%B3ricos.STS_v2.pdf).

## Estabilidad y carga útil

Una carga lateral o desplazable modifica el CG, el reparto de esfuerzos y la controlabilidad. En ala fija, estar fuera del límite delantero o trasero tiene consecuencias distintas; se consultan límites y procedimiento del modelo. La fijación debe impedir movimiento y desprendimiento durante toda la operación. En un ala fija convencional, los alerones se mueven en sentidos opuestos y cambian la sustentación de cada ala para controlar el alabeo alrededor del eje longitudinal. La estabilidad longitudinal es otra cuestión: depende del conjunto ala, cola y configuración, y de la posición del CG respecto al punto neutro del avión completo. Situar el CG por delante del centro aerodinámico del ala no demuestra por sí solo estabilidad ni que el CG esté dentro de los límites aprobados.

**Ejemplo resuelto:** Una cámara queda por debajo de la MTOM pero se desplaza en su soporte. La masa es admisible; el centrado y la fijación no están resueltos. Un ala fija responde al mando de alabeo, pero una carga desplaza el CG fuera del límite trasero del manual. Los alerones no corrigen esa condición: se reajusta la carga y se comprueba la envolvente antes de volar.

**Error habitual:** Creer que respetar la MTOM resuelve todo el balance. Equiparar respuesta de alerones o CG delante del centro aerodinámico del ala con estabilidad garantizada.

**Comprobación:** En un ala fija los alerones responden, pero la nueva carga deja el CG fuera del límite trasero. ¿Puede despegar?

**Respuesta razonada:** No; los alerones controlan el alabeo, mientras que la estabilidad y control longitudinal requieren un CG dentro de los límites del modelo.

**Fuente:** [AESA · Syllabus STS, revisión 2 (17/04/2023), actualmente enlazado por AESA](https://www.seguridadaerea.gob.es/sites/default/files/Temario.formaci%C3%B3n.conocimientos.te%C3%B3ricos.STS_v2.pdf).

**Fuente complementaria:** [FAA: Pilot's Handbook of Aeronautical Knowledge, controles de vuelo](https://www.faa.gov/sites/faa.gov/files/pilot_handbook_1.pdf).
**Fuente complementaria:** [FAA: Aerodynamics for Naval Aviators, punto neutro y estabilidad longitudinal](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/00-80T-80.pdf).

## Envolvente y masa por rendimiento

La envolvente reúne condiciones y límites de operación. Tipo de aeronave, masa, densidad, viento, temperatura y estado de sistemas modifican el margen disponible. Respetar un máximo de masa no garantiza que esa masa sea adecuada para el ambiente y la misión.

**Ejemplo resuelto:** Un multirrotor caliente en altura requiere casi toda la potencia en estacionario. Se recupera con seguridad y se revisa la configuración; no se establece un porcentaje universal de potencia admisible.

**Error habitual:** Convertir un dato ilustrativo en límite universal.

**Comprobación:** Un UAS queda sin margen de potencia para maniobrar. ¿Qué criterio es correcto?

**Respuesta razonada:** Recuperar de forma segura y revisar masa, ambiente y límites.

**Fuente:** [AESA · Syllabus STS, revisión 2 (17/04/2023), actualmente enlazado por AESA](https://www.seguridadaerea.gob.es/sites/default/files/Temario.formaci%C3%B3n.conocimientos.te%C3%B3ricos.STS_v2.pdf).

## Energía y autonomía

La energía nominal permite comparar baterías, pero la energía utilizable y la autonomía dependen de carga, estado, temperatura, viento y consumo. No se extrapola un dato comercial como duración garantizada. Para un consumo constante ideal, tiempo(h) = energía(Wh) / potencia(W), antes de reservas y pérdidas. La potencia eléctrica se mide en vatios (W): en corriente continua ideal, P = V × A. El vatio expresa energía por unidad de tiempo; Wh expresa energía y Ah expresa carga eléctrica. No se intercambian W y Wh al estimar autonomía.

**Ejemplo resuelto:** 111 Wh / 222 W = 0,5 h = 30 min teóricos. Una reserva energética del ejemplo del 20 % deja 24 min en ese modelo ideal, sin prometer ese resultado en vuelo real. A 22,2 V y 5 A, la potencia instantánea ideal es 111 W. Una batería nominal de 22,2 V y 5 Ah almacena 111 Wh nominales: las dos cifras coinciden numéricamente aquí, pero describen magnitudes distintas.

**Error habitual:** Confundir un cálculo ideal con plan de vuelo seguro. Llamar «vatios» a la energía de la batería o confundir amperios con amperios hora.

**Comprobación:** Con 111 Wh y consumo ideal de 222 W, ¿qué tiempo se obtiene antes de reservas?

**Respuesta razonada:** 30 minutos teóricos.

**Fuente:** [AESA · Syllabus STS, revisión 2 (17/04/2023), actualmente enlazado por AESA](https://www.seguridadaerea.gob.es/sites/default/files/Temario.formaci%C3%B3n.conocimientos.te%C3%B3ricos.STS_v2.pdf).

**Fuente complementaria:** [NIST: vatio, unidad de potencia](https://www.nist.gov/glossary-term/34606).

## Baterías y seguridad de uso

Se identifican química, tensión, capacidad y tasa C. La corriente asociada a una tasa es I = C × Ah; no autoriza superar lo permitido por fabricante, cargador o sistema. Se usan equipos compatibles, se inspecciona la batería y se siguen las instrucciones de carga, almacenamiento y retirada de unidades dañadas. Una pila primaria se diseña para uso no recargable; una secundaria admite recarga dentro de sus especificaciones. La LiPo es secundaria: «secundaria» no fija número de celdas, corriente ni rapidez de descarga. Si la etiqueta 40 C se refiere a descarga, indica una tasa relativa a la capacidad (en 5 Ah, 40 × 5 = 200 A teóricos); no es una autorización para cargar a 40 C ni para exigir esa corriente al sistema. La descarga profunda por debajo del límite del fabricante puede dañar la LiPo; no se la recarga o reutiliza por intuición.

**Ejemplo resuelto:** Para una batería de 5 Ah, 2C corresponde aritméticamente a 10 A. Solo se usa ese régimen si está permitido para esa función y batería. No se intenta recuperar una unidad hinchada. Una LiPo de 5 Ah marcada 40 C llega por debajo del umbral de descarga indicado por su fabricante. Aunque la tasa nominal equivalga aritméticamente a 200 A de descarga, se aparta de servicio y se sigue el procedimiento del fabricante; esa cifra no resuelve el daño ni la tasa de carga.

**Error habitual:** Tomar una tasa de descarga como tasa de carga o intervenir una batería dañada. Definir una pila secundaria por «tres a seis circuitos» o usar 40 C como permiso universal de carga o descarga.

**Comprobación:** Una LiPo de 5 Ah marcada 40 C cae por debajo del límite de descarga del fabricante. ¿Autoriza la marca a recargarla y volver a volar?

**Respuesta razonada:** No. La tasa 40 C, si es de descarga, describe corriente relativa a la capacidad; no anula el límite de descarga ni indica la tasa de carga. Se sigue el procedimiento del fabricante.

**Fuente:** [AESA · Syllabus STS, revisión 2 (17/04/2023), actualmente enlazado por AESA](https://www.seguridadaerea.gob.es/sites/default/files/Temario.formaci%C3%B3n.conocimientos.te%C3%B3ricos.STS_v2.pdf).

**Fuente complementaria:** [NASA: Power Subsystems, baterías primarias y secundarias y descarga profunda](https://www.nasa.gov/smallsat-institute/sst-soa/power-subsystems/).

## Verificación tras un cambio

Cambiar batería, hélice, soporte, sensor o software puede alterar masa, CG, consumo o funciones. Se comprueban compatibilidad, límites y documentación de la configuración antes de operar. No se plantea una conexión de baterías ni modificación como experimento de vuelo.

**Ejemplo resuelto:** Se cambia a una batería más pesada para ganar energía. Se recalculan masa y CG y se revisa aprobación; el aumento de Wh no asegura más autonomía.

**Error habitual:** Mejorar una cifra aislada ignorando las demás.

**Comprobación:** Se propone una batería más pesada. ¿Qué comprobación es necesaria?

**Respuesta razonada:** Compatibilidad, masa total, CG y efecto en el rendimiento.

**Fuente:** [AESA · Syllabus STS, revisión 2 (17/04/2023), actualmente enlazado por AESA](https://www.seguridadaerea.gob.es/sites/default/files/Temario.formaci%C3%B3n.conocimientos.te%C3%B3ricos.STS_v2.pdf).

## Revisión de cobertura

Este refuerzo reorganiza las ideas centrales en ocho unidades. No se presenta como desarrollo exhaustivo de cada subepígrafe del syllabus. La matriz global registra las ampliaciones que aún requieren desarrollo y revisión humana.
