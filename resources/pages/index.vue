<template>
  <div class="container">
    <CardAdress />
    <CardContactInfo />
  </div>
</template>

<script>
import CardAdress from '@/components/CardAdress';
import CardContactInfo from '@/components/CardContactInfo';
export default {
  name: 'Index',
  components: {
    CardAdress,
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
