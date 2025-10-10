const number = (num) => {
  if (num >= 100000 && num < 1000000) {
    let value = Math.round(num / 1000) + "K";
    console.log(value);

    return value;
  } else if (num >= 1000000) {
    let value = Math.round(num / 100000) + "M";
    console.log(value);
    return value;
  }
};

export { number };
