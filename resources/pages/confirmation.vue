<template>
  <div
    id="confirmation"
    class="order-process container mt-3 mb-6"
  >
    <h1 class="thin ">
      Takk for at du testet skjemaet {{ registredContactInfo.firstname }}
    </h1>
    <p class="mt-05">
      Vanligvis ville vi tatt imot informasjonen du oppgav og lagret den på ett av våre systemer, sendt deg en bekreftelsesemail og behandlet bestillingen. <br>—<br> Men dette er ikke en reelt produkt så ingenting er lagret.
    </p>
    <a href="/" class="button button--compact button--primary mt-2">Klikk her for å starte på nytt</a>
  </div>
</template>

<script>
export default {
  name: 'ContactInfo',
  props: {

  },
  data () {
    return {

    };
  },
  head () {
    return {
      title: 'Bekreftelse — Fagprøve',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        }
      ]
    };
  },
  computed: {
    hasRegistred () {
      return this.$store.state.cart.cart.contact.meta.hasRegistred;
    },
    registredContactInfo () {
      return this.$store.state.cart.cart.contact.data;
    }
  },

  methods: {
  }
};
</script>

<style lang="scss" scoped>
#confirmation{
  min-height:65vh;
  align-items:center;
  width: 90%;
  max-width: 900px;
  & *{
    max-width: 600px;
    text-align: center;
    line-height: 1.6;
  }
  @media (max-width: 500px) {
    h1{
      font-size: 1.6em;
      line-height: 1.2;
    }
  }
}
</style>
