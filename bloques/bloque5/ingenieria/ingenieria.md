# Bloque 5 · Conocimientos generales del UAS

Revisión documental: 06/11/2026. Material didáctico propio; pendiente de revisión experta antes de publicar.

## Objetivo y conexión

Explicar qué hace cada sistema y comprobar su configuración y sus limitaciones.

Masa, baterías y sensores se conectan con el rendimiento del bloque 7.

## Método

Recuperar una idea previa → explicar → resolver un ejemplo → decidir sin ver la solución → contrastar → transferir cambiando una condición.

Las preguntas nuevas son adaptadas, no preguntas oficiales de AESA. Los ejemplos son ficticios y no autorizan vuelos. Los límites del escenario, del equipo y del lugar deben cumplirse simultáneamente.

## Clases C5 y C6

C5 se vincula a STS-01 y C6 a STS-02. Se comprueban marcado, declaración UE de conformidad, configuración y manual. Las partes 16 y 17 del Reglamento 2019/945 establecen excepciones a ciertos requisitos C3: no se puede afirmar que toda función C3 sea obligatoria sin leer esas excepciones.

**Ejemplo resuelto:** Añadir un paracaídas por cuenta propia a un dron no demuestra conversión conforme a C5. Se necesita la documentación y el proceso aplicables.

**Error habitual:** Confundir accesorio instalado con conformidad de clase.

**Comprobación:** Un dron recibe un paracaídas no documentado como conversión. ¿Eso basta para considerarlo C5?

**Respuesta razonada:** No; debe acreditarse la conformidad aplicable a la configuración.

**Fuente:** [Reglamento 2019/945 · Anexo, partes 16 y 17 · EASA junio 2026](https://www.easa.europa.eu/en/document-library/easy-access-rules/online-publications/easy-access-rules-unmanned-aircraft-systems?erules-id=ERULES-1963177438-17523).

## Geoconsciencia, contención y DRI

La geoconsciencia informa de posibles vulneraciones de zonas; la contención limita el vuelo respecto a límites programados; la identificación remota directa transmite datos de identificación. En C5/C6 la geoconsciencia se regula si está instalada: no es una obligación universal común en los términos antes atribuidos a C3. En STS la DRI debe estar activa y actualizada.

**Ejemplo resuelto:** Un aviso de zona no garantiza que el UAS detenga su avance. Y una emisión DRI correcta no demuestra que el volumen de vuelo esté bien cargado.

**Error habitual:** Usar geoconsciencia, geocaging y DRI como sinónimos.

**Comprobación:** ¿Qué afirmación distingue correctamente las funciones?

**Respuesta razonada:** La geoconsciencia avisa; la contención limita; la DRI identifica.

**Fuente:** [Reglamento 2019/945 · Anexo, partes 16 y 17 · EASA junio 2026](https://www.easa.europa.eu/en/document-library/easy-access-rules/online-publications/easy-access-rules-unmanned-aircraft-systems?erules-id=ERULES-1963177438-17523).

## C5: modo lento y terminación

En C5 sin anclaje, el modo lento seleccionable limita a no más de 5 m/s. STS-01 sin anclaje exige operar a menos de 5 m/s. Los medios de terminación y su activación deben ser independientes del control y guiado automáticos; se prevén medios de reducción de las consecuencias del impacto. Se revisa el manual, sin prometer aterrizaje indemne.

**Ejemplo resuelto:** Un modo cuyo máximo técnico sea 5 m/s puede cumplir ese requisito de producto; la operación STS-01 sigue teniendo que mantenerse por debajo de 5 m/s.

**Error habitual:** Confundir límite de diseño con velocidad autorizada exacta de operación.

**Comprobación:** ¿Qué par distingue modo técnico y operación STS-01 sin anclaje?

**Respuesta razonada:** Modo C5 ≤ 5 m/s; operación STS-01 < 5 m/s.

**Fuente:** [Reglamento 2019/945 · Anexo, partes 16 y 17 · EASA junio 2026](https://www.easa.europa.eu/en/document-library/easy-access-rules/online-publications/easy-access-rules-unmanned-aircraft-systems?erules-id=ERULES-1963177438-17523).

## C6: información y límites

C6 tiene velocidad máxima respecto al suelo en vuelo nivelado no superior a 50 m/s. Proporciona posición geográfica, velocidad y altura, programación de trayectoria y medios de limitación del volumen. El FTS y su activación son independientes del control automático y de los medios que evitan rebasar el volumen.

**Ejemplo resuelto:** Que la clase permita un máximo de 50 m/s no obliga a usarlo ni garantiza que sea adecuado con esa carga, viento o margen de riesgo.

**Error habitual:** Tomar un máximo de producto como velocidad recomendada.

**Comprobación:** C6 declara un máximo de 50 m/s. ¿Qué significa para la misión?

**Respuesta razonada:** Es un límite de clase; la operación puede exigir una velocidad menor.

**Fuente:** [Reglamento 2019/945 · Anexo, partes 16 y 17 · EASA junio 2026](https://www.easa.europa.eu/en/document-library/easy-access-rules/online-publications/easy-access-rules-unmanned-aircraft-systems?erules-id=ERULES-1963177438-17523).

## Enlace C2 y funciones automáticas

C2 es el enlace de mando y control. Se supervisa su calidad y se atienden alertas de degradación o pérdida. La existencia de telemetría, vídeo o una ruta automática no demuestra que todos los enlaces estén disponibles ni elimina los procedimientos ante fallo.

**Ejemplo resuelto:** La imagen sigue visible pero aparece alarma C2. El piloto no deduce que el mando sea correcto solo porque recibe vídeo.

**Error habitual:** Confundir enlace de imagen con estado de mando y control.

**Comprobación:** Se recibe vídeo pero hay alarma de degradación C2. ¿Qué interpretación es correcta?

**Respuesta razonada:** El vídeo no invalida la alarma; se aplica el procedimiento correspondiente.

**Fuente:** [Reglamento 2019/945 · Anexo, partes 16 y 17 · EASA junio 2026](https://www.easa.europa.eu/en/document-library/easy-access-rules/online-publications/easy-access-rules-unmanned-aircraft-systems?erules-id=ERULES-1963177438-17523).

## IMU, GNSS y brújula

La IMU mide magnitudes inerciales mediante sensores como acelerómetros y giróscopos; GNSS aporta posicionamiento por satélite; la brújula contribuye al rumbo magnético. No son intercambiables. Se siguen las instrucciones del fabricante para calibración y comprobación, evitando calibrar indiscriminadamente en lugares con interferencia.

**Ejemplo resuelto:** Un aviso de rumbo junto a una estructura metálica pide evaluar interferencia y el procedimiento del fabricante, no asumir que más satélites corrigen cualquier error.

**Error habitual:** Pensar que GNSS resuelve todo fallo de orientación.

**Comprobación:** Hay error de rumbo cerca de una estructura metálica. ¿Qué criterio es adecuado?

**Respuesta razonada:** Evaluar interferencia y seguir las comprobaciones del fabricante antes de operar.

**Fuente:** [AESA · Syllabus STS, revisión 2 (17/04/2023), actualmente enlazado por AESA](https://www.seguridadaerea.gob.es/sites/default/files/Temario.formaci%C3%B3n.conocimientos.te%C3%B3ricos.STS_v2.pdf).

## Velocidades, altura y referencia

Se distingue velocidad respecto al suelo de velocidad respecto al aire, y altura relativa del sistema de separación real al terreno. En instrumentos aerodinámicos, velocidad indicada y verdadera no son necesariamente iguales. Antes de comparar cifras se identifican unidad, magnitud y referencia.

**Ejemplo resuelto:** El mando muestra 80 m respecto al despegue sobre un terreno que asciende 40 m. En el ejemplo geométrico, la separación vertical local sería 40 m; la lectura no equivale automáticamente a 80 m sobre el suelo.

**Error habitual:** Comparar lecturas sin saber de qué punto o magnitud proceden.

**Comprobación:** El terreno sube 40 m y la UA está a 80 m sobre el despegue. En este ejemplo vertical, ¿cuánto la separa del terreno local?

**Respuesta razonada:** 40 m.

**Fuente:** [AESA · Syllabus STS, revisión 2 (17/04/2023), actualmente enlazado por AESA](https://www.seguridadaerea.gob.es/sites/default/files/Temario.formaci%C3%B3n.conocimientos.te%C3%B3ricos.STS_v2.pdf).

## Baterías: V, Ah, Wh y conexiones

Ah expresa capacidad de carga eléctrica; Wh, energía. Para una estimación nominal, Wh = V × Ah. En serie se suman tensiones de elementos compatibles; en paralelo, capacidades a igual tensión. No se deduce autonomía exacta ni se recomienda modificar conexiones sin aprobación del fabricante.

**Ejemplo resuelto:** Una batería de 22,2 V y 5 Ah almacena nominalmente 111 Wh. Una de 11,1 V y 5 Ah tiene 55,5 Wh: igual Ah no significa igual energía.

**Error habitual:** Confundir mAh con energía o prometer el doble de autonomía.

**Comprobación:** ¿Qué energía nominal resulta de 22,2 V y 5 Ah?

**Respuesta razonada:** 111 Wh.

**Fuente:** [AESA · Syllabus STS, revisión 2 (17/04/2023), actualmente enlazado por AESA](https://www.seguridadaerea.gob.es/sites/default/files/Temario.formaci%C3%B3n.conocimientos.te%C3%B3ricos.STS_v2.pdf).

## Revisión de cobertura

Este refuerzo reorganiza las ideas centrales en ocho unidades. No se presenta como desarrollo exhaustivo de cada subepígrafe del syllabus. La matriz global registra las ampliaciones que aún requieren desarrollo y revisión humana.
