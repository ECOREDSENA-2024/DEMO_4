<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 Se ha finalizado el estudio de los contenidos de este componente formativo. En este punto, se invita a hacer un análisis de la estructura que se muestra a continuación. Se debe registrar una síntesis propia en una libreta de apuntes personal. Se debe repasar los puntos que se considere necesario. ¡Adelante!
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/images/tema4/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis
    

</template>

<script>
export default {
  name: 'Sintesis',
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

<style lang="sass"></style>
