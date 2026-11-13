window.DRONLAB_BLOQUE = {
  "curso": {
    "id": "dronlab-sts",
    "titulo": "DronLab STS"
  },
  "bloque": {
    "numero": 6,
    "slug": "bloque6",
    "titulo": "Meteorología",
    "estado": "REFUERZO_PEDAGOGICO"
  },
  "meta": {
    "curso": "DronLab STS",
    "bloque": 6,
    "slug": "bloque6",
    "titulo": "Meteorología",
    "subtitulo": "Interpretar información vigente y local para justificar una decisión de operar, adaptar o aplazar.",
    "organismo": "AESA / EASA",
    "paginas_relacionadas": "8–10",
    "estado": "Revisado · 13/11/2026",
    "version": "2026.11-refuerzo"
  },
  "trazabilidad": {
    "organismo": "AESA / EASA",
    "paginas_relacionadas": "8–10",
    "estado": "Revisado · 13/11/2026",
    "fuentes": [
      {
        "titulo": "AESA · Syllabus STS, revisión 2 (17/04/2023), actualmente enlazado por AESA",
        "url": "https://www.seguridadaerea.gob.es/sites/default/files/Temario.formaci%C3%B3n.conocimientos.te%C3%B3ricos.STS_v2.pdf"
      },
      {
        "titulo": "Reglamento 2019/947 · UAS.STS-02.010/.020/.030 y AMC/GM · EASA junio 2026",
        "url": "https://www.easa.europa.eu/en/document-library/easy-access-rules/online-publications/easy-access-rules-unmanned-aircraft-systems?erules-id=ERULES-1963177438-17399"
      },
      {
        "titulo": "NOAA/NWS: lectura de barbas de viento",
        "url": "https://www.weather.gov/hfo/windbarbinfo"
      },
      {
        "titulo": "NOAA/NWS: turbulencia mecánica por edificios y obstáculos",
        "url": "https://www.weather.gov/zme/safety_turb"
      },
      {
        "titulo": "NOAA/NWS: vientos locales de ladera y viento catabático",
        "url": "https://www.weather.gov/source/zhu/ZHU_Training_Page/winds/Wx_Terms/Flight_Environment.htm"
      }
    ]
  },
  "objetivo": "Interpretar información vigente y local para justificar una decisión de operar, adaptar o aplazar.",
  "conexion": "El viento modifica vigilancia y energía; la densidad conecta con rendimiento y carga del bloque 7.",
  "conceptos": [
    "Viento y unidades",
    "Relieve, obstáculos y turbulencia",
    "Temperatura, presión y densidad",
    "Niebla, nubes y visibilidad",
    "METAR, SPECI y TAF",
    "Hora UTC y vigencia",
    "Efectos regionales y precipitación",
    "Briefing meteorológico y decisión"
  ],
  "conceptosClave": [
    "Viento y unidades",
    "Relieve, obstáculos y turbulencia",
    "Temperatura, presión y densidad",
    "Niebla, nubes y visibilidad",
    "METAR, SPECI y TAF",
    "Hora UTC y vigencia",
    "Efectos regionales y precipitación",
    "Briefing meteorológico y decisión"
  ],
  "pantallas": [
    {
      "titulo": "Viento y unidades",
      "contenido": "La dirección meteorológica indica de dónde viene el viento. 1 kt = 0,5144 m/s; 1 m/s = 3,6 km/h. Se comparan rachas y viento sostenido con los límites aplicables del manual y los márgenes de la operación, no solo con el valor medio. En una barba de viento, el asta señala de dónde sopla el viento y las marcas expresan la velocidad en nudos: media barbilla = 5 kt, barbilla larga = 10 kt y banderín triangular = 50 kt; se suman las marcas. Esta convención permite leer símbolos, sin deducir condiciones del lugar solo de una carta.",
      "ejemplo": "Un límite del ejemplo de 10 m/s se supera con rachas de 25 kt: 25 × 0,5144 = 12,86 m/s. Se aplaza o replantea; convertir unidades evita una falsa aceptación. Un símbolo descrito con un banderín y una barbilla larga representa 60 kt; una barbilla larga y una media representan 15 kt. Son ejemplos textuales, no la imagen del examen.",
      "error_habitual": "Comparar números expresados en unidades diferentes. Leer el asta como destino del viento o contar un banderín como 5 kt.",
      "pregunta": "Una barba descrita con un banderín triangular y una barbilla larga, ¿qué velocidad representa?",
      "respuesta": "60 kt: 50 kt del banderín más 10 kt de la barbilla larga; la dirección la indica el asta hacia el origen del viento.",
      "distractores": [
        {
          "texto": "15 kt.",
          "motivo": "Confunde el banderín de 50 kt con una marca de 5 kt."
        },
        {
          "texto": "50 kt.",
          "motivo": "Omite la barbilla larga adicional de 10 kt."
        },
        {
          "texto": "10 kt.",
          "motivo": "Omite el banderín triangular de 50 kt."
        }
      ],
      "fuente": "syllabus",
      "id": "b6-01",
      "docente": "Pregunta primero: Una barba descrita con un banderín triangular y una barbilla larga, ¿qué velocidad representa? Después pide una justificación y trabaja este error: Comparar números expresados en unidades diferentes. Leer el asta como destino del viento o contar un banderín como 5 kt.",
      "fuentes": [
        {
          "titulo": "AESA · Syllabus STS, revisión 2 (17/04/2023), actualmente enlazado por AESA",
          "url": "https://www.seguridadaerea.gob.es/sites/default/files/Temario.formaci%C3%B3n.conocimientos.te%C3%B3ricos.STS_v2.pdf"
        },
        {
          "titulo": "NOAA/NWS: lectura de barbas de viento",
          "url": "https://www.weather.gov/hfo/windbarbinfo"
        }
      ]
    },
    {
      "titulo": "Relieve, obstáculos y turbulencia",
      "contenido": "Edificios, árboles y relieve alteran velocidad y dirección; el calentamiento diferencial produce convección. La cizalladura es un cambio de velocidad o dirección del viento entre puntos. Un promedio moderado puede esconder rachas o turbulencias locales. A sotavento de un edificio pueden formarse remolinos y cambios bruscos de viento aunque el punto de despegue parezca protegido. Su intensidad depende del viento y de la forma y tamaño del obstáculo; no hay una distancia universal de seguridad deducible solo del edificio.",
      "ejemplo": "En la ladera protegida parece haber calma, pero el tramo pasa a sotavento de una cresta. Se valora el viento en la trayectoria y en las recuperaciones, no solo donde está el piloto. Si la ruta pasa detrás de una nave con viento cruzado, se revisan la trayectoria, los puntos de recuperación y los límites del UAS antes de aceptar el tramo.",
      "error_habitual": "Extrapolar la medida del punto de despegue a todo el volumen. Tratar el sotavento como una zona siempre calma y segura.",
      "pregunta": "La ruta pasa a sotavento de un edificio con viento apreciable. ¿Qué decisión procede antes del despegue?",
      "respuesta": "Evaluar la posible turbulencia local en toda la trayectoria y adaptar o aplazar el tramo si no se mantienen los márgenes y límites.",
      "distractores": [
        {
          "texto": "Mantener la ruta porque el edificio bloquea todo el viento.",
          "motivo": "El obstáculo puede generar remolinos a sotavento."
        },
        {
          "texto": "Usar la medida de viento del punto de despegue como única referencia.",
          "motivo": "No describe necesariamente el flujo detrás del edificio."
        },
        {
          "texto": "Aplicar siempre una distancia fija de diez metros.",
          "motivo": "No existe un margen universal para cualquier edificio y viento."
        }
      ],
      "fuente": "syllabus",
      "id": "b6-02",
      "docente": "Pregunta primero: La ruta pasa a sotavento de un edificio con viento apreciable. ¿Qué decisión procede antes del despegue? Después pide una justificación y trabaja este error: Extrapolar la medida del punto de despegue a todo el volumen. Tratar el sotavento como una zona siempre calma y segura.",
      "fuentes": [
        {
          "titulo": "AESA · Syllabus STS, revisión 2 (17/04/2023), actualmente enlazado por AESA",
          "url": "https://www.seguridadaerea.gob.es/sites/default/files/Temario.formaci%C3%B3n.conocimientos.te%C3%B3ricos.STS_v2.pdf"
        },
        {
          "titulo": "NOAA/NWS: turbulencia mecánica por edificios y obstáculos",
          "url": "https://www.weather.gov/zme/safety_turb"
        }
      ]
    },
    {
      "titulo": "Temperatura, presión y densidad",
      "contenido": "A presión constante, el aire más caliente tiene menor densidad. La densidad suele disminuir con la altitud. Para producir la misma sustentación, el sistema puede necesitar más esfuerzo y disponer de menos margen. La presión baja con la altura; se identifican hPa e inHg. K = °C + 273,15 y °F = 1,8 × °C + 32.",
      "ejemplo": "Con 20 °C se obtienen 293,15 K y 68 °F. En una misión cálida de montaña, respetar la MTOM no demuestra que haya margen suficiente de rendimiento.",
      "error_habitual": "Suponer que la potencia disponible y la MTOM admisible son iguales en cualquier ambiente.",
      "pregunta": "A presión constante aumenta la temperatura. ¿Qué ocurre con la densidad?",
      "respuesta": "Disminuye.",
      "distractores": [
        {
          "texto": "Aumenta siempre.",
          "motivo": "A presión fija la relación con temperatura absoluta es inversa."
        },
        {
          "texto": "No cambia por definición.",
          "motivo": "Sí depende de la temperatura."
        },
        {
          "texto": "Pasa a ser igual a la presión.",
          "motivo": "Densidad y presión son magnitudes diferentes."
        }
      ],
      "fuente": "syllabus",
      "id": "b6-03",
      "docente": "Pregunta primero: A presión constante aumenta la temperatura. ¿Qué ocurre con la densidad? Después pide una justificación y trabaja este error: Suponer que la potencia disponible y la MTOM admisible son iguales en cualquier ambiente.",
      "fuentes": [
        {
          "titulo": "AESA · Syllabus STS, revisión 2 (17/04/2023), actualmente enlazado por AESA",
          "url": "https://www.seguridadaerea.gob.es/sites/default/files/Temario.formaci%C3%B3n.conocimientos.te%C3%B3ricos.STS_v2.pdf"
        }
      ]
    },
    {
      "titulo": "Niebla, nubes y visibilidad",
      "contenido": "La niebla reduce la visibilidad horizontal por debajo de 1 km; puede formarse por enfriamiento nocturno (radiación) o por desplazamiento de aire húmedo sobre una superficie más fría (advección). Las nubes de desarrollo convectivo pueden indicar turbulencia y precipitaciones intensas. La visibilidad local se contrasta con referencias, luz y obstáculos.",
      "ejemplo": "Un parte cercano es favorable, pero hay niebla en el valle de la misión. Prevalece la evaluación de si se cumplen las condiciones reales del vuelo; no se acepta el parte como garantía.",
      "error_habitual": "Trasladar sin comprobar la visibilidad de un aeródromo al lugar de operación.",
      "pregunta": "El METAR cercano es favorable y el valle tiene niebla. ¿Qué procede?",
      "respuesta": "Evaluar el lugar y no iniciar si no se cumplen las condiciones necesarias.",
      "distractores": [
        {
          "texto": "Volar porque el METAR garantiza todo el valle.",
          "motivo": "El parte describe otro lugar y momento."
        },
        {
          "texto": "Cambiar a BVLOS para ignorar visibilidad.",
          "motivo": "BVLOS también tiene condiciones de vigilancia y visibilidad."
        },
        {
          "texto": "Usar solo la previsión semanal.",
          "motivo": "No resuelve la condición actual local."
        }
      ],
      "fuente": "syllabus",
      "id": "b6-04",
      "docente": "Pregunta primero: El METAR cercano es favorable y el valle tiene niebla. ¿Qué procede? Después pide una justificación y trabaja este error: Trasladar sin comprobar la visibilidad de un aeródromo al lugar de operación.",
      "fuentes": [
        {
          "titulo": "AESA · Syllabus STS, revisión 2 (17/04/2023), actualmente enlazado por AESA",
          "url": "https://www.seguridadaerea.gob.es/sites/default/files/Temario.formaci%C3%B3n.conocimientos.te%C3%B3ricos.STS_v2.pdf"
        }
      ]
    },
    {
      "titulo": "METAR, SPECI y TAF",
      "contenido": "METAR es observación ordinaria de aeródromo; SPECI es observación especial ante cambios significativos; TAF es pronóstico con un período de validez explícito. Se leen lugar, fecha/hora UTC, unidades, viento, visibilidad, nubes y cambios. El período del TAF se lee en el propio mensaje, sin adivinarlo.",
      "ejemplo": "En el fragmento ficticio 18012G22KT, el viento procede de 180°, es de 12 kt con rachas de 22 kt. El sufijo KT identifica la unidad.",
      "error_habitual": "Confundir observación y pronóstico o ignorar las rachas.",
      "pregunta": "En 18012G22KT, ¿qué significa G22?",
      "respuesta": "Rachas de 22 kt.",
      "distractores": [
        {
          "texto": "Viento constante de 22 m/s.",
          "motivo": "G indica racha y KT nudos."
        },
        {
          "texto": "Dirección de 22 grados.",
          "motivo": "La dirección aparece en 180."
        },
        {
          "texto": "Visibilidad de 22 km.",
          "motivo": "Este grupo describe viento."
        }
      ],
      "fuente": "syllabus",
      "id": "b6-05",
      "docente": "Pregunta primero: En 18012G22KT, ¿qué significa G22? Después pide una justificación y trabaja este error: Confundir observación y pronóstico o ignorar las rachas.",
      "fuentes": [
        {
          "titulo": "AESA · Syllabus STS, revisión 2 (17/04/2023), actualmente enlazado por AESA",
          "url": "https://www.seguridadaerea.gob.es/sites/default/files/Temario.formaci%C3%B3n.conocimientos.te%C3%B3ricos.STS_v2.pdf"
        }
      ]
    },
    {
      "titulo": "Hora UTC y vigencia",
      "contenido": "La información aeronáutica utiliza UTC, indicada con Z. Se identifica fecha y período de validez antes de usar el mensaje. La conversión a hora local depende de la fecha y del huso; no se usa una diferencia fija durante todo el año.",
      "ejemplo": "Un TAF válido hasta 1200Z no describe automáticamente una misión a 1500Z. Se busca información válida para esa hora y se observa la evolución.",
      "error_habitual": "Usar un pronóstico fuera de su intervalo de validez.",
      "pregunta": "La misión empieza a 1500Z y el pronóstico acaba a 1200Z. ¿Qué falta?",
      "respuesta": "Información meteorológica válida para la hora de la misión.",
      "distractores": [
        {
          "texto": "Nada; todos los TAF duran el día completo.",
          "motivo": "Cada mensaje tiene su propia validez."
        },
        {
          "texto": "Sumar siempre dos horas a cualquier fecha y país.",
          "motivo": "La conversión depende de fecha y ubicación."
        },
        {
          "texto": "Reutilizar el mensaje sin mirar las horas.",
          "motivo": "Se perdería la vigencia temporal."
        }
      ],
      "fuente": "syllabus",
      "id": "b6-06",
      "docente": "Pregunta primero: La misión empieza a 1500Z y el pronóstico acaba a 1200Z. ¿Qué falta? Después pide una justificación y trabaja este error: Usar un pronóstico fuera de su intervalo de validez.",
      "fuentes": [
        {
          "titulo": "AESA · Syllabus STS, revisión 2 (17/04/2023), actualmente enlazado por AESA",
          "url": "https://www.seguridadaerea.gob.es/sites/default/files/Temario.formaci%C3%B3n.conocimientos.te%C3%B3ricos.STS_v2.pdf"
        }
      ]
    },
    {
      "titulo": "Efectos regionales y precipitación",
      "contenido": "Las brisas costeras suelen soplar del mar a tierra durante el día y pueden invertirse de noche; el relieve genera otros efectos locales. Lluvia, nieve, granizo, hielo y polvo pueden afectar sensores, hélices, electrónica y visión. Se respetan las limitaciones ambientales del fabricante. El viento catabático es el flujo descendente de aire frío y denso por una ladera. Suele aparecer tras el enfriamiento nocturno y puede comenzar al anochecer, pero también darse de día en superficies frías como nieve o hielo; el horario por sí solo no garantiza su presencia.",
      "ejemplo": "Un UAS sin aptitud para lluvia no pasa a ser apto por llevar protección improvisada. En montaña se revisan viento, densidad, hielo y puntos de recuperación. Una misión de recuperación en un valle continúa tras la puesta de sol. El equipo comprueba si el aire que desciende por la ladera cambia el viento local y afecta a la ruta, en vez de dar por válida la observación de la tarde.",
      "error_habitual": "Concluir aptitud ambiental solo por una apariencia robusta. Convertir «primeras horas de la noche» en una regla exclusiva para cualquier terreno.",
      "pregunta": "Una ruta de regreso cruza una ladera que se enfría al anochecer. ¿Qué fenómeno local debe comprobar el piloto?",
      "respuesta": "Posible viento catabático descendente; se contrasta con observación local, pronóstico y límites de la misión.",
      "distractores": [
        {
          "texto": "Ausencia garantizada de viento por ser de noche.",
          "motivo": "El enfriamiento puede activar flujo ladera abajo."
        },
        {
          "texto": "Una brisa marina obligatoria en cualquier valle.",
          "motivo": "Depende del entorno costero y no describe la ladera."
        },
        {
          "texto": "Un valor fijo de viento sin medir.",
          "motivo": "El fenómeno no determina por sí solo la velocidad concreta."
        }
      ],
      "fuente": "syllabus",
      "id": "b6-07",
      "docente": "Pregunta primero: Una ruta de regreso cruza una ladera que se enfría al anochecer. ¿Qué fenómeno local debe comprobar el piloto? Después pide una justificación y trabaja este error: Concluir aptitud ambiental solo por una apariencia robusta. Convertir «primeras horas de la noche» en una regla exclusiva para cualquier terreno.",
      "fuentes": [
        {
          "titulo": "AESA · Syllabus STS, revisión 2 (17/04/2023), actualmente enlazado por AESA",
          "url": "https://www.seguridadaerea.gob.es/sites/default/files/Temario.formaci%C3%B3n.conocimientos.te%C3%B3ricos.STS_v2.pdf"
        },
        {
          "titulo": "NOAA/NWS: vientos locales de ladera y viento catabático",
          "url": "https://www.weather.gov/source/zhu/ZHU_Training_Page/winds/Wx_Terms/Flight_Environment.htm"
        }
      ]
    },
    {
      "titulo": "Briefing meteorológico y decisión",
      "contenido": "Se combinan observaciones recientes, pronóstico, radar o satélite, condiciones locales y límites del equipo. Ninguna fuente aislada garantiza seguridad. Para STS-02 se comprueba también la visibilidad de vuelo superior a 5 km, separándola del alcance UA-piloto.",
      "ejemplo": "Hay visibilidad de 6 km pero rachas incompatibles con el manual. El cumplimiento de una condición no compensa el incumplimiento de otra.",
      "error_habitual": "Aceptar la misión porque una sola variable es favorable.",
      "pregunta": "Se cumple visibilidad STS-02, pero se supera el viento permitido por el manual. ¿Puede iniciarse?",
      "respuesta": "No; deben cumplirse simultáneamente las condiciones aplicables.",
      "distractores": [
        {
          "texto": "Sí, la visibilidad compensa el viento.",
          "motivo": "No existe esa compensación."
        },
        {
          "texto": "Sí, si el cliente acepta.",
          "motivo": "El consentimiento del cliente no cambia límites técnicos."
        },
        {
          "texto": "Sí, si la batería es nueva.",
          "motivo": "La batería no elimina el límite de viento."
        }
      ],
      "fuente": "sts02",
      "id": "b6-08",
      "docente": "Pregunta primero: Se cumple visibilidad STS-02, pero se supera el viento permitido por el manual. ¿Puede iniciarse? Después pide una justificación y trabaja este error: Aceptar la misión porque una sola variable es favorable.",
      "fuentes": [
        {
          "titulo": "Reglamento 2019/947 · UAS.STS-02.010/.020/.030 y AMC/GM · EASA junio 2026",
          "url": "https://www.easa.europa.eu/en/document-library/easy-access-rules/online-publications/easy-access-rules-unmanned-aircraft-systems?erules-id=ERULES-1963177438-17399"
        }
      ]
    }
  ],
  "recursos": {
    "flashcards": "recursos/flashcards/index.html",
    "test": "recursos/test/index.html",
    "casos": "recursos/casos/index.html",
    "practicas": "recursos/practicas/index.html",
    "chuletas": "recursos/chuletas/index.html",
    "mapa": "recursos/mapas/index.html"
  },
  "glosario": {
    "UA": "Aeronave no tripulada, como parte del sistema UAS.",
    "METAR": "Informe ordinario de observación meteorológica de un aeródromo.",
    "SPECI": "Informe especial de observación meteorológica ante cambios significativos.",
    "TAF": "Pronóstico meteorológico de aeródromo con período de validez explícito.",
    "UTC": "Tiempo universal coordinado; Z o Zulu identifica esta referencia horaria."
  }
};
