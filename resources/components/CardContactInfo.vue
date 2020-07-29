<template>
  <div class="order-process container mt-2">
    <h1 class="thin">
      Kontaktinformasjon
    </h1>
    <form class="four-fifths">
      <div class="one-whole flex-block ">
        <label class="label one-half mt-105">
          <span>Fornavn</span>
          <input id="firstname" required type="text" name="firstname">
        </label>
        <label class="label one-half mt-105">
          <span>Etternavn</span>
          <input id="surname" required type="text" name="surname">
        </label>
      </div>
      <div class="one-half flex-block ">
        <label class="label one-whole mt-105">
          <span>Email</span>
          <input id="email" required type="text" name="email">
        </label>
        <label class="label one-whole mt-105">
          <span>Mobilnummer</span>
          <input id="phonenumber" required type="tel" name="phonenumber">
        </label>
      </div>
      <div class="one-whole center-child mt-3 mb-1 f-size-1-1">
        <input type="submit" value="Se over bestillingen" class="button button--primary">
      </div>
    </form>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>

</style>
