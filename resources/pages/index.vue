<template>
  <div class="container">
    <ChoosePackage />
    <CardAdress />
    <CardContactInfo />
    <CardConfirm />
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
  }
};
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:2em .5em;

  @media (min-width: 900px) {
    padding:4em 2em;

  }
}
</style>
