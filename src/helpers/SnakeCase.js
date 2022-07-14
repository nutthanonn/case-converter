// const a = "hello nutthanon           nut nut nut";

const ConvertSnakeCase = (str) => {
  const final = str.split(" ").map((item, i) => {
    if (item === "") {
      return;
    }

    if (i === 0) {
      return item;
    } else {
      return "_" + item;
    }
  });
  return final.join("");
};

export default ConvertSnakeCase;
