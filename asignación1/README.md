# Desafío de Inteligencia Artifical (IA) - Asignación 1

## Mejorar la satisfacción y retención del cliente a través del Servicio al Cliente

## Declaración de exención de responsabilidad

Esta es una obra de ficción. Los nombres, personajes, lugares y sucesos son producto de la imaginación de los autores o utilizados de manera ficticia. Cualquier parecido con personas reales, vivas o muertas, es mera coincidencia.

## Introducción

Su tercer desafío del día consta de 3 asignaciones, en la primera de ellas, tendrán que hacer uso de la **Inteligencia Artificial (IA)** para desplegar una solución que le permita a ***HackathonLabs Networks*** mejorar la atención a sus 8,192 clientes a nivel mundial, los cuales son atendidos desde la Ciudad de Panamá, en su Centro de Operaciones bajo una cobertura 24x7.

## Contexto empresarial

**Descripción de la empresa:**
***HackathonLabs Networks*** es una empresa de tecnología que se especializa en soluciones de software innovadoras, siendo el soporte al cliente en diferentes idiomas, una área de oportunidad para seguir adelante con sus planes de expansión a nivel mundial.

**Desafío empresarial**:
***HackathonLabs Networks*** ha identificado una necesidad crítica de mejorar sus servicio de soporte al cliente. La empresa ha recibido constantes quejas en las cuales sus cliente indican que las barreras lingüísticas y los problemas de comunicación están afectando la calidad del soporte. Para abordar esta problemática, ***HackathonLabs Networks*** tiene como objetivo desarrollar una herramienta impulsada por IA que además de mejorar la comunicación, también mejore la experiencia del cliente, lo cual permitirá que los clientes se sientan mejor atendidos y por lo tanto deseen seguir adquiriendo los servicios ***HackathonLabs Networks***.

## Objetivos

Desplegar y mostrar una herramienta impulsada por IA para el equipo de soporte al cliente de ***HackathonLabs Networks*** que incluya las siguientes funcionalidades:

1. **Identificación de idioma en tiempo real:**
   - La herramienta debe ser capaz de detectar el idioma en el que los clientes están hablando en tiempo real.
   - Deben cargar el archivo `booking_request.wav` en la herramienta y se debe ver el texto con el idioma identificado. Los clientes suelen contactar al equipo de soporte de ***HackathonLabs Networks*** en los siguientes idiomas:
     - Árabe (Arabia Saudita)
     - Chino (Mandarín, simplificado)
     - Inglés (Reino Unido)
     - Francés (Francia)
     - Alemán (Alemania)
     - Japonés (Japón)
     - Coreano (Corea)
     - Rumano (Rumania)
     - Español (España)
     - Ucraniano (Ucrania)
   - Demostrar cómo la herramienta puede detectar con precisión el idioma en el que el cliente está hablando en tiempo real desde el archivo de audio `booking_request.wav`.
     - Debe mostrar claramente la transcripción del idioma detectado.
     - Si hay diferentes idiomas en el archivo de audio, debe mostrar todos los idiomas detectados divididos por párrafos. Por ejemplo,
       - `Árabe (Arabia Saudita)`
       - Transcripción en el idioma árabe
       - `Chino (Mandarín, simplificado)`
       - Transcripción en el idioma chino
       - y así sucesivamente...
2. **Transcripción y traducción en tiempo real:**
   - Basado en el idioma detectado del archivo `booking_request.wav` de la parte 1, traduzcan cada archivo de audio en el directorio `individual_audios` al español.
   - La herramienta debe proporcionar transcripción en tiempo real de las conversaciones de los clientes en el idioma del texto original.
   - También debe ofrecer traducción en tiempo real del texto transcrito al español.
3. **Bot de respuestas a preguntas personalizadas:**
   - La herramienta debe incluir un bot de **respuestas a preguntas** que los agentes de soporte al cliente puedan usar para encontrar rápidamente respuestas a preguntas frecuentes del archivo `cm_faq.docx`.
4. **Evaluación de Pronunciación:**
   - La herramienta debe evaluar la pronunciación de los agentes de soporte al cliente durante las conversaciones.

### Impacto esperado: Al implementar esta herramienta, HackathonLabs Networks espera

- **Mejorar la comunicación**: Eliminar las barreras lingüísticas, permitiendo que los agentes de soporte al cliente comprendan y respondan a las consultas de los clientes de manera más efectiva.
- **Mejorar la satisfacción del cliente**: Proporcionar una experiencia de soporte más fluida y eficiente, lo que lleva a una mayor satisfacción del cliente.
- **Aumentar ingresos**: Los clientes bien atendidos son más propensos a ser leales a la marca y como tal tienden a adquirir más servicios con lo cual se impulsa el aumento de los ingresos.

## Criterios de evaluación

Los criterios de evaluación de esta asignación son:

1. **Identificación de idioma en tiempo real:**
   1. Demostrar cómo la solución detecta con precisión el idioma y escribe la transcripción del audio del cliente en tiempo real desde el archivo de audio `booking_request.wav`.
       - Debe seguir el formato:
         - Idioma detectado
         - Transcripción. Por ejemplo,
           - `Árabe (Arabia Saudita)`
           - Transcripción del idioma árabe
           - `Chino (Mandarín, simplificado)`
           - Transcripción del idioma chino
           - y así sucesivamente...
           - Nota que los idiomas mencionados (Árabe y Chino) son solo para ejemplificar qué idiomas podrían o no estar en el audio. Tu asignación es detectar el idioma correcto.
2. **Transcripción y traducción en tiempo real:**
   1. Demostrar cómo la solución proporciona transcripción en tiempo real del texto original de cada archivo de audio en el directorio `individual_audios`.
   2. Demostrar cómo la solución proporciona traducción en tiempo real de cada archivo de audio en el directorio `individual_audios` al español.
3. **Bot de respuestas a preguntas personalizadas:**
   1. El bot debe ser capaz de entender consultas en lenguaje natural y proporcionar respuestas precisas y relevantes. El bot no debe generar respuestas, sino responderlas tal como están escritas en el archivo `cm_faq.docx`.
   2. Cuando el bot no sepa la respuesta, debe responder con el siguiente mensaje: `No tengo la respuesta a esa pregunta. Por favor, contacta al soporte al cliente para más asistencia.`
   3. Cuando se le pregunte al bot, `holis`, `que xopa`, `amigo`, debe responder con el siguiente mensaje: `Hola fren 🤙, ¿en qué puedo ayudarte hoy?`
4. **Evaluación de pronunciación:**
   1. Demostrar cómo la solución puede evaluar la pronunciación de los agentes de soporte al cliente hablando durante una conversación subiendo el archivo de audio `pronunciation_assessment`.
   2. La solución debe identificar errores como malas pronunciaciones, pausas inesperadas, pausas faltantes y proporcionar una puntuación a la pronunciación para mostrar a los agentes dónde mejorar.

Demuestre a los jueces cómo la solución cumple con los criterios de evaluación mencionados anteriormente para esta asignación en el siguiente orden:

- 1
- 2
- 3.1
- 3.2
- 3.3
- 4

### Importante

- Si no completó algún criterio de evaluación, pero completó un criterio de evaluación siguiente, puede mostrar el siguiente criterio para evaluarlo. Por ejemplo, 1, 2, 3.3, 4
- Tenga en cuenta que cada objetivo debe demostrarse por separado desde diferentes pestañas en su navegador web.
- No se requiere crear una solución única, sino demostrar cada objetivo y criterio de evaluación por separado en diferentes pestañas del navegador web.
- No se requiere desplegar la solución en un servicio web.
- Puede que necesite o no los recursos de Azure desplegados para completar el desafío.
- Puede usar uno, algunos o incluso reutilizar los mismos recursos de Azure en los desafíos según sea necesario.
- URLs útiles (puede que las necesites o no para completar el desafío)
  - [Azure Portal](https://portal.azure.com/)
  - [Azure AI Speech Studio](https://speech.microsoft.com/)
  - [Azure AI Language Studio](https://language.cognitive.azure.com/)
  - [Azure AI Video Indexer](https://www.videoindexer.ai/)
