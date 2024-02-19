<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Ecología
    .franja_content.mb-5
      .franja(style='bottom: 26%; height: 150px').ms-5
      .content
        .row.justify-content-center.align-items-center
          .col-lg-5: img(src="@/assets/curso/images/tema1/img_1.png")
          .col-lg-7
            p.mb-4 El desarrollo de prácticas agrícolas sostenibles y basadas en el respeto y protección de la biodiversidad requiere, en primera medida, de la comprensión de las complejidades que se dan al interior de los ecosistemas naturales y de la disciplina que se encarga de estudiar las interacciones que surgen entre los diferentes organismos y su entorno.
              br
              br
              | La ecología se puede definir como el “estudio de los sistemas de la Tierra conformados por los organismos vivientes y el entorno inanimado con el cual interactúan directa o indirectamente”. Si bien esta definición recoge en buena medida lo que significa la ecología, un concepto más amplio podría ser aquél que hace referencia a esta como “el campo de conocimiento de la composición, estructura y funcionamiento de los ecosistemas”
            
            p.text-end.texto-naranja <b> Etter, 2002 </b> 

    p.text-center.mb-5.fw-bold En relación directa con la ecología, aparecen otros conceptos y aspectos de suma importancias, tales como:
    .row.justify-content-center.align-items
      .col-lg-10 
        LineaTiempoD.color-secundario.especial
          .row.color-custom(numero="1" titulo="Ecosistema").align-items-center.p-4
            .col-lg-7
              p Este concepto ha tenido diferentes transformaciones a lo largo de la historia. En un principio, se aplicaba únicamente a sistemas naturales, dentro de los cuales se daban enfoques descriptivos, funcionales y de ecología del paisaje.
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/images/tema1/img_2.svg', style="width: 450px").m-auto
      
        
          .row.color-custom(numero="2" titulo="Resignificación del concepto ecosistema").m-auto
            .col-lg-7
              p Poco a poco, diversas corrientes de pensamiento fueron ajustando el concepto e integrando elementos como el ser humano y su capacidad para incidir en su entorno. De esta manera, se consiguió una visión mucho más amplia del ecosistema hasta llegar a lo que existe hoy día, donde “el papel del hombre como factor formador del paisaje adquiere mayor trascendencia en la configuración ecosistémica” (Etter 2002).
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/images/tema1/img_4.svg', style="width: 450px").m-auto
          
          .row.color-custom(numero="3" titulo="Interdependencias del ser humano y el mundo").m-auto
              .col-lg-7
                p Es así como se evidencia que las actividades humanas tienen la capacidad de incidir en el paisaje y en las relaciones que se dan entre los demás organismos que integran los ecosistemas, por lo que la unidad productiva no puede verse como un ente aislado del territorio, sino que, por el contrario, se constituye en una parte del entramado de procesos e interdependencias que se constituyen a su alrededor. 
              .col-lg-5.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/images/tema1/img_5.png', style="width: 450px").m-auto
          
          .row.color-custom(numero="4" titulo="Comprensión de los ecosistemas y su funcionamiento").align-items-center.p-4
            .col-lg-7
              p Para entender un poco más lo que sucede al interior de los ecosistemas y analizar la forma como a través de la intervención humana se pueden transformar las dinámicas naturales, es necesario conocer qué elementos los integran y cómo están distribuidos dentro del paisaje.
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/images/tema1/img_6.png', style="width: 450px").m-auto
    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1  Factores bióticos
    p.mb-3 Los factores bióticos que, a menudo, se catalogan como componentes bióticos del ecosistema o, simplemente, como biota, hacen referencia a todos los organismos vivos presentes en un territorio y a las interrelaciones que se dan entre estos.
    p.text-center <b>Es importante tener en cuenta los siguientes aspectos clave, en lo relacionado con la biota y la clasificación de los organismos que la componen:</b>

    .container.bg-white.p-4.p-md-5.fondo-1
      .row.justify-content-center.mb-5
        .col-lg-3.col-auto.mb-3.mb-lg-0
          .tarjeta.tarjeta-up
            img(src="@/assets/curso/1.jpg", alt= "")
            .tarjeta-up__content.bg-1
              h4.text-center.mt-4 Autótrofos
              p Dentro de los organismos que componen la biota existen a su vez varias clasificaciones donde es posible encontrar autótrofos o productores, que son aquellos capaces de sintetizar o de producir su propio alimento. 
        .col-lg-3.col-auto.mb-3.mb-lg-0
          .tarjeta.tarjeta-up
            img(src="@/assets/curso/2.jpg", alt= "")
            .tarjeta-up__content.bg-2
              h4.text-center.mt-4 Heterótrofos
              p En segunda instancia se encuentran los heterótrofos, es decir, aquellos que deben ingerir sus alimentos ya sintetizados (o alimentarse de otros). 
        .col-lg-3.col-auto.mb-3.mb-lg-0
          .tarjeta.tarjeta-up
            img(src="@/assets/curso/3.jpg", alt= "")
            .tarjeta-up__content.bg-1
              h4.text-center.mt-4 Saprófitos
              p Finalmente, los descomponedores, también llamados saprófitos, que se alimentan de la materia orgánica en descomposición. 
        .col-lg-3.col-auto.mb-3.mb-lg-0
          .tarjeta.tarjeta-up
            img(src="@/assets/curso/4.jpg", alt= "")
            .tarjeta-up__content.bg-2
              h4.text-center.mt-4 Biota en los cultivos de café
              p En el cultivo de café, es posible encontrar todos estos organismos, en mayor o menor escala, cada uno de ellos cumpliendo con su función biológica.    

    
    p.mb-3 Dentro de los factores bióticos existen diferentes niveles de organización que van desde la célula hasta la ecosfera, pasando por tejidos, órganos, organismos y poblaciones. 

    p.mb-5 En la figura 1 se evidencian los niveles jerárquicos existentes en el entorno natural, los cuales están definidos por la complejidad en la constitución y organización de los elementos que intervienen en los procesos biológicos, con base en esto se debe llevar registro en una libreta personal de apuntes.

    .row.justify-content-center
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Figura 1
          span <b>Niveles ecológicos de la jerarquía organizacional</b>
    .row.justify-content-center.align-items.mb-5
      .col-lg-8.mb-3
        img(src="@/assets/curso/images/tema1/piramide.svg", alt= "")

    .fondo-2.p-5
      .row.align-items-center.justify-content-end
        .col-lg-6
          h3.my-3 Fauna y Flora 
          p.mb-1 Para hacer un análisis de los elementos bióticos que hacen parte de los ecosistemas se han creado dos grandes grupos denominados fauna y flora. 

          p.mb-3 El primero de ellos, la fauna, hace referencia a todas las especies animales que concurren en un lugar determinado y su composición y tamaño está definido, entre otros factores, por la existencia de relaciones entre especies, la conducta animal, la adaptabilidad de las especies, sus rasgos migratorios y las condiciones climáticas y de suelos de la región.
          .row.justify-content-center
            .col-lg-12
              ImagenInfografica.color-secundario.mb-5
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/images/tema1/icos.svg')
                .tarjeta.color-custom-info.p-3(x="4.9%" y="48%" numero="")
                  p.text-white.mb-0 Especies que son nativas de la región y que tienen establecido allí su hábitat.
                .tarjeta.color-custom-info.p-3(x="37.7%" y="48%" numero="")
                  p.text-white.mb-0 Cuando dentro del ecosistema, existen especies animales que han sido introducidas y aprovechadas por el ser humano, se habla de fauna doméstica.
                .tarjeta.color-custom-info.p-3(x="72.7%" y="48%" numero="")
                  p.text-white.mb-0 En algunos casos es posible que, de forma accidental o intencional, se introduzcan especies silvestres foráneas dentro de un ecosistema; por lo que, en ese caso en particular, se hablaría de fauna exótica, lo cual en algunas oportunidades puede traer consecuencias muy negativas para el entorno natural.
          
    p.mb-3.p-4 El segundo grupo, la flora, hace referencia a todas las especies de plantas (especies vegetales) que son características de un ecosistema, sin importar su tipo o clase (acuáticas, arbustivas, arbóreas, rastreras, con o sin semillas, nativas, exóticas, etc.). 

    p.text-center <b>Sobre la flora, se debe tener en cuenta los siguientes aspectos clave:</b>    
    .slyder-1.mb-5      
      SlyderA.fondo-3.mb-3.p-5
        .row.align-items-center.justify-content-center
          .col-lg-5
            h3 <b> Adaptación de las especies </b>
            p En los entornos naturales, la presencia de determinadas especies depende de aspectos como clima, precipitación, humedad relativa, altura sobre el nivel del mar, brillo solar y topografía, entre otros.
          .col-lg-4
            figure
              img(src="@/assets/curso/images/tema1/img_8.png" alt="")
        .row.align-items-center.justify-content-center
          .col-lg-5
            h3 <b>Flora nativa o exótica</b>
            p Al igual que ocurre con la fauna, dependiendo de sus características la flora puede ser nativa o exótica. En el caso de las especies cultivadas, estas por lo general han sido adaptadas e introducidas desde diferentes latitudes con condiciones ambientales similares. 
          .col-lg-4
            figure
              img(src="@/assets/curso/images/tema1/img_9.png" alt="")
        .row.align-items-center.justify-content-center
          .col-lg-5
            h3 <b>Orígenes de la agricultura </b>
            p La domesticación de estas especies, su aprovechamiento y tecnificación fue lo que dio origen a la agricultura, la cual es una práctica que la raza humana ha perfeccionado durante miles de años. 
          .col-lg-4
            figure
              img(src="@/assets/curso/images/tema1/img_10.png")
        .row.align-items-center.justify-content-center
          .col-lg-5
            h3 <b>Impactos de las especies exóticas</b>
            p Al igual que con la fauna exótica, las especies vegetales introducidas en ecosistemas naturales pueden generar desbalances que, en ocasiones, conllevan a daños irreversibles. Hay que tener claridad sobre el tipo de vegetación nativa de una región y las interdependencias existentes en los ecosistemas identificados, con el fin de evitar posibles alteraciones. 
          .col-lg-4
            figure
              img(src="@/assets/curso/images/tema1/img_11.png")
        .row.align-items-center.justify-content-center
          .col-lg-5
            h3 <b>Población microbiana</b>
            p Además de la flora y la fauna, existe un componente importante al interior de los ecosistemas, y es el relacionado con la población microbiana que habita en ellos. Estos seres microscópicos son los encargados, en muchas ocasiones, de la descomposición de la materia orgánica en sustancias menos elaboradas las cuales son aprovechadas por las plantas para su nutrición.  
          .col-lg-4
            figure
              img(src="@/assets/curso/images/tema1/img_12.png")
  
    Separador 
    
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2   Factores abióticos
    
    p.mb-3 Para que existan los elementos bióticos, necesariamente tienen que existir los elementos abióticos, porque ellos constituyen el entorno físico en el cual transcurre la vida y, además, proporcionan la energía para que los diversos sistemas realicen sus funciones biológicas.

    p.mb-5  A pesar de considerar que los factores abióticos no tienen vida, sí son necesarios para que esta se dé en diferentes niveles de organización. 

    p.mb-5.text-center <b>Dentro de los principales factores abióticos es posible establecer las siguientes categorías:</b>
    .row.mb-5.justify-content-center
        .col-lg-3.col-auto.mb-3.mb-lg-0
          .tarjeta.tarjeta-up
            img(src="@/assets/curso/5.jpg", alt= "")
            .tarjeta-up__content.bg-1
              h4.text-center.mg-top-4 Climáticos
              p Como la temperatura, vientos o la radiación solar.
        .col-lg-3.col-auto.mb-3.mb-lg-0
          .tarjeta.tarjeta-up
            img(src="@/assets/curso/6.jpg", alt= "")
            .tarjeta-up__content.bg-2
              h4.text-center.mg-top-4 Edáficos
              p Los que constituyen las propiedades del suelo, tanto físicas (textura, estructura, porosidad, capacidad de retención, entre otras) como químicas (acidez, conductividad eléctrica, salinidad, etc.).
        .col-lg-3.col-auto.mb-3.mb-lg-0
          .tarjeta.tarjeta-up
            img(src="@/assets/curso/7.jpg", alt= "")
            .tarjeta-up__content.bg-1
              h4.text-center.mg-top-4 Hídricos o hidrológicos
              p  Referentes a la disponibilidad, flujo y calidad del agua.
        .col-lg-3.col-auto.mb-3.mb-lg-0
          .tarjeta.tarjeta-up
            img(src="@/assets/curso/8.jpg", alt= "")
            .tarjeta-up__content.bg-2
              h4.text-center.mg-top-4 Geográficos
              p Entre los cuales están la altura sobre el nivel del mar, la pendiente y la orientación. 
    .row.align-items-center.justify-content-center
      .col-lg-10
        .cajon.color-primario.bg--1.p-4.mb-3
          .row.align-items-center.justify-content-center 
            .col-lg-2
              img(src="@/assets/curso/images/tema1/ico_4.svg", style="width: 100px").m-auto
            .col-lg-10
              p.mt-3 “La interacción entre los organismos vivos y su entorno físico (materia y energía) en cada nivel, produce sistemas funcionales característicos”. Dicho en otras palabras, “la comunidad (de organismos bióticos) y el entorno sin vida (factor abiótico) funcionan de manera conjunta como un sistema ecológico o ecosistema. 
                p.text-color <b>(Odum E. 2006)</b>
        p.mb-5 Al trasladar este concepto a la finca cafetera, es evidente que, para que el cultivo sea exitoso, se requiere de la presencia de factores bióticos, como microorganismos del suelo, polinizadores, descomponedores de materia orgánica, entre otros, y elementos abióticos como luminosidad, temperatura, agua y nutrientes disueltos en el suelo.

    .titulo-cafe.mb-5
      h3.mb-0.text-center.color-secundario.font-weight-bold.me-4
        |Recursos hídricos
      .titulo-cafe_icon: img(src='@/assets/curso/17.svg' alt='Icono de la categoria')
    .franja_content.mb-5
      .franja.d-none.d-lg-block(style='bottom: 28%; height: 213px')
      .content
        .row.justify-content-center.align-items-center
          .col-lg-9
            p.mb-4 El agua es fundamental para que se dé la vida, porque todos los procesos biológicos que surgen al interior de los ecosistemas requieren de este importante recurso. En la actualidad, buena parte de las fuentes hídricas en Colombia, se encuentran afectadas en mayor o menor medida por diversos fenómenos, los cuales ponen en riesgo su disponibilidad y calidad.
            p.fw-bold.ms-5 Entre los factores que más amenazan la disponibilidad del agua están:
            ul.lista-ul--color.mt-3.mb-5.ms-5
              li.mb-0 
                i.fas.fa-circle.cac.mx-2
                | La expansión de los centros urbanos.
              li.mb-0 
                i.fas.fa-circle.cac.mx-2
                | La falta de controles estrictos a la industria.
              li.mb-0 
                i.fas.fa-circle.cac.mx-2
                | El auge de la minería informal.
              li.mb-0 
                i.fas.fa-circle.cac.mx-2
                | El uso indiscriminado de pesticidas.
              li.mb-0 
                i.fas.fa-circle.cac.mx-2
                | El deterioro de las coberturas vegetales.
              li.mb-0 
                i.fas.fa-circle.cac.mx-2
                | El desarrollo de prácticas agrícolas poco sostenibles.
            p Además de la pérdida de este importante recurso, su mal manejo y contaminación se ha convertido en un problema de salud pública, debido a que el deterioro de la calidad del agua tiene una relación directa con la alta incidencia de diversas enfermedades que afectan a toda la población. 
            
          .col-lg-3.col-auto: img(src="@/assets/curso/images/tema1/paisaje.png")

    

    .row.align-items-center.mt-3.d-block.d-lg-none
      p Además de la pérdida de este importante recurso, su mal manejo y contaminación se ha convertido en un problema de salud pública, debido a que el deterioro de la calidad del agua tiene una relación directa con la alta incidencia de diversas enfermedades que afectan a toda la población. 
    .titulo-planta.d-flex.align-items-end.mb-3
      .titulo-planta__texto.me-3
        h3.mb-2 Ciclo hidrológico
        hr.m-0
      .titulo-planta__icon: img(src='@/assets/curso/21.svg', alt='Texto que describa la imagen' style='width: 36px')

    p.mb-5 Para profundizar en los aspectos más relevantes, relacionados con el ciclo hidrológico, se debe analizar el recurso que se muestra a continuación; procurar llevar registro de ello en una libreta personal de apuntes.

    .row.justify-content-center.align-items
      .col-lg-8.mb-3
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src="@/assets/curso/images/tema1/img_13.svg", alt= "")
          .tarjeta.tarjeta.info-2.p-3(x="36%" y="28%" numero="1")
            h3 1. Precipitación
            p.mb-0 Se produce por la condensación del vapor de agua liberado en la atmósfera, cuyas partículas al pasar al estado líquido alcanzan su punto de saturación, colisionan, se adhieren y ganan peso hasta que se precipitan por acción de la gravedad. 
          .tarjeta.tarjeta.info-2.p-3(x="10%" y="78%" numero="2")
            h3 2. Infiltración
            p.mb-0 Corresponde al fenómeno mediante el cual el agua de escorrentía penetra en el subsuelo para alimentar los sistemas acuíferos. 
          .tarjeta.tarjeta.info-2.p-3(x="28%" y="72%" numero="3")
            h3 3. Escorrentía
            p.mb-0 El agua dulce que cae en estado sólido o líquido escurre a través de la superficie terrestre en forma de quebradas o ríos hasta llegar al mar o alimentar los acuíferos subsuperficiales. 
          .tarjeta.tarjeta.info-2.p-3(x="60%" y="36%" numero="4")
            h3 4. Evaporación
            p.mb-0 Transformación del agua en vapor de agua por efecto de la radiación solar. 
          .tarjeta.tarjeta.info-2.p-3(x="92.7%" y="36%" numero="5")
            h3 5. Transpiración
            p.mb-0 Acción por medio de la cual las plantas, a través de sus estomas, liberan agua a la atmósfera en forma gaseosa.

    p.fw-bold.text-center.mb-5 El ciclo del agua es, tal vez, uno de los más conocidos, no solo por la importancia que tiene este líquido vital, sino también por:

    .row.justify-content-center.align-items.mb-5.mx-0
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src="@/assets/curso/images/tema1/ico_7.svg", alt= "",style="width:150px; display:block; margin:0 auto;")
          .tarjeta.color-tarjeta-1.p-4
              h3.mt-3 Impacto en procesos naturales y humanos
              p Es muy alta la influencia que tiene este elemento en los procesos naturales y en las actividades humanas, que tienen lugar en la superficie terrestre.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src="@/assets/curso/images/tema1/ico_8.svg", alt= "",style="width:150px; display:block; margin:0 auto;")
          .tarjeta.color-tarjeta-2.p-4
              h3.mt-3 Dinamicidad del agua
              p Al interior de los ecosistemas el agua mantiene un proceso constante de circulación en medio del cual pasa por todos sus estados, gracias a la acción de factores como la radiación solar, la gravedad y las interacciones que suceden entre la biosfera, la litosfera y la atmósfera.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src="@/assets/curso/images/tema1/ico_9.svg", alt= "",style="width:150px; display:block; margin:0 auto;")
          .tarjeta.color-tarjeta-3.p-4
              h3.mt-3 Condensación
              p El agua que está en los océanos, al ser calentada por la acción de la radiación solar, es impulsada hacia la atmósfera, donde en forma de nubes de vapor de agua y viaja por la acción del viento, hasta encontrar un lugar propicio para su condensación..

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src="@/assets/curso/images/tema1/ico_10.svg", alt= "",style="width:150px; display:block; margin:0 auto;")
          .tarjeta.color-tarjeta-4.p-4
              h3.mt-3 Se renueva naturalmente
              p Gracias al proceso de condensación, el agua nuevamente recupera su forma líquida, para, de esta forma, dar comienzo a un nuevo ciclo.

    .titulo-planta.d-flex.align-items-end.mb-3
      .titulo-planta__texto.me-3
        h3.mb-2 Factores que inciden en la disponibilidad de agua en la finca cafetera
        hr.m-0
      .titulo-planta__icon: img(src='@/assets/curso/21.svg', alt='Texto que describa la imagen' style='width: 36px')
    p.mb-5 Son diversos los elementos que intervienen en la disponibilidad de agua en las fincas cafeteras y estos dependen de las características propias de cada región. 

    p.text-center.mb-3.fw-bold Entre los factores más comunes, que tienen relación directa con la calidad y cantidad de agua disponible, se encuentran:
    .slyder-1.mb-5
      SlyderA.mb-3.p-5
        .row.align-items-center.justify-content-center
          .col-lg-5
            h3 <b> Microclima </b>
            p Al interior de las regiones es posible encontrar microclimas, que son áreas en las que las características climáticas son diferentes a las que predominan en el entorno. Generalmente, los microclimas están supeditados a la vegetación circundante y a la topografía, porque estos tienen la capacidad de modificar las condiciones de una zona en particular y conferirle unas propiedades climáticas especiales. La presencia de microclimas más frescos puede proporcionar las condiciones necesarias para la conservación de las fuentes hídricas. 
          .col-lg-4
            figure
              img(src="@/assets/curso/images/tema1/img_15.png" alt="")
        .row.align-items-center.justify-content-center
          .col-lg-5
            h3 <b>Cobertura vegetal</b>
            p El tipo de cobertura y su conformación tienen una estrecha relación con la protección de los recursos hídricos, porque en zonas donde se conserva la cobertura vegetal, especialmente la nativa, son menos frecuentes los problemas de degradación de los cuerpos hídricos, debido a que se mantiene la humedad natural del suelo.
          .col-lg-4
            figure
              img(src="@/assets/curso/images/tema1/img_16.png" alt="")
        .row.align-items-center.justify-content-center
          .col-lg-5
            h3 <b>Precipitación</b>
            p Los sitios con mayores regímenes de lluvias, por lo general, tienen una mayor riqueza hídrica, aunque existen factores que pueden limitar o favorecer su conservación como son entre otros, la evapotranspiración, la temperatura y las propiedades del suelo.
          .col-lg-4
            figure
              img(src="@/assets/curso/images/tema1/img_17.png" alt="")
        .row.align-items-center.justify-content-center
          .col-lg-5
            h3 <b>Topografía </b>
            p El movimiento del agua a través de la superficie del suelo se ve afectado notablemente por la topografía del terreno, debido a que este factor, dependiendo de la pendiente, puede acelerarlo o ralentizarlo. En regiones con pendientes muy pronunciadas (superiores al 30%) el agua superficial alcanza altas velocidades, por lo que los volúmenes de escorrentía son mucho mayores y, por ende, la disponibilidad del líquido es menor. Por el contrario, las áreas de cultivo con pendientes menores tienen más posibilidades de almacenar agua. 
          .col-lg-4
            figure
              img(src="@/assets/curso/images/tema1/img_18.png")
        .row.align-items-center.justify-content-center
          .col-lg-5
            h3 <b>Composición de los suelos</b>
            p Los suelos juegan un papel muy importante en la disponibilidad de agua debido a que los altos contenidos de arena aumentan la porosidad del suelo, lo cual reduce considerablemente la capacidad de retención. En estos suelos el agua se desplaza hasta áreas más profundas donde no es posible su aprovechamiento. 
          .col-lg-4
            figure
              img(src="@/assets/curso/images/tema1/img_19.png")
    .titulo-planta.d-flex.align-items-end.mb-3
      .titulo-planta__texto.me-3
        h3.mb-2 Importancia de las microcuencas
        hr.m-0
      .titulo-planta__icon: img(src='@/assets/curso/21.svg', alt='Texto que describa la imagen' style='width: 36px')
    p.mb-3.p-4 Las cuencas hídricas son territorios en los que sus aguas, superficiales o subterráneas, vierten a una red natural con uno o varios cauces naturales de caudal continuo o intermitente. Estas a su vez, confluyen en un depósito mayor que puede ser un río, lago o incluso el mar.

    .row.align-items-center.justify-content-center 
      .col-lg-10
        .cajon.color-custom.p-4.mb-3
          .row.align-items-center.justify-content-center 
            .col-lg-2
              img(src="@/assets/curso/images/tema1/ico_13.png", style="width: 100px").m-auto
            .col-lg-10
              p.mb-3 Un conjunto de cuencas, también llamadas zonas hidrográficas, pueden llegar a constituir microcuencas, las cuales están determinadas por el área de drenaje de los principales ríos del país, mientras que una microcuenca, es aquella “que está dentro de una subzona hidrográfica o su nivel subsiguiente, cuya área de drenaje es inferior a 500 Km²” 
                p.text-color <b>(Minambiente, 2018).</b>


    p.text-center.pmb-5 Una microcuenca está conformada por los siguientes componentes:

    .row.justify-content-center.align-items.fondo-16
      .col-lg-8.mb-3
        ImagenInfografica.color-acento-contenido.mb-5
          template(v-slot:imagen)
            figure
              img(src="@/assets/curso/images/tema1/img_20.png", alt= "")
          .tarjeta.tarjeta.info-2.p-3(x="44.6%" y="14.4%" numero="1")
            h3 1. Área de captación
            p Se conforma por las partes más altas de la cuenca en donde la cobertura vegetal tiene una función fundamental en la regulación hídrica al encargarse de capturar el agua que se precipita al suelo en forma de niebla.  
          .tarjeta.tarjeta.info-2.p-3(x="37.4%" y="30.5%" numero="2")
            h3 2. Área de vertientes
            p Se ubica en las partes medias de las montañas que rodean la microcuenca donde afloran las aguas subterráneas filtradas a través del suelo a través de nacimientos, manantiales, arroyos y quebradas de regular caudal. 
          .tarjeta.tarjeta.info-2.p-3(x="51.8%" y="40%" numero="3")
            h3.text-decoration-color 3. Área de confluencia
            p Está conformada por las partes bajas de las montañas, zonas de piedemonte o vegas de ríos. Allí se unen todas las quebradas, arroyos y riachuelos los cuales finalmente tributan al río principal, el cual puede desembocar en otro afluente, en un lago o dirigirse directamente al mar.  
          .tarjeta.tarjeta.info-2.p-3(x="38.5%" y="49.5%" numero="4")
            h3 4. Importante
            p.mb-0 En vista de que en la microcuenca se dan los procesos primarios de captación de aguas, es indispensable, en lo posible, mantener y conservar sus coberturas vegetales nativas, ya que cualquier desequilibrio en la conformación de estos frágiles sistemas naturales puede tener consecuencias bastante negativas en la región.
          .tarjeta.tarjeta.info-2.p-3(x="52.5%" y="87.2%" numero="5")
            h3 5. Fauna presente
            p.mb-0 En estos ecosistemas es posible encontrar múltiples especies animales y de microorganismos que desempeñan funciones biológicas de suma importancia (descomposición de materia orgánica, dispersión de semillas, mantenimiento del equilibrio biológico); por tanto es un deber del productor cafetero velar por su protección y conservación, aun más porque producción cafetera, cada vez, se realiza a mayores altitudes. 
          .tarjeta.tarjeta.info-2.p-3(x="69.5%" y="59%" numero="6")
            h3.text 6. La finca cafetera como parte de un todo
            p.mb-0 Reflexionar sobre las dinámicas al interior del ciclo hidrológico y su interacción con los elementos que intervienen en el movimiento del agua, a través de los ecosistemas, es fundamental para el desarrollo de prácticas que permitan la conservación y la protección de este recurso. Una visión general de la unidad productiva, permite entenderla como parte de un todo y no como un elemento aislado del paisaje natural. 


    .titulo-planta.d-flex.align-items-end.mb-3
      .titulo-planta__texto.me-3
        h3.mb-2 Disponibilidad de recursos hídricos
        hr.m-0
      .titulo-planta__icon: img(src='@/assets/curso/21.svg', alt='Texto que describa la imagen' style='width: 36px')

    p.mb-5 Una de las principales preocupaciones en la administración de los recursos hídricos es la estimación de su disponibilidad, porque de ello dependen aspectos como el arreglo y la organización de la unidad productiva, el tipo de actividades que se puedan desarrollar, las actividades de conservación que se deban adelantar y los mecanismos que se deben tener en cuenta para hacer un uso racional del recurso.

    p.fw-bold.text-center.mb-5 Para lograr esto, en primera instancia es importante caracterizar el agua con que se cuenta en el predio, para lo cual es recomendable:
    .row.justify-content-center
      .col-lg-9
        .row.justify-content-center.mb-5
            .col-lg-4.col-auto.mb-3
              .tarjeta.tarjeta-up
                img(src="@/assets/curso/9.jpg", alt= "")
                .tarjeta-up__content.bg-1
                  h4.text-center.mg-top-6 Identificar los cuerpos de agua 
                  p Presentes en la unidad productiva, bien sean arroyos, ríos, manantiales, lagos o lagunas. 

            .col-lg-4.col-auto.mb-3
              .tarjeta.tarjeta-up
                img(src="@/assets/curso/10.jpg", alt= "")
                .tarjeta-up__content.bg-2
                  h4.text-center.mg-top-6 Estimar cantidad de precipitación
                  p Que se da en un periodo determinado de tiempo con la ayuda de un pluviómetro.
            .col-lg-4.col-auto.mb-3
              .tarjeta.tarjeta-up
                img(src="@/assets/curso/11.jpg", alt= "")
                .tarjeta-up__content.bg-1
                  h4.text-center.mg-top-5 Calcular caudal promedio
                  p  De los cuerpos de agua (en caso de ríos, arroyos, o manantiales) o bien el volumen aproximado (en el caso de lagos, lagunas y reservorios).
            .col-lg-4.col-auto.mb-3
              .tarjeta.tarjeta-up
                img(src="@/assets/curso/12.jpg", alt= "")
                .tarjeta-up__content.bg-2
                  h4.text-center.mg-top-5 Afectaciones
                  p Identificar posibles afectaciones a los recursos hídricos. 
            .col-lg-4.col-auto.mb-3
              .tarjeta.tarjeta-up
                img(src="@/assets/curso/13.jpg", alt= "")
                .tarjeta-up__content.bg-1
                  h4.text-center.mg-top-5 Tiempos propicios
                  p Identificar las épocas de abundancia del recurso y las épocas de escasez.
            .col-lg-4.col-auto.mb-3
              .tarjeta.tarjeta-up
                img(src="@/assets/curso/14.jpg", alt= "")
                .tarjeta-up__content.bg-2
                  h4.text-center.mg-top-5 Análisis técnico
                  p De ser posible, realizar un análisis de aguas en el laboratorio o bajo alguna técnica que de cuenta de su calidad, estado, etc. 
    .row.justify-content-center.align-items.fondo-5.mb-5.p-4
      .col-lg-2
        img.mt-5(src="@/assets/curso/images/tema1/ico_14.svg", style="width: 100px").m-auto
      .col-lg-10
        p.fw-bold  #[span.text-deco1 ¡Importante!.]
        p.mb-3 Para el cálculo de los volúmenes de agua y de los caudales, existen diversas herramientas y metodologías. #[br] Entre las más populares se encuentran:
          ul.lista-ul--color.mt-3
            li 
              i.fas.fa-circle.cac.mx-2
              | Medición de la precipitación. 
            li 
              i.fas.fa-circle.cac.mx-2
              | Cálculo de caudales de tuberías.
            li 
              i.fas.fa-circle.cac.mx-2
              | Cálculo de caudales de ríos y quebradas.
    .titulo-cafe.mb-5
      h3.mb-0.text-center.color-secundario.font-weight-bold.me-4
        |Recursos suelo
      .titulo-cafe_icon: img(src='@/assets/curso/17.svg' alt='Icono de la categoria')
    .franja_content.mb-5
      .franja(style='bottom: 13%; height: 150px')
      .content
        .row.justify-content-center.align-items-center
          .col-lg-5: img(src="@/assets/curso/images/tema1/img_21.jpg")
          .col-lg-7
            p.mb-5 Otro de los factores abióticos que merece especial atención en medio del estudio de los elementos que intervienen en los ecosistemas cafeteros, es el recurso suelo. Este tiene una función primordial en la provisión de nutrientes y anclaje para las plantas, las cuales son la base para la producción de alimento dentro del entorno natural.
            p El suelo es considerado como el componente fundamental del desarrollo agrícola y de la sostenibilidad ecológica; “es la base para la producción de alimentos, piensos, combustibles y fibras y para muchos servicios ecosistémicos esenciales”
              br
              br
              b.text-color (FAO, 2015).
    .row.justify-content-center.align-items.p-5
      .col-lg-6
        p <b>Sin embargo, pese a que este es un recurso finito y que es fundamental para la vida en la tierra, existen factores que amenazan su sostenibilidad, entre ellos:</b>
        ul.lista-ul--color.mt-3
            li.mb-0 
              i.fas.fa-circle.cac.mx-2
              | La destinación de suelos agrícolas a actividades urbanísticas.
            li.mb-0 
              i.fas.fa-circle.cac.mx-2
              | El deterioro de la capa vegetal.
            li.mb-0 
              i.fas.fa-circle.cac.mx-2
              | La implementación de prácticas agrícolas insostenibles.
            li.mb-0 
              i.fas.fa-circle.cac.mx-2
              | La expansión de la ganadería extensiva.
            li.mb-0 
              i.fas.fa-circle.cac.mx-2
              | Los fenómenos erosivos y del desarrollo de actividades productivas en territorios con poca aptitud.
      .col-lg-6
        .row
          .col-lg-3
            img(src="@/assets/curso/images/tema1/ico_16.png", style="width: 120px").m-auto
          .col-lg-9
            p.fw-bold #[span.text-deco1 ¿Qué dice la FAO?]
            p La Organización de las Naciones Unidas para la Alimentación y la Agricultura, FAO, revela que: “El 33 % de la tierra está moderada o altamente degradada debido a la erosión, la salinización, la compactación, la acidificación y la contaminación de los suelos por productos químicos”. Por lo que es necesario que, desde diversos escenarios, se establezcan prioridades para la atención de estas situaciones y se diseñen mecanismos que procuren la protección de este recurso.


    .titulo-planta.d-flex.align-items-end.mb-3
      .titulo-planta__texto.me-3
        h3.mb-2 ¿Qué es el suelo?
        hr.m-0
      .titulo-planta__icon: img(src='@/assets/curso/21.svg', alt='Texto que describa la imagen' style='width: 36px')

    p.mb-3.p-4 El suelo es la capa más superficial de la tierra la cual está constituida por una fracción mineral (rocas degradadas) y una fracción biológica, correspondiente a la materia orgánica que ha sufrido ciclos de descomposición y recirculación durante miles de años.

    .row.justify-content-center.align-items
      .col-lg-4
        img(src="@/assets/curso/images/tema1/img_22.png").m-auto
      .col-lg-8
        TabsA.color-primario.mb-5
    
          .tarjeta_tab.back-tab.p-4(titulo="Funcionalidad de los suelos")
            
            .row 
              .col-lg-8.mb-4
                h4 Funcionalidad de los suelos
                p.mb-3  Además de roca madre y materia orgánica, dentro del suelo confluyen gran cantidad de organismos que contribuyen a la degradación de la materia orgánica y a la liberación de nutrientes que son aprovechados por los organismos autótrofos, como las plantas.
                
          .tarjeta_tab.back-tab.p-4(titulo="Nicho de organismos vivos")
            
            .row 
              .col-lg-8.mb-4
                h4 Nicho de organismos vivos
                p.mb-3 A pesar que generalmente, se piensa en el suelo como un organismo inerte, en realidad es un componente indispensable para la vida capaz de albergar agua, nutrientes, microorganismos y minerales. 
            
          
          .tarjeta_tab.back-tab.p-4(titulo="Transformación de los suelos")
            
            .row 
              .col-lg-8.mb-4
                h4 Transformación de los suelos

                p.mb-3 El suelo es un recurso finito que está en constante transformación y movimiento, solamente que a una escala de tiempo que, por ocasiones, se escapa de la comprensión humana. 


          .tarjeta_tab.back-tab.p-4(titulo="Meteorización")
            
            .row 
              .col-lg-8.mb-4
                h4 Meteorización
                p.mb-3 El proceso mediante el cual la roca madre se degrada y se transforma en suelo, se denomina meteorización y en ella intervienen factores como la humedad, la temperatura, el tipo de material que compone la roca, la precipitación y la acción de los microorganismos, entre otros factores.


          .tarjeta_tab.back-tab.p-4(titulo="Horizontes del suelo")
            
            .row 
              .col-lg-8.mb-4
                h4 Horizontes del suelo
                p.mb-3 Este material mineral descompuesto al integrarse con la materia orgánica se dispone en capas, por lo que es común encontrar lo que se conoce como horizontes del suelo, los cuales varían de una región a otra. 
    p.text-center <b>Sin embargo, es posible identificar cuatro horizontes principales:</b>

    .row.justify-content-center.align-items.fondo-7.mb-5
      .col-lg-12.mb-3
        ImagenInfografica.color-acento-botones.letras-blancas.mb-5
          template(v-slot:imagen)
            figure
              img(src="@/assets/curso/images/tema1/img_23.png", alt= "")
          .tarjeta.info-4.p-3(x="37.4%" y="34.5%" numero="O")
            h3 O. Este horizonte se compone principalmente por materia orgánica. 
          .tarjeta.info-4.p-3(x="37.3%" y="41.4%" numero="A")
            h3 A. Residuos orgánicos en estado de descomposición. Alto contenido de materia orgánica. 
          .tarjeta.info-4.p-3(x="37.3%" y="50.7%" numero="E")
            h3 E. Posee alta concentración de arena y limo sin rasgos de roca madre.
          .tarjeta.info-4.p-3(x="37.3%" y="59.7%" numero="B")
            h3 B. Horizonte de transición compuesto por materiales precipitados del horizonte A. 
          .tarjeta.info-4.p-3(x="37.35%" y="72.2%" numero="C")
            h3 C. Compuesto por materiales resultantes de la descomposición de la roca madre o el material parental. 
          .tarjeta.info-4.p-3(x="37.35%" y="86.3%" numero="D")
            h3 D. Se compone por rocas de gran tamaño que por procesos de meteorización dan origen a la fracción mineral de los horizontes más superficiales.

    .row.justify-content-center
      .col-lg-6
        a.anexo.mb-4(:href="obtenerLink('/downloads/documento1.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Para ampliar los conocimientos en lo referente al suelo y sus generalidades, se debe explorar la información que se encuentra en el siguiente documento.
    .titulo-cafe.mb-5
      h3.mb-0.text-center.color-secundario.font-weight-bold.me-4
        |Factores climáticos
      .titulo-cafe_icon: img(src='@/assets/curso/17.svg' alt='Icono de la categoria')
    .franja_content.mb-5
      .franja(style='bottom: 15%; height: 190px')
      .content
        .row.justify-content-center.align-items-center
          .col-lg-9
            p.mb-5 El tercero de los factores abióticos que se debe tener en cuenta para el estudio de los ecosistemas es el que corresponde a los factores climáticos, los cuales tienen una gran influencia en el desarrollo de plantas y animales, porque elementos como la radiación solar, la temperatura, la precipitación y la humedad relativa, son determinantes en los flujos de la energía que se dan en los entornos naturales.
            p.mb-5 El clima es el conjunto fluctuante de las condiciones atmosféricas, caracterizado por los estados y evoluciones del estado del tiempo, durante un periodo de tiempo y un lugar o región dados, y controlado por los denominados factores forzantes, factores determinantes y por la interacción entre los diferentes componentes del denominado sistema climático (atmósfera, hidrosfera, litosfera, criósfera, biosfera y antropósfera).  
            p.text-end.fw-bold.text-color (IDEAM, 2022)
          .col-lg-3.col-auto: img(src="@/assets/curso/images/tema1/img_24.png")
    p.mb-3.text-center.fw-bold Se debe visualizar el recurso que se muestra a continuación y profundizar en los aspectos más importantes que sobre el clima, se deben tener en cuenta, en el ámbito de la finca cafetera.

    figure.p-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/-jBmkpeXyXM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

  
    .row.justify-content-center.align-items-center.cs.mb-5
      .col-sm-5.col-xl-5.mb-1.mb-xl-0
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor.color-tarjeta-5.p-4
            .tarjeta-flip__img
              figure
                img.img250.mt-4(src="@/assets/curso/images/tema1/ico_flip_1.svg" alt="", style="width:100px; display:block; margin: 0 11rem;")
                h3.text-white.text-center.mt-3 Caracterización climatológica
            .tarjeta-flip__contenido.bgr-flip-b_3.p-3.xl-6
              p.text-white.mb-5   Una de las actividades que se debe realizar en un sistema productivo es consultar la información climatológica de la región en la cual se encuentra ubicado el predio para, de esta forma, conocer las diferentes dinámicas que se presentan en determinado periodo de tiempo.
      .col-sm-5.col-xl-5.mb-1.mb-xl-0
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor.color-tarjeta-6.p-3
            .tarjeta-flip__img
              figure
                img.img250.mt-5(src="@/assets/curso/images/tema1/ico_flip_2.svg" alt="", style="width:100px; display:block; margin: 0 11rem;")
            .tarjeta-flip__contenido.bgr-flip_2.xl-6
              p.text-white.mt-3 Es la entidad estatal encargada de investigar y estudiar la atmósfera, el tiempo y el clima del país. Mucha de la información que se requiere para el desarrollo de actividades productivas, como precipitación anual, temperatura media y brillo solar, se pueden consultar en los canales de información de esa entidad.             
              p.text-white http://www.ideam.gov.co/web/tiempo-y-clima/meteorologia-agricola  

    

  






























</template>

<script>
import TabsA from '@/components/TabsA.vue'
import TabsA2 from '@/components/TabsA2.vue'
export default {
  name: 'Tema1',
  components: {
    TabsA,
    TabsA2,
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.bg--1
  background-color: #fbdca6 !important
.tarjeta-up
  overflow: hidden
  position: relative
  .tarjeta-up__content
    position: absolute
    bottom: -200%
    width: 100%
    height: 90%
    padding: 2rem
    transition: bottom 0.7s ease-in-out
    &.bg-1
        background-color: rgba(167, 85, 50, .9 )
        h1, h2, h3, h4, h5, p
          color: $white
    &.bg-2
        background-color: rgba(205, 180, 122, .9 )
    &.bg-3
        background-color: $color-acento-contenido
    &.bg-4
        background-color: $color-acento-botones
  &:hover
    .tarjeta-up__content
      bottom: 0%
.letras-blancas
  .img-infografica__item__numero
    color: $white !important
    font
</style>
