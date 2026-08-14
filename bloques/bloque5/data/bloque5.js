window.DRONLAB_BLOQUE = {
  meta: {
    curso: "DronLab STS",
    bloque: 5,
    slug: "bloque5",
    titulo: "Conocimientos generales del UAS",
    subtitulo: "Etiquetas C5/C6, FTS, geocaging, enlace C2 y baterias",
    version: "1.0",
    organismo: "AESA",
    documento: "Syllabus oficial STS",
    edicion: "2",
    fecha: "17/04/2023",
    paginas_relacionadas: "7-8",
    estado: "VALIDADO"
  },
  objetivo: "Comprender los requisitos tecnicos de las clases C5 y C6, los sistemas criticos de seguridad y la configuracion basica de baterias aplicables a escenarios STS.",
  conceptosClave: ["C5","C6","geoconsciencia C3","alertas C2","FTS","geocaging","modo lento 5 m/s","velocidad C6 50 m/s","altura","velocidad","posicion geografica","baterias en serie","baterias en paralelo"],
  pantallas: [
    {id:"b5-01",titulo:"Mapa tecnico del Bloque 5",contenido:"El bloque estudia conocimientos generales del UAS para STS: etiquetas C5 y C6, alertas de enlace C2, FTS, geocaging y parametros de baterias.",docente:"Abrir conectando el bloque con la pregunta de examen: que requisito tecnico aplica a cada clase y por que protege el volumen operacional."},
    {id:"b5-02",titulo:"Etiquetas C5 y C6",contenido:"C5 y C6 son marcados tecnicos obligatorios para operar escenarios estandar europeos. Ambos deben cumplir geoconsciencia equivalente a C3 y proporcionar alertas de degradacion o perdida del enlace C2.",docente:"Insistir en que C5/C6 no son nombres comerciales: son requisitos tecnicos ligados al escenario."},
    {id:"b5-03",titulo:"Clase C5 para STS-01",contenido:"La clase C5 se asocia a STS-01. Debe tener configuracion distinta de ala fija salvo si esta anclado, modo de baja velocidad limitado a 5 m/s, informacion de altura, FTS independiente de la controladora y dispositivo para reducir energia de impacto.",docente:"Dato critico: modo lento 5 m/s e independencia del FTS respecto a la controladora de vuelo."},
    {id:"b5-04",titulo:"Clase C6 para STS-02",contenido:"La clase C6 se asocia a STS-02. La velocidad en tierra en vuelo nivelado no debe superar 50 m/s y el piloto debe recibir altura, velocidad y posicion geografica.",docente:"Contrastar con C5: C6 admite operacion BVLOS con telemetria mas completa y limite de 50 m/s."},
    {id:"b5-05",titulo:"FTS como ultima barrera",contenido:"El Flight Termination System finaliza el vuelo de forma segura e inmediata. En C5 debe ser independiente de la controladora de vuelo para evitar que el UAS abandone el volumen operacional si se pierde el control.",docente:"Usar la pildora del freno de emergencia: debe funcionar aunque falle lo demas."},
    {id:"b5-06",titulo:"Geocaging y geoconsciencia",contenido:"La geoconsciencia avisa; el geocaging impide fisicamente que la aeronave traspase los limites de un volumen de espacio aereo preconfigurado.",docente:"Provocar el error: geoconsciencia no confina, geocaging si."},
    {id:"b5-07",titulo:"Enlace C2 y consciencia situacional",contenido:"El enlace C2 une estacion y aeronave. Las alertas sobre degradacion o perdida del C2 permiten al piloto anticipar una perdida de control.",docente:"Relacionar C2 con decision temprana: sin alerta, el piloto llega tarde."},
    {id:"b5-08",titulo:"Baterias: parametros y configuracion",contenido:"Ah expresa capacidad, la tension expresa voltaje y los ratios de carga/descarga condicionan uso seguro. En serie se suman voltajes; en paralelo se suman capacidades.",docente:"Regla mnemotecnica: Serie suma Voltios; Paralelo suma Amperios."},
    {id:"b5-09",titulo:"Comparativa STS-01 / STS-02",contenido:"C5/STS-01: no ala fija salvo anclado, 5 m/s en modo lento, altura y reduccion de energia con paracaidas u otro dispositivo. C6/STS-02: hasta 50 m/s, altura, velocidad y posicion geografica, con confinamiento por geocaging.",docente:"Cerrar con una tabla oral C5 frente a C6 y pedir al alumno que justifique cada diferencia."}
  ],
  recursos: {
    flashcards: "recursos/flashcards/index.html",
    test: "recursos/test/index.html",
    casos: "recursos/casos/index.html",
    practicas: "recursos/practicas/index.html",
    chuletas: "recursos/chuletas/index.html",
    mapa: "recursos/mapas/index.html",
    prompts: "recursos/prompts/prompts-bloque5.md"
  }
};
