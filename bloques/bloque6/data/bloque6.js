window.DRONLAB_BLOQUE = {
  meta: {
    curso: "DronLab STS",
    bloque: 6,
    slug: "bloque6",
    titulo: "Meteorologia",
    subtitulo: "Viento, temperatura, visibilidad, densidad, partes meteorologicos y evaluacion local",
    version: "1.0",
    organismo: "AESA",
    documento: "Syllabus oficial STS",
    edicion: "2",
    fecha: "17/04/2023",
    paginas_relacionadas: "8-10",
    estado: "VALIDADO"
  },
  objetivo: "Interpretar condiciones meteorologicas relevantes para operaciones STS y tomar decisiones Go/No-Go con partes oficiales y evaluacion local.",
  conceptosClave: ["viento","rosa de los vientos","kt","m/s","Beaufort","turbulencia","cumulonimbos","troposfera","precipitaciones","visibilidad","niebla","densidad del aire","METAR","SPECI","TAF","UTC","radar","satelite","microclima","indice K complementario"],
  pantallas: [
    {id:"b6-01",titulo:"Meteorologia aplicada a STS",contenido:"El bloque cubre viento, temperatura, precipitaciones, visibilidad, densidad del aire, efectos regionales, partes meteorologicos y evaluaciones locales para decidir operaciones STS.",docente:"Abrir con la idea Go/No-Go: la meteorologia no se memoriza aislada, se usa para decidir si se vuela."},
    {id:"b6-02",titulo:"Viento y turbulencia",contenido:"El viento se interpreta por la direccion de donde viene. La friccion superficial reduce velocidad y altera direccion cerca del suelo. La turbulencia puede ser convectiva, orografica, por friccion o por obstaculos.",docente:"Usar ejemplos de arboles, edificios, montanas y superficies calientes para aterrizar cada turbulencia."},
    {id:"b6-03",titulo:"Cumulonimbos y entorno cercano al suelo",contenido:"Los cumulonimbos indican zonas criticas con turbulencia severa y corrientes descendentes. Cerca del suelo, hileras de arboles y calentamiento diferencial generan turbulencias peligrosas.",docente:"Subrayar que un parte general puede no mostrar el remolino local que afecta al UAS."},
    {id:"b6-04",titulo:"Temperatura, troposfera y densidad",contenido:"En la troposfera la temperatura disminuye con la altitud de forma estandar. Si aumenta la temperatura o aumenta la altitud, disminuye la densidad del aire y baja la sustentacion generada por las palas.",docente:"Conectar con rendimiento: aire menos denso exige ajustar masa maxima o envolvente de vuelo."},
    {id:"b6-05",titulo:"Visibilidad, bruma y niebla",contenido:"La visibilidad se evalua con objetos de referencia conocidos. La niebla implica visibilidad horizontal inferior a 1000 metros; la bruma no alcanza ese umbral.",docente:"Dato de examen: niebla por debajo de 1 km. Pedir ejemplos de referencias visuales en el terreno."},
    {id:"b6-06",titulo:"Precipitaciones y efectos regionales",contenido:"Lluvia, granizo o nieve afectan electronica y visibilidad. Brisa marina sopla hacia tierra de dia y brisa terrestre hacia el mar de noche. Montanas y desiertos anaden riesgos por sotavento, baja densidad, arena, calor y rachas.",docente:"Provocar el error de brisa marina: de dia no sopla hacia el mar, sopla hacia tierra."},
    {id:"b6-07",titulo:"METAR, SPECI y TAF",contenido:"METAR informa condiciones actuales de aerodromo cada 30 o 60 minutos. SPECI es especial por cambios significativos. TAF es pronostico de aerodromo para periodos de 9 a 30 horas.",docente:"Regla simple: METAR ahora, TAF luego, SPECI cambio significativo."},
    {id:"b6-08",titulo:"UTC, mapas y microclima",contenido:"La aviacion usa UTC/Zulu para interpretar partes. Radar de tormentas, satelite y mapas de superficie ayudan, pero el microclima local puede diferir de aerodromos lejanos.",docente:"Relacionar parte oficial con observacion local: ninguno sustituye por completo al otro."},
    {id:"b6-09",titulo:"STS-01 y STS-02",contenido:"En STS-01 la meteorologia debe permitir mantener contacto visual y las turbulencias urbanas son criticas. En STS-02 la visibilidad horizontal minima de 5 km es critica para observadores.",docente:"Cerrar con decision: si no se mantiene VLOS o si observadores no detectan trafico con 5 km, no se vuela."},
    {id:"b6-10",titulo:"Complementario separado",contenido:"MAE22/ENAIRE puede requerir estacion meteorologica portatil para viento real. MMT9/ENAIRE exige indice K planetario menor que 4. Este contenido es complementario y no se presenta como Syllabus AESA paginas 8-10.",docente:"Mantener trazabilidad separada: ENAIRE/MAE22/MMT9 no son contenido principal AESA 8-10."}
  ],
  recursos: {
    flashcards: "recursos/flashcards/index.html",
    test: "recursos/test/index.html",
    casos: "recursos/casos/index.html",
    practicas: "recursos/practicas/index.html",
    chuletas: "recursos/chuletas/index.html",
    mapa: "recursos/mapas/index.html",
    prompts: "recursos/prompts/prompts-bloque6.md"
  }
};
