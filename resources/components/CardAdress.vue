<template>
  <div

    :tabindex="!open && hasRegistred ? '0' : ''"
    @click="!open && hasRegistred ? setPageNrIfNotOpen() : ''"
    @keydown.enter="!open && hasRegistred ? setPageNrIfNotOpen() : ''"
    class="order-process container mt-2"
  >
    <div id="adress" class="floater" />
    <h1 class="thin">
      Adresse
    </h1>
    <span v-if="!open && registredAdress.cottage.adress" class="center">{{ `${registredAdress.cottage.adress}, ${registredAdress.cottage.postalCode} ${registredAdress.cottage.postalArea}` }} </span>
    <form @submit.prevent="updateAdress()" v-if="open" class="four-fifths">
      <div class="order-process_adress_one-half flex-block ">
        <label class="label one-whole mt-1">
          <span>Fakturaadresse*</span>
          <input id="billing_adress" v-model="billing_adress" required type="text" name="billing_adress">
        </label>
        <label class="label form_one-third mt-1">
          <span>Postnr*</span>
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
          <span>Adressa til hytta*</span>
          <input id="cottage_adress" v-model="cottage_adress" required type="text" name="cottage_adress">
        </label>
        <label class="label form_one-third mt-1">
          <span>Postnr*</span>
          <input
            id="cottage_postnumber"
            v-model="cottage_postalcode"
            required
            type="tel"
            name="cottage_postalcode"
            minlength="4"
            maxlength="4"
            pattern="\d+"
          ></inputd></label>
        <div class="label untouchable form_two-thirds mt-1">
          <span>Poststed</span>
          <div :class="isCottagePostalCodeOk === '0' ? 'red_border' : ''" class="untouchable">
            {{ cottage_municipality }}
          </div>
        </div>
        <p v-if="isCottagePostalCodeOk === '0'" class="mt-05">
          Oj! Hytta di er vist ikke i Vestfold eller Telemark!
        </p>
        <label class="label one-whole mt-105">
          <span>Hyttefelt (om du ikke vet adressen)</span>
          <input id="cottage_extra" v-model="cottage_extra" type="text" name="cottage_extra">
        </label>
      </div>
      <div class="one-whole center-child mt-3 mb-1 f-size-1-1">
        <input :disabled="!isFormFilled" type="submit" value="Fyll ut kontaktinformasjon" class="button button--primary">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CardAdress',
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
      isCottagePostalCodeOk: true,

      isFormFilled: false
    };
  },
  computed: {
    hasRegistred () {
      return this.$store.state.cart.cart.adress.meta.hasRegistred;
    },
    registredAdress () {
      return this.$store.state.cart.cart.adress.data;
    }
  },
  watch: {
    billing_postalcode (newVal, oldVal) {
      this.checkIfFormIsFilled();
      this.validatePostalCode(newVal, 'billing');
    },
    cottage_postalcode (newVal, oldVal) {
      this.checkIfFormIsFilled();
      this.validatePostalCode(newVal, 'cottage');
    },
    billing_adress (newVal, oldVal) {
      this.checkIfFormIsFilled();
    },
    billing_municipality (newVal, oldVal) {
      this.checkIfFormIsFilled();
    },
    cottage_adress (newVal, oldVal) {
      this.checkIfFormIsFilled();
    },
    cottage_municipality (newVal, oldVal) {
      this.checkIfFormIsFilled();
    }
  },
  mounted () {
    this.fetchposts();
  },
  methods: {
    checkIfFormIsFilled () {
      if (this.billing_adress.length &&
        this.billing_postalcode.length &&
          this.billing_municipality.length &&
            this.cottage_adress.length &&
              this.cottage_postalcode.length &&
                this.cottage_municipality.length &&
                  this.isCottagePostalCodeOk === '2') {
        this.isFormFilled = true;
      } else {
        this.isFormFilled = false;
      }
    },
    setPageNrIfNotOpen () {
      this.$store.commit('progress/setPageNr', this.pageNr);
    },
    async fetchposts () {
      try {
        const data = await this.$axios.$get('/postal-codes/postalcodes.json');

        this.postalcodes = data;
      } catch (e) { }
    },
    validatePostalCode (code, where) {
      // if ('([0-9]{0-3})'.test(code)) {
      if (code.toString().length < 4 || !code) {
        // Reset
        switch (where) {
          case 'cottage':
            this.cottage_municipality = '';
            this.isCottagePostalCodeOk = '1';

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
            this.isCottagePostalCodeOk = regex.test(postalInfo.countyCode) ? '2' : '0';
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
      if (this.isCottagePostalCodeOk === '2') {
        this.$store.commit('cart/updateAdress', obj);
        this.$store.commit('progress/increasePageNr');

        this.$router.push('/#adress');
        this.$router.push('/#contact');
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
.order-process{
  position: relative;
}
.floater{
  position: absolute;
  height: 1px;
  top:-70px;
}
.red_border{
  border-bottom: 3px solid var(--primary-contrast) !important;
  border-right: 0px;
  border-left: 0px;
}

</style>
