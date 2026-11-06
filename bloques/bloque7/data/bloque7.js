window.DRONLAB_BLOQUE = {
  "curso": {
    "id": "dronlab-sts",
    "titulo": "DronLab STS"
  },
  "bloque": {
    "numero": 7,
    "slug": "bloque7",
    "titulo": "Rendimiento de vuelo del UAS",
    "estado": "REFUERZO_PEDAGOGICO"
  },
  "meta": {
    "curso": "DronLab STS",
    "bloque": 7,
    "slug": "bloque7",
    "titulo": "Rendimiento de vuelo del UAS",
    "subtitulo": "Comprobar masa, centrado, energía y límites ambientales con ejemplos calculados.",
    "organismo": "AESA / EASA",
    "paginas_relacionadas": "11",
    "estado": "Revisado · 06/11/2026",
    "version": "2026.11-refuerzo"
  },
  "trazabilidad": {
    "organismo": "AESA / EASA",
    "paginas_relacionadas": "11",
    "estado": "Revisado · 06/11/2026",
    "fuentes": [
      {
        "titulo": "AESA · Syllabus STS, revisión 2 (17/04/2023), actualmente enlazado por AESA",
        "url": "https://www.seguridadaerea.gob.es/sites/default/files/Temario.formaci%C3%B3n.conocimientos.te%C3%B3ricos.STS_v2.pdf"
      }
    ]
  },
  "objetivo": "Comprobar masa, centrado, energía y límites ambientales con ejemplos calculados.",
  "conexion": "Una carga cambia rendimiento y margen de riesgo; conecta con los bloques 5 y 8.",
  "conceptos": [
    "MTOM y masa real",
    "Centro de gravedad y momentos",
    "Equilibrio de palanca",
    "Estabilidad y carga útil",
    "Envolvente y masa por rendimiento",
    "Energía y autonomía",
    "Baterías y seguridad de uso",
    "Verificación tras un cambio"
  ],
  "conceptosClave": [
    "MTOM y masa real",
    "Centro de gravedad y momentos",
    "Equilibrio de palanca",
    "Estabilidad y carga útil",
    "Envolvente y masa por rendimiento",
    "Energía y autonomía",
    "Baterías y seguridad de uso",
    "Verificación tras un cambio"
  ],
  "pantallas": [
    {
      "titulo": "MTOM y masa real",
      "contenido": "MTOM es la masa máxima al despegue especificada para el UAS. La masa real incluye aeronave, batería, fijaciones y carga útil. No se suma la carga por fuera del máximo. Además, las condiciones pueden imponer una masa de despegue limitada por rendimiento menor que la MTOM.",
      "ejemplo": "MTOM 6 kg, aeronave con batería 4,8 kg y carga con soporte 1,4 kg: total 6,2 kg. No cumple el máximo, aunque consiga despegar.",
      "error_habitual": "Tomar la capacidad de elevarse como prueba de cumplimiento.",
      "pregunta": "Con esos datos, ¿qué conclusión corresponde?",
      "respuesta": "La masa real de 6,2 kg supera la MTOM de 6 kg.",
      "distractores": [
        {
          "texto": "La carga no cuenta en la masa total.",
          "motivo": "Sí cuenta, incluido el soporte."
        },
        {
          "texto": "Cumple porque el motor logra elevarla.",
          "motivo": "La capacidad momentánea no cambia el máximo."
        },
        {
          "texto": "La MTOM pasa automáticamente a 6,2 kg.",
          "motivo": "No la redefine el operador por cargar más."
        }
      ],
      "fuente": "syllabus",
      "id": "b7-01",
      "docente": "Pregunta primero: Con esos datos, ¿qué conclusión corresponde? Después pide una justificación y trabaja este error: Tomar la capacidad de elevarse como prueba de cumplimiento.",
      "fuentes": [
        {
          "titulo": "AESA · Syllabus STS, revisión 2 (17/04/2023), actualmente enlazado por AESA",
          "url": "https://www.seguridadaerea.gob.es/sites/default/files/Temario.formaci%C3%B3n.conocimientos.te%C3%B3ricos.STS_v2.pdf"
        }
      ]
    },
    {
      "titulo": "Centro de gravedad y momentos",
      "contenido": "El CG representa el punto de aplicación de la resultante del peso. Su posición depende de la distribución de masas. En un modelo unidimensional, xCG = suma(m × x) / suma(m). Los límites admisibles proceden del diseño y manual de esa aeronave, no de que parezca equilibrada a simple vista.",
      "ejemplo": "Masas de 2 kg a -0,10 m y 1 kg a +0,20 m dan momentos -0,20 y +0,20 kg·m: xCG = 0/3 = 0 m. Es un modelo didáctico; no autoriza una instalación real.",
      "error_habitual": "Mirar solo la masa total y olvidar dónde está situada.",
      "pregunta": "En el ejemplo, ¿dónde queda xCG?",
      "respuesta": "En 0 m respecto a la referencia elegida.",
      "distractores": [
        {
          "texto": "En +0,10 m por sumar distancias.",
          "motivo": "Los momentos se ponderan por masa."
        },
        {
          "texto": "En +0,30 m.",
          "motivo": "No se suman posiciones sin ponderar."
        },
        {
          "texto": "Siempre en el motor.",
          "motivo": "La ubicación depende de toda la distribución."
        }
      ],
      "fuente": "syllabus",
      "id": "b7-02",
      "docente": "Pregunta primero: En el ejemplo, ¿dónde queda xCG? Después pide una justificación y trabaja este error: Mirar solo la masa total y olvidar dónde está situada.",
      "fuentes": [
        {
          "titulo": "AESA · Syllabus STS, revisión 2 (17/04/2023), actualmente enlazado por AESA",
          "url": "https://www.seguridadaerea.gob.es/sites/default/files/Temario.formaci%C3%B3n.conocimientos.te%C3%B3ricos.STS_v2.pdf"
        }
      ]
    },
    {
      "titulo": "Equilibrio de palanca",
      "contenido": "Para equilibrar dos masas bajo la misma gravedad respecto a un apoyo ideal se igualan momentos: m1 × d1 = m2 × d2. Se conserva la unidad de distancia en ambos lados. La imagen aportada sirve para este modelo de estática, no para establecer por sí sola el CG válido de un UAS.",
      "ejemplo": "100 kg a 0,25 m equilibran 25 kg a 1 m: 100 × 0,25 = 25 × 1. Si el brazo derecho se reduce a 0,5 m, la masa equivalente sería 50 kg.",
      "error_habitual": "Responder 100 kg por simetría visual sin comparar brazos.",
      "pregunta": "¿Qué masa a 1 m equilibra 100 kg situados a 25 cm del apoyo ideal?",
      "respuesta": "25 kg.",
      "distractores": [
        {
          "texto": "100 kg.",
          "motivo": "Los brazos no tienen igual longitud."
        },
        {
          "texto": "400 kg.",
          "motivo": "Invierte la relación entre masa y brazo."
        },
        {
          "texto": "2,5 kg.",
          "motivo": "25 cm equivalen a 0,25 m, no a 0,025 m."
        }
      ],
      "fuente": "syllabus",
      "id": "b7-03",
      "docente": "Pregunta primero: ¿Qué masa a 1 m equilibra 100 kg situados a 25 cm del apoyo ideal? Después pide una justificación y trabaja este error: Responder 100 kg por simetría visual sin comparar brazos.",
      "fuentes": [
        {
          "titulo": "AESA · Syllabus STS, revisión 2 (17/04/2023), actualmente enlazado por AESA",
          "url": "https://www.seguridadaerea.gob.es/sites/default/files/Temario.formaci%C3%B3n.conocimientos.te%C3%B3ricos.STS_v2.pdf"
        }
      ]
    },
    {
      "titulo": "Estabilidad y carga útil",
      "contenido": "Una carga lateral o desplazable modifica el CG, el reparto de esfuerzos y la controlabilidad. En ala fija, estar fuera del límite delantero o trasero tiene consecuencias distintas; se consultan límites y procedimiento del modelo. La fijación debe impedir movimiento y desprendimiento durante toda la operación.",
      "ejemplo": "Una cámara queda por debajo de la MTOM pero se desplaza en su soporte. La masa es admisible; el centrado y la fijación no están resueltos.",
      "error_habitual": "Creer que respetar la MTOM resuelve todo el balance.",
      "pregunta": "La masa cumple MTOM, pero el soporte permite deslizarse a la cámara. ¿Está resuelta la configuración?",
      "respuesta": "No; hay que asegurar la carga y comprobar el centrado.",
      "distractores": [
        {
          "texto": "Sí, la MTOM es la única condición.",
          "motivo": "También importan CG, fijación y límites."
        },
        {
          "texto": "Sí, si se corrige con el mando.",
          "motivo": "El piloto no sustituye un anclaje adecuado."
        },
        {
          "texto": "Sí, si la cámara es pequeña.",
          "motivo": "Una carga pequeña también puede desplazarse."
        }
      ],
      "fuente": "syllabus",
      "id": "b7-04",
      "docente": "Pregunta primero: La masa cumple MTOM, pero el soporte permite deslizarse a la cámara. ¿Está resuelta la configuración? Después pide una justificación y trabaja este error: Creer que respetar la MTOM resuelve todo el balance.",
      "fuentes": [
        {
          "titulo": "AESA · Syllabus STS, revisión 2 (17/04/2023), actualmente enlazado por AESA",
          "url": "https://www.seguridadaerea.gob.es/sites/default/files/Temario.formaci%C3%B3n.conocimientos.te%C3%B3ricos.STS_v2.pdf"
        }
      ]
    },
    {
      "titulo": "Envolvente y masa por rendimiento",
      "contenido": "La envolvente reúne condiciones y límites de operación. Tipo de aeronave, masa, densidad, viento, temperatura y estado de sistemas modifican el margen disponible. Respetar un máximo de masa no garantiza que esa masa sea adecuada para el ambiente y la misión.",
      "ejemplo": "Un multirrotor caliente en altura requiere casi toda la potencia en estacionario. Se recupera con seguridad y se revisa la configuración; no se establece un porcentaje universal de potencia admisible.",
      "error_habitual": "Convertir un dato ilustrativo en límite universal.",
      "pregunta": "Un UAS queda sin margen de potencia para maniobrar. ¿Qué criterio es correcto?",
      "respuesta": "Recuperar de forma segura y revisar masa, ambiente y límites.",
      "distractores": [
        {
          "texto": "Continuar porque aún mantiene altura.",
          "motivo": "Mantener altura no demuestra margen para contingencias."
        },
        {
          "texto": "Aumentar la carga para estabilizarlo.",
          "motivo": "Puede reducir más el margen."
        },
        {
          "texto": "Aplicar un porcentaje de otro modelo como autorización.",
          "motivo": "Los límites dependen del UAS y su manual."
        }
      ],
      "fuente": "syllabus",
      "id": "b7-05",
      "docente": "Pregunta primero: Un UAS queda sin margen de potencia para maniobrar. ¿Qué criterio es correcto? Después pide una justificación y trabaja este error: Convertir un dato ilustrativo en límite universal.",
      "fuentes": [
        {
          "titulo": "AESA · Syllabus STS, revisión 2 (17/04/2023), actualmente enlazado por AESA",
          "url": "https://www.seguridadaerea.gob.es/sites/default/files/Temario.formaci%C3%B3n.conocimientos.te%C3%B3ricos.STS_v2.pdf"
        }
      ]
    },
    {
      "titulo": "Energía y autonomía",
      "contenido": "La energía nominal permite comparar baterías, pero la energía utilizable y la autonomía dependen de carga, estado, temperatura, viento y consumo. No se extrapola un dato comercial como duración garantizada. Para un consumo constante ideal, tiempo(h) = energía(Wh) / potencia(W), antes de reservas y pérdidas.",
      "ejemplo": "111 Wh / 222 W = 0,5 h = 30 min teóricos. Una reserva energética del ejemplo del 20 % deja 24 min en ese modelo ideal, sin prometer ese resultado en vuelo real.",
      "error_habitual": "Confundir un cálculo ideal con plan de vuelo seguro.",
      "pregunta": "Con 111 Wh y consumo ideal de 222 W, ¿qué tiempo se obtiene antes de reservas?",
      "respuesta": "30 minutos teóricos.",
      "distractores": [
        {
          "texto": "2 horas.",
          "motivo": "La división se ha invertido."
        },
        {
          "texto": "111 minutos garantizados.",
          "motivo": "Wh no son minutos y faltan condiciones."
        },
        {
          "texto": "30 minutos reales en cualquier ambiente.",
          "motivo": "El cálculo ideal no garantiza autonomía real."
        }
      ],
      "fuente": "syllabus",
      "id": "b7-06",
      "docente": "Pregunta primero: Con 111 Wh y consumo ideal de 222 W, ¿qué tiempo se obtiene antes de reservas? Después pide una justificación y trabaja este error: Confundir un cálculo ideal con plan de vuelo seguro.",
      "fuentes": [
        {
          "titulo": "AESA · Syllabus STS, revisión 2 (17/04/2023), actualmente enlazado por AESA",
          "url": "https://www.seguridadaerea.gob.es/sites/default/files/Temario.formaci%C3%B3n.conocimientos.te%C3%B3ricos.STS_v2.pdf"
        }
      ]
    },
    {
      "titulo": "Baterías y seguridad de uso",
      "contenido": "Se identifican química, tensión, capacidad y tasa C. La corriente asociada a una tasa es I = C × Ah; no autoriza superar lo permitido por fabricante, cargador o sistema. Se usan equipos compatibles, se inspecciona la batería y se siguen las instrucciones de carga, almacenamiento y retirada de unidades dañadas.",
      "ejemplo": "Para una batería de 5 Ah, 2C corresponde aritméticamente a 10 A. Solo se usa ese régimen si está permitido para esa función y batería. No se intenta recuperar una unidad hinchada.",
      "error_habitual": "Tomar una tasa de descarga como tasa de carga o intervenir una batería dañada.",
      "pregunta": "¿Qué corriente representa 2C en una batería de 5 Ah?",
      "respuesta": "10 A, sujeto a que ese régimen esté permitido para el uso considerado.",
      "distractores": [
        {
          "texto": "2 A siempre.",
          "motivo": "La tasa se multiplica por la capacidad Ah."
        },
        {
          "texto": "2 V.",
          "motivo": "C-rate no expresa voltaje."
        },
        {
          "texto": "Permiso para cargar cualquier batería a 10 A.",
          "motivo": "La aritmética no sustituye la especificación del fabricante."
        }
      ],
      "fuente": "syllabus",
      "id": "b7-07",
      "docente": "Pregunta primero: ¿Qué corriente representa 2C en una batería de 5 Ah? Después pide una justificación y trabaja este error: Tomar una tasa de descarga como tasa de carga o intervenir una batería dañada.",
      "fuentes": [
        {
          "titulo": "AESA · Syllabus STS, revisión 2 (17/04/2023), actualmente enlazado por AESA",
          "url": "https://www.seguridadaerea.gob.es/sites/default/files/Temario.formaci%C3%B3n.conocimientos.te%C3%B3ricos.STS_v2.pdf"
        }
      ]
    },
    {
      "titulo": "Verificación tras un cambio",
      "contenido": "Cambiar batería, hélice, soporte, sensor o software puede alterar masa, CG, consumo o funciones. Se comprueban compatibilidad, límites y documentación de la configuración antes de operar. No se plantea una conexión de baterías ni modificación como experimento de vuelo.",
      "ejemplo": "Se cambia a una batería más pesada para ganar energía. Se recalculan masa y CG y se revisa aprobación; el aumento de Wh no asegura más autonomía.",
      "error_habitual": "Mejorar una cifra aislada ignorando las demás.",
      "pregunta": "Se propone una batería más pesada. ¿Qué comprobación es necesaria?",
      "respuesta": "Compatibilidad, masa total, CG y efecto en el rendimiento.",
      "distractores": [
        {
          "texto": "Solo comparar mAh.",
          "motivo": "Ignora tensión, masa y compatibilidad."
        },
        {
          "texto": "Aprobarla porque cabe en el alojamiento.",
          "motivo": "Encajar físicamente no demuestra aptitud."
        },
        {
          "texto": "Despegar para averiguar si funciona.",
          "motivo": "La verificación previa no se sustituye por un ensayo improvisado."
        }
      ],
      "fuente": "syllabus",
      "id": "b7-08",
      "docente": "Pregunta primero: Se propone una batería más pesada. ¿Qué comprobación es necesaria? Después pide una justificación y trabaja este error: Mejorar una cifra aislada ignorando las demás.",
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
    "MTOM": "Masa máxima al despegue. Es un límite, no la masa real que lleva necesariamente cada misión.",
    "CG": "Centro de gravedad: punto de aplicación de la resultante del peso."
  }
};
