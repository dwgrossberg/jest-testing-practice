const calc = (() => {
  const add = (a, b) => {
    return Number((Number(a) + Number(b)).toFixed(1));
  };

  const subtract = (a, b) => {
    return Number((Number(a) - Number(b)).toFixed(1));
  };

  const multiply = (a, b) => {
    return Number((Number(a) * Number(b)).toFixed(1));
  };

  const divide = (a, b) => {
    return Number((Number(a) / Number(b)).toFixed(1));
  };

  return {
    add,
    subtract,
    multiply,
    divide,
  };
})();

export default calc;
