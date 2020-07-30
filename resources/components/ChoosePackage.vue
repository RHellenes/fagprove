<template>
  <div class=" choose-package">
    <h1 class="center">
      Velg pakke
    </h1>
    <div class="mt-3 choose-package_container">
      <div
        :key="index"
        v-for="(offer, index) in offers"
        :class="offer.isHighlighted && offer.isCtaActive ? 'priority' : '' "
        class="card-wrap mb-1"
      >
        <CardOffer
          :content="offer"
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
  computed: {
    offers () {
      return this.$store.state.offers.offers;
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
    font-size: 2.5rem;
    font-weight: 500;
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
