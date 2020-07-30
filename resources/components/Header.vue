<template>
  <header>
    <div class="narrow_content_container flex-align-center">
      <nuxt-link to="/" class="logo">
        <img src="@/assets/images/hyttenett_logo.svg" alt="HytteNett sin logo">
      </nuxt-link>
      <Hamburger :is-nav-active="isNavActive" @toggle-nav="toggleNav" />
      <Nav :is-nav-active="isNavActive" @toggle-nav="toggleNav" @close-nav="closeNav" />
    </div>
  </header>
</template>

<script>
import Hamburger from '@/components/Hamburger';
import Nav from '@/components/Nav';
export default {
  name: 'Header',
  components: {
    Hamburger,
    Nav
  },
  data () {
    return {
      isNavActive: false
    };
  },
  watch: {
    $route (val, oldVal) {
      if (val.query !== oldVal.query) {
      // Fetch
        this.closeNav();
      }
    }
  },
  methods: {
    toggleNav () {
      this.isNavActive = !this.isNavActive;
    },
    closeNav () {
      this.isNavActive = false;
    }
  }
};
</script>

<style lang="scss" >
header{
  background:var(--off-white);
  color:var(--primary-dark);
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items:flex-start;
  z-index:100;

  @media (max-width:900px){
    padding: .5em 1em;
  }

}

.logo{
  display: block;
  height:auto;
  width: 15%;
  min-width: 8em;
  max-width: 9em;
  align-self:center;
  position: relative;
  & img{
    transform: translateY(12.5%);
    width:100%;
  }
}

</style>
