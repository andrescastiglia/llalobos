"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaExternalLinkAlt } from "react-icons/fa";

const tabs = [
  {
    id: "cartaorganica",
    name: "CARTA ORGÁNICA",
    content: `Del Partido La Libertad Avanza - Seccional Municipal de Lobos

PREÁMBULO
En el marco de la Constitución de la Nación Argentina, la Ley de Partidos Políticos y la normativa vigente en la Provincia de Buenos Aires, el Partido La Libertad Avanza, con personería a nivel nacional, se constituye en el Municipio de Lobos para representar y defender los intereses de la comunidad. Este documento establece la organización, principios, fines y funcionamiento interno del partido, a fin de obtener la personería jurídica y actuar con transparencia, participación democrática y compromiso social en el ámbito municipal.

ARTÍCULO 1 - DENOMINACIÓN Y DOMICILIO
El partido se denomina "Partido La Libertad Avanza - Seccional Municipal de Lobos".
Su domicilio legal se establece en Profesor Pato Luis Lacoste 59, Lobos, Provincia de Buenos Aires.

ARTÍCULO 2 - OBJETIVOS Y FINES
El Partido tiene como objetivos:
a) Representar y defender los derechos e intereses de la ciudadanía de Lobos.
b) Promover políticas públicas orientadas al desarrollo social, económico y cultural.
c) Fomentar la participación activa de los ciudadanos en la vida política y en la toma de decisiones.
d) Actuar en conformidad con los principios democráticos, la transparencia y la justicia social.
e) Colaborar con la estructura nacional, manteniendo autonomía en el ámbito municipal.

ARTÍCULO 3 - PRINCIPIOS FUNDAMENTALES
El Partido se regirá por los siguientes principios:
a) Democracia interna, garantizando la participación y el debate plural.
b) Transparencia y rendición de cuentas en la gestión de recursos y toma de decisiones.
c) Respeto irrestricto a los derechos humanos y la equidad social.
d) Compromiso con el desarrollo sustentable, la educación y la cultura.
e) Inclusión, diversidad y apertura a todos los sectores de la sociedad.

ARTÍCULO 4 - AFILIACIÓN Y CONDICIONES DE MIEMBROS
Podrán ser miembros del Partido todas aquellas personas que compartan sus principios y objetivos.
El ingreso de afiliados se regirá por un reglamento interno que detalle derechos, deberes y procedimientos de incorporación.
Se promoverá la participación activa de los afiliados en los órganos de decisión y en las actividades del Partido.

ARTÍCULO 5 - ESTRUCTURA ORGANIZATIVA
La organización del Partido se conforma de los siguientes órganos:
a) Asamblea General: Máximo órgano de decisión, integrado por todos los afiliados con derecho a voto.
b) Comité Ejecutivo: Órgano de coordinación y representación, compuesto por 3 miembros elegidos democráticamente.
c) Consejos o Seccionales Locales: Instancias de representación en barrios o zonas del municipio, encargadas de canalizar demandas y propuestas ciudadanas.
d) Comisiones Permanentes: Áreas de trabajo específicas (por ejemplo, economía, educación, medio ambiente) que colaboren en el diseño y evaluación de políticas.

ARTÍCULO 6 - FUNCIONES DE LOS ÓRGANOS DE REPRESENTACIÓN
Asamblea General:
Aprueba el programa y las políticas del Partido.
Elige y remueve integrantes del Comité Ejecutivo.
Aprueba reformas a la presente Carta Orgánica.

Comité Ejecutivo:
Representa al Partido ante autoridades locales, provinciales y nacionales.
Coordina la implementación del programa y supervisa las actividades del Partido.
Administra y rinde cuentas sobre el uso de los recursos del Partido.

Consejos o Seccionales Locales:
Recogen y transmiten las inquietudes y propuestas de la comunidad.
Actúan como vínculo entre la ciudadanía y los órganos de dirección del Partido.

ARTÍCULO 7 - REGIMEN DE ASAMBLEAS Y ELECCIONES INTERNAS
Las asambleas generales se celebrarán de forma periódica y podrán convocarse de manera extraordinaria cuando lo requiera el interés del Partido.
Las elecciones internas se realizarán mediante sufragio directo, libre, secreto y obligatorio para los cargos que correspondan.
Se fomentará el debate interno y la renovación periódica de cargos, garantizando la participación de todos los afiliados.

ARTÍCULO 8 - FINANCIAMIENTO Y RENDICIÓN DE CUENTAS
El financiamiento del Partido se obtendrá exclusivamente de fuentes lícitas, de acuerdo con la legislación vigente.
Se implementarán mecanismos de control y transparencia en la gestión de recursos, con informes periódicos a la Asamblea General y a los organismos de control competentes.
Todos los recursos serán destinados única y exclusivamente al cumplimiento de los fines del Partido.

ARTÍCULO 9 - MODIFICACIÓN DE LA PRESENTE CARTA ORGÁNICA
Las modificaciones deberán ser aprobadas en Asamblea General, requiriendo una mayoría cualificada según lo estipulado en el reglamento interno.
Toda reforma será comunicada a las autoridades correspondientes para la actualización del registro de la persona jurídica.

ARTÍCULO 10 - DISOLUCIÓN
La disolución del Partido se efectuará conforme a las disposiciones legales vigentes y será aprobada por la Asamblea General.
En caso de disolución, el destino de los bienes y recursos se definirá en función de fines de interés social o en favor de organizaciones sin fines de lucro, según lo determine la Asamblea General.

ARTÍCULO 11 - DISPOSICIONES FINALES
La presente Carta Orgánica se rige por la Constitución Nacional, la normativa de la Provincia de Buenos Aires y las directrices del Partido a nivel nacional.
Se autoriza a los representantes del Partido para realizar las gestiones necesarias ante las autoridades municipales y provinciales, con el fin de obtener la personería jurídica y cumplir con todos los requisitos legales.
La interpretación y aplicación de esta Carta Orgánica corresponderá al Comité Ejecutivo, en última instancia sometido a la Asamblea General.
En constancia de lo expuesto, se firma la presente Carta Orgánica en Lobos, a los 01 de abril de 2025.

David Porchedda
Coordinador Ejecutivo
Partido La Libertad Avanza`,
  },
  {
    id: "plataformaelectoral",
    name: "PLATAFORMA ELECTORAL",
    content: `La ineludible tasa de crecimiento demográfico y la inexorable conurbanización, evidenciadas en la experiencia de Canuelas, son el motor que impulsa este plan estratégico. La transformación urbana y social exige una respuesta estructurada y proactiva que permita gestionar de manera ordenada el crecimiento, evitar la proliferación de barrios informales y fortalecer los servicios públicos, garantizando así el desarrollo sostenible y la calidad de vida para todos los habitantes. Esta dinámica demográfica y urbana demanda respuestas innovadoras y ordenadas que aseguren la calidad de vida y el desarrollo sostenible del municipio.

Etapa 1: Saneamiento Institucional y Optimización Administrativa
  • Transparencia y Rendición de Cuentas
Garantizar la apertura de la información financiera fortalece la confianza ciudadana, combate la corrupción y permite el uso eficiente de los recursos públicos.
  • Simplificación de Trámites mediante Aplicación Móvil
Digitalizar y centralizar los procesos administrativos reduce la burocracia, agiliza la atención al ciudadano y moderniza la gestión municipal, haciendo de cada celular una extensión de la sede muncipal.
  • Revisión y Simplificación Regulatoria
Actualizar la normativa elimina barreras que impiden el desarrollo económico y facilita la formalización de actividades productivas, promoviendo el crecimiento sostenible del municipio.

Etapa 2: Modernización de Infraestructura y Promoción del Desarrollo Urbano
  • Planificación Urbana Consciente
Elaborar un plan maestro de urbanismo previene la formación de barrios informales, ordena el crecimiento territorial y garantiza la integración de áreas residenciales, industriales y de servicios.
  • Mejoramiento Progresivo de Servicios Básicos (salud, educación, seguridad, energía, agua y manejo de residuos)
Implementar mejoras paulatinas en servicios esenciales asegura una calidad de vida adecuada y fortalece la resiliencia del municipio frente al crecimiento demográfico.
  • Impulso a la Industrialización
Ofrecer incentivos impositivos y facilitar el acceso a infraestructura de transporte atrae inversiones y genera polos industriales que dinamizan la economía local y crean empleo digno.
  • Formalización y Regulación de Actividades Recreativas
Convertir actividades informales en eventos regulados permite canalizar la energía juvenil de manera segura, integrando la pasión por el deporte de ruedas en un marco de legalidad y orden.
  • Promoción sin Inversión Económica de Actividades Culturales de Identidad Lobense
Fomentar la cultura lobense sin requerir inversión directa impulsa el sentido de identidad y pertenencia. Acercar a las instituciones en una mesa común, bajo ninguna bandera política, crea un espacio neutral de colaboración que enriquece la oferta cultural y fortalece el tejido social.

Etapa 3: Consolidación, Evaluación y Expansión Estratégica
  • Consolidación del Proceso de Desarrollo
La evaluación periódica de los avances en infraestructura y servicios permite ajustar estrategias de forma oportuna, garantizando la continuidad y efectividad de las políticas implementadas.
  • Expansión y Actualización del Plan Urbano
Una planificación urbana dinámica y actualizada facilita la integración de nuevas áreas de desarrollo, evitando la proliferación descontrolada de barrios informales y optimizando el uso del suelo.
  • Innovación Continua en la Gestión Municipal
La incorporación de tecnologías y la creación de espacios de diálogo interinstitucional aseguran una gestión adaptativa y eficiente, promoviendo la participación ciudadana y respondiendo a las necesidades emergentes del municipio.
`,
  },
  {
    id: "consejosescolares",
    name: "CONSEJOS ESCOLARES",
    content: `LEY 13.688 - CAPÍTULO XIX

ARTÍCULO 147.- La administración de los establecimientos educativos, en el ámbito de competencia territorial distrital, con exclusión de los aspectos técnico-pedagógicos, estará a cargo de órganos desconcentrados de la Dirección General de Cultura y Educación denominados Consejos Escolares, de acuerdo a lo estipulado por el artículo 203 de la Constitución de la Provincia de Buenos Aires. Estarán integrados por ciudadanos mayores de edad y vecinos del distrito con no menos de dos años de domicilio inmediato anterior a la elección, que serán elegidos por el voto popular. 

ARTÍCULO 148.- (Texto según Ley 15.315) Los Consejeros Escolares duran cuatro (4) años en sus funciones renovándose por mitades cada dos (2) años y podrán ser reelectos por un nuevo período. Si han sido reelectos no podrán ser elegidos en el mismo cargo, sino con intervalo de un período.Quedan comprendidos en la prohibición todos aquellos que hayan asumido su cargo por un segundo periodo sin importar que el mismo haya sido ejercido total o parcialmente.Habrá además un número de Consejeros Escolares Suplentes igual al de Titulares. El número de Consejeros Escolares por Distrito varía de cuatro (4) a diez (10), de acuerdo a la cantidad de Establecimientos Educativos Públicos existentes de acuerdo a la siguiente escala:

a) Hasta 60 Establecimientos Educativos: cuatro (4) Consejeros.

b) Desde 61 hasta 200 Establecimientos Educativos: seis (6) Consejeros.

c) Desde 201 hasta 350 Establecimientos Educativos: ocho (8) Consejeros.

d) Desde 351 Establecimientos Educativos diez (10) Consejeros.

ARTÍCULO 149.- El desempeño del cargo de Consejero Escolar está sujeto a las siguientes disposiciones:

a. Por su desempeño percibirá una dieta sujeta a los aportes y contribuciones previsionales y asistenciales que el Poder Ejecutivo Provincial determine.

b. El personal docente o de la Administración Pública tiene derecho a una licencia con o sin goce de haberes, en todos sus cargos por desempeño de cargo público electivo. En el primer caso se deberá entender como renuncia expresa a la dieta, y en el segundo como opción a favor de la misma. La opción por la licencia con goce de sueldo comprende la percepción de haberes por el período completo para el que fuere electo en la forma que establezca la respectiva reglamentación, rigiendo el derecho salarial desde la toma de posesión del cargo para todos los mandatos, aún los vigentes.

c. En el caso de personal docente en actividad, el desempeño del cargo es considerado ejercicio activo de la docencia a todos sus efectos. Este personal puede participar de todas las acciones que impliquen continuidad en su carrera docente, sin toma de posesión efectiva hasta el ﬁn de su mandato y en el marco del régimen de incompatibilidades vigentes.

d. La administración hará reserva del cargo y/o cargos y/o módulos y/u horas cátedras a los que el Consejero Escolar en ejercicio hubiera accedido. La reserva quedará sin efecto cuando el Consejero Escolar finalice su mandato y tome posesión efectiva, cuando haga renuncia de la misma, cuando se produjese su fallecimiento, o por aplicación de otras normas estatutarias. En el caso de los docentes que hubiesen accedido a una titularidad interina, la reserva implicará el derecho a elección del destino definitivo, transcurridos los tiempos correspondientes.

e. Los cargos o funciones reservados no generarán derecho a percepción salarial o retribución de ninguna naturaleza durante el ejercicio de las funciones de Consejero Escolar.

f. El Consejero Escolar que sea reelecto no podrá modificar su situación sino hasta el ﬁn de su último mandato consecutivo.

g. La aplicación de los artículos 109 y 110 de la Ley 10.579 o los artículos análogos de la que en su caso la reemplace, no afectará la percepción salarial de los docentes que se desempeñan como Consejeros Escolares.

No podrán ser Consejeros Escolares:

a. Los que no reúnan los requisitos para ser electos.

b. Los que directa o indirectamente estén interesados en algún contrato en que el Consejo Escolar sea parte, quedando comprendidos los miembros de las Sociedades Civiles y Comerciales, Directores, Administradores, Gerentes, Factores o Habilitados que se desempeñen en actividades referentes a dichos contratos; no se encuentran comprendidos en esta prohibición aquellos que revisten en la simple calidad de Asociados de Sociedades Cooperadoras, Cooperativas y Mutualistas;

c. Los ﬁadores o garantes de personas que tengan contraídas obligaciones con el Consejo Escolar.

d. Los que hayan sido condenados por delito doloso, que requiera para su conﬁguración la condición de agente de la Administración Pública y los contraventores a las Leyes de Juego;

e. Los inhabilitados para el desempeño de cargos públicos;

f. Las personas declaradas responsables por el Tribunal de Cuentas, mientras no den cumplimiento a sus Resoluciones. 

ARTÍCULO 150.- El cargo de Consejero Escolar será incompatible con el de toda otra función pública a excepción de la docencia universitaria y lo que esta misma Ley disponga. 

ARTÍCULO 151.- Todo Consejero Escolar que se encuentre posteriormente a la aprobación de su elección en cualquiera de los casos previstos por los artículos respectivos, deberá comunicarlo al cuerpo en la primera sesión que se realice, para que se proceda a su reemplazo si así correspondiera. Cualquiera de los Consejeros, a falta de comunicación del afectado, deberá comunicar la incompatibilidad o inhabilidad o ambas por la vía respectiva, cuando tome conocimiento de la misma. 

ARTÍCULO 152.- Los Consejeros Escolares electos tomarán posesión de su cargo, en la fecha que establezca la normativa electoral aplicable. Los candidatos que no resulten electos serán los Suplentes natos en primer término de quienes lo hayan sido en su misma lista, y el reemplazo por cualquier circunstancia de un Consejero Escolar, se hará automáticamente y siguiendo el orden de colocación en la respectiva lista de candidatos, debiendo ser llamados los Suplentes, una vez agotada la nómina de Titulares. 

ARTÍCULO 153.- En la fecha ﬁjada por la Junta Electoral, se reunirá el Consejo Escolar en sesiones preparatorias, integrado por los nuevos electos diplomados por aquélla y los Consejeros que no cesen en su mandato, y procederán a establecer si los primeros reúnen las condiciones exigidas por la Constitución Provincial y por esta Ley. En estas sesiones preparatorias se elegirán las Autoridades del Cuerpo: Presidente, Vicepresidente/s, Secretario y Tesorero. Éstas durarán dos (2) años en sus funciones y podrán ser reelectos. La elección será individual por función y por simple mayoría de votos de los presentes. Se dejará constancia además de los Consejeros Vocales que lo integrarán, a los que el Cuerpo asignará orden de preeminencia. Habiendo paridad de votos en esta elección para una función, prevalecerá el candidato que haya obtenido mayor cantidad de votos, tomándose en cuenta al efecto la elección por la que accedió al cargo. Si los candidatos accedieron al cargo integrando la misma lista, prevalecerá el mejor lugar que hayan ocupado en la misma. Cualquier cuestión no prevista, será resuelta discrecionalmente por el Director General de Cultura y Educación. 

ARTÍCULO 154.- De todo lo realizado en las sesiones preparatorias se redactará acta, la que será suscripta por el Consejero Escolar que hubiere presidido y por todos los presentes, comunicándose al Órgano de aplicación que se establezca al efecto dentro de la Subsecretaría Administrativa. 

ARTÍCULO 155.- La presencia de la mayoría absoluta de los miembros del Consejo Escolar a constituirse, formará quórum para deliberar. Las decisiones se adoptarán por simple mayoría. En estas sesiones preparatorias el Cuerpo y el Órgano Jerárquico correspondiente, tendrán las facultades disciplinarias y de compulsión en la forma que se establece en la presente ley. 

ARTÍCULO 156.- Cada Consejo Escolar será asistido por un Secretario Administrativo, que será designado por el Cuerpo de Consejeros Escolares, por simple mayoría de votos, careciendo de estabilidad en la función y pudiendo ser removido por el mismo sistema. El cargo será considerado en el Presupuesto General de la Dirección General de Cultura y Educación, y la remuneración será ﬁjada de conformidad con la normativa vigente. 

ARTÍCULO 157.- (Texto según Ley 14.362) (La Ley 14.525 derogó la Ley 14.362) En cada Consejo Escolar la Dirección General de Cultura y Educación designará un (1) Secretario Técnico, mediante concurso público y abierto de oposición y antecedentes. El Concurso será convocado y realizado mediante el procedimiento que reglamente el Director General de Cultura y Educación atendiendo a los siguientes principios: publicidad, igualdad de tratamiento y oportunidades, y preeminencia de la idoneidad en la selección. La evaluación estará a cargo de un (1) jurado integrado por los Directores y/o representantes de la Subsecretaría de Recursos Humanos y Relaciones Laborales y la Subsecretaría Administrativa, según la materia, que se designen a tal efecto, el Presidente del Consejo Escolar respectivo y un (1) Secretario Técnico en ejercicio del cargo.

El Secretario Técnico dura en sus funciones cinco (5) años, transcurridos los cuales deberá celebrarse un nuevo concurso a los efectos de cubrir el cargo. A los efectos de resguardar la idoneidad de la función, la Subsecretaría de Recursos Humanos y Relaciones Laborales y la Subsecretaría Administrativa, según la materia, podrá solicitar informes y realizar las evaluaciones que considere necesarias ya sea en forma general, en toda la Provincia, o distrital. Por la vía de la reglamentación se establecerá la forma de remuneración básica de cada Secretario Técnico. 

ARTÍCULO 158.- Los Agentes del Consejo Escolar serán designados por la Dirección General de Cultura y Educación conforme al procedimiento previsto por la Ley 10.430 y/o la que en su caso la reemplace. Estarán comprendidos dentro de dicho Régimen General para el Personal de la Administración Pública Provincial.

ARTÍCULO 159.- El Consejo Escolar funcionará en las dependencias que establezca para cada caso la Dirección General de Cultura y Educación y realizará sesiones:

a. Preparatorias a los efectos de cumplir con la presente Ley.

b. Ordinarias desde el 1 de febrero hasta el 31 de diciembre, cuya frecuencia, día y hora serán establecidas por el Cuerpo en la primera que celebre, sin perjuicio de todas las demás que fueran necesarias convocadas por el presidente o su reemplazante.

c. Extraordinarias durante el mes de Enero convocadas por el Presidente o su reemplazante o por la Dirección General de Cultura y Educación cuando un asunto de interés lo exija.

d. Especiales cuando lo requiera un mínimo de un tercio de los Consejeros. En este caso la Sesión tratará solamente el asunto que motivó la Convocatoria. 

ARTÍCULO 160.- La mayoría absoluta del total de Consejeros Titulares formará quórum para deliberar y resolver. Las sesiones serán públicas. En caso de que en una sesión, cualquiera sea el carácter de la misma, el Cuerpo no logre quórum necesario para sesionar, el o los asistentes a la sesión podrán compeler mediante el auxilio de la Fuerza Pública a que asistan el o los ausentes que no hayan justiﬁcado su inasistencia. Por cada inasistencia injustificada a una sesión, cualquiera sea el carácter de la misma, podrán aplicarse las sanciones previstas en la presente ley. A los efectos de la evaluación de la justificación de la inasistencia se aplicará el régimen que a tal efecto se determine en el reglamento interno de los Consejos Escolares y/o el régimen de las licencias de la Ley 10.430 o la que en su caso la reemplace. Se llevará un registro de asistencia a las sesiones que estará a cargo del Secretario Administrativo, quién será responsable con el Presidente del Cuerpo de informar mensualmente las novedades. 

ARTÍCULO 161.- El Consejo Escolar dictará su reglamento interno en el que se establecerán el orden de las sesiones, el trabajo a realizarse y la organización y funcionamiento del Cuerpo. La Dirección General de Cultura y Educación dictará un modelo de Reglamento que se aplicará hasta tanto el Cuerpo dicte el propio.

ARTÍCULO 162.- En cuanto al procedimiento y actos administrativos del Consejo Escolar en la materia y grado que sea de su competencia, que se manifestará por disposiciones, se aplicarán las previsiones del Decreto Ley 7.647/70 de Procedimientos Administrativos. 

ARTÍCULO 163.- El Consejo Escolar labrará Acta de las sesiones realizadas en un libro especial habilitado al efecto, rubricado por la Autoridad Competente que determine la Dirección General de Cultura y Educación. En caso de pérdida o sustracción del libro, hasta tanto se recupere dicho libro o se habilite uno nuevo por Disposición del Cuerpo, las actas se labrarán por separado y serán refrendadas por el Secretario Administrativo.

ARTÍCULO 164.- Si por cualquier causa, el Presidente del Consejo dejara de ejercer las atribuciones y deberes que le son propios, lo reemplazará automáticamente el Vicepresidente. En su defecto, lo hará el Secretario; y en el de éste último, el Tesorero. En caso de quedar vacante la Presidencia se realizará nueva elección. Si el cese de funciones del Presidente saliente fuera acompañado por el del cargo de Consejero Escolar, la elección se realizará luego de incorporado el Consejero Escolar Suplente que complete el número de miembros del Cuerpo.

Son atribuciones y deberes del Presidente:

a. Convocar a los miembros del cuerpo a las sesiones que debe celebrar el mismo ﬁjando el Orden del Día, sin perjuicio de los que, en casos especiales resuelva el Consejo;

b. Presidir las sesiones en las que tendrá voz y voto. En caso de empate su voto valdrá doble;

c. Firmar las Disposiciones que apruebe el Consejo, y las Actas, siendo refrendadas en todos los casos por el Secretario o Consejero Escolar que lo reemplace; • juntamente con el Tesorero todo lo referente a la administración contable del Consejo;

d. En caso de necesidad y urgencia, el Presidente podrá disponer lo que corresponda, debiendo ser tratado por el Cuerpo en la primera sesión que celebre. 

ARTÍCULO 165.- Son funciones y deberes del Secretario:

a. Refrendar la ﬁrma del Presidente;

b. Reemplazar al Vicepresidente;

c. Supervisar y custodiar el archivo y la documentación del Consejo, la que no podrá ser retirada de la sede del mismo;

d. Llevar y refrendar el Libro de Actas;

e. Computar, veriﬁcar y anunciar el resultado de las votaciones;

f. Coordinar con el Secretario Técnico la plena ejecución de las Resoluciones del Cuerpo;

Si por cualquier causa, el Secretario del Cuerpo dejara de ejercer las atribuciones y deberes que le son propios, lo reemplazará automáticamente el 1º Vocal. En su defecto lo hará el Tesorero. En cualquier cuestión no prevista que se suscite con motivo de lo expresado, se abocará y resolverá de oficio el Director General de Cultura y Educación.

ARTÍCULO 166.- Son atribuciones y deberes del Tesorero:

a. Administrar los bienes de la Dirección General de Cultura y Educación colocados bajo responsabilidad del Consejo Escolar, conjuntamente con el Presidente.

b. Firmar conjuntamente con el Presidente o quién lo reemplace los cheques del Consejo Escolar.

c. Llevar los libros y/o registros de contabilidad del Consejo de acuerdo con las reglamentaciones vigentes.

d. Coordinar con el Secretario Técnico el pago de sueldos y remuneraciones del Personal Docente, Administrativo, Profesional y Auxiliar de los Establecimientos Educativos del Distrito y Personal Administrativo de las demás Reparticiones Distritales de la Dirección General de Cultura y Educación y del Consejo Escolar local, conforme a las indicaciones que se impartan desde la Subsecretaría Administrativa.

e. Rendir cuentas documentadas de las inversiones que se realicen por intermedio del Consejo Escolar.

f. Elaborar y elevar al Cuerpo y a la Subsecretaría Administrativa, conjuntamente con el Secretario Técnico, informes mensuales del estado de cuentas y balances trimestrales del movimiento ordinario de los fondos que administre el Consejo Escolar.

ARTÍCULO 167:- Son atribuciones y deberes del Secretario Técnico, sin perjuicio de las expresadas particularmente en otros artículos:

a. Instrumentar las disposiciones del Cuerpo ejecutando lo necesario a tal efecto;

b. Organizar y conducir la Mesa de Entradas resguardando la integridad de los registros;

c. Atender y cumplir el pleno despacho de los asuntos del Consejo Escolar comprendiendo en dicho concepto la Administración del Personal, la Administración Contable (incluyendo los procesos de compras y contrataciones) y la Administración de Servicios Generales e informáticos que correspondan al Distrito;

d. Dar a publicidad la totalidad de los actos administrativos, relacionados con el inciso c. del presente artículo, en el marco,  de una política de transparencia administrativa, de la Ley Provincial 13.295, de adhesión a la Ley Nacional 25.917 de Régimen Federal de Responsabilidad Fiscal, con alcance a los Consejos Escolares. 

ARTÍCULO 168.- Las inhabilitaciones e incompatibilidades previstas en la presente ley regirán para los Consejeros Escolares durante todo su mandato, debiendo ser comunicadas al Presidente del cuerpo dentro de un día de producidas. Ningún Consejero Escolar podrá ser parte en contrato alguno que resulte de una Disposición adoptada por el Cuerpo, durante el período legal de su mandato y hasta un año después de concluido el mismo. Los Consejeros Escolares no podrán abandonar sus cargos hasta recibir la notificación de la aceptación de la renuncia. La aceptación deberá ser resuelta por el Consejo Escolar dentro de los 30 días de la fecha de presentación. Vencido el término se considerará tácitamente aceptada la dimisión y el relevo de continuar en el desempeño de la función.

ARTÍCULO 169.- Los Consejeros Escolares Suplentes se incorporarán inmediatamente de producido el cese, licencia o suspensión de un titular. El Consejero Suplente que se incorpore al Cuerpo en forma temporaria, al término del reemplazo retornará al lugar que ocupaba en la respectiva lista. Si la sustitución fuere definitiva se colocará en el lugar correspondiente al último puesto de la lista de Titulares. Si durante la sustitución temporaria se produjera una vacante definitiva, el Suplente interino lo ocupará en carácter de Titular, siendo reemplazado en la suplencia por el Consejero Suplente siguiente en la lista.

ARTÍCULO 170.- (Texto según Ley 14.362) (La Ley 14.525 derogó la Ley 14.362) Los Consejos Escolares poseen las siguientes facultades, en el ámbito de su Distrito:

a. Gestionar la provisión de muebles, útiles, y demás elementos de equipamiento escolar y proceder a su distribución;

b. Implementar en sus respectivos Distritos la ejecución de los actos de administración emanados de la Dirección General de Cultura y Educación; 

c. Administrar los recursos que por cualquier concepto le asigne bajo su responsabilidad la Dirección General de Cultura y Educación; 

d. Realizar el censo de bienes de Estado; 

e. Conformar las facturas por prestación de servicios públicos siendo de su exclusiva responsabilidad la realización de las auditorías correspondientes tendientes a un uso racional y eficiente de dichos servicios; 

f. Intervenir y fiscalizar todo trámite administrativo vinculado a: 1) Toma de posesión; 2) Tareas Pasivas; 3) Juntas Médicas; 4) Licencias; 5) Salario Familiar; 6) Reconocimientos Médicos, conforme a las indicaciones que se impartan desde la Subsecretaría de Recursos Humanos y Relaciones Laborales; 

g. Intervenir y fiscalizar todo trámite administrativo vinculado a: 1) Seguro colectivo y escolar; 2) El pago de sueldos y remuneraciones del Personal Docente, Administrativo, Obrero y de Servicio de los Establecimientos del Distrito y Personal Administrativo de las demás reparticiones Distritales de la Dirección General de Cultura y Educación y del Consejo Escolar local, conforme a las indicaciones que se impartan desde la Subsecretaría Administrativa; 

h. Las actividades que le encomiende la Dirección General de Cultura y Educación; 

i. Proponer alternativas de acción intersectorial en los casos de inasistencias reiteradas, injustificadas o por deserción de los niños en edad escolar, a los fines de asegurar los principios y fines de la educación, previstos en la presente Ley; 

j. Auspiciar la formación y colaboración con las Asociaciones Cooperadoras de los Establecimientos Educativos de sus Distritos. 

ARTÍCULO 171.- Los actos de los Consejos Escolares no constituidos según la forma y contenido determinados en la presente Ley y en las de aplicación complementaria, serán nulos. 

ARTÍCULO 172.- Le son de aplicación a los actos del Consejo como Órgano Desconcentrado Colegiado y a los actos de sus Miembros, las previsiones de: a) La Responsabilidad Patrimonial dispuesta en el Decreto Ley 7.764/71 de Contabilidad y/o el que en su caso lo reemplace y sus respectivos Decretos Reglamentarios; b) La Responsabilidad Civil prevista en el Código Civil y Leyes Complementarias; c) La Responsabilidad Penal dispuesta en el Código Penal y Leyes Complementarias. Sin perjuicio de lo expresado, y en cuanto a la Responsabilidad Disciplinaria Administrativa, el Consejo Escolar podrá aplicar a sus miembros con causa las sanciones de Amonestación; Suspensión de hasta 90 días y Destitución. Serán causas de sanción: No cumplir con sus deberes y obligaciones en forma regular y continua con toda la diligencia y contracción que es necesario para sus funciones; no cuidar debidamente los bienes del Estado; no mantener dentro y fuera de las funciones una conducta decorosa y digna. Lo precedente es meramente enunciativo y no taxativo, y no excluye otras conductas que puedan justiﬁcar la aplicación de una sanción. En los casos en que la naturaleza y gravedad del hecho que diere inicio al procedimiento sancionatorio, tornare inconveniente la permanencia del Consejero en el Cuerpo, el Consejo fundadamente podrá suspenderlo preventivamente por un lapso no mayor de 90 días. En caso de que el motivo fuere una causa penal en que exista requisitoria ﬁscal de elevación a juicio en contra del Consejero Escolar, la suspensión será obligatoria y durará hasta que se dicte sentencia ﬁrme. A los efectos de la aplicación de la suspensión preventiva o de las sanciones, se respetará el derecho de defensa con ajuste a las siguientes previsiones generales:

a. Se convocará a una Sesión Especial con cinco (5) días hábiles de anticipación. La convocatoria incluirá al o los Consejeros involucrados y se notiﬁcará por medio fehaciente de los previstos en el Decreto Ley 7.647/70 de Procedimientos Administrativos y/o en la ley que lo reemplace;

b. En la sesión, el o los Consejeros involucrados, podrán ser asistidos por letrados particulares;

c. Primeramente el Presidente informará al o los involucrados y al resto del Cuerpo la causa que dio origen al procedimiento y las pruebas en las que se basaren las acusaciones;

d. Los Consejeros no involucrados podrán agregar en forma inmediata las consideraciones que creyeren conveniente;

e. Luego de lo expresado él o los involucrados realizarán su descargo ejercitando su derecho de defensa;

f. Agotado el descargo el Cuerpo resolverá en consecuencia sobre la procedencia o no de la suspensión preventiva o sanción. Salvo causa excepcional justificada en interés del propio procedimiento, el mismo comenzará y concluirá en la misma sesión. 

ARTÍCULO 173.- El Consejo Escolar podrá conceder licencia a los Consejeros Escolares que las requieran, incorporando inmediatamente al Consejero Escolar Suplente que corresponda, para no diﬁcultar la normalidad del funcionamiento del Consejo Escolar. Sin perjuicio de la licencia general prevista en el párrafo anterior, las Consejeras Escolares podrán gozar, previa presentación del certiﬁcado médico correspondiente, de una licencia total de noventa (90) días por maternidad. Dicha licencia deberá comenzar entre los cuarenta y cinco (45) días y de los treinta (30) días anteriores a la fecha probable de parto, acumulando el resto del período total de licencia al período de descanso posterior al parto. 

ARTÍCULO 174.- La acción por transgresiones disciplinarias de los Consejeros Escolares prescribe a los tres (3) años de producida la falta. Si fuere una falta de ejercicio continuo, el plazo se contará a partir de que se dejare de realizar la falta. El ejercicio de la acción interrumpe la prescripción. 

ARTÍCULO 175.- Contra las Resoluciones de suspensión preventiva o sancionatorias de los Consejos Escolares podrán interponerse los Recursos Previstos en el capítulo correspondiente del Decreto Ley 7.647/70 de Procedimientos Administrativos y/o el que en su caso lo reemplace. A los efectos del artículo 101º de dicho Decreto Ley y del artículo 1º del Código Contencioso Administrativo, el recurso jerárquico será resuelto por el Director General de Cultura y Educación. 

ARTÍCULO 176.- Los conflictos internos de los Consejos Escolares o los conflictos con otros Consejos Escolares, serán resueltos por el Director General de Cultura y Educación. 

ARTÍCULO 177.- El Director General de Cultura y Educación conforme al artículo 59º del Decreto Ley 7.647/70, principios generales de la materia y el carácter de Órgano Desconcentrado del Consejo Escolar, podrá de oficio avocarse al conocimiento, resolución o investigación de cualquier tema o asunto en particular y/o asumir en forma directa la competencia del Consejo Escolar mediante el funcionario que designe al efecto si se dieren razones de servicios que evalúe justificadas.
`,
  },
];

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const seccion = searchParams?.get("seccion") || "cartaorganica"; 
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  useEffect(() => {
    if (seccion) {
      const matchingTab = tabs.find((tab) => tab.id === seccion);
      if (matchingTab) {
        setActiveTab(matchingTab.id);
      }
    }
  }, [seccion]);

  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      <div className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => router.push(`/doc?seccion=${tab.id}`) }
            className={`px-4 py-2 text-sm font-medium border-b-2 ${
              activeTab === tab.id ? "inverted-color" : ""
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="p-4 border border-t-0 whitespace-pre-wrap">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>

      <br />
      <br />
      <h1 className="text-2xl font-bold mb-2">Referencias</h1>
      <hr className="mb-4" />
      <ol className="list-decimal pl-5 space-y-2">
        <li>
          <a
            href="https://www.argentina.gob.ar/partidos-politicos/conformacion-de-un-partido-politico"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center"
          >
            <span>Conformacion de un Partido Politico</span>
            <FaExternalLinkAlt className="ml-2" />
          </a>
        </li>
              <li>
          <a
            href="https://normas.gba.gob.ar/documentos/Bl5nYIQV.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center"
          >
            <span>Consejos Escolares - Ley 13.688</span>
            <FaExternalLinkAlt className="ml-2" />
          </a>
        </li>
      </ol>
    </div>
  );
}
