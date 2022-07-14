const ConvertCamelCase = (str) => {
  const final = str.split(" ").map((item, i) => {
    if (item === "") {
      return;
    }

    if (i === 0) {
      return item;
    } else {
      return item.charAt(0).toUpperCase() + item.slice(1);
    }
  });
  return final.join("");
};

export default ConvertCamelCase;
