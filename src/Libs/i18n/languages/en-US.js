import { en_US as characters } from "../characters";
import { NAME_SPACE } from "../constants";
export default {
  navigation: {
    tabs: {
      home: characters.home,
      message: characters.messsage,
      me: characters.me
    }
  },
  [NAME_SPACE.SCREENS]: {
    login: {
      title: characters.login,
      username: characters.username,
      password: characters.password,
      login: characters.login
    },
    setting: {
      title: characters.setting,
      languages: characters.languages
    },
    languages: {
      title: characters.languages
    },
    me: {
      login: characters.login
    }
  }
};
