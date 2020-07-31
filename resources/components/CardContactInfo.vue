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
          <span>Fornavn*</span>
          <input id="firstname" v-model="contactInfo.firstname" required type="text" name="firstname">
        </label>
        <label class="label order-process_adress_one-half mt-105">
          <span>Etternavn*</span>
          <input id="surname" v-model="contactInfo.surname" required type="text" name="surname">
        </label>
      </div>
      <div class="order-process_adress_one-half flex-block ">
        <label class="label one-whole mt-105">
          <span>Email*</span>
          <input
            id="email"
            :class="hasTriedAndFailed && isInfoOK.email === '1' ? 'error' : ''"
            v-model="contactInfo.email"
            required
            type="text"
            name="email"
          >
        </label>
        <span v-if="hasTriedAndFailed && isInfoOK.email === '1'" class="one-whole mt-05 error-text">Du må fylle inn en gyldig emailadresse</span>
        <label class="label one-whole mt-105 ">
          <span>Mobilnummer*</span>
          <input
            id="phonenumber"
            :class="hasTriedAndFailed && isInfoOK.phonenumber === '1' ? 'error' : ''"
            v-model="contactInfo.phonenumber"
            required
            type="tel"
            name="phonenumber"
          >
        </label>
        <span v-if="hasTriedAndFailed && isInfoOK.phonenumber === '1'" class="one-whole mt-05 error-text">Pass på at du har fylt inn et norskt telefonnummer</span>
      </div>
      <div class="one-whole center-child mt-3 mb-1 f-size-1-1">
        <input :class="isFormOk() ? '' : 'button--disabled'" type="submit" value="Se over bestillingen" class="button button--primary">
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
      },
      isInfoOK: {
        firstname: '2',
        surname: '2',
        email: '0',
        phonenumber: '0'
      },
      hasTriedAndFailed: false

    };
  },
  computed: {
    hasRegistred () {
      return this.$store.state.cart.cart.contact.meta.hasRegistred;
    },
    registredContactInfo () {
      return this.$store.state.cart.cart.contact.data;
    },
    mirroredEmailProp () {
      return this.contactInfo.email;
    },
    mirroredPhoneProp () {
      return this.contactInfo.phonenumber;
    }
  },
  watch: {
    mirroredEmailProp (newVal, oldVal) {
      this.controllEmail();
    },
    mirroredPhoneProp (newVal, oldVal) {
      this.controllPhone();
    }
  },
  methods: {
    controllEmail () {
      // eslint-disable-next-line no-useless-escape
      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.isInfoOK.email = regex.test(this.contactInfo.email) ? '2' : '1';
    },
    controllPhone () {
      // eslint-disable-next-line no-useless-escape
      const regex = /^((0047)?|(\+47)?|(47)?)\d{8}$/;
      this.isInfoOK.phonenumber = regex.test(this.contactInfo.phonenumber) ? '2' : '1';
    },
    isFormOk () {
      if (this.isInfoOK.firstname === '2' &&
          this.isInfoOK.surname === '2' &&
          this.isInfoOK.email === '2' &&
          this.isInfoOK.phonenumber === '2') {
        return true;
      } else {
        return false;
      }
    },

    updateContactInfo () {
      if (this.isFormOk()) {
        this.$store.commit('cart/updateContact', this.contactInfo);
        this.$store.commit('progress/increasePageNr');
      } else {
        this.hasTriedAndFailed = true;
      }
    },
    setPageNrIfNotOpen () {
      this.$store.commit('progress/setPageNr', this.pageNr);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
