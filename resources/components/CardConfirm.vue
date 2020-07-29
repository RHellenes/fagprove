<template>
  <div class="order-process container mt-2">
    <h1 class="thin">
      Bekreft bestilling
    </h1>
    <div class="four-fifths flex-block mt-2 mb-2">
      <div class="one-half summary ">
        <div class="one-whole">
          <h3>Kontaktinfo</h3>
          <p> Fornavn Etternavn </p>
          <p> epost@adresse.com </p>
          <p> 993 63 892 </p>
        </div>

        <div class="one-whole mt-2">
          <h3>Fakturaadresse</h3>
          <p>Adresse  </p>
          <p>Postkode STED</p>
        </div>
        <div class="one-whole mt-2">
          <h3>Hytteadresse</h3>
          <p>Adresse  </p>
          <p>Postkode STED</p>
        </div>
      </div>

      <div class="one-half flex-block ">
        <CardOffer
          :content="{
            title: 'Sølv',
            price: '659',
            benefits: [
              'Internett <strong>500mps</strong> opp og ned',
              'Standard TV-pakke',
              'Programarkiv',
              '500 timer opptak',
              '<strong>Viaplay inkludert</strong>'
            ],
            isCtaActive: false,
            isHighlighted: true

          }"
        />
      </div>
      <div class="one-whole mt-3 mb-1 f-size-1-1">
        <label>
          <input id="consent" type="checkbox" name="consent" value="Jeg samtykker til betingelsene til HytteNett">
          <span>Jeg har lest og <a href="#">samtykker til betingelsene</a> </span>
        </label>
      </div>
      <div class="one-whole center-child mt-3 mb-1 f-size-1-1">
        <input type="submit" value="Bestill" class="button button--contrast">
      </div>
    </div>
  </div>
</template>

<script>
import CardOffer from '@/components/CardOffer';
export default {
  name: 'CardConfirm',
  components: {
    CardOffer
  }

};
</script>

<style lang="scss" scoped>
.summary{
  font-size: 1.2em;

  h3{
    font-size: 1em;
    margin-bottom:.3em;
  }
  p{
    margin-bottom:.45em;
  }

}

</style>
