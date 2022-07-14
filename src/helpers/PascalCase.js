const ConvertPascalCase = (str) => {
  const final = str.split(" ").map((item, i) => {
    if (item === "") {
      return;
    }

    return item.charAt(0).toUpperCase() + item.slice(1);
  });
  return final.join("");
};

export default ConvertPascalCase;
