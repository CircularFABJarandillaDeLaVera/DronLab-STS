window.DRONLAB_BLOQUE = {
  "curso": {
    "id": "dronlab-sts",
    "titulo": "DronLab STS"
  },
  "bloque": {
    "numero": 3,
    "slug": "bloque3",
    "titulo": "Procedimientos operacionales",
    "estado": "REFUERZO_PEDAGOGICO"
  },
  "meta": {
    "curso": "DronLab STS",
    "bloque": 3,
    "slug": "bloque3",
    "titulo": "Procedimientos operacionales",
    "subtitulo": "Distinguir prevención, contingencia, emergencia y respuesta externa mediante decisiones concretas.",
    "organismo": "AESA / EASA",
    "paginas_relacionadas": "5–6",
    "estado": "Revisado · 06/11/2026",
    "version": "2026.11-refuerzo"
  },
  "trazabilidad": {
    "organismo": "AESA / EASA",
    "paginas_relacionadas": "5–6",
    "estado": "Revisado · 06/11/2026",
    "fuentes": [
      {
        "titulo": "Reglamento 2019/947 · UAS.STS-01.010/.020/.030 y AMC/GM · EASA junio 2026",
        "url": "https://www.easa.europa.eu/en/document-library/easy-access-rules/online-publications/easy-access-rules-unmanned-aircraft-systems?erules-id=ERULES-1963177438-17777"
      },
      {
        "titulo": "Reglamento 2019/947 · UAS.STS-02.010/.020/.030 y AMC/GM · EASA junio 2026",
        "url": "https://www.easa.europa.eu/en/document-library/easy-access-rules/online-publications/easy-access-rules-unmanned-aircraft-systems?erules-id=ERULES-1963177438-17399"
      },
      {
        "titulo": "Reglamento 2019/945 · Anexo, partes 16 y 17 · EASA junio 2026",
        "url": "https://www.easa.europa.eu/en/document-library/easy-access-rules/online-publications/easy-access-rules-unmanned-aircraft-systems?erules-id=ERULES-1963177438-17523"
      },
      {
        "titulo": "AESA · Syllabus STS, revisión 2 (17/04/2023), actualmente enlazado por AESA",
        "url": "https://www.seguridadaerea.gob.es/sites/default/files/Temario.formaci%C3%B3n.conocimientos.te%C3%B3ricos.STS_v2.pdf"
      },
      {
        "titulo": "Reglamento (UE) 2026/1821 · actualización de la lista de sucesos notificables",
        "url": "https://www.boe.es/buscar/doc.php?id=DOUE-L-2026-81188"
      }
    ]
  },
  "objetivo": "Distinguir prevención, contingencia, emergencia y respuesta externa mediante decisiones concretas.",
  "conexion": "Las barreras técnicas del bloque 5 se comprueban antes del vuelo y se usan según el manual.",
  "conceptos": [
    "Preparar la misión",
    "Comprobar barreras C5 y C6",
    "Contingencia y emergencia",
    "Intrusión de una persona",
    "Pérdida de enlace y terminación",
    "ERP y comunicación",
    "Cerrar, registrar y aprender",
    "Decidir sin recetas universales"
  ],
  "conceptosClave": [
    "Preparar la misión",
    "Comprobar barreras C5 y C6",
    "Contingencia y emergencia",
    "Intrusión de una persona",
    "Pérdida de enlace y terminación",
    "ERP y comunicación",
    "Cerrar, registrar y aprender",
    "Decidir sin recetas universales"
  ],
  "pantallas": [
    {
      "titulo": "Preparar la misión",
      "contenido": "Antes del vuelo se comprueban objetivo, espacio aéreo, zonas UAS, meteorología, personas, volumen, márgenes, equipo y competencias. La lista ayuda a ejecutar comprobaciones, pero no sustituye el juicio ni el manual. MEUH (Meteorología, Entorno, UAS, Humanos) puede usarse como ayuda didáctica, no como regla legal independiente.",
      "ejemplo": "El plano no incluye un camino usado por trabajadores. La comprobación del lugar obliga a revisar la zona antes de aprobar el inicio.",
      "error_habitual": "Completar una lista sin verificar la realidad.",
      "pregunta": "La lista está firmada, pero aparece un acceso no controlado. ¿Qué procede?",
      "respuesta": "Resolver el acceso y revisar la adecuación antes de iniciar.",
      "distractores": [
        {
          "texto": "Despegar porque ya se firmó.",
          "motivo": "La firma no asegura el control real."
        },
        {
          "texto": "Omitir el camino del plano.",
          "motivo": "Ocultar el acceso no elimina usuarios."
        },
        {
          "texto": "Confiar solo en la batería cargada.",
          "motivo": "La energía no resuelve la exposición de terceros."
        }
      ],
      "fuente": "sts01",
      "id": "b3-s1",
      "docente": "Pregunta primero: La lista está firmada, pero aparece un acceso no controlado. ¿Qué procede? Después pide una justificación y trabaja este error: Completar una lista sin verificar la realidad.",
      "fuentes": [
        {
          "titulo": "Reglamento 2019/947 · UAS.STS-01.010/.020/.030 y AMC/GM · EASA junio 2026",
          "url": "https://www.easa.europa.eu/en/document-library/easy-access-rules/online-publications/easy-access-rules-unmanned-aircraft-systems?erules-id=ERULES-1963177438-17777"
        }
      ]
    },
    {
      "titulo": "Comprobar barreras C5 y C6",
      "contenido": "Se verifica el estado del UAS, fijaciones, energía, enlace C2, limitaciones y sistemas de seguridad según fabricante y escenario. En STS-01 se comprueban los medios de terminación y la identificación remota activa y actualizada; en STS-02, además, la contención configurada y operativa. La DRI también debe estar activa y actualizada en STS-02.",
      "ejemplo": "El sistema de contención tiene cargado el volumen de otra parcela. Aunque se encienda sin error, no está correctamente configurado para esta misión.",
      "error_habitual": "Confundir sistema encendido con sistema comprobado y adecuado.",
      "pregunta": "El C6 conserva los límites de otra parcela. ¿Puede iniciarse la misión?",
      "respuesta": "No; hay que configurar y comprobar los límites de esta operación.",
      "distractores": [
        {
          "texto": "Sí, porque tiene etiqueta C6.",
          "motivo": "La etiqueta no configura la misión."
        },
        {
          "texto": "Sí, si el enlace es potente.",
          "motivo": "La potencia del enlace no corrige el volumen."
        },
        {
          "texto": "Sí, porque la DRI está encendida.",
          "motivo": "Identificación remota y contención cumplen funciones diferentes."
        }
      ],
      "fuente": "sts02",
      "id": "b3-s2",
      "docente": "Pregunta primero: El C6 conserva los límites de otra parcela. ¿Puede iniciarse la misión? Después pide una justificación y trabaja este error: Confundir sistema encendido con sistema comprobado y adecuado.",
      "fuentes": [
        {
          "titulo": "Reglamento 2019/947 · UAS.STS-02.010/.020/.030 y AMC/GM · EASA junio 2026",
          "url": "https://www.easa.europa.eu/en/document-library/easy-access-rules/online-publications/easy-access-rules-unmanned-aircraft-systems?erules-id=ERULES-1963177438-17399"
        }
      ]
    },
    {
      "titulo": "Contingencia y emergencia",
      "contenido": "Una contingencia gestiona una desviación y busca recuperar el estado normal dentro del volumen operacional. Una emergencia exige las acciones previstas para una situación que ya no puede recuperarse con los procedimientos normales o de contingencia. La geografía de vuelo y el volumen operacional tienen límites diferentes.",
      "ejemplo": "La UA se aproxima al límite de la geografía de vuelo: se ejecuta la contingencia definida. Amenazar con superar el volumen operacional requiere la respuesta de emergencia prevista; no se espera a salir.",
      "error_habitual": "Esperar a cruzar el último límite para actuar.",
      "pregunta": "La UA va a superar la geografía de vuelo, pero sigue dentro del volumen operacional. ¿Qué marco corresponde inicialmente?",
      "respuesta": "Aplicar la contingencia prevista para esa desviación.",
      "distractores": [
        {
          "texto": "Esperar sin actuar hasta salir del volumen.",
          "motivo": "La contingencia existe para intervenir antes."
        },
        {
          "texto": "Activar siempre el FTS sin evaluar el procedimiento.",
          "motivo": "La respuesta concreta depende de la situación y del manual."
        },
        {
          "texto": "Declarar finalizado el vuelo solo en el registro.",
          "motivo": "Un apunte no corrige la trayectoria."
        }
      ],
      "fuente": "sts02",
      "id": "b3-s3",
      "docente": "Pregunta primero: La UA va a superar la geografía de vuelo, pero sigue dentro del volumen operacional. ¿Qué marco corresponde inicialmente? Después pide una justificación y trabaja este error: Esperar a cruzar el último límite para actuar.",
      "fuentes": [
        {
          "titulo": "Reglamento 2019/947 · UAS.STS-02.010/.020/.030 y AMC/GM · EASA junio 2026",
          "url": "https://www.easa.europa.eu/en/document-library/easy-access-rules/online-publications/easy-access-rules-unmanned-aircraft-systems?erules-id=ERULES-1963177438-17399"
        }
      ]
    },
    {
      "titulo": "Intrusión de una persona",
      "contenido": "La entrada de una persona no participante altera el control de la zona. Se aplican medidas para protegerla de acuerdo con el procedimiento y la situación: no se despega si aún se está en tierra; en vuelo se adapta o termina de forma segura. Un cartel no convierte a una persona en participante.",
      "ejemplo": "La aeronave aún no ha despegado y entra alguien. Se mantiene en tierra, se controla el acceso y se reevalúa antes de continuar.",
      "error_habitual": "Aplicar una maniobra de vuelo a un UAS que sigue en tierra.",
      "pregunta": "Una persona entra antes del despegue. ¿Qué acción tiene sentido?",
      "respuesta": "Mantener la aeronave en tierra y restablecer el control de la zona.",
      "distractores": [
        {
          "texto": "Ponerla en estacionario para avisar.",
          "motivo": "Introduce un vuelo innecesario durante la intrusión."
        },
        {
          "texto": "Despegar rápidamente antes de que se acerque.",
          "motivo": "La condición de seguridad ya está alterada."
        },
        {
          "texto": "Considerarla participante por haber visto un cartel.",
          "motivo": "Faltan consentimiento e información adecuados."
        }
      ],
      "fuente": "sts01",
      "id": "b3-s4",
      "docente": "Pregunta primero: Una persona entra antes del despegue. ¿Qué acción tiene sentido? Después pide una justificación y trabaja este error: Aplicar una maniobra de vuelo a un UAS que sigue en tierra.",
      "fuentes": [
        {
          "titulo": "Reglamento 2019/947 · UAS.STS-01.010/.020/.030 y AMC/GM · EASA junio 2026",
          "url": "https://www.easa.europa.eu/en/document-library/easy-access-rules/online-publications/easy-access-rules-unmanned-aircraft-systems?erules-id=ERULES-1963177438-17777"
        }
      ]
    },
    {
      "titulo": "Pérdida de enlace y terminación",
      "contenido": "Se revisa la respuesta prevista ante degradación o pérdida de C2 y su adecuación al entorno. RTH, estacionario, aterrizaje y FTS son funciones diferentes. El FTS termina el vuelo conforme a su diseño; no garantiza un aterrizaje sin daño ni sustituye la planificación del margen de riesgo.",
      "ejemplo": "Un RTH automático a una altura incompatible con el entorno sería un peligro. Se comprueba la configuración antes del vuelo y se siguen los procedimientos ante la pérdida real.",
      "error_habitual": "Llamar FTS a cualquier función automática de retorno.",
      "pregunta": "¿Qué diferencia esencial hay entre RTH y FTS?",
      "respuesta": "RTH busca retornar; FTS termina el vuelo conforme a su diseño.",
      "distractores": [
        {
          "texto": "Son sinónimos.",
          "motivo": "Persiguen respuestas distintas."
        },
        {
          "texto": "FTS siempre aterriza sin daños.",
          "motivo": "La terminación puede causar impacto; se mitigan sus consecuencias."
        },
        {
          "texto": "RTH permite ignorar los obstáculos.",
          "motivo": "El retorno también requiere configuración y evaluación."
        }
      ],
      "fuente": "clases",
      "id": "b3-s5",
      "docente": "Pregunta primero: ¿Qué diferencia esencial hay entre RTH y FTS? Después pide una justificación y trabaja este error: Llamar FTS a cualquier función automática de retorno.",
      "fuentes": [
        {
          "titulo": "Reglamento 2019/945 · Anexo, partes 16 y 17 · EASA junio 2026",
          "url": "https://www.easa.europa.eu/en/document-library/easy-access-rules/online-publications/easy-access-rules-unmanned-aircraft-systems?erules-id=ERULES-1963177438-17523"
        }
      ]
    },
    {
      "titulo": "ERP y comunicación",
      "contenido": "El plan de respuesta ante emergencias (ERP) organiza cómo limitar consecuencias, alertar y coordinar ayuda. No se confunde con una maniobra individual ni se activa por una receta universal ante cualquier incidencia. Roles, contactos, acceso y criterios de activación deben estar definidos antes de operar.",
      "ejemplo": "Un impacto genera riesgo de incendio. El equipo aplica el ERP, protege a las personas y comunica la información necesaria a los servicios que correspondan.",
      "error_habitual": "Reducir el ERP a pulsar un botón del mando.",
      "pregunta": "¿Qué aporta el ERP además de una maniobra del piloto?",
      "respuesta": "Organización de respuesta, roles, comunicaciones y limitación de consecuencias.",
      "distractores": [
        {
          "texto": "Una autorización para continuar tras cualquier fallo.",
          "motivo": "El ERP gestiona una emergencia, no exime condiciones."
        },
        {
          "texto": "La eliminación de toda responsabilidad.",
          "motivo": "Las responsabilidades siguen existiendo."
        },
        {
          "texto": "La garantía de que nunca habrá daños.",
          "motivo": "El plan busca limitar consecuencias, no prometer su ausencia."
        }
      ],
      "fuente": "sts02",
      "id": "b3-s6",
      "docente": "Pregunta primero: ¿Qué aporta el ERP además de una maniobra del piloto? Después pide una justificación y trabaja este error: Reducir el ERP a pulsar un botón del mando.",
      "fuentes": [
        {
          "titulo": "Reglamento 2019/947 · UAS.STS-02.010/.020/.030 y AMC/GM · EASA junio 2026",
          "url": "https://www.easa.europa.eu/en/document-library/easy-access-rules/online-publications/easy-access-rules-unmanned-aircraft-systems?erules-id=ERULES-1963177438-17399"
        }
      ]
    },
    {
      "titulo": "Cerrar, registrar y aprender",
      "contenido": "Después del vuelo se asegura e inspecciona el UAS, se registra información relevante y se realiza un debriefing. Se identifican los sucesos que deban notificarse y los datos de mantenimiento y de fatiga pertinentes. Los plazos se consultan por tipo de registro y disposición; no se aplica una cifra única a cualquier documento. Para la clasificación de sucesos se consulta la lista aplicable actualizada, incluida la modificación del Reglamento (UE) 2026/1821, sin sustituirla por una lista memorizada de un curso anterior.",
      "ejemplo": "Se detecta una fijación floja al terminar. Se registra y resuelve antes del siguiente vuelo, aunque las imágenes obtenidas hayan sido buenas.",
      "error_habitual": "Confundir éxito del encargo con ausencia de incidencias.",
      "pregunta": "Se detecta una fijación floja al finalizar. ¿Qué procede?",
      "respuesta": "Registrarla, evaluar su causa y resolverla antes de otro vuelo.",
      "distractores": [
        {
          "texto": "Borrar el dato porque la misión terminó.",
          "motivo": "Se pierde una oportunidad de prevenir repetición."
        },
        {
          "texto": "Reutilizarla mientras las imágenes salgan bien.",
          "motivo": "La calidad de imagen no prueba seguridad."
        },
        {
          "texto": "Aplicar cualquier plazo de archivo a todos los registros.",
          "motivo": "El plazo depende del tipo de registro y su disposición."
        }
      ],
      "fuente": "syllabus",
      "id": "b3-s7",
      "docente": "Pregunta primero: Se detecta una fijación floja al finalizar. ¿Qué procede? Después pide una justificación y trabaja este error: Confundir éxito del encargo con ausencia de incidencias.",
      "fuentes": [
        {
          "titulo": "AESA · Syllabus STS, revisión 2 (17/04/2023), actualmente enlazado por AESA",
          "url": "https://www.seguridadaerea.gob.es/sites/default/files/Temario.formaci%C3%B3n.conocimientos.te%C3%B3ricos.STS_v2.pdf"
        },
        {
          "titulo": "Reglamento (UE) 2026/1821 · actualización de la lista de sucesos notificables",
          "url": "https://www.boe.es/buscar/doc.php?id=DOUE-L-2026-81188"
        }
      ]
    },
    {
      "titulo": "Decidir sin recetas universales",
      "contenido": "Las decisiones se apoyan en el escenario, manual, fabricante, coordinaciones y datos reales. OODA significa observar, orientar, decidir y actuar; puede ayudar a organizar el razonamiento. Un indicador aislado, como actividad geomagnética, no establece por sí solo una prohibición universal STS ni garantiza aptitud del GNSS.",
      "ejemplo": "Hay una alerta de posicionamiento pese a un indicador geomagnético bajo. Se atiende al fallo del sistema y al procedimiento; no se ignora por una cifra externa.",
      "error_habitual": "Sustituir una comprobación real por un umbral sin contexto.",
      "pregunta": "El GNSS da una alerta y otro indicador parece favorable. ¿Qué debe guiar la decisión?",
      "respuesta": "El estado real del sistema, sus limitaciones y el procedimiento aplicable.",
      "distractores": [
        {
          "texto": "Solo el indicador favorable.",
          "motivo": "No invalida la alerta del equipo."
        },
        {
          "texto": "Una regla universal K < 4.",
          "motivo": "No constituye por sí sola una condición universal STS."
        },
        {
          "texto": "La expectativa de que se arregle en vuelo.",
          "motivo": "No resuelve un fallo previo al despegue."
        }
      ],
      "fuente": "syllabus",
      "id": "b3-s8",
      "docente": "Pregunta primero: El GNSS da una alerta y otro indicador parece favorable. ¿Qué debe guiar la decisión? Después pide una justificación y trabaja este error: Sustituir una comprobación real por un umbral sin contexto.",
      "fuentes": [
        {
          "titulo": "AESA · Syllabus STS, revisión 2 (17/04/2023), actualmente enlazado por AESA",
          "url": "https://www.seguridadaerea.gob.es/sites/default/files/Temario.formaci%C3%B3n.conocimientos.te%C3%B3ricos.STS_v2.pdf"
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
    "UAS": "Sistema de aeronave no tripulada: aeronave y elementos para controlarla.",
    "UA": "Aeronave no tripulada, como parte del sistema UAS.",
    "C2": "Enlace de mando y control. No confundir con la clase de producto C2.",
    "DRI": "Identificación remota directa: transmisión de datos identificativos del UAS y la operación.",
    "FTS": "Flight Termination System: sistema o medios de terminación del vuelo, distintos del retorno a casa.",
    "RTH": "Return To Home: función de retorno a casa o punto configurado, con límites y ajustes propios.",
    "GNSS": "Sistema global de navegación por satélite; GPS es uno de estos sistemas.",
    "ERP": "Emergency Response Plan: plan de respuesta ante emergencias."
  }
};
