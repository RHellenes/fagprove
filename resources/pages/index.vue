<template>
  <div class="container">
    <CardAdress />
  </div>
</template>

<script>
import CardAdress from '@/components/CardAdress';
export default {
  name: 'Index',
  components: {
    CardAdress
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
