const analyzeArray = (() => {
  const avg = (...args) => {
    return args.reduce((prev, curr) => prev + curr, 0) / args.length;
  };

  const min = (...args) => {
    return Math.min(...args);
  };

  const max = (...args) => {
    return Math.max(...args);
  };

  const length = (...args) => {
    return args.length;
  };

  return {
    avg,
    min,
    max,
    length,
  };
})();

export default analyzeArray;
