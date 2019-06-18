import { Icon } from "./icon.component";

export const ArrowBackIcon = style => {
  const source = {
    imageSource: require("./eva/arrow-back.png")
  };
  return Icon(source, style);
};
export const MessageIcon = style => {
  const source = {
    imageSource: require("./eva/message.png")
  };
  return Icon(source, style);
};
export const PersonIcon = style => {
  const source = {
    imageSource: require("./eva/person.png")
  };
  return Icon(source, style);
};
export const ActivityIcon = style => {
  const source = {
    imageSource: require("./eva/activity.png")
  };
  return Icon(source, style);
};
