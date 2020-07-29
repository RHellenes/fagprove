export default ({ app }, inject) => {
  inject('prettifyNumber', (phonenumber) => {
    const regex = /\d/g;
    const newNumber = [];

    const newValue = [...phonenumber.matchAll(regex)];

    for (let i = 0; i <= newValue.length; i++) {
      if (i === 2 || i === 4) {
        newNumber.push(newValue[i] + ' ');
      } else {
        newNumber.push(newValue[i]);
      }
    }
    return newNumber.join('');
  });
  inject('testEmail', (email) => {
    // eslint-disable-next-line no-useless-escape
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  });
};
