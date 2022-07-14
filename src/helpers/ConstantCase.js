const ConvertConstant = (str) => {
  const final = str.split(" ").map((item, i) => {
    if (item === "") {
      return;
    }

    if (i === 0) {
      return item.toUpperCase();
    } else {
      return "_" + item.toUpperCase();
    }
  });
  return final.join("");
};

export default ConvertConstant;
