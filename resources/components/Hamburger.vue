<template>
  <button
    :class="{isOpen: isNavActive}"
    @click="handleClick"
    class="hamburger"
    aria-label="Menu toggle button"
    type="button"
    aria-haspopup="true"
  >
    <span class="hamburger__desc">{{ isNavActive ? 'LUKK' : 'MENY' }}</span>
    <span class="hamburger__layers">
      <span id="top" ref="top" />
      <span id="center" ref="center" />
      <span id="bottom" ref="bottom" />
    </span>
  </button>
</template>

<script>
export default {
  name: 'Hamburger',
  props: {
    isNavActive: {
      type: Boolean,
      required: true

    }
  },
  methods: {
    handleClick () {
      this.$emit('toggle-nav');
    }
  }
};
</script>

<style lang="scss"  >
.hamburger{
  display: block;
  position: relative;
  z-index:1001;
  background:transparent;
  border:none;
  min-width:54px;
  max-width:54px;
  min-height:48px;
  max-height:48px;
  padding: 0 12px;
  outline: none;
  font-size: 0px;
  cursor:pointer;

  -webkit-tap-highlight-color:transparent;
  @media screen and (min-width: 900px){
    display: none;
  }
  &__desc{
    position: absolute;
    opacity: 0;
    font-size: 0;
    right:-100000px;
  }
  &__layers{
    width: 100%;
    height:calc(48px - (12px * 2));
    position: relative;
    display:block;
    transition:height 70ms ease-in-out;

    & > span{
      height:3px;
      width:100%;
      position: absolute;
      margin-top:-1.5px;
      top:50%;
      left:0;
      border-radius: 6px ;
      background:var(--primary-dark);

      transition: top 70ms ease-in-out, bottom 70ms ease-in-out;
    }
      & #top{
        top:0;
        margin-top:0;
      }
      & #bottom{
        margin-top:0;

        top:auto;
        bottom:0;
      }

  }
 /*  &:focus{
    outline: 2px solid var(--color-foreground);
  } */
  &:active{
    outline: 0px;
  }
  &.isOpen{

    .hamburger__layers{

      & > span{
        margin-top:-1.5px;
        top:50%;
        left:0;
        transition: none;

        &#top{
          opacity: 0;

          transition: none;
        }
        &#center{
          transform: rotate(45deg);
          /* margin-top:0 */;
          top:50%;
        }

        &#bottom{
          transform: rotate(-45deg);
          margin-top:-1.5px;
          top:50%;
          bottom:auto;
          transition: none;
        }

      }
    }
  }
}
</style>
