export const capitalizeWord = ([firstLetter, ...rest]) =>
  [firstLetter.toUpperCase(), ...rest].join("");

export const getValueFromLocalStorage = (keyName) => {
  const value = window.localStorage.getItem(keyName);
  if (value) {
    return JSON.parse(value);
  }
  return null;
}

export const setValueInLocalStorage = (keyName, value) => {
  window.localStorage.setItem(keyName, JSON.stringify(value));
}