import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.answer = null;
  }

  //📌 게임 시작 기능
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.answer = this.generateAnswer();
    await this.runGame();
  }
  //📌 정답 생성 기능
  generateAnswer() {
    let answer = [];
    while (answer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    console.log(answer); // 🔴 정답 미리 확인용
    return answer.join("");
  }
}

const app = new App();
app.play();
export default App;
