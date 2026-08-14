window.DRONLAB_BLOQUE = {
  meta: {
    curso: "DronLab STS",
    bloque: 7,
    slug: "bloque7",
    titulo: "Rendimiento de vuelo del UAS",
    subtitulo: "MTOM, envolvente de operacion, centro de gravedad, equilibrio de masas y carga util",
    version: "1.0",
    organismo: "AESA",
    documento: "Syllabus oficial STS",
    edicion: "2",
    fecha: "17/04/2023",
    paginas_relacionadas: "11",
    estado: "VALIDADO"
  },
  objetivo: "Mantener el UAS dentro de su envolvente segura comprendiendo MTOM, centro de gravedad, carga util y aseguramiento pre-vuelo.",
  conceptosClave: ["MTOM","envolvente de operacion","centro de gravedad","CG","equilibrio de masas","carga util","payload","longitudinal","lateral","vertical","alabeo","cabeceo","guinada","fijacion","50 m/s C6","5 m/s C5","complementario MME8"],
  pantallas: [
    {id:"b7-01",titulo:"Rendimiento de vuelo del UAS",contenido:"El bloque estudia MTOM, envolvente de operacion, centro de gravedad, equilibrio de masas, carga util y aseguramiento de componentes desmontables.",docente:"Abrir con una idea sencilla: rendimiento seguro no es que el dron pueda levantar algo, sino que siga dentro de limites de fabricante."},
    {id:"b7-02",titulo:"MTOM como limite estructural",contenido:"La Masa Maxima al Despegue es una limitacion estructural absoluta definida por el fabricante e incluye aeronave, bateria y carga util. Superarla compromete chasis, motores y helices.",docente:"Repetir el error clave: la carga util no se suma por fuera de la MTOM; forma parte de ella."},
    {id:"b7-03",titulo:"Envolvente de operacion",contenido:"La envolvente de operacion es el rango de peso, velocidad y altitud dentro del cual el UAS opera con seguridad garantizada. Exceso de peso, viento excesivo, IMU mal calibrada o hielo en palas pueden sacar al UAS de esa envolvente.",docente:"Pedir al alumno que clasifique factores: peso, viento, calibracion y hielo."},
    {id:"b7-04",titulo:"Centro de gravedad",contenido:"El CG es el punto imaginario donde se concentra la masa total del UAS y sobre el que rotan los tres ejes: longitudinal, lateral y vertical.",docente:"Unir vocabulario y eje: alabeo longitudinal, cabeceo lateral, guinada vertical."},
    {id:"b7-05",titulo:"CG fuera de limites",contenido:"Un CG desplazado provoca inestabilidad, posible incontrolabilidad y fatiga prematura de motores que trabajan en exceso para compensar el desequilibrio.",docente:"Usar el caso del payload lateral: el dron no solo pesa mas, tambien se desequilibra."},
    {id:"b7-06",titulo:"Carga util y certificacion",contenido:"Camaras, sensores o sistemas de dispersion alteran peso y centrado. Cualquier accesorio modifica el equilibrio original y requiere nueva verificacion del CG.",docente:"Combatir la frase 'tiene potencia suficiente': potencia no corrige certificacion ni centrado."},
    {id:"b7-07",titulo:"Aseguramiento de la carga",contenido:"La carga debe fijarse con sistemas mecanicos o quimicos que impidan desprendimiento o desplazamiento en maniobras bruscas. Antes del despegue se verifican todos los componentes desmontables.",docente:"Diferenciar fijar de pegar de cualquier manera: debe resistir tensiones sin deformacion."},
    {id:"b7-08",titulo:"STS-01 y STS-02",contenido:"En STS-01/C5 el rendimiento se centra en baja velocidad hasta 5 m/s para que funcionen dispositivos de reduccion de energia. En STS-02/C6 incluye velocidades de hasta 50 m/s en horizontal, con mayor energia cinetica.",docente:"Comparar energia: a mas masa y velocidad, mas impacto potencial."},
    {id:"b7-09",titulo:"Rendimiento de vuelo del UAS y envolvente",contenido:"Baja densidad por calor o altitud reduce rendimiento de motores y puede obligar a volar por debajo de MTOM para mantener la envolvente segura.",docente:"Conectar con el escenario de alta montana y calor: si exige 90% de potencia en estacionario, hay que aterrizar."},
    {id:"b7-10",titulo:"Complementario separado",contenido:"MME8/ENAIRE describe limitacion artificial por software/geocaging. STS-ES-01NE exige masa inferior a 10 kg y STS-ES-02NE inferior a 25 kg para drones nacionales sin marcado de clase. Este contenido es complementario y no se presenta como Syllabus AESA pagina 11.",docente:"Mantener trazabilidad separada: MME8 y masas STS-ES nacionales no son contenido principal AESA pagina 11."}
  ],
  recursos: {
    flashcards: "recursos/flashcards/index.html",
    test: "recursos/test/index.html",
    casos: "recursos/casos/index.html",
    practicas: "recursos/practicas/index.html",
    chuletas: "recursos/chuletas/index.html",
    mapa: "recursos/mapas/index.html",
    prompts: "recursos/prompts/prompts-bloque7.md"
  }
};
