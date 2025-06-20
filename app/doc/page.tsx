"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaExternalLinkAlt } from "react-icons/fa";

const tabs = [
/*  
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
*/  
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

(en proceso de construcción)
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
  {
    id: "reglamentohcd",
    name: "REGLAMENTO HCD",
    content: `CIUDAD DE LOBOS REGLAMENTO INTERNO DEL HONORABLE CONCEJO DELIBERANTE

AÑO 1951
REFORMADO EN EL AÑO 1984 y EN EL AÑO 2004.-
MUNICIPALIDAD DE LOBOS
HONORABLE CONCEJO DELIBERANTE
REGLAMENTO INTERNO

CAPÍTULO I
De las Sesiones Preparatorias y Designación de las Autoridades
Art. 1º- El Concejo Deliberante del partido de Lobos se constituirá de acuerdo a las disposiciones contenidas en la Ley Orgánica de las Municipalidades, para proceder, con arreglo a lo dispuesto en la misma, a elegir las autoridades del Cuerpo.
Art. 2º- Una vez que el Presidente provisional se haga cargo de sus funciones, el Cuerpo procederá a designar una Comisión Especial de Poderes compuesta de tres Concejales en ejercicio de su mandato, la cual deberá pronunciarse en un cuarto intermedio que no podrá exceder de veinticuatro horas, sobre si los ciudadanos electos reúnen las condiciones exigidas por la Constitución de la Provincia y la Ley Orgánica de las Municipalidades.
Art. 3º- El despacho de la Comisión será votado en general por todos los Concejales presentes. En la votación en particular no podrá votar el Concejal impugnado, cuando se trate de su propio caso.
Art. 4º- Al incorporarse al Concejo los Concejales electos, cualquiera sea la oportunidad en que lo hagan, prestarán previamente juramento ante la Presidencia en alguna de las dos formas siguientes:
“Juráis por Dios y por la Patria desempeñar fielmente el cargo de Concejal”. 
Sí juro.  
“Juráis por la Patria desempeñar fielmente el cargo de Concejal”. 
Sí juro.
Art. 5º- Una vez elegidas las autoridades del Cuerpo en la fecha y con las formalidades establecidas en la Ley Orgánica, en la misma sesión se fijarán los días y horas de las sesiones ordinarias que deberá celebrar el Cuerpo en el período a iniciarse.
Art. 6º- Constituido el Concejo, el Presidente lo comunicará al Departamento Ejecutivo, al Poder Ejecutivo de la Provincia, al Tribunal de Cuentas y a la Suprema Corte de Justicia.

CAPÍTULO II
De los Concejales
Art. 7º- Los Concejales están obligados a asistir a todas las sesiones del Cuerpo desde el día en que queden incorporados y deberán formar parte de las Comisiones Internas para las que se los designe. En caso de ausencia deberán comunicarlo personalmente o por escrito a la Secretaría del Cuerpo, exponiendo la causa de la inasistencia.
Art. 8º- El Concejal que no pudiere dar aviso de su inasistencia con anterioridad a la fecha en que se celebró la sesión, tendrá que justificarla ante el Cuerpo en la primera sesión a que asista.
Art. 9º- Ningún Concejal podrá faltar a más de tres sesiones consecutivas sin licencia especial concedida por el Cuerpo.
Art. 10.- Si algún Concejal infligiera lo dispuesto en los artículos 7, 8 y 9 de este Reglamento, el Presidente pondrá el hecho en conocimiento del Cuerpo, quien decidirá si ha llegado la oportunidad de nombrar una Comisión especial, integrada por un representante de cada sector político, a fin de que dictamine la sanción a imponer al Concejal afectado, de conformidad con lo establecido en el artículo 147 de la Ley Orgánica.
Art. 11.- La licencia acordada a un Concejal caduca automáticamente por la presencia del mismo en la primera sesión del Cuerpo a que asista.
Art. 12.- Los Concejales no constituirán Concejo Deliberante fuera del recinto de sesiones, salvo caso de fuerza mayor que les impida reunirse en éste.
Art. 13.- A cada Concejal se le otorgará un carnet habilitante suscripto por el Presidente y Secretario del Cuerpo, que servirá como prueba de su condición de Concejal durante la vigencia de su mandato. Dicho carnet deberá contener las siguientes constancias: Nombres y apellido del Concejal; una fotografía del mismo; período de su mandato y firma del interesado.

CAPÍTULO III
De las Sesiones en General
Art. 14.- El Concejo deberá reunirse los días fijados en la Sesión Preparatoria; pero por pedido de un tercio de los concejales podrá celebrar sesión especial, para lo cual el Presidente deberá formular la citación efectiva fijando una fecha que no exceda los cinco (5) días hábiles del pedido.
Art. 15.- El número para sesionar es la mitad más uno de los miembros del Concejo, pero una minoría de más de un tercio del total de los miembros del Concejo, reunida en el recinto de deliberaciones, queda facultada para compeler a los inasistentes por medio de la fuerza pública o bien aplicar multas a los que no justifiquen debidamente su ausencia, las cuales no serán mayores de cien pesos moneda nacional, salvo los casos establecidos en los artículos 147, 148 y 149 de la Ley Orgánica Municipal.
Art. 16.- Las sesiones serán públicas. Para conferirles el carácter de secreto se necesitará mayoría del total de los miembros del Honorable Concejo. Déjase aclarado que para conferirle tal carácter será siempre necesario el voto de ocho de los miembros del Concejo.
Art. 17.- En los casos de sesión secreta, el Presidente, Concejales, Secretario y demás personas con derecho a concurrir, guardarán reserva de las opiniones que se emitan y del voto de cada Concejal, así como de las resoluciones que se adopten, si la mayoría del Cuerpo no dispusiera expresamente darlas a publicidad en todo o en parte.
Art. 18.- Serán sesiones especiales las que determine el Cuerpo dentro del período de sesiones ordinarias y de prórroga; y las que deba realizar en el mes de marzo para tratar el examen de las cuentas. Las sesiones especiales se desarrollarán fuera de los días fijados por el Concejo para reuniones ordinarias y de prórroga. Serán sesiones extraordinarias las que se efectúen fuera del período ordinario. Estas solo podrán ser convocadas a pedido del Departamento Ejecutivo o por el tercio de los Concejales, siempre que un asunto de interés público y urgente lo exija.
Art. 19.- Cuando el Presidente convocare a sesión especial, conforme al artículo precedente, el Concejo celebrará sesión el día indicado, debiendo previamente decidir por el voto de la mayoría la procedencia del pedido.
Art. 20.- Formulada la petición para celebrar la sesión especial, el Presidente fijará el día y la hora de ésta, dentro de un plazo que no excederá de cinco días a contar desde la fecha de recibida en Secretaría.-
Art. 21.- Las sesiones extraordinarias terminarán con el tratamiento del Orden del Día. Los asuntos no resueltos y que pasen a Comisión, no implicarán un cuarto intermedio. En el período de sesiones extraordinarias las comisiones que reciban los expedientes del Orden del Día, tendrán un plazo de quince (15) días hábiles. Por pedido de la mayoría de los miembros de la Comisión se podrán solicitar diez (10) días hábiles más al Honorable Concejo Deliberante para el tratamiento del tema. Cumplido dicho plazo la comisión deberá expedirse. Los despachos de las comisiones serán tratados en la primer sesión extraordinaria, luego de ser remitidos a la Secretaría. En caso de haber finalizado el plazo para las sesiones extraordinarias se tratarán en la primer reunión ordinaria, posterior a su presentación en Secretaría. Las sesiones extraordinarias no se celebrarán los días viernes con sujeción al artículo 68 de la Ley Orgánica de las Municipalidades.

CAPÍTULO IV
Del Presidente
Art. 22.- El Presidente y Vicepresidente nombrados con arreglo a lo dispuesto en la Ley Orgánica, durarán un año en sus funciones, pudiendo ser reelectos.
Art. 23.- La representación del Concejo en los actos o ceremonias oficiales a que fuera invitado en su carácter corporativo, la tendrá el Presidente por sí o conjuntamente con los Concejales que sean designados por el Cuerpo.
Art. 24.- Son atribuciones y deberes del Presidente:
1.) Convocar a los miembros del Cuerpo a todas las reuniones que éste debe celebrar.
2.) Dirigir la discusión, en la que tendrá voz y voto, el cual se computará doble en caso de empate.
3.) Llamar a los Concejales al recinto y abrir la sesión inmediatamente de haber obtenido número reglamentario.
4.) Someter a la consideración del Concejo el acta de la sesión anterior, y si no fuera observada, darla por aprobada, firmándola con el Secretario.
5.) Dirigir la tramitación de los asuntos y señalar las que deben formar el Orden del Día, sin perjuicio de lo que en casos especiales, resuelva el Concejo.
6.) Recibir y abrir las comunicaciones dirigidas al Concejo para ponerlas en conocimiento del mismo; pero reteniendo las que a su juicio fueran inadmisibles, dando cuenta al Cuerpo de su proceder en este caso.
7.) Dar cuenta por secretaría de los asuntos entrados, en riguroso orden cronológico.
8.) Proponer las votaciones y proclamar por secretaría sus resultados.
9.) Firmar todas las comunicaciones de las sanciones que produzca el Concejo y las actas. Su firma será refrendada por el Secretario en todos los casos.
10.) Hacer saber al Departamento Ejecutivo la convocatoria del Concejo, incluyendo el Orden del Día a tratarse.
11.) Nombrar los empleados de su dependencia, resolver las quejas que contra ellos se interpongan, pudiendo suspenderlos o exonerarlos por razones de mejor servicio, con excepción del Secretario, al cual sólo podrá suspender dando cuenta en la primera reunión, en cuyo caso el Concejo deberá pronunciarse en la misma sesión sobre la procedencia o improcedencia de la medida.
12.) Reglamentar las obligaciones del Secretario y demás personal del Concejo, no previstas en este Reglamento.
13.) Manejar las partidas que el presupuesto asigne al Concejo, pudiendo adoptar medidas de orden interno para administración de esos fondos.
14.) declarar levantada la sesión si una cuestión de orden le indicara la conveniencia, salvo oposición de la mayoría del Cuerpo.
15.) En general, hacer observar el Reglamento en todas sus partes y ejercer las demás funciones que en él se le asignen y las inherentes a su cargo que no le estén expresamente prohibidas.
Art. 25.- El Vicepresidente reemplazará al Presidente en todas las atribuciones y facultades que le sean inherentes, debiendo convocar a sesión en los días indicados en caso de no hacerlo el Presidente.
Art. 26.- En caso de ausencia transitoria del presidente y Vicepresidente, presidirá las sesiones el Concejal de mayor edad de la lista triunfante en las últimas elecciones, que se halle presente en el recinto.

CAPÍTULO V
Del Secretario
Art. 27.- El Concejo tendrá un Secretario rentado que será designado por el Cuerpo por mayoría simple de votos, el cual dependerá directamente del Presidente y que podrá ser removido de acuerdo con lo dispuesto por la Ley Orgánica.
Art. 28.- El Secretario tiene la responsabilidad correspondiente a su cargo, debiendo ejercer superintendencia sobre los demás empleados, conforme a la reglamentación que establezca el Presidente.
Art. 29.- Son obligaciones del Secretario:
1.) Redactar las actas de las sesiones, salvando al final de cada una las interlineaciones, raspaduras y enmiendas que contenga, y organizar las publicaciones que se hiciesen por orden del Concejo.
2.) Computar y verificar el resultado de todas las votaciones efectuadas por el Cuerpo.
3.) Anunciar el resultado de toda votación e igualmente el número de votos en pro y en contra.
4.) Refrendar la firma del Presidente en todos los documentos suscriptos por éste.
5.) Dar lectura de las actas en cada sesión, autorizándolas después de ser aprobadas por el Concejo y firmadas por el Presidente.
6.) Hacer conocer al Cuerpo todos los asuntos entrados y demás documentación que se le requiera.
7.) Cuidar de que el Orden del Día llegue con la debida anticipación a cada Concejal, y dar lectura del mismo al comienzo de la sesión respectiva.
8.) Hacer llegar a los Concejales la citación y comunicaciones que disponga la Presidencia del Cuerpo o de las distintas comisiones internas.
9.) Cuidar del arreglo y conservación del Archivo General del Concejo y custodiarlo cuando tenga el carácter de reservado.
10.) Llevar un libro de Decretos y Resoluciones de la Presidencia.
11.) Redactar las comunicaciones y desempeñar los demás trabajos y órdenes que el Presidente le diese en uso de sus facultades. Facilitar, en cuanto le sea posible, a todos los Concejales el estudio de los asuntos pendientes.
12.) Practicar anualmente una recopilación de todas las ordenanzas vigentes y demás resoluciones dadas por el Cuerpo durante el año, con un índice aclaratorio.
13.) El Secretario remitirá mensualmente al tribunal de Cuentas de la Provincia copia textual de las actas que obren en el Libro respectivo, la que deberá ser autenticada por el Presidente.  
Art. 30.- Las actas deberán expresar:
1.) El nombre de los Concejales presentes y nota de los que han faltado con aviso, sin él o con licencia.
2.) La fecha y hora de la apertura de la sesión y el lugar en que se hubiese celebrado.
3.) Las observaciones, correcciones y aprobación del acta anterior.
4.) Los asuntos, comunicaciones y proyectos de que se haya dado cuenta, su distribución y cualquier resolución que hubieren motivado.
5.) El orden y forma de la discusión en cada asunto, con determinación de los Concejales que en ella tomaron parte y de los fundamentos principales que hubieren aducido.
6.) La resolución del Concejo en cada asunto, la cual deberá expresarse con toda claridad.
7.) La hora en que se hubiese levantado la sesión o que se pase al cuarto intermedio dispuesto por el Cuerpo.

CAPÍTULO VI
De las Comisiones
Art. 31.- En la reunión preparatoria de cada año, en ocasión de elegirse las autoridades del Cuerpo, el Concejo por sí o delegando esa facultad en el Presidente, designará a los Concejales que deben componer las Comisiones internas permanentes o especiales.
Art. 32.- Habrá seis comisiones permanentes, a saber:
1.) Presupuesto y Hacienda.
2.) Obras y Servicios Públicos y Seguridad.
3.) Legislación e interpretación, Peticiones y Poderes.
4.) Asuntos Sociales, Cultura, Educación y Salud.
5.) Protección del Medio Ambiente y Defensa del Consumidor y el Usuario.
6.) Producción, Comercio y Servicios.
Art. 33.- Las Comisiones estarán formadas por cuatro miembros cada una, salvo que el Concejo considere conveniente aumentar el número de los mismos en alguna o todas las Comisiones.
Art. 34.- Las Comisiones se constituirán inmediatamente de su designación, eligiendo un Presidente y un Secretario, de lo que deberán informar al Concejo.
Art. 35.- Corresponde a la Comisión de Presupuesto y Hacienda el estudio del presupuesto general de recursos y gastos de la Municipalidad; ordenanzas de impuestos y servicios permanentes; toda autorización de gastos; examen de las cuentas de la administración municipal; y, en general, cualquier otro asunto referente a créditos suplementarios o proyectos que signifiquen una reforma impositiva o una erogación del Municipio.
Art. 36.- Corresponde a la Comisión de Obras Públicas y Seguridad dictaminar en todo proyecto sobre ejecución y conservación de obras públicas municipales, medios de movilidad, comunicaciones y transportes, alumbrado público, obras de embellecimiento y ornato, de salubridad y aguas corrientes, vigilancia de las construcciones, tránsito de vehículos, calles y caminos, solares y tierras.
Art. 37.- Corresponde a la Comisión de Legislación e Interpretación, Peticiones y Poderes, dictaminar en todos los proyectos o asuntos relativos a disposiciones legales relacionados con la Municipalidad: en los contratos que ésta celebre con particulares, empresas o poderes públicos nacionales o provinciales; en los reclamos sobre interpretación de resoluciones del propio Concejo, ordenanzas, leyes nacionales o provinciales y sobre todos los asuntos de legislación general o especial cuyo estudio no esté confiado expresamente a otra Comisión por este Reglamento: sobre los antecedentes y méritos de los candidatos propuestos por el Departamento Ejecutivo para el desempeño de los cargos que requieran acuerdo del Concejo; y toda petición formulada al Concejo por entidades deportivas, culturales, vecinales o vecinos.
Art. 38.- Corresponde a la Comisión de Higiene, Beneficencia y Moralidad el estudio de las cuestiones relacionadas con la higiene general del Municipio, de las viviendas, de los establecimientos, mercados y fábricas; expendio y consumo de sustancias alimenticias y productos que puedan ser nocivos a la salud; servicio doméstico; gobierno de los hospitales y demás instituciones de asistencia social; subsidios a entidades y particulares; instrucción; cultura general y ejercicios físicos; prostitución; juego; toda clase de vicios y cuestiones relativas a la sanidad general, de los espectáculos y manifestaciones de inmoralidad u obras de prevención.
Art. 39.- Para aquellos asuntos que el Concejo estime conveniente o que no estuvieran previstos en este Reglamento, podrá nombrar o autorizar al presidente para que nombre Comisiones especiales que dictaminen sobre ellos.
Art. 40.- La designación de los Concejales que integrarán las Comisiones permanentes o especiales se hará en lo posible en forma de que los sectores políticos estén representados en la misma proporción que en el seno del Concejo.
Art. 41.- Los miembros de las Comisiones permanentes durarán un año en sus funciones, y los de las Comisiones especiales el tiempo necesario para el desempeño de su cometido.
Art. 42.- El Vicepresidente del Concejo puede formar parte de las Comisiones permanentes o especiales.
Art. 43.- Los Concejales que no sean miembros de una Comisión permanente o especial, pueden asistir a ellas y tomar parte en las deliberaciones, sin derecho a votar.
Art. 44.- Las Comisiones funcionarán con la mayoría de sus miembros en los días y horas que los mismos determinen y deberán reunirse en una de las dependencias del Concejo.
Art. 45.- Si a pesar de las citaciones pertinentes, las Comisiones no celebran sesión, el Presidente de la misma o en su defecto cualquiera de sus miembros, lo pondrá en conocimiento del Concejo para que éste adopte la resolución que estime conveniente.
Art. 46.- Toda Comisión después de considerar un asunto y convenir en los puntos de su dictamen acordará si el informe al Concejo será verbal o escrito y designará el miembro o miembros que deban informar el despacho y sostener la discusión. la minoría de toda Comisión tiene la facultad de producir dictamen en disidencia.
Art. 47.- El Concejo, por intermedio de la Presidencia, hará los requerimientos necesarios a las Comisiones que se encuentren en retardo. Si las razones que dieran no fueran satisfactorias, la Presidencia dará cuenta al Concejo y éste podrá disponer la inmediata incorporación del proyecto al Orden del Día.
Art. 48.- Todo proyecto sometido al estudio de alguna de las Comisiones deberá ser despachado en el término de sesenta días, y en caso de que así no lo hiciera, la Comisión dará cuenta al Concejo de los motivos que le impiden formular despacho.
Art. 49.- Los miembros de las Comisiones permanentes o especiales podrán solicitar al Intendente o a los Jefes de oficinas municipales los datos que crean convenientes para el mejor desempeño de sus funciones.
Art. 50.- El Presidente de cada Comisión dictará las diligencias de trámite o pedidos de informes que estime necesarios para el estudio de los asuntos que le hayan sido encomendados.
Art. 51.- Todo proyecto despachado por una Comisión y el informe escrito, si lo hubiese, será enviado por intermedio de la Secretaría al Presidente del Cuerpo, quien lo pondrá en conocimiento del Concejo.
Art. 52.- Todo proyecto despachado por una Comisión y el informe escrito, si lo hubiere, será impreso y distribuido a los Concejales por intermedio de la secretaría del Concejo. Las Comisiones podrán presentar proyectos como despachos de comisión.
Art. 53.- Cuando una Comisión tenga varios asuntos sobre la misma materia, podrá resumirlos y formular un solo despacho.
Art. 54.- Cuando un proyecto deba ser estudiado por varias Comisiones, éstas lo tratarán en forma conjunta, produciendo sus respectivos despachos por separado.
Art. 55.- El secretario de cada Comisión tendrá las siguientes obligaciones: realizar las gestiones que le encomienden los miembros de la Comisión; resumir los antecedentes de cada proyecto, indicando las disposiciones vigentes que se refieran a la cuestión; citar a la Comisión por indicación del Presidente; ordenar los asuntos sometidos a la Comisión por orden de prioridad o por la preferencia sancionada por el Concejo.

CAPÍTULO VII
De la Presentación, Redacción y Trámite de los Proyectos
Art. 56.- Los proyectos que se presenten al Concejo se denominarán:
a) Ordenanza, si crea, reforma, suspende o deroga una regla general cuyo cumplimiento compete a la Municipalidad.
b) Decreto, si tiene por objeto el rechazo de solicitudes particulares, la adopción de medidas relativas a la composición u organización interna del Concejo y en general toda disposición de carácter imperativo que no requiera promulgación del Departamento Ejecutivo.
c) Resolución, si tiene por objeto expresar una opinión del Concejo sobre cualquier asunto de carácter público o privado, o manifestar su voluntad de practicar algún acto en tiempo determinado.
d) Comunicación, si tiene por objeto contestar, recomendar, pedir o exponer algo.
Art. 56 bis.- Expediente 58/84.
Art. 1º.- Todo proyecto, cualquiera sea su carácter y origen, deberá tener entrada en la Secretaría del Concejo hasta 72 horas antes de la celebración de la próxima sesión del H.C.D., ya sea para su inclusión en dicha o en posteriores sesiones.  En igual plazo deberán ser presentados los despachos de las Comisiones para su tratamiento en la sesión respectiva.  Al mero efecto ejemplificativo, el día martes a las 24 horas, será tomado como el momento de recepción de expedientes en el caso de que la reunión sea el día viernes.
Art. 2º.- El Honorable Concejo Deliberante fijará las excepciones al artículo anterior, cuando lo estime conveniente, siendo necesario para dicho fin la conformidad total y absoluta de los presidentes de cada uno de los bloques integrantes del mismo, o de quienes los sustituyan naturalmente conforme lo prevé el reglamento interno.
Art. 57.- Los proyectos de Ordenanza serán fundados por escrito, y su autor tendrá derecho a usar de la palabra para ampliar o aclarar los conceptos emitidos en sus fundamentos, en ocasión de presentarse el proyecto al Cuerpo. Los proyectos de decreto, resolución o Comunicación podrán ser fundados por escrito o verbalmente, para lo cual el autor dispondrá de veinte minutos, prorrogables por decisión del Concejo. En el caso de que la iniciativa mereciera oposición, el autor podrá usar nuevemente de la palabra durante diez minutos.
Art. 58.- Los proyectos de Ordenanza serán anunciados en la primera sesión del Concejo después de su presentación, destinándose sin más trámite a la Comisión que el Presidente estime corresponder, salvo resolución expresa del Concejo.
Art. 59.- Ni el autor de un proyecto que esté aún en poder de la Comisión o que el Concejo esté considerando, ni la Comisión que lo haya despachado podrá retirarlo o modificarlo, a no ser por resolución del Concejo mediante petición del autor o de la Comisión en su caso.
Art. 60.- Todo proyecto o asunto que no fuere votado o considerado definitivamente en el período de sesiones que se presente o en el siguiente, será pasado directamente al archivo. El Presidente dará cuenta al comenzar las sesiones ordinarias de los asuntos que hayan caducado en virtud de este artículo.
Art. 61.- Los proyectos de Decreto, Resolución y Comunicación se considerarán sobre tablas en el orden en que hayan tenido entrada al Concejo, salvo resolución expresa en el sentido de que sea destinado a Comisión.
Art. 62.- Los proyectos de Ordenanza que importen gastos o cualquier otra erogación, no podrán ser tratados sin despacho de Comisión.

CAPÍTULO VIII
De las Mociones
Art. 63.- Toda proposición hecha por un Concejal desde su banca, es una moción. Las habrá de orden, de preferencia, de sobre tablas y de reconsideración.
Art. 64.- Es moción de orden toda proposición que tenga alguno de los siguientes objetos:
1.) Que se levante la sesión.
2.) Que se pase a cuarto intermedio.
3.) Que se declare libre el debate.
4.) Que se cierre el debate.
5.) Que se pase al Orden del Día.
6.) Que se trate una cuestión de privilegio.
7.) Que se rectifique la votación.
8.) Que se aplace la consideración de un asunto que está en discusión o en el Orden del Día, por tiempo determinado o indeterminado.
9.) Que el asunto vuelva o se envíe a Comisión.
10.) Que el Concejo se constituya en Comisión.
11.) Que se declare en sesión permanente.
12.) Que para la consideración de un asunto de urgencia o especial, el Concejo se aparte del Reglamento.
Art. 65.- Las mociones de orden serán previas a todo otro asunto, aún cuando se esté en debate. Las comprendidas en los siete primeros incisos serán puestas a votación por la Presidencia, sin discusión. las restantes se discutirán brevemente, no pudiendo cada Concejal hablar sobre ellas más de una vez, con excepción del autor que podrá hacerlo dos veces.
Art. 66.- Las mociones de orden podrán repetirse durante la misma sesión sin necesidad de reconsideración.
Art. 67.- Es moción de preferencia toda proposición que tenga por objeto anticipar la consideración de un asunto que figure en el Orden del Día. Si la sesión fuera levantada o el Concejo quedare sin número, las preferencias votadas no caducarán y se considerarán por su orden en la sesión siguiente con prelación a todo otro asunto.
Art. 68.- Si el asunto tiene despacho de Comisión se requerirá mayoría de los votos de los Concejales presentes para que prospere la moción de preferencia. Si no tiene despacho serán necesarios los dos tercios de votos de los Concejales
Art. 69.- Es moción de sobre tablas toda proposición que tenga por objeto considerar inmediatamente de aprobada ella, un asunto que no figure en el Orden del Día, tenga o no despacho de Comisión. Aprobada una moción de sobre tablas, el asunto que la motiva será tratado de inmediato por el Concejo, con prelación a todo otro asunto o moción.
Art. 70.- Las mociones de sobre tablas necesitarán para su aprobación los dos tercios de votos de los miembros presentes, y solo podrán considerarse hasta tres proyectos de ese carácter en cada sesión. Por resolución de los dos tercios de votos del total de los miembros del Concejo, podrá tratarse mayor número de asuntos sobre tablas, debiendo considerarse en el orden en que fueron propuestos.
Art. 71.- Es moción de reconsideración toda proposición que tenga por objeto rever una sanción del Concejo, sea en general o en particular. Estas mociones sólo podrán formularse mientras el asunto se esté considerando o en la sesión en que quede terminado, y requerirán para su aceptación los dos tercios de los Concejales presentes.

CAPÍTULO IX
Del Orden de la Palabra
Art. 72.- La palabra será concedida a los Concejales en el orden siguiente:
1.) Al miembro informante de la mayoría de la Comisión que haya dictaminado sobre el asunto en discusión.
2.) Al miembro informante de la minoría de la Comisión, si ésta se encontrara dividida.
3.) Al autor del proyecto es discusión.
4.) A los demás Concejales, en el orden en que soliciten. El autor del proyecto tendrá derecho a usar dos veces de la palabra.
Art. 73.- Los miembros informantes de la Comisión tendrán siempre derecho a hacer uso de la palabra, para contestar observaciones. En caso de discrepancia entre el autor del proyecto y la Comisión, aquél podrá hablar último.
Art. 74.- Con excepción de los miembros informantes de la mayoría o minoría de las Comisiones, Intendente Municipal o Secretario y autores de proyectos, que podrán hacerlo por treinta minutos, ningún Concejal podrá hablar sobre un asunto en discusión más de quince minutos. El Concejo, a solicitud del interesado, podrá ampliar ese plazo.
Art. 75.- Si dos Concejales pidieran a un mismo tiempo la palabra, la obtendrá el que se proponga combatir la idea en discusión, si el que le precediera la ha defendido, o viceversa.
Art. 76.- Si la palabra fuere pedida por dos o más Concejales que no estuviesen en el caso previsto por el artículo anterior, el Presidente les acordará la palabra en el orden que estime conveniente, debiendo preferir a los Concejales que aún no hubieren hablado.

CAPÍTULO X
De la consideración en general y en particular
Art. 77.- Todo proyecto o asunto que deba ser considerado por el Concejo pasará por dos discusiones: en general y en particular. La discusión en general tendrá por objeto la idea fundamental del asunto, considerado en conjunto. La discusión en particular versará sobre cada uno de los distintos artículo o capítulos del proyecto, debiendo recaer votación sobre cada uno.
Art. 78.- Durante la discusión en general podrán traerse referencias, concordancias o derivados, como así también aquellos antecedentes que permitan mayor conocimiento del asunto en debate.
Art. 79.- En la discusión en general pueden presentarse otros proyectos sobre la misma materia en sustitución del primero, debiendo el Concejo resolver de inmediato, sin discusión, qué destino deberá dársele. Si resolviere considerar los nuevos proyectos, esto se hará en el orden en que hubiesen sido presentados, no pudiéndose tomar en consideración ninguno de ellos, sino después de rechazado o retirado el anterior.  Cerrada la discusión, el Concejo se pronunciará inmediatamente al respecto.
Art. 80.- Un proyecto que después de ser sancionado en general o en general y parcialmente en particular, vuelva a Comisión, al ser despachado nuevamente, seguirá el trámite ordinario de todo proyecto, debiendo la discusión iniciarse por la parte no aprobada aún por el Concejo.
Art. 81.- Siempre que de la discusión de un proyecto surja la necesidad de armonizar ideas, concretar soluciones, redactarlo con mayor claridad, tomar datos o buscar antecedentes, el Presidente podrá invitar al Concejo a pasar a un breve cuarto intermedio, a los efectos de facilitar y encontrar la solución. Una vez reanudada la sesión, si se proyectase alguna modificación al despacho, tendrá preferencia en la discusión el modificado. En caso contrario continuará la discusión pendiente.
Art. 82.- En la consideración en particular de un proyecto la discusión será libre, pero deberá limitarse concretamente al asunto y a la redacción y detalles de forma, sin discutir el propósito fundamental aprobado en general.
Art. 83.- Durante la consideración en particular de un proyecto, podrán presentarse otro u otros artículos que, o sustituyan parcial o totalmente al que se está disintiendo, o modifiquen, adicionen, o supriman algo de él. Cuando la mayoría de la Comisión acepte la supresión, modificación o sustitución, ésta se considerará parte integrante del despacho.
Art. 84.- En cualquiera de los casos a que se refiere el artículo anterior, el nuevo artículo o artículos deberán presentarse escritos: si la Comisión no los aceptase, se votará en primer término su despacho, y si éste fuese rechazado, el nuevo artículo o artículos serán considerados en el orden en que hubiesen sido propuestos.
Art. 85.- Antes de entrar el Concejo a considerar algún asunto, podrá constituirse en Comisión con el objeto de conferenciar sobre la materia, para lo cual deberá preceder sanción del Concejo, a petición verbal de uno o más Concejales, la que será votada inmediatamente. En la discusión en Comisión, no se observará, si se quiere, uniformidad en el debate, pudiendo, en consecuencia, cada Concejal hablar indistintamente sobre los diversos puntos que el asunto comprende.
Art. 86.- La discusión del Concejo en Comisión será siempre libre y no se tomará votación sobre ninguna de las cuestiones que hubiesen sido objeto de aquélla.
Art. 87.- A las sesiones del Concejo en Comisión podrán concurrir las personas que éste, por proposición y resolución especial, acuerde invitar para ser oídas sobre el asunto que en ellas se consideren.
Art. 88.- El Concejo, cuando lo estime conveniente, declarará cerrada la reunión en comisión por indicación del Presidente o moción verbal de un Concejal.
Art. 89.- El Concejo, al considerar un asunto en general y en particular, podrá declarar libre el debate, previa una moción de orden al efecto, aprobada sin discusión por dos tercios de votos de los Concejales presentes. Declarado libre el debate, cada Concejal tendrá derecho a hablar cuantas veces lo estime conveniente, sin limitación de tiempo, pero exclusivamente sobre el asunto sometido a discusión.
Art. 90.- Los proyectos de Ordenanzas que hubieren recibido sanción definitiva en el Concejo, serán comunicados al Departamento Ejecutivo para su promulgación.

CAPÍTULO XI
Del Orden de la Sesión
Art. 91.- A la hora fijada para la sesión, el Presidente llamará al recinto, y si hubiere número para formar quórum, declarará abierta la sesión, dando cuenta del número de Concejales presentes en la casa y en el recinto. Si no hubiese el número necesario para sesionar a la hora señalada o hasta media hora después, quedará levantada la sesión, salvo el pedido de celebrar reunión en minoría apoyado por lo menos por tres Concejales.
Art. 92.- Iniciada la sesión, ningún Concejal podrá retirarse del recinto sin el permiso de la Presidencia. Para hacerlo de la casa, deberá solicitarlo previamente al Concejo, quién lo decidirá mediante una votación.
Art. 93.- El Concejal que no cumpliese con lo dispuesto en el artículo anterior, será pasible de una sanción que establecerá el mismo Concejo.
Art. 94.- Declarada abierta la sesión, el Secretario dará lectura del acta de la sesión anterior, y si no se le hace observación, el Presidente la dará por aprobada, firmando con el Secretario. Habiendo asentimiento general, podrá suprimirse la lectura total o parcial de la misma. Los Concejales podrán indicar los errores del acta y el Secretario anotará las observaciones que se formulen, a fin de salvarlos en la siguiente, excepto resolución en contrario tomada por el Concejo sin discusión.
Art. 95.- Enseguida el Presidente dará cuenta al Concejo, haciendo solamente mención de cada uno, de los asuntos entrados, en el siguiente orden:
1.) De las comunicaciones del Departamento Ejecutivo.
2.) De las demás comunicaciones oficiales.
3.) De los proyectos de Ordenanzas.
4.) De los proyectos de Decreto, Resoluciones y Comunicaciones.
5.) De las peticiones o asuntos particulares.
6.) De los dictámenes de las Comisiones.
Art. 96.- A petición de un Concejal, se leerá por Secretaría cualquier asunto, sea de origen oficial o particular, proyecto o pedido, siempre que sea apoyado por la mayoría del Concejo.
Art. 97.- Al darse lectura de los asuntos, cualquier Concejal puede hacer moción de sobre tablas, en cuyo caso se seguirá el procedimiento indicado en el presente reglamento.
Art. 98.- A medida que se dé cuenta por Secretaría de los asuntos entrados, el Presidente les dará el destino que les corresponda. Los despachos de Comisión serán enunciados y leídos al darse cuenta de los asuntos entrados, debiendo ser puestos a disposición de los Concejales con no menos de veinticuatro horas de anticipación a la sesión en que deban tratarse.
Art. 99.- Los asuntos se discutirán en el orden en que hayan tenido entrada o que figuren impresos en el resumen del Orden del Día, salvo resolución en contrario del Concejo.
Art. 100.- Después de darse cuenta de los asuntos entrados, podrán formularse las mociones diversas que autoriza el reglamento. Consideradas éstas, se pasará a tratar los proyectos de comunicación, decreto, o resolución si los hubiera, y en caso negativo se entrará a considerar todo asunto pendiente de discusión de la sesión anterior, que tendrá prioridad, y no existiendo éstos, se pasará inmediatamente al Orden del Día.
Art. 101.- Agotada la discusión, el Presidente declarará cerrado el debate y pondrá a votación el asunto.
Art. 102.- La sesión no tendrá duración determinada y podrá ser levantada por resolución del Concejo, antes de ser agotados los asuntos a tratar, o del Presidente cuando no hubiere más asuntos, excepto en sesiones extraordinarias.
Art. 103.- Cuando el Concejo hubiese pasado a cuarto intermedio sin fijación de término y no reanudase la sesión en el mismo día, ésta quedará levantada de hecho, excepto en sesiones extraordinarias.
Art. 104.- Las contestaciones del Departamento Ejecutivo a los proyectos de comunicación sancionados, serán leídas y consideradas sobre tablas por el Concejo. Dichos informes serán agregados a los expedientes respectivos destinados al archivo, pero si se considerase conveniente, por el voto de la mayoría, podrán ser enviados a estudio de la Comisión que corresponda por la índole del asunto.

CAPÍTULO XII
De las Interrupciones y de los llamamientos a la Cuestión y al Orden
Art. 105.- El orador, al hacer uso de la palabra, se dirigirá siempre a la Presidencia o a los Concejales en general, y deberá evitar, en lo posible, designar a estos últimos por sus nombres. Ningún Concejal podrá ser interrumpido mientras tenga la palabra, a menos que se trate de alguna explicación pertinente, y esto mismo sólo será permitido con la autorización del presidente y consentimiento del orador. Son absolutamente prohibidas las discusiones en forma de diálogo.
Art. 106.- Sólo el que fuese interrumpido tendrá derecho para pedir al Presidente que haga observar el artículo anterior.
Art. 107.- El Presidente por sí o a petición de cualquier Concejal, deberá llamar a la cuestión al orador que saliese de ella.
Art. 108.- Si el orador pretendiera estar en la cuestión, el Concejo lo decidirá inmediatamente por una votación sin discusión, y continuará aquél con la palabra en caso de resolución afirmativa.
Art. 109.- Un orador falta al orden cuando no se dirige al Presidente o cuando incurre en personalidad, insultos o interrupciones reiteradas.
Art. 110.- Si se produjese el caso a que se refiere el artículo anterior, el Presidente por sí o a petición de cualquier Concejal, si la considera fundada, invitará al que hubiere motivado el incidente, a explicar o retirar sus palabras. Si el Concejal accediese a la indicación, proseguirá el debate sin más ulterioridad, pero si se negare o las explicaciones no fuesen satisfactorias, el Presidente lo llamará la orden. El llamamiento al orden se consignará en el acta.
Art. 111.- Cuando un Concejal ha sido llamado al orden por dos veces en la misma sesión, si se aparta de él una tercera vez, el Concejo, a propuesta del Presidente o de cualquiera de sus miembros, podrá prohibirle el uso de la palabra el resto de la sesión.
Art. 112.- En el caso de que un Concejal incurra en una falta más grave que las prevenidas en el artículo anterior, el Concejo, a indicación del Presidente o por moción verbal de cualquiera de sus miembros, podrá suspenderlo por un término que no pase de un mes, necesitándose para este caso los dos tercios de votos de los miembros presentes.

CAPÍTULO XIII
De las Votaciones
Art. 113.- Los modos de votar serán dos solamente. Uno nominal, que se dará de viva voz y por cada Concejal, invitado a ello por el Secretario, y el otro por signos, que consistirá en levantar la mano para expresar la afirmativa. Habrá de practicarse votación nominal, que será tomada por orden alfabético, cuando una quinta parte del Concejo apoye la moción; cuando deban efectuarse nombramientos o designaciones, y cuando se adopten sanciones que importen gastos. para que se compute el voto de un Concejal es preciso que ocupe una banca.
Art. 114.- Cuando se vote une Ordenanza que autorice gastos, se dejará constancia en el acta de la sesión, de los Concejales que no lo hubieran autorizado. En caso de que ningún Concejal observe este procedimiento, se entenderá que todos lo hicieron por la afirmativa a los fines de establecer su responsabilidad.
Art. 115.- Toda votación se contraerá a un solo y determinado artículo, proposición o período, más cuando éstos contengan varias ideas separables, se votará por partes. si así lo pidiera cualquier Concejal.
Art. 116.- Toda votación se reducirá a la afirmativa o negativa, precisamente en los términos en que está escrito el artículo, proposición o período que se vota.
Art. 117.- Para las resoluciones del Concejo será necesaria mayoría de los votos emitidos por los miembros presentes, salvo los casos en que este reglamento o la Ley Orgánica de las Municipalidades, exijan dos tercios de votos o más.
Art. 118.- Si se suscitaren dudas respecto del resultado de la votación, cualquier Concejal podrá pedir rectificación, la que se practicará con los mismos Concejales que hubiesen tomado parte en ella.
Art. 119.- Si una votación se empatase, se reabrirá la discusión, y si después se produjera un nuevo empate decidirá el Presidente, que tendrá al efecto doble voto.
Art. 120.- Ninguna sanción del Concejo respecto de proyectos de Ordenanza, de Decreto o Resolución, sea en general o en particular, podrá ser reconsiderada total o parcialmente, a no ser por moción hecha en la misma sesión en que el Decreto, Resolución, Ordenanza o articulo estuvieren o hubiesen estado pendientes.
Art. 121.- Ningún Concejal podrá dejar de votar sin permiso del Concejo, ni fundar o aclarar el alcance de su voto ya emitido; pero tendrá derecho a pedir la consignación de su voto en el acta.
Art. 122.- Antes de cada votación, el Presidente llamará, para tomar parte en ella, a los Concejales que se encuentran en antesalas.

CAPÍTULO XIV
De la Asistencia del Intendente
Art. 123.- El Intendente podrá concurrir personalmente o hacerse representar por su Secretario, a las sesiones del Concejo cuando lo juzgue oportuno. El Concejo puede requerirlos para suministrar verbalmente o por escrito los informes que considere necesarios. El Intendente o su Secretario podrán tomar parte de los debates, pero no votar.  La falta de concurrencia sin causa justificada del Intendente o su Secretario, cuando sea requerida su presencia por el Concejo o la negativa de los mismos a suministrar la información que le sea solicitada por dicho Cuerpo, podrá ser considerara falta grave.
Art. 124.- Cuando el Intendente o su secretario concurran en virtud de un llamamiento, el Presidente les comunicará el motivo de la interpelación en nombre del Concejo.
Art. 125.- Si los informes requeridos se refiriesen a asuntos pendientes ante el Concejo, la citación del Intendente se hará inmediatamente; más si ellos versaren sobre actos de administración o sobre negocios extraños a la discusión del momento, se determinará de antemano el día en que deban suministrarse.
Art. 126.- Inmediatamente después que hubiere hablado el representante del departamento Ejecutivo, lo hará el Concejal interpelante si lo desea, y luego los otros que los soliciten. En ningún caso, a excepción de aquel representante y del Concejal interpelante, los Concejales podrán hablar más de quince minutos.
Art. 127.- Si el Concejal interpelante u otro creyesen conveniente proponer alguna Ordenanza o Decreto relativo a la materia que motivó el llamamiento, el proyecto respectivo seguirá los trámites ordinarios. podrá ser presentado inmediatamente después de terminada la interpelación o en otra sesión del Concejo.

CAPÍTULO XV
De los Empleados y Policías del Concejo
Art. 128.- El Presidente organizará las funciones del personal administrativo y de servicio, teniendo en cuenta el mejor desenvolvimiento del Concejo.
Art. 129.- Solamente podrán entrar al recinto del Concejo durante las sesiones de éste, aquellas personas que deban hacerlo por la naturaleza de sus funciones y las que tengan un permiso especial acordado por el Cuerpo.
Art. 130.- El Presidente está facultado para hacer salir inmediatamente de la casa a toda persona que desde la barra o cualquier otro lugar efectúe manifestaciones inconvenientes para el normal desarrollo de las deliberaciones del Cuerpo, o realice demostraciones o señal bulliciosa de cualquier índole. El Presidente suspenderá inmediatamente la sesión empleando los medios que juzgue necesarios para restablecer el orden, tan pronto como considerara que éste ha sido alterado dentro o fuera del recinto, en forma que dificulte el desarrollo de la sesión, y si es en el recinto entre Concejales.
Art. 131.- La policía destacada en el Concejo dependerá directamente del Presidente.

CAPÍTULO XVI
De la Observancia y Reforma de este Reglamento
Art. 132.- Todo Concejal puede reclamar al Presidente la observancia de este Reglamento, si juzga que se contraviene a él. Más si el autor de la supuesta infracción pretendiera no haber incurrido en ella, lo resolverá inmediatamente el Cuerpo por una votación sin discusión, en la que no intervendrá el supuesto infractor.
Art. 133.- Todas las resoluciones que el Concejo expida, en virtud de lo prevenido en el artículo anterior, o que expida en general, sobre puntos de disciplina o de forma, se tendrán presentes para el caso de reformar o corregir este Reglamento.
Art. 134.- Ninguna disposición de este Reglamento podrá ser alterada ni derogada por resolución sobre tablas.
Art. 135.- Si ocurriese duda sobre la interpretación de alguno de loas artículos de este Reglamento, deberá resolverse inmediatamente por una votación del Concejo, previa la discusión correspondiente.
Art. 136.- El presente Reglamento subsistirá mientras no sea derogado o reformado mediante una sanción especial del mismo Concejo.
Art. 137.- Este Reglamento será impreso y distribuido entre los Concejales, y entrará a regir inmediatamente después de su sanción Dado en la Sala de Sesiones del Honorable Concejo Deliberante de Lobos a diecinueve días del mes de Octubre del año mil novecientos cincuenta y uno.

GREGORIO F. BENITEZ ANDRÉS YANZIG
SECRETARIO PRESIDENTE
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
