<template>
  <section class="container">
    <section id="feilmelding" class="section section--restrict">
      <template v-if="error.statusCode === 404">
        <h1>
          Siden finnes ikke
        </h1>
        <p>Siden du leter etter er enten flyttet eller eksisterer ikke lenger.</p>
      </template>
      <h1 v-else>
        Ops.. her gikk det ikke helt etter planen
      </h1>
      <div class="one-whole">
        Gå til <nuxt-link class="underline" to="/">
          forsiden
        </nuxt-link>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['error']
};
</script>
