<template>
  <div
    class="order-process container mt-2"
  >
    <h1 class="thin">
      Bekreft bestilling
    </h1>
    <div v-if="open" class="four-fifths flex-block mt-2 mb-2">
      <div class="one-half summary ">
        <div class="one-whole">
          <h3>Kontaktinfo</h3>
          <p>{{ offers.cart.contact.data.firstname }} {{ offers.cart.contact.data.surname }}</p>
          <p> {{ offers.cart.contact.data.email }}</p>
          <p> {{ offers.cart.contact.data.phone }}</p>
        </div>

        <div class="one-whole mt-2">
          <h3>Fakturaadresse</h3>
          <p>{{ offers.cart.adress.data.billing.adress }}</p>
          <p>{{ offers.cart.adress.data.billing.postalCode }} {{ offers.cart.adress.data.billing.postalArea }}</p>
        </div>
        <div class="one-whole mt-2">
          <h3>Hytteadresse</h3>
          <p>{{ offers.cart.adress.data.cottage.adress }}</p>
          <p>{{ offers.cart.adress.data.cottage.postalCode }} {{ offers.cart.adress.data.cottage.postalArea }}</p>
          <p>{{ offers.cart.adress.data.cottage.extraInfo }}</p>
        </div>
      </div>

      <div v-if="offers.cart.package.data" class="one-half flex-block">
        <CardOffer
          :content="offers.cart.package.data"
        />
      </div>
      <div class="one-whole mt-3 mb-1 f-size-1-1">
        <label>
          <input id="consent" type="checkbox" name="consent" value="Jeg samtykker til betingelsene til HytteNett">
          <span>Jeg har lest og <a href="#">samtykker til betingelsene</a> </span>
        </label>
      </div>
      <div class="one-whole center-child mt-3 mb-1 f-size-1-1">
        <input @click.prevent type="submit" value="Bestill" class="button button--contrast">
      </div>
    </div>
  </div>
</template>

<script>
import CardOffer from '@/components/CardOffer';
export default {
  name: 'CardConfirm',
  components: {
    CardOffer
  },
  props: {
    open: {
      required: true,
      type: Boolean
    },
    pageNr: {
      required: true,
      type: Number
    }
  },
  computed: {
    offers () {
      return this.$store.state.cart;
    }

  }

};
</script>

<style lang="scss" scoped>
.summary{
  font-size: 1.2em;

  h3{
    font-size: 1em;
    margin-bottom:.3em;
  }
  p{
    margin-bottom:.45em;
  }

}

</style>
