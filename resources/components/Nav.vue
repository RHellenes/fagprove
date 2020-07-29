<template>
  <nav :class="{is_Nav_Open:isNavActive}" class="nav">
    <nuxt-link to="/blogg" class="nav__link">
      Om oss
    </nuxt-link>
    <nuxt-link to="/faq" class="nav__link">
      Kontakt oss
    </nuxt-link>
    <nuxt-link to="/kontakt" class="nav__link">
      Driftstatus
    </nuxt-link>
    <nuxt-link to="/" class="button button--contrast">
      Bestill
    </nuxt-link>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    isNavActive: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  methods: {
    closeNav () {
      this.$emit('close-nav');
    },
    toggleNav () {
      /* this.$refs.largeBtn.blur(); */
      this.$emit('toggle-nav');
    }
  }

};
</script>

<style lang="scss" scoped>
.nav{
  width: 100%;

  flex-direction:column;
  align-items: flex-start;
  display: none;
  font-size: 1.1em;
  @media screen and (min-width:900px){
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
  &__link{
    display:block;
    padding:.1em .5em;
    font-size: 1em;
    color:var(--primary-dark);

    text-decoration:none;
    &:first-of-type{
      margin-top:1em;

    }
      margin-bottom:1em;

    @media screen and (min-width:900px){
      &:first-of-type{
        margin-top:0;

      }
      margin:0;
      width: auto;
      margin-right:2em;
    }
    &:visited{
      color:var(--primary-dark);
    }
    &:hover{
      text-decoration: underline;
    }
  }
}
.is_Nav_Open{
  display: flex;
}
</style>
