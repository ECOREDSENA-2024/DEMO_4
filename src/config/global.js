export default {
  global: {
    componenteFormativo:
      'Caracterización de componentes biofísicos y socioculturales de la finca cafetera',
    descripcionCurso:
      'A través del estudio de este componente, el aprendiz estará más y mejor capacitado en las competencias e implicaciones del proceso productivo: identificación de ecosistemas, normativa ambiental, desarrollo de prácticas para reducción de impactos de la caficultura sobre el entorno natural, herramientas topográficas, entre otros. Todo ello como soporte de su responsabilidad con la sostenibilidad, en términos ambientales.',
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.png'),
    imagenBannerPrincipal: require('@/assets/curso/banner.svg'),
    fondoBannerInterno: require('@/assets/curso/images/header/interno.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Ecología',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Factores bióticos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: ' Factores abióticos',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Bienes y servicios ambientales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Bienes y servicios de abastecimiento',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Bienes y servicios de regulación',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Bienes y servicios de apoyo',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Bienes y servicios culturales',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Conflictos y problemas ambientales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Origen de los conflictos ambientales',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Acciones de mitigación de conflictos ambientales',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Cartografía predial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Herramientas topográficas',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Interpretación cartográfica',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Manejo de escalas',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Castro L. et al. (2018). Preguntas y respuestas sobre conflictos ambientales. Aprendizajes del río Orotoy.',
      link: 'http://repository.humboldt.org.co/handle/20.500.11761/34269',
    },
    {
      referencia:
        'Fadda, G. (2017). Morfología del suelo. Facultad de Agronomía y Zootecnia Universidad Nacional de Tucumán,  ',
      link:
        'https://www.edafologia.org/app/download/7953429476/Morfologia+2017.pdf?t=1587690300  ',
    },
    {
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales IDEAM. (2022). Tiempo y clima, meteorología agrícola.',
      link: 'http://www.ideam.gov.co/web/tiempo-y-clima/meteorologia-agricola',
    },
    {
      referencia:
        'Instituto Nacional de Estadística, Geografía e Informática (2005). Guía para la Interpretación de Cartografía Topografía.',
      link:
        'https://www.inegi.org.mx/contenido/productos/prod_serv/contenidos/espanol/bvinegi/productos/historicos/1329/702825231743/702825231743_1.pdf ',
    },
    {
      referencia:
        'Ministerio De Ambiente Y Desarrollo Sostenible, (2015). Política nacional para la gestión integral de la biodiversidad y sus servicios ecosistémicos.',
      link:
        'http://repository.humboldt.org.co/bitstream/handle/20.500.11761/32546/PNGIBSE_espanol_web.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia: 'Odum E., Barret G. (s.f.). Fundamentos de ecología.',
      link:
        'https://fdocuments.es/reader/full/fundamentos-de-ecologia-de-eugene-odum',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura FAO (2015). El suelo es un recurso no renovable su conservación es esencial para la seguridad alimentaria y nuestro futuro sostenible.',
      link: 'https://www.fao.org/3/i4373s/i4373s.pdf',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura FAO (2022). Servicios ecosistémicos y biodiversidad.',
      link:
        'https://www.fao.org/ecosystem-services-biodiversity/background/regulatingservices/es/ ',
    },
    {
      referencia:
        'Sánchez N., Rocha Z. (2014 ). La evaluación de servicios ambientales de soporte. Revista digital Uniboyacá. No. 2 – Mzo. – Ago.',
      link:
        'https://revistasdigitales.uniboyaca.edu.co/index.php/reiv3/article/view/67/69 ',
    },
  ],
  glosario: [
    {
      termino: 'Antroposfera',
      significado:
        'Es la porción de la biosfera que abarca el hábitat humano, así como sus actividades y funciones. ',
    },
    {
      termino: 'Biota',
      significado:
        'La biota es todo el conjunto de especies animales, vegetales y microorganismos que se hacen presentes en un territorio o un área geográfica.',
    },
    {
      termino: 'Criósfera ',
      significado:
        'Hace referencia a la porción de la capa superficial de la tierra que se encuentra cubierta por hielo. ',
    },
    {
      termino: 'Erosivo',
      significado:
        'Es todo fenómeno o proceso que tiene la capacidad de degradar el suelo y afectar su estructura y composición natural. ',
    },
    {
      termino: 'Escorrentía',
      significado:
        'Es el agua de lluvia que se desplaza por la superficie del suelo cuando este se encuentra saturado. Generalmente las aguas de escorrentía arrastran parte de los nutrientes del suelo. ',
    },
    {
      termino: 'Pluviómetro',
      significado:
        'Instrumento empleado para medir la cantidad de agua lluvia por metro cuadrado. Este mide la cantidad de agua en milímetros. ',
    },
    {
      termino: 'Roca madre',
      significado:
        'Es la base rocosa original sobre la cual tienen lugar los procesos de meteorización que, posteriormente, dan origen al suelo. La calidad y tipo de suelo está altamente condicionado por las propiedades de la roca madre. ',
    },
    {
      termino: 'Taninos',
      significado:
        'Son sustancias de la familia de los polifenoles presentes en los árboles y en las plantas en general. Tienen múltiples aplicaciones en la industria debido a sus propiedades antioxidantes. ',
    },
  ],
  complementario: [
    {
      texto:
        'Decreto 1729 de 2002. [IDEAM]. Por el cual se reglamenta la Parte XIII, Título 2, Capítulo III del Decreto-ley 2811 de 1974 sobre cuencas hidrográficas, parcialmente el numeral 12 del Artículo 5° de la Ley 99 de 1993 y se dictan otras disposiciones. 6 de agosto de 2002. DO 44893.',
      tipo: 'PDF',
      link:
        'http://www.ideam.gov.co/documents/24024/36843/Decreto_1729_de_2002.pdf/59ad8528-1179-4fd7-9075-aed67fce2b40#:~:text=Enti%C3%A9ndese%20por%20cuenca%20u%20hoya%20hidrogr%C3%A1fica%20el%20%C3%A1rea%20de%20aguas,de%20aguas%2C%20en%20un%20pantano',
    },
    {
      texto: 'TERRAZOCULTOR José Manuel. (2018). Pluviómetro casero',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=EyUjYCFbCjA',
    },
    {
      texto:
        'Ing. Jesús Márquez. (2020). Aprende a calcular el caudal (más fácil y en casa)',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=5uHyjcMBAvY',
    },
    {
      texto: 'Ingenia UdeA. (2018). Aforo de caudales',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=IDapeEITOSA',
    },
    {
      texto: 'Wiracocha Foundation. (2015). Hablemos de suelos ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=mXoR0-c55II',
    },
    {
      texto:
        'Martinez, M. (2020). Nutrición Vegetal: Generalidades y Funciones de los Nutrientes ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=PO8B1ZnT8Rc',
    },
    {
      texto:
        'Instituto Humboldt. (2013). Servicios ecosistémicos, nuestra conexión vital con la biodiversidad ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=2h6rOS8NvkQ',
    },
    {
      texto:
        'Geo Api. (2014). Tutorial configuración inicial del GPS - GeoApiC7',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=GXuiJ2lUDPc',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable Equipo  Desarrollo Curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Andrés Sánchez Suárez',
        cargo: 'Experto temático',
        centro: 'Centro Agropecuario La Granja - Regional Tolima ',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador Instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora metodológico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Eulises Orduz Amézquita',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Pedro Nel Calao Zabala',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Miguel Guerrero Gutiérrez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Mayerly Pérez Jaimes ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
