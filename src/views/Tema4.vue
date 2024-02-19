<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.bg-white.container-top.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Cartografía predial

    .franja_content.mb-5
      .franja(style='bottom: 15%; height: 177px').me-5
      .content
        .row.justify-content-center.align-items-center
          .col-lg-7
          
            p.mb-5 La cartografía es la “disciplina que estudia los diferentes métodos, sistemas, operaciones científicas y técnicas que permiten representar en un plano la superficie terrestre y los fenómenos o hechos que se desarrollan sobre ella. El producto de la representación recibe el nombre de cartografía, mapa o carta” (IGAC, 20216).
            p.mb-4 Los inicios de la cartografía datan de miles años, cuando los seres humanos vieron la necesidad de utilizar diferentes superficies para tallar, moldear o dibujar representaciones de la realidad espacial que les permitieran ubicar puntos de interés para el desarrollo de sus actividades cotidianas.
          .col-lg-5: img(src='@/assets/curso/images/tema4/img_1.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-8
        p.mb-5.text-center.fw-bold Los siguientes, son algunos aspectos de suma importancia que se debe conocer sobre la cartografía; se debe llevar registro de ello en una libreta personal de apuntes.
    .row.justify-content-center.align-items
      .col-lg-10 
        LineaTiempoD.color-secundario.especial
          .row.color-custom(numero="1" titulo="Es una disciplina aplicada").align-items-center.p-4
            .col-lg-7
              p Se ha perfeccionado con el tiempo, a través de la incorporación de herramientas cada vez más sofisticadas por medio de las cuales se ha logrado una reconstrucción casi exacta del relieve y sus diferentes accidentes. Ha ajustado sus técnicas y ha logrado representar la realidad en tres dimensiones, con base en aerofotografías e imágenes satelitales; esta representación de la superficie terrestre sobre un plano sintetiza el quehacer de la cartografía.
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/images/tema4/img_2.png', style="width: 450px").m-auto
      
        
          .row.color-custom(numero="2" titulo="Tiene múltiples enfoques").m-auto
            .col-lg-7
              p Si bien en sus comienzos la cartografía tenía una utilidad netamente geográfica, con el tiempo ha trascendido a múltiples escenarios en los cuales resulta, igualmente, de mucha utilidad. Hoy día es posible encontrar mapas que presentan la dispersión de plagas y enfermedades, los usos del suelo, la incidencia de fenómenos climáticos e incluso, las áreas donde se presentan conflictos ambientales.
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/images/tema4/img_3.png', style="width: 450px").m-auto
          
          .row.color-custom(numero="3" titulo="Ofrece grandes aportes a la humanidad").m-auto
              .col-lg-7
                p En relación con las ciencias humanas, es posible encontrar representaciones cartográficas en donde se ponen de manifiesto fenómenos sociales como los niveles de pobreza, inseguridad, desempleo y dificultades para el acceso al saneamiento básico, por lo que se resulta una herramienta bastante poderosa para tener un panorama general de la realidad y de sus particularidades.
              .col-lg-5.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/images/tema4/img_4.svg', style="width: 450px").m-auto
          
          .row.color-custom(numero="4" titulo="Ofrece grandes aportes para una unidad productiva").align-items-center.p-4
            .col-lg-7

            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/images/tema4/img_5.svg', style="width: 450px").m-auto

    Separador 

    #t_4_1.titulo-segundo
      h2 4.1 Herramientas topográficas
  .container.bg-white.p-4.p-md-5
    .row.d-none.d-lg-block    
      .row.align-items-center.mb-5
        .col-lg-6
        .col-lg-6
          p.aling-20 Para la construcción de los mapas o los planos cartográficos, hoy día existen herramientas que facilitan el trabajo y dan mayor precisión a las mediciones de los predios, con lo cual se ahorra bastante tiempo y se disminuyen los costos de este tipo de labores.
      .row.align-items-center.fondo-15.p-5
        .col-lg-6.mb-lg-0
            img.mb-5(src="@/assets/curso/images/tema4/img_6.png" alt="", style="width:540px; display:block; margin: -10rem -1rem;")
        .col-lg-6.mb-lg-0.p-2
            p.aling-14  Los avances en materia de sistemas de posicionamiento global han logrado que prácticamente cualquier persona, en cualquier lugar de la tierra, pueda conocer su ubicación en el planeta y obtener una representación gráfica de su posición. 
      
        .row.align-items-center
          .col-lg-6
          .col-lg-6
            p.aling-14 <b>Entre los elementos más comunes utilizados para el levantamiento topográfico, que es como se conoce a los procedimientos para conseguir la representación gráfica de la superficie, existen los siguientes:</b>

        .row.justify-content-center.align-items.mt-3
          .col-lg-10.mb-3
            ImagenInfografica.color-secundario.mb-5
              template(v-slot:imagen)
                figure
                  img(src="@/assets/curso/images/tema4/img_7.svg", alt= "")
              .tarjeta.tarjeta.info-3.p-3(x="25%" y="90%" numero="")
                h3.text-white GPS Sistemas de posicionamiento global
                p.text-white Equipos que, mediante la comunicación con los satélites que orbitan la tierra, tienen la facilidad de “triangular” la posición del aparato sobre la superficie terrestre. Utilizan sistemas de coordenadas, los cuales dan como resultado una medición bastante precisa de la ubicación del observador. Son ampliamente utilizados en la navegación, los levantamientos topográficos y la construcción, entre otras industrias. 
              .tarjeta.tarjeta.info-3.p-3(x="66.5%" y="73%" numero="")
                h3.text-white Evolución de los teodolitos mecánicos
                p.text-white Incorporan elementos electrónicos que permiten aumentar la precisión de las mediciones. Vienen provistas de diversos programas sencillos que permiten, entre otras capacidades, el cálculo de coordenadas en campo, replanteo de puntos de manera sencilla y eficaz y cálculo de acimutes y distancias
              .tarjeta.tarjeta.info-3.p-3(x="43.5%" y="63%" numero="")
                h3.text-white Herramienta de medición de distancias
                p.text-white Consiste en una cinta que posee líneas marcadas de forma longitudinal en la cual se observan las unidades de medida. Generalmente están adaptadas al sistema métrico, aunque también están aforadas en pies y pulgadas.
              .tarjeta.tarjeta.info-3.p-3(x="55.7%" y="63%" numero="")
                h3.text-white Smart Phones
                p.text-white.mb-0 Herramientas de suma utilidad a las cuales tiene acceso casi la totalidad de la población. Dentro de sus aplicaciones y utilidades se incluyen sistemas de posicionamiento global los cuales funcionan bajo los mismos principios de los GPS. 
              .tarjeta.tarjeta.info-3.p-3(x="33.5%" y="73%" numero="")
                h3.text-white Sistema de medición mecánico – óptico
                p.text-white.mb-0 Sirve para medir ángulos verticales y horizontales, con lo cual es posible medir distancias y desniveles. A diferencia del GPS, el teodolito, en su versión más básica, no tiene conexión satelital y depende de puntos de referencia conocidos para la ubicación espacial de algún punto definido. 
              .tarjeta.tarjeta.info-3.p-3(x="75.5%" y="88%" numero="")
                h3.text-white Evolución de equipos para información de terrenos
                p.text-white.mb-0 Ha habido una evolución importante en la forma como se procesan datos y en la manera como se registra información para, finalmente, convertirse en representaciones gráficas de la realidad. Los programas para el procesamiento de información tienen la capacidad de establecer comunicación directa con los equipos de captura, por lo que cada vez es menor la participación del humano en lo relacionado con la generación de los cálculos y la producción del material cartográfico. 
            
            p.mb-3.text-center <b> Algunas consideraciones para la generación de información cartográfica del predio son las siguientes:</b>
    
    .row.align-items-center.d-block.d-lg-none
      p Para la construcción de los mapas o los planos cartográficos, hoy día existen herramientas que facilitan el trabajo y dan mayor precisión a las mediciones de los predios, con lo cual se ahorra bastante tiempo y se disminuyen los costos de este tipo de labores.
      .row.align-items-center.fondo.responsive-1
        .col-lg-4.mb-lg-0
          img.mt-3(src="@/assets/curso/images/tema4/img_6.png")
        .col-lg-8-lg-0
          p.mt-3 Los avances en materia de sistemas de posicionamiento global han logrado que prácticamente cualquier persona, en cualquier lugar de la tierra, pueda conocer su ubicación en el planeta y obtener una representación gráfica de su posición. 
          p Entre los elementos más comunes utilizados para el levantamiento topográfico, que es como se conoce a los procedimientos para conseguir la representación gráfica de la superficie, existen los siguientes:

      .row.justify-content-center.align-items.mt-3
        .col-lg-10.mb-3
          ImagenInfografica.color-secundario.mb-5
            template(v-slot:imagen)
              figure
                img(src="@/assets/curso/images/tema4/img_7.svg", alt= "")
            .tarjeta.tarjeta.info-3.p-3(x="25%" y="90%" numero="")
              h3.text-white GPS Sistemas de posicionamiento global
              p.text-white Equipos que, mediante la comunicación con los satélites que orbitan la tierra, tienen la facilidad de “triangular” la posición del aparato sobre la superficie terrestre. Utilizan sistemas de coordenadas, los cuales dan como resultado una medición bastante precisa de la ubicación del observador. Son ampliamente utilizados en la navegación, los levantamientos topográficos y la construcción, entre otras industrias. 
            .tarjeta.tarjeta.info-3.p-3(x="66.5%" y="73%" numero="")
              h3.text-white Sistema de medición mecánico – óptico
              p.text-white Sirve para medir ángulos verticales y horizontales, con lo cual es posible medir distancias y desniveles. A diferencia del GPS, el teodolito, en su versión más básica, no tiene conexión satelital y depende de puntos de referencia conocidos para la ubicación espacial de algún punto definido. 
            .tarjeta.tarjeta.info-3.p-3(x="43.5%" y="63%" numero="")
              h3.text-white Herramienta de medición de distancias
              p.text-white Consiste en una cinta que posee líneas marcadas de forma longitudinal en la cual se observan las unidades de medida. Generalmente están adaptadas al sistema métrico, aunque también están aforadas en pies y pulgadas.
            .tarjeta.tarjeta.info-3.p-3(x="55.7%" y="63%" numero="")
              h3.text-white Smart Phones
              p.text-white.mb-0 Herramientas de suma utilidad a las cuales tiene acceso casi la totalidad de la población. Dentro de sus aplicaciones y utilidades se incluyen sistemas de posicionamiento global los cuales funcionan bajo los mismos principios de los GPS. 
            .tarjeta.tarjeta.info-3.p-3(x="33.5%" y="73%" numero="")
              h3.text-white Evolución de los teodolitos mecánicos
              p.text-white.mb-0 Incorporan elementos electrónicos que permiten aumentar la precisión de las mediciones. Vienen provistas de diversos programas sencillos que permiten, entre otras capacidades, el cálculo de coordenadas en campo, replanteo de puntos de manera sencilla y eficaz y cálculo de acimutes y distancias.
            .tarjeta.tarjeta.info-3.p-3(x="75.5%" y="88%" numero="")
              h3.text-white Evolución de equipos para información de terrenos
              p.text-white.mb-0 Ha habido una evolución importante en la forma como se procesan datos y en la manera como se registra información para, finalmente, convertirse en representaciones gráficas de la realidad. Los programas para el procesamiento de información tienen la capacidad de establecer comunicación directa con los equipos de captura, por lo que cada vez es menor la participación del humano en lo relacionado con la generación de los cálculos y la producción del material cartográfico. 

        p.mb-3.text-center <b> Algunas consideraciones para la generación de información cartográfica del predio son las siguientes:</b>

    .row.justify-content-center.align-items.p-5.mb-5.fondo-13
      .col-lg-10.mb-lg-0.p-2
        ul.lista-ul--color
          li 
            i.fas.fa-circle.cac.mx-2
            | Identificar sobre el plano los puntos cardinales. Ubicar el norte y el oeste. 
          li 
            i.fas.fa-circle.cac.mx-2
            | Identificar los accesos al predio. 
          li 
            i.fas.fa-circle.cac.mx-2
            | Demarcar los límites de la unidad productiva con su respectivo nombre. 
          li 
            i.fas.fa-circle.cac.mx-2
            | Ubicar dentro del plano edificios o construcciones, accidentes geográficos, puntos de interés, caminos, carreteras, líneas eléctricas, líneas de agua o gas.
          li
            i.fas.fa-circle.cac.mx-2
            | Delimitar los diferentes sistemas productivos presentes en el predio. En el caso de los potreros o lotes, de ser posible, asignar un nombre. 
          li 
            i.fas.fa-circle.cac.mx-2
            | Ubicar los puntos de interés ecológico como bosques, quebradas, ríos, zonas de recarga, nacimientos de y coberturas nativas. 
          li 
            i.fas.fa-circle.cac.mx-2
            | Ubicar dentro del plano edificios o construcciones, accidentes geográficos, puntos de interés, caminos, carreteras, líneas eléctricas, líneas de agua o gas.
          li
            i.fas.fa-circle.cac.mx-2
            | Identificar posibles zonas donde se presenten problemáticas ambientales como focos de contaminación, deslizamientos, presencia de residuos sólidos o áreas con grados de erosión.   
          li 
            i.fas.fa-circle.cac.mx-2
            | Identificar y demarcar zonas que representen algún tipo de riesgo para los humanos, los animales o para los ecosistemas presentes en el predio.

      .col-lg-10
        .row.justify-content-center.align-items
          .col-3.col-md-2.col-lg-2.col-xl-2.mb-3
            img(src="@/assets/curso/images/tema2/ico_2.svg", alt= "")
          .col-lg-10 
            h3 ¡Atención!
            p.mb-0 Es importante incluir toda la información que sea posible, con esto se obtendrá un material de gran calidad para procesos de planeación predial y la toma de decisiones que contribuyan a la protección de los ecosistemas.
    Separador 

    #t_4_2.titulo-segundo
      h2 4.2 Interpretación cartográfica
    
    .row.justify-content-center.align-items.p-4
      .col-lg-6
        p Debido a que los planos y los mapas son representaciones de la realidad, existen códigos o lenguajes especiales que se manejan en ellos y que permiten que casi cualquier persona en cualquier lugar del mundo, a pesar de no conocer el idioma, pueda interpretarlos. Este lenguaje internacional es de suma importancia para hacer una correcta lectura de la información cartográfica pues da las pautas generales para analizar cada uno de los componentes que se presentan, sus características, tamaño y ubicación exacta.
        
        p.mb-3.text-center <b> Las partes esenciales de un mapa y por las cuales debe iniciar la interpretación son: </b>

        ul.lista-ul--color.mt-3
          li 
            i.fas.fa-circle.cac.mx-2
            | Título.
          li 
            i.fas.fa-circle.cac.mx-2
            | Simbología de vientos.
          li 
            i.fas.fa-circle.cac.mx-2
            | Fuente de la información.
          li 
            i.fas.fa-circle.cac.mx-2
            | Escala.
          li 
            i.fas.fa-circle.cac.mx-2
            | Convenciones.
          li 
            i.fas.fa-circle.cac.mx-2
            | Abreviaturas.

        p.mb-0 Con estos elementos es posible tener una idea clara sobre la ubicación de los objetos dentro del espacio y su orientación con respecto al norte. 

      .col-lg-6
        img.mt-5(src="@/assets/curso/images/tema4/img_8.png", style="width: 590px").m-auto

    .titulo-cafe.mb-5
      h3.mb-0.text-center.color-secundario.font-weight-bold.me-4
        |Orientación y sistemas de coordenadas.
      .titulo-cafe_icon: img(src='@/assets/curso/17.svg' alt='Icono de la categoria')
    .fondo-14.p-5.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-4
          img(src="@/assets/curso/images/tema4/img_9.svg", style="").m-auto
        .col-lg-6
          p Para conocer la ubicación de los elementos dentro del mapa y trasladar esa información a la realidad, es necesario empezar por conocer la orientación, la cual está dada por la “rosa de los vientos”. La rosa de los vientos indica los cuatro puntos cardinales y en el mapa siempre se ubica con el norte apuntando hacia la parte superior del mapa y el este a la derecha.

    p.mb-3.text-center <b>Para la ubicación de los puntos cardinales en la finca cafetera:</b>

    .row.justify-content-center.align-items.mb-5.p-5
      .col-lg-8.mb-5.mb-sm-0
        ol.lista-ol
          li 
            span.text-bold.text-color 1. 
            | Es necesario identificar la dirección en la que sale el sol, ya que esta indica el oriente.
          li 
            span.text-bold.text-color 2. 
            | Con el sol al lado derecho del observador, el norte estará ubicado al frente.
          li 
            span.text-bold.text-color 3. 
            | Con el norte en frente del observador, el sur estará a su espalda.
          li 
            span.text-bold.text-color 4. 
            |  Con el oriente (este) a la derecha del observador, el occidente (oeste) estará a su izquierda.
       
    .row.justify-content-center.align-items.mb-5
      .col-lg-10.mb-3
        img(src="@/assets/curso/images/tema4/img_10.svg", alt= "")

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-custom-4.p-4
          .row.align-items-center.justify-content-center 
            .col-lg-2
              img(src="@/assets/curso/images/tema4/ico_3.svg", style="width: 100px").m-auto
            .col-lg-10
              p.mb-3 Los planos y mapas son representaciones a escala de la realidad y, por lo tanto, deben tener un alto nivel de precisión, la cual se puede dar en términos de la posición y la altitud. Para que esto sea posible es necesario tener en cuenta cuatro elementos fundamentales: el sistema geográfico de referencia (sistema de coordenadas), un sistema de proyección cartográfica, la escala de representación y la simbología. 
          
    p.text-center.mb-5 <b> En lo relativo al sistema geográfico de referencia, se debe tener en cuenta los siguientes aspectos clave: </b>
    .fondo-11.p-5
      SlyderB(:datos="datosSlyder1").mt-5


    .row.justify-content-center.align-items.p-4.mb-5
      .col-lg-4
        img(src="@/assets/curso/images/tema4/img_18.svg", style="width: 350px").m-auto
      .col-lg-8
        p.mb-3 Los sistemas de posicionamiento global, GPS, triangulan la posición del dispositivo con la ayuda de los satélites que permanentemente orbitan la tierra, de allí que las mediciones entregadas por estos elementos sean de tan alta precisión.

        p.mb-0 Por lo general, las coordenadas se manejan en el sistema WGS84 (World Geodetic System 1984), debido a que es el más empleado en el mundo entero. Respecto al tipo de coordenadas estas pueden ser geográficas (expresadas en grados, minutos y segundos) o planas, las cuales son bidimensionales, por lo que se presentan únicamente como “X” o “Y”.

    .col-4.col-md-2.col-lg-4.col-xl-4.mb-3
      .row.justify-content-center.align-items.mb-3
        .col-lg-6
          img(src="@/assets/curso/images/tema4/ico_4.svg", alt= "")
    
    p.aling-4 Las convenciones son todo tipo de señales o símbolos universales presentes en los mapas los cuales son necesarios para su interpretación. Sin la utilización de las convenciones no sería posible conocer la mayor parte de la información plasmada en el recurso cartográfico.

    p.aling-4   Algunos de estos símbolos, muy comunes en los mapas y en los planos, internacionalmente, son los siguientes, ver tabla 2:

    .titulo-sexto.color-acento-contenido
      h5 Tabla 2 
      span Símbolos comunes en mapas y planos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tabla-a.color-primario
          table
            thead 
              tr
                th.th-1.text-white(colspan='2') <b> Vías </b>
            tbody
              tr.th
                td.text-center.text-white.th-3 #[strong Tipo de elemento]
                td.text-center.text-white.th-3 #[strong Representación gráfica más común]               
              tr
                td.text-center.th-2 Carreteras destapadas
                td.th-2   
                  img(src="@/assets/curso/images/tema4/Linea_1.svg", style="width: 300px").m-auto
                
              tr
                td.text-center.th-4   Carreteras pavimentadas
                td.th-4  
                  img(src="@/assets/curso/images/tema4/Linea_2.svg", style="width: 300px").m-auto
                
              tr
                td.text-center.th-2  Caminos
                td.th-2  
                  img(src="@/assets/curso/images/tema4/Linea_3.svg", style="width: 300px").m-auto
                
              tr
                td.text-center.th-4   Ferrocarriles

                td.th-4  
                  img(src="@/assets/curso/images/tema4/Linea_4.svg", style="width: 300px").m-auto
              tr
                td.text-center.th-2  Puente
                td.th-2   
                  img(src="@/assets/curso/images/tema4/Linea_5.svg", style="width: 300px").m-auto

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tabla-a.color-primario
          table
            thead 
              tr
                th.th-1.text-white(colspan='2') <b>Relieve y accidentes geográficos</b>
            tbody
              tr.th
                td.text-center.text-white.th-3 #[strong Tipo de elemento]
                td.text-center.text-white.th-3 #[strong Representación gráfica más común]            
              tr
                td.text-center.th-2 Pendientes
                td.th-2   
                  img(src="@/assets/curso/images/tema4/graf_1.svg", style="width: 300px").m-auto
                
              tr
                td.text-center.th-4  Accidentes topográficos
                td.th-4 
                  img(src="@/assets/curso/images/tema4/graf_2.svg", style="width: 300px").m-auto

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tabla-a.color-primario
          table
            thead 
              tr
                th.th-1.text-white(colspan='2') <b> Construcciones </b>
            tbody
              tr.th
                td.text-center.text-white.th-3 #[strong Tipo de elemento]
                td.text-center.text-white.th-3 #[strong Representación gráfica más común]               
              tr
                td.text-center.th-2 Bodega
                td.th-2   
                  img(src="@/assets/curso/images/tema4/ico_tab_1.svg", style="width: 100px").m-auto
                
              tr
                td.text-center.th-4   Vivienda
                td.th-4  
                  img(src="@/assets/curso/images/tema4/ico_tab_2.svg", style="width: 100px").m-auto
                
              tr
                td.text-center.th-2  Aeropuerto
                td.th-2  
                  img(src="@/assets/curso/images/tema4/ico_tab_3.svg", style="width: 100px").m-auto
                
              tr
                td.text-center.th-4   Hospital

                td.th-4  
                  img(src="@/assets/curso/images/tema4/ico_tab_4.svg", style="width: 100px").m-auto

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tabla-a.color-primario
          table
            thead 
              tr
                th.th-3.text-white(colspan='2') <b> Servicios ecosistémicos </b>
            tbody
              tr.th
                td.text-center.text-white.th-3 #[strong Tipo de elemento]
                td.text-center.text-white.th-3 #[strong Representación gráfica más común]               
              tr
                td.text-center.th-2 Río
                td.th-2
                  img(src="@/assets/curso/images/tema4/ico_tab_5.svg", style="width: 120px").m-auto
                
              tr
                td.text-center.th-4   Quebrada
                td.th-4  
                  img(src="@/assets/curso/images/tema4/ico_tab_6.svg", style="width: 120px").m-auto
                
              tr
                td.text-center.th-2 Nacedero
                td.th-2  
                  img(src="@/assets/curso/images/tema4/ico_tab_7.svg", style="width: 120px").m-auto
                
              tr
                td.text-center.th-4   Bosque natural

                td.th-4  
                  img(src="@/assets/curso/images/tema4/ico_tab_8.svg", style="width: 120px").m-auto

              tr
                td.text-center.th-2    Laguna
                td.th-2   
                  img(src="@/assets/curso/images/tema4/ico_tab_9.svg", style="width: 120px").m-auto

    .row.align-items-center.justify-content-center 
      .col-lg-10
        .cajon.color-custom-4.p-4.mb-3
          .row.align-items-center.justify-content-center 
            .col-lg-2
              img(src="@/assets/curso/images/tema4/ico_6.svg", style="width: 100px").m-auto
            .col-lg-10
              p.mb-3 El tamaño, disposición y color de las convenciones depende del tipo de mapa que se presente, de su tamaño y de la información que contenga, por lo que el dibujante tiene libertad para construir el mapa como lo considere conveniente, siempre y cuando el mensaje se pueda transmitir de manera clara y precisa. 

    p.text-center <b> Sin embargo, es importante tener en cuenta las siguientes recomendaciones:</b>

    .row.justify-content-center.align-items
      .col-lg-8.mb-5.mb-sm-0
        ul.lista-ul--color.mt-3
          li 
            i.fas.fa-circle.cac.mx-2
            | #[span.text-deco1 #[b Tamaño:]] para representar una variable que tenga diferentes valores se utiliza el símbolo del mismo tamaño. 
          li
            i.fas.fa-circle.cac.mx-2
            | #[span.text-deco1 #[b Orientación:]]  se debe procurar emplear la misma orientación para los textos y las convenciones. 
          li 
            i.fas.fa-circle.cac.mx-2
            | #[span.text-deco1 #[b Color:]] es representativo de elementos del paisaje, por lo que es recomendable utilizar el azul para cuerpos de agua, verde para vegetación, rojo para centros poblados o vías, gris para edificaciones. 
          li 
            i.fas.fa-circle.cac.mx-2
            | #[span.text-deco1 #[b Correspondencia:]] cada convención debe tener un significado, no se pueden dejar convenciones que no estén debidamente explicadas en la tabla de convenciones. 
    Separador 

    #t_4_3.titulo-segundo
      h2 4.3  Manejo de escalas

    p.mb-5 El plano o mapa es una representación de la realidad, por lo que sus dimensiones deben dar una idea clara del tamaño de los elementos presentes en el paisaje, siempre conservando una relación de proporcionalidad, que es a lo que se le denomina escala.
    p.text-center.mb-5 <b> La relación de proporcionalidad se expresa por lo general como una razón o fracción, por ejemplo: </b>
    .fondo-11.p-5
      SlyderB(:datos="datosSlyder2")












































</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder1: [
      {
        titulo: 'Importancia',
        texto:
          'El sistema geográfico de referencia es indispensable para la ubicación de los elementos que aparecen sobre el mapa y en vista de que la tierra es tridimensional el sistema de coordenadas también lo debe ser. De allí que el sistema de coordenadas contempla la latitud, la longitud y la altitud. ',
        imagen: require('@/assets/curso/images/tema4/img_11.png'),
      },
      {
        titulo: 'Ecuador y Meridiano',
        texto:
          'El principio del sistema de coordenadas se basa en dos líneas, una que es conocida como el Ecuador, que corre el planeta de este a oeste y es equidistante de los polos norte y sur, y otra línea que va del polo norte al polo sur, denominada “meridiano de origen o meridiano de referencia.',
        imagen: require('@/assets/curso/images/tema4/img_12.svg'),
      },
      {
        titulo: 'Líneas de referencia',
        texto:
          'Mediante el trazo de un grupo de círculos alrededor de la esfera y paralelos al Ecuador, y otro grupo de ellos que cruzan al ecuador en ángulos rectos y convergen en los polos, se obtiene una red de líneas de referencia desde las cuales se puede localizar cualquier punto en la superficie de la tierra. Dicha ubicación se obtiene definiendo su distancia al norte o al sur del Ecuador y al este u oeste del Meridiano de Origen.',
        imagen: require('@/assets/curso/images/tema4/img_13.svg'),
      },
      {
        titulo: 'Distancia angular: latitud y longitud',
        texto:
          'Es así como la distancia angular a la que se halla un punto al norte o al sur del Ecuador se le llama latitud y la distancia angular a la que está ese punto del meridiano de origen se le conoce como longitud.',
        imagen: require('@/assets/curso/images/tema4/img_14.svg'),
      },
      {
        titulo: 'Unidades de medida',
        texto:
          'Debido a que son distancias angulares, la medida de la latitud y de la longitud se da en grados, minutos y segundos. Empezando a contar desde el ecuador las líneas paralelas a él, llamadas “paralelos”, van enumerados de 0° a 90°, bien sea que se dirijan hacia el norte o hacia el sur. A su vez, las líneas paralelas al meridiano de origen, que reciben el nombre de “meridianos” van numerados de 0° a 180°, independientemente de si están en al este o al oeste.',
        imagen: require('@/assets/curso/images/tema4/img_15.svg'),
      },
      {
        titulo: 'Configuración de equipos de medición',
        texto:
          'Es así como se pueden tener longitudes de 90°, por ejemplo, pero ser de longitud este (+) u oeste (-) o latitudes de 60° pero ser latitud norte o latitud sur, por lo que es sumamente importante configurar los equipos de medición GPS.',
        imagen: require('@/assets/curso/images/tema4/img_16.svg'),
      },
      {
        titulo: 'Representación sobre planos',
        texto:
          'Para poder representar sobre un plano los elementos identificados en el sistema de coordenadas, es necesario emplear un sistema de proyección cartográfica, debido a que es la única manera de proyectar sobre una superficie plana un objeto que tiene una forma esférica. El resultado de este proceso es lo que habitualmente se conoce como plano o mapa. ',
        imagen: require('@/assets/curso/images/tema4/img_17.svg'),
      },
    ],
    datosSlyder2: [
      {
        titulo: 'Representaciones cartográficas',
        texto:
          'Una escala de 1:5 000 significa que por cada centímetro que se mide en el plano o mapa, en la realidad corresponde a 50.000 centímetros. En las representaciones cartográficas la escala es indispensable, pues sin ella es imposible determinar el tamaño de los objetos en la realidad. ',
        imagen: require('@/assets/curso/images/tema4/img_19.svg'),
      },
      {
        titulo: 'Plano a escala',
        texto:
          'En el plano de la imagen, es posible ubicar en la parte inferior derecha la escala, la cual para este caso es <b> 1:100 </b> lo cual quiere decir que cada centímetro en el plano en la vida real equivale a 100 centímetros, es decir, un metro. ',
        imagen: require('@/assets/curso/images/tema4/img_20.svg'),
      },
      {
        titulo: 'Proporción',
        texto:
          'Con la información del plano, es posible conocer todas las áreas de la vivienda en la realidad, pues con esa misma proporción es posible hacer la conversión de cualquier otra medida. Sólo basta con hacer una regla de tres simple para determinar el resultado. Para conocer el resultado basta con multiplicar los 3,8 centímetros que mide la pared en el plano por 100 para obtener el resultado en centímetros, el cual es 380 centímetros, o 3,8 metros. ',
        imagen: require('@/assets/curso/images/tema4/img_21.svg'),
      },
      {
        titulo: 'Los planos y mapas en la finca cafetera',
        texto:
          'Como representaciones de la realidad, permiten desarrollar de manera efectiva los procesos de planeación de la finca cafetera. La ubicación en una representación gráfica de los sistemas productivos, la infraestructura, los linderos y los servicios ecosistémicos, permite tener una visión mucho más global del predio, identificar sus potencialidades y vulnerabilidades desde el punto de vista ambiental y diseñar las estrategias que, finalmente, permitan la sostenibilidad del sistema productivo y la protección de los ecosistemas identificados en el territorio.',
        imagen: require('@/assets/curso/images/tema4/img_22.jpg'),
      },
    ],
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

<style lang="sass"></style>
