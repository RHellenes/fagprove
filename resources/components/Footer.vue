<template>
  <footer>
    <img src="@/assets/images/hyttenett_logo.svg" alt="HytteNett sin logo" class="mt-2 mb-1 mb-mobile-2 mt-mobile-1">
    <div class="links mt-2 mb-2 mb-mobile-1 mt-mobile-2">
      <a href="#">Kontakt</a>
      <a href="#">Om Oss</a>
      <a href="#">Driftstatus</a>
      <a href="#">Bestill</a>
    </div>
    <hr class="three-fourths mt-1 mb-3 mb-mobile-2 mt-mobile-2">
    <div class="some">
      <a href="#"><img src="@/assets/images/some/facebook-brands.svg" alt="Facebook"></a>
      <a href="#"><img src="@/assets/images/some/instagram-brands.svg" alt="Instagram"></a>
      <a href="#"><img src="@/assets/images/some/linkedin-brands.svg" alt="LinkedIn"></a>
      <a href="#"><img src="@/assets/images/some/snapchat-brands.svg" alt="Snapchat"></a>
      <a href="#"><img src="@/assets/images/some/twitter-brands.svg" alt="Twitter"></a>
    </div>
    <p class="privacy mt-4 mb-3 mb-mobile-2 mt-mobile-2">
      © 2020 <a href="#">Personvern — Betingelser</a>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style lang="scss" scoped>
footer{
  width: 100%;
  background-color:var(--off-white);
  color:var(--primary-dark);
  padding:2rem 1rem 2rem 1rem;
  display:flex;
  flex-direction: column;
  align-items:center ;

  & .some{
    display: flex;
    width: 60%;
    justify-content: space-around;
    flex-wrap:wrap;

    & img{
      margin:1.5em 1em;
      width: auto;
      height: 2em;
      @media (min-width: 690px){
        margin:2em 1.5em;

      }
    }
  }
  & .links{
    color:var(--primary-dark);
    display: flex;
    width: 80%;
    justify-content: center;
    flex-wrap:wrap;
    @media (max-width: 571px) {
      flex-direction: column;
      align-items: center;
    }
    & a {
      color:inherit;
      font-size: 1.2em;
      text-decoration: none;
      margin-bottom:1em;
      @media (min-width: 572px) {
        &:not(:last-of-type){
          margin-right:2em;
        }

      }

    }
  }
  .privacy {
    color:var(--primary-dark);

    & a{
      color:inherit;
      text-decoration: none;
    }
  }
}
</style>
