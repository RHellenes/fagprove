<template>
  <div class="offer">
    <div :class="[isCtaActive ? 'min-height' : '', content.isHighlighted && isCtaActive ? 'increase-size' : '' ]" class="container">
      <div class="header">
        <h3 class="mb-05 mt-05">
          {{ content.title }}
        </h3>
        <h4>{{ content.price }},- per mnd</h4>
        <h6 class="tint mt-05">
          Etablering kan tilkomme
        </h6>
      </div>
      <div :class="isCtaActive ? '' : 'mb-1' " class="content mt-2">
        <ul v-if="content">
          <li v-for="(benefit, index ) in content.benefits" :key="index" v-html="benefit" class="mb-1" />
        </ul>
      </div>
      <form v-if="isCtaActive" @submit.prevent="addPackage()" class="cta center-child one-whole mt-2">
        <input :class="content.isHighlighted ? 'button--contrast mt-1' : 'button--primary ' " :value="`Velg ${content.title.toLowerCase()}`" type="submit" class="button button-compressed ">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardOffer',
  props: {
    content: {
      required: true,
      type: Object

    },
    isCtaActive: {
      required: false,
      type: Boolean,
      default: false
    }

  },
  methods: {
    addPackage () {
      this.$store.commit('cart/updatePackage', this.content);
      this.$store.commit('progress/increasePageNr');
      this.$router.push('/#adress');
    }
  }
};
</script>

<style lang="scss" scoped>
.offer {

  position: relative;
  width: 100%;
  color: var(--primary-dark);
  text-align:center;
  max-width:20em;
  & .container{
    &.min-height{
      min-height:455px;
    }
    &.increase-size{
      @media (min-width: 900px) {
        transform: scale(1.05);
      }

    }
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    justify-content: flex-start;
    width: 100%;
    background: #fff;
    border: solid 2px var(--primary-dark);
    padding:1rem .5rem;
    border-radius: 3px;
  }
  .header{
    h3{
      font-size: 2.5rem;
      font-weight: 500;
      position: relative;

      &:after{
        content:'';
        height:2px;
        width: 25px;
        background: var(--primary-dark-tint);
        position: absolute;
        transform:translateX(-50%);
        bottom:-6px;
        left:50%;
      }
    }
    h4{
      font-size: 1.4rem;
      font-weight: 500;
    }
    h6{
      font-size: .9rem;
      font-weight: 400;

    }
  }
  .content{
    justify-self: flex-start;
    ul{
      padding:0;
      list-style-type:none;
    }
  }
  & .cta{
    position: absolute;
    bottom:1.5em;
  }
}
</style>
