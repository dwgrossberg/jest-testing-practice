const calc = (() => {
  const add = (a, b) => {
    return Number((Number(a) + Number(b)).toFixed(1));
  };

  return {
    add,
  };
})();

export default calc;
