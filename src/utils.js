export const getValueFromLocalStorage = (keyname) => {
  const value = window.localStorage.getItem(keyname);

  if (value) {
    return JSON.parse(value);
  }
  return null;
};

export const setValueInLocalStorage = (keyname, value) => {
  window.localStorage.setItem(keyname, JSON.stringify(value));
};
