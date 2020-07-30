<template>
  <div
    :tabindex="!open && hasRegistred ? '0' : ''"
    @click="!open && hasRegistred ? setPageNrIfNotOpen() : ''"
    @keydown.enter="!open && hasRegistred ? setPageNrIfNotOpen() : ''"
    :class="!open ? 'order-process container' : 'choose-package mb-6'"
  >
    <h1 class="center thin">
      Velg pakke
    </h1>
    <span v-if="!open" class="center">{{ chosenPackage }}</span>
    <div v-if="open" class="mt-3 choose-package_container">
      <div
        :key="index"
        v-for="(offer, index) in offers"
        :class="offer.isHighlighted && offer.isCtaActive ? 'priority' : '' "
        class="card-wrap mb-1"
      >
        <CardOffer
          :content="offer"
          :is-cta-active="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardOffer from '@/components/CardOffer';
export default {
  name: 'ChoosePackage',
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
      return this.$store.state.offers.offers;
    },
    hasRegistred () {
      return this.$store.state.cart.cart.package.meta.hasRegistred;
    },
    chosenPackage () {
      return this.$store.state.cart.cart.package.data.title ? this.$store.state.cart.cart.package.data.title : null;
    }

  },
  methods: {
    setPageNrIfNotOpen () {
      this.$store.commit('progress/setPageNr', this.pageNr);
    }

  }

};
</script>

<style lang="scss" scoped>
.choose-package{
  width: 100%;
  max-width: 1100px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  h1{
    font-size: 2rem;
    font-weight: 400;
    position: relative;

    &:after{
      content:'';
      height:2px;
      width: 100px;
      background: var(--primary-dark-tint);
      position: absolute;
      transform:translateX(-50%);
      bottom:-10px;
      left:50%;
    }
  }
  &_container{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items:center;
    flex-wrap: wrap;
    flex-direction: column;

    @media (min-width: 900px) {
      flex-direction: row;
      flex-wrap: nowrap;

    }
    & .card-wrap{
      width:90%;
      display: flex;
      justify-content: center;
      @media (min-width: 900px) {
        width:33%;

      }

    }
  }
}
.priority{
  z-index:200;
}
</style>
