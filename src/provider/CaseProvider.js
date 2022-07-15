import ConvertCamelCase from "../helpers/CamelCase";
import ConvertConstant from "../helpers/ConstantCase";
import ConvertKebabCase from "../helpers/KebabCase";
import ConvertPascalCase from "../helpers/PascalCase";
import ConvertSnakeCase from "../helpers/SnakeCase";

const CaseProvider = (c, str) => {
  str = str.toLowerCase()
  switch (c) {
    case "camel":
      return ConvertCamelCase(str);
    case "constant":
      return ConvertConstant(str);
    case "kebab":
      return ConvertKebabCase(str);
    case "pascal":
      return ConvertPascalCase(str);
    case "snake":
      return ConvertSnakeCase(str);
    default:
      break;
  }
};

export default CaseProvider;
