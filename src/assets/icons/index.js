import { Icon } from "./icon.component";

export const ArrowBackIcon = style => {
  const source = {
    imageSource: require("./arrow-back.png")
  };
  return Icon(source, style);
};
