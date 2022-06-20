const capitalize = (abc) => {
  return (
    String(abc).toLowerCase().charAt(0).toUpperCase() +
    String(abc).toLowerCase().substring(1)
  );
};

export default capitalize;
