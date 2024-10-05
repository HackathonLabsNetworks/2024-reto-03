# Desafío de Inteligencia Artifical (IA) - Asignación 2

## Mejorar la capacitación de colaboradores a través de un indexador de videos

## Declaración de exención de responsabilidad

Esta es una obra de ficción. Los nombres, personajes, lugares y sucesos son producto de la imaginación de los autores o utilizados de manera ficticia. Cualquier parecido con personas reales, vivas o muertas, es mera coincidencia.

## Introducción

Ahora en la segunda asignación del tercer desafío del día, tendrán que hacer nuevamente uso de la **Inteligencia Artificial (IA)** para desplegar una solución que le permita a ***HackathonLabs Networks*** mejorar la capacitación que brinda a sus colaboradores, los cuales están distribuidos a nivel mundial.

## Contexto Empresarial

**Descripción de la empresa:**
***HackathonLabs Networks*** es una empresa líder en la industria tecnológica, la cual es reconocida por sus productos y servicios de vanguardia. Posee una diversa fuerza laboral distribuida en varios países, por lo que ***HackathonLabs Networks*** está comprometida en brindar constantes y variadas oportunidades de capacitación y desarrollo para sus colaboradores.

**Desafío empresarial:** ***HackathonLabs Networks*** ha identificado la necesidad de mejorar la accesibilidad y utilidad de sus videos de capacitación. Los colaboradores han reportado dificultades para navegar a través del contenido de los videos, así como en entender a los diferentes oradores y el acceso a las traducciones. Para abordar esta problemática, ***HackathonLabs Networks*** tiene como objetivo desarrollar una plataforma de capacitación impulsada por IA que mejore la accesibilidad y usabilidad de los videos y como tal, les ha pedido a ustedes se encarguen de hacerlo realidad ya que habrá sustanciales mejoras en el aprendizaje y desempeño de todos los colaboradores.

## Objetivos

Desplegar y mostrar un prototipo de una plataforma de capacitación impulsada por IA para los empleados de ***HackathonLabs Networks*** que incluya las siguientes funcionalidades:

1. **Extraer información significativa de archivos de audio y video utilizando IA de medios**
   - La plataforma debe permitir a los usuarios crear proyectos para indexar y editar videos.
   - La plataforma debe proporcionar una navegación fácil a través del video haciendo clic en el contenido transcrito.
   - La plataforma debe generar transcripciones en tiempo real de los videos subidos.
   - Las transcripciones deben incluir etiquetas de oradores para identificarlos.
2. **Crear nuevos medios a partir de contenido existente utilizando el editor de video basado en IA de medios**
   - La plataforma debe permitir a los usuarios subir videos para editarlos.
     - Debes subir el video `responsible_ai.mp4` a la plataforma.
3. **Traducción al español**
   - La plataforma debe ofrecer traducción en tiempo real del texto transcrito al español.
   - Los usuarios deben ver el texto traducido junto con la transcripción original.
4. **Página de demostración**
   - Crear una página de demostración utilizando el código `index.html`.
   - La página debe mostrar el reproductor de video y la línea de tiempo.
   - La línea de tiempo debe mostrar transcripciones y oradores a medida que hablan.

### Impacto esperado: Al implementar esta plataforma, HackathonLabs Networks espera

- **Mejorar el aprendizaje:** Hacer que los videos de capacitación o videos en general sean más accesibles y fáciles de navegar, mejorando la experiencia de aprendizaje general para los colaboradores.
- **Aumentar el compromiso:** Proporcionar una plataforma más interactiva y fácil de usar, con lo cual se incrementará el compromiso de los colaboradores en cuanto a culminar su plan de capacitación anual.
- **Mejorar el desempeño:** Permitir que los colaboradores comprendan y retengan mejor el contenido de la capacitación, mejorando en última instancia su rendimiento y productividad.

## Criterios de evaluación

Los criterios de evaluación de esta asignación son:

1. **Extraer información significativa de archivos de audio y video utilizando IA de medios**
   1. Mostrar cómo la plataforma permite a los usuarios subir y gestionar videos de capacitación.
   2. Mostrar cómo la solución genera transcripciones en tiempo real del video subido (usen el archivo `responsible_ai.mp4`).
   3. Mostrar cómo las transcripciones incluyen etiquetas de oradores para identificarlos.
2. **Crear nuevos medios a partir de contenido existente utilizando el editor de video basado en IA de medios**
   1. Usen el video `responsible_ai.mp4` para editar y previsualizar un nuevo video.
   2. El nuevo video a previsualizar debe tener una duración entre 20 y 30 segundos **20s < video < 30s**.
   3. El nuevo video a previsualizar debe incluir ambos:
      - Los nombres `Eric Horvitz` y `Natasha Crampton` deben mostrarse en el video y
      - El texto `Loan Application: DENIED` debe mostrarse en el video.
3. **Traducción al español:**
   1. Mostrar cómo la plataforma proporciona traducción en tiempo real de la Información extraida del video al español.
   2. Mostrar cómo la plataforma proporciona traducción en tiempo real del texto transcrito al español.
4. **Página de demostración**
   1. Mostrar la solución mostrando la página web editada usando el `index.html` (pistas en las líneas 41 y 45 del archivo `index.html`). No es necesario modificar el `insight_timeline_interactions.js`, sin embargo, no olvides guardar este archivo en la misma carpeta donde se encuentra el `index.html`.
   2. Mostrar el número de orador y sus transcripciones traducidas al español en la página web.

Demuestre a los jueces cómo la solución cumple con los criterios de evaluación mencionados anteriormente para esta asignación en el siguiente orden:

- 1
- 2
- 3
- 4

### Importante

- Si no completó algún criterio de evaluación, pero completó un criterio de evaluación siguiente, puede mostrar el siguiente criterio para evaluarlo. Por ejemplo, 1, 3, 4
- No se requiere que desplieguen la solución en un servicio web, sino que muestren la página web localmente en su navegador.
- Para la parte 3 y 4 de los `criterios de evaluación`, usen el video `responsible_ai.mp4` o el video renderizado de la parte 2 de los `criterios de evaluación`.
- Puede que necesite o no los recursos de Azure desplegados para completar el desafío.
- Puede usar uno, algunos o incluso reutilizar los mismos recursos de Azure en los desafíos según sea necesario.
- URLs útiles (puede que las necesites o no para completar el desafío)
  - [Azure Portal](https://portal.azure.com/)
  - [Azure AI Speech Studio](https://speech.microsoft.com/)
  - [Azure AI Language Studio](https://language.cognitive.azure.com/)
  - [Azure AI Video Indexer](https://www.videoindexer.ai/)

#### Ánimo, sabemos que ha sido un intenso día lleno de nuevas experiencias y aprendizajes
