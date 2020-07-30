<template>
  <div
    id="contact"
    :tabindex="!open && hasRegistred ? '0' : ''"
    v-on:click="!open && hasRegistred ? setPageNrIfNotOpen() : ''"
    v-on:keydown.enter="!open && hasRegistred ? setPageNrIfNotOpen() : ''"
    class="order-process container mt-2"
  >
    <h1 class="thin">
      Kontaktinformasjon
    </h1>
    <p v-if="!open">
      {{ registredContactInfo.firstname }} {{ registredContactInfo.surname }}
    </p>
    <p v-if="!open">
      {{ registredContactInfo.email }}
    </p>
    <p v-if="!open">
      {{ registredContactInfo.phonenumber }}
    </p>
    <form @submit.prevent="updateContactInfo()" v-if="open" class="four-fifths">
      <div class="one-whole flex-block ">
        <label class="label order-process_adress_one-half mt-105">
          <span>Fornavn</span>
          <input id="firstname" v-model="contactInfo.firstname" required type="text" name="firstname">
        </label>
        <label class="label order-process_adress_one-half mt-105">
          <span>Etternavn</span>
          <input id="surname" v-model="contactInfo.surname" required type="text" name="surname">
        </label>
      </div>
      <div class="order-process_adress_one-half flex-block ">
        <label class="label one-whole mt-105">
          <span>Email</span>
          <input id="email" v-model="contactInfo.email" required type="text" name="email">
        </label>
        <label class="label one-whole mt-105">
          <span>Mobilnummer</span>
          <input id="phonenumber" v-model="contactInfo.phonenumber" required type="tel" name="phonenumber">
        </label>
      </div>
      <div class="one-whole center-child mt-3 mb-1 f-size-1-1">
        <input type="submit" value="Se over bestillingen" class="button button--primary">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactInfo',
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
      contactInfo: {
        firstname: '',
        surname: '',
        email: '',
        phonenumber: ''

      }
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
    updateContactInfo () {
      this.$store.commit('cart/updateContact', this.contactInfo);
      this.$store.commit('progress/increasePageNr');
    },
    setPageNrIfNotOpen () {
      this.$store.commit('progress/setPageNr', this.pageNr);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
