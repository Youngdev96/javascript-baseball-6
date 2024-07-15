import MESSAGES from "../constants/messages.js";

const ERROR_VIEW = () => {
  throw new Error(MESSAGES.ERROR_MESSAGE);
};

export default ERROR_VIEW;
