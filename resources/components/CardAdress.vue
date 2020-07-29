<template>
  <div class="order-process container mt-3">
    <h1 class="thin">
      Adresse
    </h1>
    <form class="four-fifths">
      <div class="one-half flex-block ">
        <label class="label one-whole mt-1">
          <span>Fakturaadresse</span>
          <input id="billing_adress" required type="text" name="billing_adress">
        </label>
        <label class="label one-third mt-1">
          <span>Postnr</span>
          <input id="postnumber" required type="tel" name="postalcode">
        </label>
        <div class="label untouchable two-thirds mt-1">
          <span>Poststed</span>
          <div class="untouchable">
            Oslo
          </div>
        </div>

        <label class="label one-whole mt-4">
          <span>Adressa til hytta</span>
          <input id="cottage_adress" required type="text" name="cottage_adress">
        </label>
        <label class="label one-third mt-1">
          <span>Postnr</span>
          <input id="cottage_postnumber" required type="tel" name="cottage_postalcode">
        </label>
        <div class="label untouchable two-thirds mt-1">
          <span>Poststed</span>
          <div class="untouchable">
            Treungen
          </div>
        </div>
        <label class="label one-whole mt-105">
          <span>Hyttefelt (om du ikke vet adressen)</span>
          <input id="cottage_adress" required type="text" name="cottage_area">
        </label>
      </div>
      <div class="one-whole center-child mt-3 mb-1 f-size-1-1">
        <input type="submit" value="Fyll ut kontaktinformasjon" class="button button--primary">
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
