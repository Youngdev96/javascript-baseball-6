import { Console } from "@woowacourse/mission-utils";
import MESSAGES from "../constants/messages.js";

const RESTART_VIEW = () => {
  return Console.readLineAsync(MESSAGES.RESTART_PROMPT);
};

export default RESTART_VIEW;
