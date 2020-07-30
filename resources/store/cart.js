export const state = () => ({
  cart: {
    package: {
      meta: {
        isOpen: true,
        hasRegistred: false
      },
      data: null
    },
    contact: {
      meta: {
        isOpen: true,
        hasRegistred: false
      },
      data: {

        firstname: '',
        surname: '',
        email: '',
        phone: ''
      }
    },
    adress: {
      meta: {
        isOpen: true,
        hasRegistred: false
      },
      data: {
        billing: {
          adress: '',
          postalCode: '',
          postalArea: ''
        },
        cottage: {
          adress: '',
          postalCode: '',
          postalArea: '',
          extraInfo: ''
        }
      }
    },
    consent: false
  }
});
export const mutations = {
  updatePackage (state, offer) {
    state.cart.package.data = offer;
    state.cart.package.meta = {
      hasRegistred: true,
      isOpen: false
    };
  },
  updateAdress (state, content) {
    state.cart.adress.data = content;
    state.cart.adress.meta = {
      hasRegistred: true,
      isOpen: false
    };
  },
  updateContact (state, content) {
    state.cart.contact.data = content;
    state.cart.contact.meta = {
      hasRegistred: true,
      isOpen: false
    };
  },
  toggleConsent (state) {
    state.cart.consent = !state.cart.consent;
  }

};
