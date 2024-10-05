# Desafío de Inteligencia Artifical (IA) - Asignación 3

## Aumentar la retención de clientes e incrementar los ingresos a través del análisis de quejas

## Declaración de exención de responsabilidad

Esta es una obra de ficción. Los nombres, personajes, lugares y sucesos son producto de la imaginación de los autores o utilizados de manera ficticia. Cualquier parecido con personas reales, vivas o muertas, es mera coincidencia.

## Introducción

En la tercera y última asignación del tercer desafío del día, nuevamente harán uso de la **Inteligencia Artificial (IA)** para desplegar una solución que le permita a ***HackathonLabs Networks*** aumentar la retención de clientes e incrementar los ingresos a través del análisis de quejas.

## Contexto Empresarial

**Descripción de la Empresa:**
***HackathonLabs Networks*** es una empresa líder de soluciones tecnológicas innovadoras, comprometida en ofrecer experiencias excepcionales a sus clientes. Con una base de clientes globales, ***HackathonLabs Networks*** busca aprovechar la IA para realizar una comprensión más profunda de las quejas de sus clientes, a fin de mejorar la retención de los mismos.

**Desafío Empresarial:** ***HackathonLabs Networks*** ha identificado la necesidad de comprender mejor los comentarios de sus clientes a partir de quejas que le permitan mejorar la satisfacción y lealtad del cliente. La empresa tiene como objetivo desarrollar una solución impulsada por IA para analizar los datos de quejas, extraer ideas clave y proporcionar recomendaciones accionables que conduzcan a un potencial aumento de los ingresos, así como una reducción de costos de marketing y mejora de la reputación de la marca.

## Objetivos

Desplegar y mostrar un prototipo de una plataforma de análisis de quejas impulsada por IA para ***HackathonLabs Networks*** que permita **ingestar**, **enriquecer**, **proyectar**, **buscar** y **visualizar** datos. La solución debe incluir las siguientes funcionalidades:

1. **Extraer contenido y metadatos del archivo de datos de quejas**
   - Extraer todo el contenido y metadatos del archivo `complains.csv` y almacenarlo en tablas de una cuenta de almacenamiento de Azure.
2. **Enriquecer los datos extraídos con granularidad de enriquecimiento de oraciones**
    - La plataforma debe extraer frases clave del contenido de las quejas y almacenarlas en un campo llamado `hackathon_keyphrases`.
    - La plataforma debe detectar el idioma del contenido de las quejas y almacenarlo en un campo llamado `hackathon_language`.
    - La plataforma debe traducir el contenido de las quejas al español y almacenarlo en un campo llamado `hackathon_translated_text`.
    - La plataforma debe detectar el sentimiento del contenido de las quejas y almacenarlo en un campo llamado `hackathon_sentiment`.
3. La solución debe proporcionar proyecciones de tablas para:
    - `Documents`
    - `Sentences`
    - `Key Phrases`
4. **Debe hacer una búsqueda inteligente que permita**
   1. Buscar por las siguientes entradas:
      - `iata_code`
      - `country`
      - `city`
      - `reviews_text`
      - `hackathon_keyphrases`
      - `hackathon_sentiment`
   2. Ver resultados solo por los siguientes campos:
      - `AzureSearch_DocumentKe`
      - `IATA_code`
      - `country`
      - `city`
      - `hackathon_keyphrases`
      - `hackathon_language`
      - `hackathon_translated_text`
      - `hackathon_sentiment`
      - Ademas, el campo predeterminado de `@search.score` al recuperar datos del explorador de búsqueda en Azure AI Search.

## Impacto Esperado

Al implementar esta plataforma, ***HackathonLabs Networks*** espera:

- **Aumentar la retención de clientes:** Obtener una mejor comprensión de los comentarios de los clientes para abordar sus preocupaciones a fin de mejorar la satisfacción, lo que representará una mayor retención y lealtad de los clientes para lograr una posición competitiva más fuerte en el mercado.
- **Incrementar los ingresos:** Utilizar ideas accionables de las quejas de los clientes para mejorar productos y servicios, potenciando un aumento en los ingresos.
- **Reducir los costos de marketing:** Retener a los clientes existentes es más rentable que adquirir nuevos. Al centrarse en la retención y lealtad, ***HackathonLabs Networks*** podría reducir ciertos gastos de marketing mientras mantiene o aumenta la base de clientes.
- **Mejorar la reputación de la marca:** Las experiencias positivas de los clientes y las altas tasas de retención contribuyen a una reputación de marca más fuerte, atrayendo a nuevos y fomentando la confianza y lealtad entre los existentes.

## Criterios de evaluación

Los criterios de evaluación de esta asignación son:

1. **Muestra qué recursos de Azure utilizo tu equipo para esta asignación.**
2. **Muestra la cuenta de almacenamiento de Azure | explorador de almacenamiento con las proyecciones de Tabla solicitadas**
   - Deben mostrar las Tablas proyectadas enriquecidas de la cuenta de almacenamiento de Azure: `Documents`, `KeyPhrases` y `Sentences`.
3. Visualiza y analiza datos
   1. Muestren los campos del índice de búsqueda de Azure AI que cumplan con los requisitos del objetivo.
   2. Lleven a cabo una consulta de búsqueda `*` en tu índice de búsqueda de Azure AI y muestren los resultados que cumplen con los requisitos del objetivo.

Demuestre a los jueces cómo la solución cumple con los criterios de evaluación mencionados anteriormente para esta asignación en el siguiente orden:

- 1
- 2
- 3.1
- 3.2

### Importante

- Si no completó algún criterio de evaluación, pero completó un criterio de evaluación siguiente, puede mostrar el siguiente criterio para evaluarlo. Por ejemplo, 1, 3.1, 3.2
- No se requiere que desplieguen la solución a un servicio web, sino que muestren la funcionalidad a través del portal de Azure.
- Puede que necesite o no los recursos de Azure desplegados para completar el desafío.
- Puede usar uno, algunos o incluso reutilizar los mismos recursos de Azure en los desafíos según sea necesario.
- URLs útiles (puede que las necesites o no para completar el desafío)
  - [Azure Portal](https://portal.azure.com/)
  - [Azure AI Speech Studio](https://speech.microsoft.com/)
  - [Azure AI Language Studio](https://language.cognitive.azure.com/)
  - [Azure AI Video Indexer](https://www.videoindexer.ai/)

#### A nombre del equipo organizador del hackathonCopa, les felicitamos por su determinación en llegar hasta el final
