# Bloque 7 · Rendimiento de vuelo del UAS

Revisión documental: 06/11/2026. Material didáctico propio; pendiente de revisión experta antes de publicar.

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

Una carga lateral o desplazable modifica el CG, el reparto de esfuerzos y la controlabilidad. En ala fija, estar fuera del límite delantero o trasero tiene consecuencias distintas; se consultan límites y procedimiento del modelo. La fijación debe impedir movimiento y desprendimiento durante toda la operación.

**Ejemplo resuelto:** Una cámara queda por debajo de la MTOM pero se desplaza en su soporte. La masa es admisible; el centrado y la fijación no están resueltos.

**Error habitual:** Creer que respetar la MTOM resuelve todo el balance.

**Comprobación:** La masa cumple MTOM, pero el soporte permite deslizarse a la cámara. ¿Está resuelta la configuración?

**Respuesta razonada:** No; hay que asegurar la carga y comprobar el centrado.

**Fuente:** [AESA · Syllabus STS, revisión 2 (17/04/2023), actualmente enlazado por AESA](https://www.seguridadaerea.gob.es/sites/default/files/Temario.formaci%C3%B3n.conocimientos.te%C3%B3ricos.STS_v2.pdf).

## Envolvente y masa por rendimiento

La envolvente reúne condiciones y límites de operación. Tipo de aeronave, masa, densidad, viento, temperatura y estado de sistemas modifican el margen disponible. Respetar un máximo de masa no garantiza que esa masa sea adecuada para el ambiente y la misión.

**Ejemplo resuelto:** Un multirrotor caliente en altura requiere casi toda la potencia en estacionario. Se recupera con seguridad y se revisa la configuración; no se establece un porcentaje universal de potencia admisible.

**Error habitual:** Convertir un dato ilustrativo en límite universal.

**Comprobación:** Un UAS queda sin margen de potencia para maniobrar. ¿Qué criterio es correcto?

**Respuesta razonada:** Recuperar de forma segura y revisar masa, ambiente y límites.

**Fuente:** [AESA · Syllabus STS, revisión 2 (17/04/2023), actualmente enlazado por AESA](https://www.seguridadaerea.gob.es/sites/default/files/Temario.formaci%C3%B3n.conocimientos.te%C3%B3ricos.STS_v2.pdf).

## Energía y autonomía

La energía nominal permite comparar baterías, pero la energía utilizable y la autonomía dependen de carga, estado, temperatura, viento y consumo. No se extrapola un dato comercial como duración garantizada. Para un consumo constante ideal, tiempo(h) = energía(Wh) / potencia(W), antes de reservas y pérdidas.

**Ejemplo resuelto:** 111 Wh / 222 W = 0,5 h = 30 min teóricos. Una reserva energética del ejemplo del 20 % deja 24 min en ese modelo ideal, sin prometer ese resultado en vuelo real.

**Error habitual:** Confundir un cálculo ideal con plan de vuelo seguro.

**Comprobación:** Con 111 Wh y consumo ideal de 222 W, ¿qué tiempo se obtiene antes de reservas?

**Respuesta razonada:** 30 minutos teóricos.

**Fuente:** [AESA · Syllabus STS, revisión 2 (17/04/2023), actualmente enlazado por AESA](https://www.seguridadaerea.gob.es/sites/default/files/Temario.formaci%C3%B3n.conocimientos.te%C3%B3ricos.STS_v2.pdf).

## Baterías y seguridad de uso

Se identifican química, tensión, capacidad y tasa C. La corriente asociada a una tasa es I = C × Ah; no autoriza superar lo permitido por fabricante, cargador o sistema. Se usan equipos compatibles, se inspecciona la batería y se siguen las instrucciones de carga, almacenamiento y retirada de unidades dañadas.

**Ejemplo resuelto:** Para una batería de 5 Ah, 2C corresponde aritméticamente a 10 A. Solo se usa ese régimen si está permitido para esa función y batería. No se intenta recuperar una unidad hinchada.

**Error habitual:** Tomar una tasa de descarga como tasa de carga o intervenir una batería dañada.

**Comprobación:** ¿Qué corriente representa 2C en una batería de 5 Ah?

**Respuesta razonada:** 10 A, sujeto a que ese régimen esté permitido para el uso considerado.

**Fuente:** [AESA · Syllabus STS, revisión 2 (17/04/2023), actualmente enlazado por AESA](https://www.seguridadaerea.gob.es/sites/default/files/Temario.formaci%C3%B3n.conocimientos.te%C3%B3ricos.STS_v2.pdf).

## Verificación tras un cambio

Cambiar batería, hélice, soporte, sensor o software puede alterar masa, CG, consumo o funciones. Se comprueban compatibilidad, límites y documentación de la configuración antes de operar. No se plantea una conexión de baterías ni modificación como experimento de vuelo.

**Ejemplo resuelto:** Se cambia a una batería más pesada para ganar energía. Se recalculan masa y CG y se revisa aprobación; el aumento de Wh no asegura más autonomía.

**Error habitual:** Mejorar una cifra aislada ignorando las demás.

**Comprobación:** Se propone una batería más pesada. ¿Qué comprobación es necesaria?

**Respuesta razonada:** Compatibilidad, masa total, CG y efecto en el rendimiento.

**Fuente:** [AESA · Syllabus STS, revisión 2 (17/04/2023), actualmente enlazado por AESA](https://www.seguridadaerea.gob.es/sites/default/files/Temario.formaci%C3%B3n.conocimientos.te%C3%B3ricos.STS_v2.pdf).

## Revisión de cobertura

Este refuerzo reorganiza las ideas centrales en ocho unidades. No se presenta como desarrollo exhaustivo de cada subepígrafe del syllabus. La matriz global registra las ampliaciones que aún requieren desarrollo y revisión humana.
