import { Console } from "@woowacourse/mission-utils";
import MESSAGES from "../constants/Messages.js";

const INPUT_NUMBER_VIEW = () => {
  return Console.readLineAsync(MESSAGES.PROMPT_INPUT);
};

export default INPUT_NUMBER_VIEW;
