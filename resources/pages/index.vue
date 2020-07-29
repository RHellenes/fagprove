<template>
  <div class="container">
    <CardAdress />
    <CardContactInfo />
    <CardConfirm />
  </div>
</template>

<script>
import CardAdress from '@/components/CardAdress';
import CardContactInfo from '@/components/CardContactInfo';
import CardConfirm from '@/components/CardConfirm';
export default {
  name: 'Index',
  components: {
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
