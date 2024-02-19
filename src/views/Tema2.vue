<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Bienes y servicios ambientales

    p.mb-5 Cada vez más, la humanidad tiene una mayor comprensión de la fragilidad de los ecosistemas terrestres y de las diversas interacciones que tienen lugar en el planeta para que transcurra la vida tal como se le conoce. Gracias a los avances científicos y la preocupación de los gobiernos por desarrollar sistemas productivos cada vez más eficientes y responsables con el ambiente, hoy día es posible que las comunidades incluyan dentro de su cotidianidad términos y expresiones como sostenibilidad, huella de carbono, consumo responsable y reciclaje, entre otras. 

    .row.justify-content-center.align-items
      .col-lg-10.mb-3
        img(src="@/assets/curso/images/tema2/img_1.svg", alt= "")

    p.mb-3 <b>A continuación, se presentan algunas generalidades de los bienes y servicios ambientales; se debe tomar nota de ello en una libreta personal de apuntes.</b>

    .row.justify-content-center.align-items.p-3
      .col-lg-8
        TabsA.color-primario.mb-5
    
          .tarjeta_tab.back-tab.p-4(titulo="Visión agroecológica")
            h4 Visión agroecológica
            p.mb-3  El cultivo de café no es la excepción a las nuevas tendencias y parte de la respuesta que se ha dado desde los productores es la transición de áreas de monocultivo a sistemas cada vez más integrales con una visión agroecológica.
          .tarjeta_tab.back-tab.p-4(titulo="Resignificación de los procesos agrícolas")
            h4 Resignificación de los procesos agrícolas
            p.mb-3 Las nuevas miradas sobre la agricultura, la producción agrícola y los modos de consumo, aportan a la protección de la biodiversidad y garantizan el cuidado de los hábitats. Si bien es un camino difícil y de constante aprendizaje, son bastantes las experiencias exitosas que se pueden revisar al respecto.
          .tarjeta_tab.back-tab.p-4(titulo="Servicios ambientales y subsistencia")
              h4 Servicios ambientales y subsistencia
              p.mb-3 Parte del auge que ha tenido en las últimas décadas, el respeto por la biodiversidad y la protección de los recursos naturales, se ha traducido en una constante valoración de los servicios que estos ofrecen a la humanidad, los cuales van más allá de la simple provisión de materias primas y se constituyen en la base para la existencia y subsistencia.
          .tarjeta_tab.back-tab.p-4(titulo="Servicios ecosistémicos")
              h4 Servicios ecosistémicos
              p.mb-3 Estos servicios, necesarios para la vida y fundamentales para el desarrollo humano, es lo que, en el presente, se conoce como servicios ambientales o servicios ecosistémicos. Pueden clasificarse en servicios de abastecimiento, de regulación, de apoyo y culturales.

      .col-lg-4
        img(src="@/assets/curso/images/tema2/img_2.png").m-auto

    Separador


    #t_2_1.titulo-segundo 
      h2 2.1 Bienes y servicios de abastecimiento

    p.mb-5 Dentro de este grupo, es posible encontrar diversos elementos necesarios para la subsistencia de la población del país y que son necesarios para el desarrollo de las actividades humanas, indistintamente de la región donde tengan lugar los asentamientos.

    p.mb-5.text-center.fw-bold Dentro de este gran grupo de bienes y servicios de abastecimiento se distinguen las siguientes subcategorías:
    .fondo-8.p-5
      SlyderB.mt-5(:datos="datosSlyder")

    Separador

    #t_2_2.titulo-segundo
      h2 2.2 Bienes y servicios de regulación

    p.mb-3 La actividad de los ecosistemas es permanente, debido a que los flujos de energía se mantienen en constante movimiento y las dinámicas e interacciones que tienen lugar en los distintos niveles de organización, implican procesos de ordenamiento y redistribución de la materia. A pesar que muchos de los procesos que tienen lugar al interior de los ecosistemas pasan inadvertidos, los beneficios para la especie humana son de largo alcance y tienen implicaciones de suma importancia para la sobrevivencia de la especie. 

    .row.justify-content-center.align-items
      .col-lg-10.mb-3
        img(src="@/assets/curso/images/tema2/ico_1.png", alt= "")
    
    p.mb-4.text-center <b>Dentro de este gran grupo de bienes y servicios de abastecimiento se distinguen las siguientes subcategorías:</b>

    .container.bg-white.p-4.p-md-5.fondo-9.cs
      .row.justify-content-center.align-items
        .col-lg-8.mb-3
          ImagenInfografica.color-secundario.mb-5
            template(v-slot:imagen)
              figure
                img(src="@/assets/curso/images/tema2/info.svg", alt= "")
            .tarjeta.tarjeta.info-4.p-3(x="12%" y="12%" numero="1")
              h3 1. Mantenimiento de la calidad del aire
              p La vegetación desempeña una importante función en la regulación de la calidad del aire al desarrollar procesos que contribuyen a la eliminación de los contaminantes de la atmósfera. 
            .tarjeta.tarjeta.info-4.p-3(x="24.5%" y="87%" numero="2")
              h3 2. Regulación del clima
              p El movimiento de las masas de aire y la vegetación son dos de los elementos fundamentales en lo relacionado con la regulación del clima. La conservación de las coberturas naturales, por ejemplo, influye en la creación de microclimas y en la conservación de las fuentes hídricas en determinadas zonas. 
            .tarjeta.tarjeta.info-4.p-3(x="37%" y="12%" numero="3")
              h3 3. Control de la erosión
              p La conservación de la vegetación, especialmente en zonas de ladera, es fundamental para conservar la estructura, y, por ende, la estabilidad de los suelos, debido a que el entramado de raíces que se genera en los primeros horizontes contribuye a disminuir los efectos de la erosión por escorrentía. Igualmente, la vegetación disminuye la velocidad con la que el agua se desplaza por la superficie del suelo lo que evita que se produzca el “arrastre” de los nutrientes y la generación de sedimentos en los cuerpos de agua.  
            .tarjeta.tarjeta.info-4.p-3(x="50%" y="87%" numero="4")
              h3 4. Control de enfermedades humanas
              p.mb-0 A través de procesos como la purificación del agua y del aire, es posible establecer una relación entre los servicios ecosistémicos y la protección de la salud humana. Igualmente, con la protección de los recursos es posible favorecer las dinámicas internas en las comunidades de organismos con lo cual se logra propiciar el control biológico de insectos plaga y de vectores de enfermedades. 
            .tarjeta.tarjeta.info-4.p-3(x="62.5%" y="12%" numero="5")
              h3 5. Purificación del agua
              p.mb-0 La acción microbiana y los procesos naturales de filtración del agua tienen un impacto muy positivo en la calidad de este importante recurso. A través de la conservación de la flora nativa y de la cobertura vegetal es posible mantener los ciclos hidrológicos casi sin alteraciones, con todos los beneficios que ello implica.  
            .tarjeta.tarjeta.info-4.p-3(x="75.5%" y="88%" numero="6")
              h3.text 6. Regulación hídrica
              p.mb-0 A través de la conservación de las fuentes hídricas, las áreas de recarga hídrica y las humedades, es posible mantener los ciclos naturales del agua en determinadas zonas con lo cual se reduce considerablemente la ocurrencia de inundaciones.
            .tarjeta.tarjeta.info-4.p-3(x="88%" y="10.5%" numero="7")
              h3.text 7. Secuestro de carbono
              p.mb-0 Uno de los temas que ha ocupado recientemente la atención del mundo es la captura de carbono, la cual se considera en la actualidad como una de las principales herramientas para la disminución de la incidencia de los gases de efecto invernadero. Para ello se recurre a la capacidad de los árboles para retener el dióxido de carbono de la atmósfera para almacenarlo en sus tejidos.

          .row.justify-content-center.align-items
            .col-3.col-md-2.col-lg-2.col-xl-2.mb-3
              img(src="@/assets/curso/images/tema2/ico_2.svg", alt= "")
            .col-lg-10 
              h3 ¡Importante!
              p.mb-0 Algunos de los servicios de regulación adicionales que ofrecen los ecosistemas son, la moderación de los efectos de los desastres naturales, la polinización de las plantas y el control biológico de plagas y enfermedades que afectan las especies utilizadas con fines agropecuarios.
    Separador 
            
    #t_2_3.titulo-segundo
      h2 2.3 Bienes y servicios de apoyo

    p.mb-3.p-4 Los servicios ecosistémicos de soporte o apoyo, son aquellos que resultan necesarios para el aprovisionamiento y la existencia de los demás servicios ecosistémicos. Por ejemplo, “los ecosistemas naturales proporcionan refugio y hábitat de reproducción de plantas y animales silvestres y, por lo tanto, contribuyen con la conservación (in situ) de la diversidad biológica y genética y procesos evolutivos” (Sánchez,  2014).

    p.mb-5.text-center <b>  Dentro de los servicios ecosistémicos de apoyo o de soporte, se destacan los siguientes: </b>

    .row.justify-content-center.align-items
      .col-lg-11.mb-3
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src="@/assets/curso/images/tema2/info_2.svg", alt= "")
          .tarjeta.tarjeta.info-2.p-3(x="28.5%" y="62%" numero="1")
            h3 1. Formación de suelo
            p Otro de los elementos que cobra importancia en lo relacionado con los servicios ecosistémicos de apoyo es la formación de suelo y el ciclado de nutrientes. El suelo, como recurso finito, requiere de condiciones especiales para su formación y la única manera conocida para que esto suceda son los procesos naturales.
          .tarjeta.tarjeta.info-2.p-3(x="55.9%" y="32.5%" numero="2")
            h3 2. Conservación de la diversidad genética
            p Por medio de la conservación de los hábitats se garantiza la preservación de la riqueza genética que caracteriza a los ecosistemas. La variedad de especies que existe en la actualidad se ha puesto en riesgo en múltiples ocasiones por la falta de conocimiento de los mecanismos para evitar que las actividades humanas interfieran con los ciclos naturales y con el entorno en el cual tienen lugar estos importantes procesos. 
          .tarjeta.tarjeta.info-2.p-3(x="68%" y="54.5%" numero="3")
            h3 3. Hábitat de especies
            p Para que la vida sea posible, es necesario que existan los hábitats propicios para cada una de las especies que habitan en los ecosistemas, los cuales dependen de los requerimientos particulares de cada una de ellas. Incluso algunos de estos hábitats poseen características que son comunes a una gran variedad de especies, por lo que se convierten en focos de biodiversidad. 
          .tarjeta.tarjeta.info-2.p-3(x="77%" y="67%" numero="4")
            h3 4.  Ciclado de nutrientes
            p.mb-0 Al igual que ocurre con el suelo, el ciclado de nutrientes ocurre de forma natural, y actividades como la agricultura intensiva, el sobre laboreo del suelo y el uso irracional de agroquímicos son prácticas que afectan directamente estos procesos. 
    
    Separador 


    #t_2_4.titulo-segundo
      h2 2.4 Bienes y servicios culturales
    .franja_content.mb-5
      .franja(style='bottom: 15%; height: 140px')
      .content
        .row.justify-content-center.align-items-center
          .col-lg-7
            p.mb-5 Además de la función biológica que tienen los ecosistemas, es posible encontrar otros beneficios que se relacionan con una visión mucho más integral, la cual trasciende el plano netamente físico y considera factores espirituales, artísticos, intelectuales y cognitivos.
            p.mb-3 “Son los beneficios no materiales obtenidos de los ecosistemas, a través del enriquecimiento espiritual, belleza escénica, inspiración artística e intelectual, el desarrollo cognitivo, la reflexión, la recreación y las experiencias estéticas”  
            p.text-end.fw-bold.text-color (MEA, 2005).
          .col-lg-5.col-auto: img(src="@/assets/curso/15.png")
    p.mb-5.text-center.fw-bold  Entre estos elementos, es posible enunciar los siguientes:
    .row.mb-5.justify-content-center
        .col-lg-3.col-auto.mb-3.mb-lg-0
          .tarjeta.tarjeta-up
            img(src="@/assets/curso/22.jpg", alt= "")
            .tarjeta-up__content.bg-1
              h4.text-center.mg-top-4 Actividades de recreo
              p Han cobrado especial importancia en años recientes, debido a la proliferación de los centros urbanos que, generalmente, carecen de espacios de esparcimiento y recreación. Estos espacios cobran especial importancia para actividades como caminar y practicar deportes. 
        .col-lg-3.col-auto.mb-3.mb-lg-0
          .tarjeta.tarjeta-up
            img(src="@/assets/curso/23.jpg", alt= "")
            .tarjeta-up__content.bg-2
              h4.text-center.mg-top-4 Turismo
              p Una de las grandes oportunidades para los países que tienen alta riqueza paisajística, ya que son millones de personas en el mundo entero las que dedican buena parte de su tiempo y sus recursos al disfrute de estos escenarios naturales. 
        .col-lg-3.col-auto.mb-3.mb-lg-0
          .tarjeta.tarjeta-up
            img(src="@/assets/curso/24.jpg", alt= "")
            .tarjeta-up__content.bg-1
              h4.text-center.mg-top-4 Apreciación estética
              p Los ecosistemas en general son fuente de inspiración para las artes, el diseño, la cultura e incluso para la ciencia. De allí que muchos de estos lugares sean invaluables por su ubicación, su riqueza biológica, su conformación o su composición paisajística. 
        .col-lg-3.col-auto.mb-3.mb-lg-0
          .tarjeta.tarjeta-up
            img(src="@/assets/curso/25.jpg", alt= "")
            .tarjeta-up__content.bg-2
              h4.text-center.mg-top-4 Experiencias espirituales
              p Las culturas suelen estar ligadas a lugares con inmenso valor inmaterial por su historia, su ubicación o el acervo cultural que representan. De allí se desprende la importancia de preservar estos lugares y rescatar las tradiciones y la historia que existe detrás de ellos, para fortalecer el sentido de pertenencia.

</template>

<script>
import TabsA from '@/components/TabsA.vue'
export default {
  name: 'Tema2',
  components: {
    TabsA,
  },
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Alimentos',
        texto:
          'La seguridad alimentaria (aprovisionamiento), en cantidad y con calidad, requiere una producción de alimentos respetuosa del entorno, sostenible desde el punto de vista ambiental y respetuosa de los ecosistemas. Buena parte de los conflictos ambientales que se dan en el mundo entero tienen relación con la expansión de la frontera agrícola. Además de la agricultura, existen otras industrias que igualmente demandan gran cantidad de servicios ecosistémicos para la producción de alimentos, entre las que se destacan la producción ganadera, las especies menores y la explotación acuícola, que tiene su nicho en las aguas continentales y en las zonas costeras.',
        imagen: require('@/assets/curso/images/tema2/img_3.png'),
      },
      {
        titulo: 'Productos maderables',
        texto:
          'La demanda de madera en Colombia se centra en industrias como la construcción, la fabricación de muebles y el embalaje de productos. En el país se comercializan más de 470 especies maderables, aunque esta práctica está sustentada en la extracción selectiva de especies nativas, tales como cativo, caoba, cedro, sajo, cuángare, mangle y roble. Estas especies son empleadas para industrias como la de la pulpa de papel, tríplex, tableros aglomerados, taninos, leña y carbón.',
        imagen: require('@/assets/curso/images/tema2/img_4.png'),
      },
      {
        titulo: 'Productos no maderables',
        texto:
          'Estos usos se relacionan con el uso de productos para industrias como la medicina, las artesanías y la construcción. Si bien los volúmenes demandados no son tan altos como en las otras industrias, se estima que en ella se emplean alrededor de 1.500 especies de árboles provenientes de montañas andinas, sub andinas y de zonas de páramos.',
        imagen: require('@/assets/curso/images/tema2/img_5.png'),
      },
      {
        titulo: 'Pieles, carne y fauna ornamental',
        texto:
          'Otro de los bienes ofrecidos por los ecosistemas locales son los relacionados con estas industrias, algunas de ellas, hasta ahora en consolidación. Dentro de este grupo destacan modelos de negocio basados en la zoocría de especies como babillas, caimanes, chigüiros, iguanas, lobos y boas, con destino a la producción de carne y pieles. Dentro de este amplio espectro también se encuentran los peces ornamentales que en su mayoría provienen de la Orinoquia, la Amazonia y la cuenca del Pacífico.',
        imagen: require('@/assets/curso/images/tema2/img_6.png'),
      },
      {
        titulo: 'Recursos genéticos',
        texto:
          'Colombia es uno de los países más diversos del mundo en términos de su variedad de ecosistemas y organismos biológicos, por lo que no es de extrañar que exista un enorme potencial en lo relacionado con la provisión de material genético básico, representada en los recursos genéticos silvestres y las variedades de cultivos ancestrales. El estudio de muchas de estas variedades autóctonas, abre posibilidades en lo relacionado con la búsqueda de alternativas alimentarias que satisfagan las necesidades de la población.',
        imagen: require('@/assets/curso/images/tema2/img_7.png'),
      },
      {
        titulo: 'Ingredientes naturales',
        texto:
          'Plantas medicinales, productos farmacéuticos y productos cosméticos. El comercio de plantas medicinales y aromáticas es creciente en Colombia; en el país se comercializan aproximadamente 156 especies, de las cuales el 41 % son nativas. Las propiedades de estas plantas y sus utilidades son ampliamente conocidas y estudiadas, aunque existe un espectro muy amplio de plantas y saberes culturales que aún son objeto de escrutinio.',
        imagen: require('@/assets/curso/images/tema2/img_8.png'),
      },
      {
        titulo: 'Agua',
        texto:
          'La riqueza hídrica es un ejemplo claro de la importancia de los servicios ecosistémicos no sólo por lo fundamental que resulta este recurso para el desarrollo de las funciones biológicas de los organismos, sino por la cantidad de servicios que ofrece, los cuales van desde el saneamiento básico hasta la generación de energía a través de las centrales hidroeléctricas. ',
        imagen: require('@/assets/curso/images/tema2/img_9.png'),
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

<style lang="sass">
.tarjeta-up
  overflow: hidden
  position: relative
  .tarjeta-up__content
    position: absolute
    bottom: -75%
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
</style>
