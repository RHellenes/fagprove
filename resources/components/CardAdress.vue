<template>
  <div class="order-process container mt-3">
    <h1 class="thin">
      Adresse
    </h1>
    <form class="four-fifths">
      <div class="one-half flex-block ">
        <label class="label one-whole mt-1">
          <span>Fakturaadresse</span>
          <input id="billing_adress" required type="text" name="billing_adress">
        </label>
        <label class="label form_one-third mt-1">
          <span>Postnr</span>
          <input id="postnumber" v-model="billing_postalcode" required type="tel" name="postalcode">
        </label>
        <div class="label untouchable form_two-thirds mt-1">
          <span>Poststed</span>
          <div class="untouchable">
            {{ billing_municipality }}
          </div>
        </div>

        <label class="label one-whole mt-4">
          <span>Adressa til hytta</span>
          <input id="cottage_adress" required type="text" name="cottage_adress">
        </label>
        <label class="label form_one-third mt-1">
          <span>Postnr</span>
          <input id="cottage_postnumber" v-model="cottage_postalcode" required type="tel" name="cottage_postalcode">
        </label>
        <div class="label untouchable form_two-thirds mt-1">
          <span>Poststed</span>
          <div class="untouchable">
            {{ cottage_municipality }}
          </div>
        </div>
        <label class="label one-whole mt-105">
          <span>Hyttefelt (om du ikke vet adressen)</span>
          <input id="cottage_area" required type="text" name="cottage_area">
        </label>
      </div>
      <div class="one-whole center-child mt-3 mb-1 f-size-1-1">
        <input type="submit" value="Fyll ut kontaktinformasjon" class="button button--primary">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CardAdress',
  data () {
    return {
      postalcodes: [],

      billing_adress: '',
      billing_postalcode: '',
      billing_municipality: '',

      cottage_adress: '',
      cottage_postalcode: '',
      cottage_municipality: '',
      cottage_extra: ''
    };
  },
  watch: {
    billing_postalcode (newVal, oldVal) {
      this.validatePostalCode(newVal, 'billing');
    },
    cottage_postalcode (newVal, oldVal) {
      this.validatePostalCode(newVal, 'cottage', true);
    }
  },
  mounted () {
    this.fetchposts();
  },
  methods: {
    async fetchposts () {
      try {
        const data = await this.$axios.$get('/postal-codes/postalcodes.json');

        this.postalcodes = data;
      } catch (e) { }
    },
    validatePostalCode (code, where, strict) {
      const postalInfo = this._.find(this.postalcodes, { 'municipalityCode': code });
      if (postalInfo) {
        switch (where) {
          case 'cottage':
            this.cottage_municipality = postalInfo.municipality;
            break;

          default:
            this.billing_municipality = postalInfo.municipality;
            break;
        }
      }
    }
  }

};
</script>

<style lang="scss" scoped>
.form{
  &_two-thirds{
    width: 60%;
  }
  &_one-third{
    width: 33%;

  }

}
</style>
