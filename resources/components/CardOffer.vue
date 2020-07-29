<template>
  <div class="offer">
    <div class="container">
      <div class="header">
        <h3 class="mb-05 mt-05">
          Sølv
        </h3>
        <h4>659,- per mnd</h4>
        <h6 class="tint mt-05">
          Etablering kan tilkomme
        </h6>
      </div>
      <div :class="content.isCtaActive ? '' : 'mb-1' " class="content mt-2">
        <ul v-if="content">
          <li v-for="(benefit, index ) in content.benefits" :key="index" v-html="benefit" class="mb-1" />
        </ul>
      </div>
      <div v-if="content.isCtaActive" class="cta center-child one-whole mt-2">
        <nuxt-link :class="content.isHighlighted ? 'button--contrast mt-1' : 'button--primary ' " to="/" class="button button-compressed ">
          Velg sølv
        </nuxt-link>
      </div>
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

  & .container{

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
    ul{
      padding:0;
      list-style-type:none;
    }
  }
}
</style>
