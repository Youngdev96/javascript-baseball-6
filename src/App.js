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
   //📌 게임 실행 기능
   async runGame() {
    const userInputNumber = await Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );

    this.validateUserNumber(userInputNumber);

    const { ball, strike } = this.compareAnswer(userInputNumber);

    if (strike === 3) {
      Console.print(`${strike}스트라이크`);
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      await this.checkRestartGame();
    } else {
      Console.print(this.printResultMessage({ ball, strike }));
      this.runGame();
    }
  }

    //📌 유저번호 효율성 체크 기능 (에러처리)
  // 체크 할 부분 : 유저가 3글자만 입력을 했는지 & 숫자만 입력했는지 & 동일한 숫자가 없는지 확인
  validateUserNumber(userNumber) {
    const pattern = /^[1-9]+$/;
    if (
      userNumber.length !== 3 || // 3글자 확인
      new Set(userNumber).size !== 3 || // 중복된 숫자 여부 확인
      !pattern.test(userNumber) // 숫자만 있는지 확인
    )
      throw new Error("`[ERROR]");
  }

  //📌 정답과 유저번호 비교 기능 (볼, 스트라이크 출력)
  compareAnswer(userNumber) {
    let ball = 0;
    let strike = 0;
    for (let i = 0; i < 3; i++) {
      if (userNumber[i] === this.answer[i]) {
        strike++;
      } else if (this.answer.includes(userNumber[i])) {
        ball++;
      }
    }
    //구조분해할당
    return { ball, strike };
  }

  //📌 결과메세지 출력 기능
  printResultMessage({ ball, strike }) {
    const resultArr = [];

    if (ball > 0) {
      resultArr.push(`${ball}볼`);
    }
    if (strike > 0) {
      resultArr.push(`${strike}스트라이크`);
    }
    return resultArr.length === 0 ? "낫싱" : resultArr.join(" ");
  }

}

const app = new App();
app.play();
export default App;
