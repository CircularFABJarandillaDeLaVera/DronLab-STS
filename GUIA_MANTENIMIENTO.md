# Mantenimiento manual del refuerzo STS

## Dónde cambiar cada cosa

| Cambio | Archivo |
| --- | --- |
| Explicación, ejemplo, pregunta de control, error y fuentes del bloque N | `bloques/bloqueN/data/bloqueN.json` y su copia de ejecución `bloqueN.js` |
| Banco de preguntas | `bloques/bloqueN/recursos/test/test.json` |
| Tarjetas de repaso | `bloques/bloqueN/recursos/flashcards/flashcards.json` |
| Datos del caso y solución | `bloques/bloqueN/recursos/casos/casos.json` |
| Tarea, entrega y resultado esperado | `bloques/bloqueN/recursos/practicas/practicas.json` |
| Ingeniería, guía y resumen estático | `ingenieria/ingenieria.md`, `profesor-plus.html`, `recursos/chuletas/index.html` dentro del bloque |
| Contenido de los nodos del mapa | `recursos/mapas/index.html`, variable `nodes` |
| Comportamiento de aula, alumno, profesor, test, casos y prácticas | `assets/js/sts-learning.js` |
| Motor del simulacro | `assets/edusdk-exam/exam-engine.js` |
| Vía completa / reducida | `examen-final/exam-config.json` / `exam-config-a2.json` |
| Diseño pedagógico y registro de decisiones | `ingenieria/refuerzo-sts-2026.json`, `ingenieria/registro-revision-sts.json` |

El JSON de diseño es un registro de autoría, no un generador automático. Si cambias una regla, revisa también preguntas, tarjetas, casos, prácticas, mapa y resúmenes para evitar versiones contradictorias. Las páginas de ejecución leen `bloqueN.js` para funcionar con los controles existentes; debe contener el mismo objeto que `bloqueN.json` precedido por `window.DRONLAB_BLOQUE =` y terminado en `;`.

## Ejecutar sin IA

Desde la raíz, con Python instalado:

```console
python -m http.server 8000
```

Abrir `http://localhost:8000/inicio.html`. Los bancos JSON se cargan mediante `fetch`; abrir los HTML como archivos sueltos puede bloquear su lectura. Una vez descargado el proyecto, el núcleo del curso funciona localmente; los enlaces a fuentes oficiales requieren conexión.

## Verificar

```console
python scripts/verificar_sts.py
git diff --check
```

Las pruebas no validan jurídicamente una regla: verifican coherencia, estructura y rutas. Para cambiar un límite, abrir la disposición vigente enlazada, comprobar ámbito y condiciones y registrar la fecha y el apartado. Las preguntas nuevas se etiquetan como propias/adaptadas, nunca como oficiales sin evidencia literal y procedencia comprobada.

## Estados del test y notas

En el repaso del bloque, las respuestas y fallos se mantienen durante esa sesión de página; `Reiniciar` los limpia. Corregir revela explicación y permite un nuevo intento. Cambiar una respuesta oculta su corrección anterior.

Las notas del aula y profesor se guardan en el almacenamiento local del navegador. Las dos vías del simulacro usan identificadores separados para no compartir contador de intentos. No se debe borrar el almacenamiento del navegador para actualizar contenido. Los IDs retenidos permanecen; el registro identifica los retirados.
