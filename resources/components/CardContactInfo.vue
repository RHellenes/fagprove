<template>
  <div class="order-process container mt-2">
    <h1 class="thin">
      Kontaktinformasjon
    </h1>
    <form @submit.prevent="updateContactInfo()" class="four-fifths">
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
  methods: {
    updateContactInfo () {
      this.$store.commit('cart/updateContact', this.contactInfo);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
