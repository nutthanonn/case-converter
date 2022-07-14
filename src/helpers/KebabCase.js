// const a = "hello nutthanon           nut nut nut";

const ConvertKebabCase = (str) => {
  const final = str.split(" ").map((item, i) => {
    if (item === "") {
      return;
    }

    if (i === 0) {
      return item;
    } else {
      return "-" + item;
    }
  });
  return final.join("");
};

export default ConvertKebabCase;
