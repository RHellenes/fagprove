<template>
  <div class="wrapper">
    <ChoosePackage :open="pageNr === 0" :pageNr="0" />
    <CardAdress :open="pageNr === 1" :pageNr="1" />
    <CardContactInfo :open="pageNr === 2" :pageNr="2" />
    <CardConfirm :open="pageNr === 3" :pageNr="3" />
  </div>
</template>

<script>
import CardAdress from '@/components/CardAdress';
import ChoosePackage from '@/components/ChoosePackage';
import CardContactInfo from '@/components/CardContactInfo';
import CardConfirm from '@/components/CardConfirm';
export default {
  name: 'Index',
  components: {
    ChoosePackage,
    CardAdress,
    CardConfirm,
    CardContactInfo
  },
  computed: {
    pageNr () {
      return this.$store.state.progress.pageNr;
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:2em .5em;

  @media (min-width: 900px) {
    padding:4em 2em;

  }
}
</style>
