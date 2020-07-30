<template>
  <div class="order-process container mt-3">
    <h1 class="thin">
      Adresse
    </h1>
    <form @submit.prevent="updateAdress()" class="four-fifths">
      <div class="order-process_adress_one-half flex-block ">
        <label class="label one-whole mt-1">
          <span>Fakturaadresse</span>
          <input id="billing_adress" v-model="billing_adress" required type="text" name="billing_adress">
        </label>
        <label class="label form_one-third mt-1">
          <span>Postnr</span>
          <input
            id="postnumber"
            v-model="billing_postalcode"
            minlength="4"
            maxlength="4"
            pattern="\d+"
            required
            type="tel"
            name="postalcode"
          >
        </label>
        <div class="label untouchable form_two-thirds mt-1">
          <span>Poststed</span>
          <div class="untouchable">
            {{ billing_municipality }}
          </div>
        </div>

        <label class="label one-whole mt-4">
          <span>Adressa til hytta</span>
          <input id="cottage_adress" v-model="cottage_adress" required type="text" name="cottage_adress">
        </label>
        <label class="label form_one-third mt-1">
          <span>Postnr</span>
          <input
            id="cottage_postnumber"
            v-model="cottage_postalcode"
            required
            type="tel"
            name="cottage_postalcode"
            minlength="4"
            maxlength="4"
            pattern="\d+"
          >
        </label>
        <div class="label untouchable form_two-thirds mt-1">
          <span>Poststed</span>
          <div class="untouchable">
            {{ cottage_municipality }}
          </div>
        </div>
        <label class="label one-whole mt-105">
          <span>Hyttefelt (om du ikke vet adressen)</span>
          <input id="cottage_extra" v-model="cottage_extra" required type="text" name="cottage_extra">
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
      cottage_extra: '',
      isCottagePostalCodeOk: true
    };
  },
  watch: {
    billing_postalcode (newVal, oldVal) {
      this.validatePostalCode(newVal, 'billing');
    },
    cottage_postalcode (newVal, oldVal) {
      this.validatePostalCode(newVal, 'cottage');
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
    validatePostalCode (code, where) {
      // if ('([0-9]{0-3})'.test(code)) {
      if (code.length) {
        // Reset
        switch (where) {
          case 'cottage':
            this.cottage_municipality = '';
            this.isCottagePostalCodeOk = '';

            break;

          default:
            this.billing_municipality = '';
            break;
        }
      }

      const postalInfo = this._.find(this.postalcodes, { 'municipalityCode': code });
      // VESTFOLD OG TELEMARK KOMMUNENUMMER MÅ BEGYNNE PÅ 38
      const regex = RegExp('^(38)([0-9]{2})$');

      if (postalInfo) {
        switch (where) {
          case 'cottage':
            this.cottage_municipality = postalInfo.municipality;
            this.isCottagePostalCodeOk = !!regex.test(postalInfo.countyCode);

            break;

          default:
            this.billing_municipality = postalInfo.municipality;
            break;
        }
      }
    },
    updateAdress () {
      const obj = {
        billing: {
          adress: this.billing_adress,
          postalCode: this.billing_postalcode,
          postalArea: this.billing_municipality
        },
        cottage: {
          adress: this.cottage_adress,
          postalCode: this.cottage_postalcode,
          postalArea: this.cottage_municipality,
          extraInfo: this.cottage_extra
        }
      };
      this.$store.commit('cart/updateAdress', obj);
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
