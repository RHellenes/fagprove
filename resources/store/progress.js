export const state = () => ({
  pageNr: 0
});

export const mutations = {

  increasePageNr (state) {
    state.pageNr++;
  },
  setPageNr (state, number) {
    state.pageNr = number;
  }

};
