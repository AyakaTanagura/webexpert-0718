// やること
// - INPUT タグの中身を受け取る
// - 結果を表示する DIV タグの中身を受け取る
// - ボタンを押された時に正誤判定する関数
// // if (INPUT.value == "ター") {
//   correct();
// }
// const correct = function () {
// }
// - 正解の時の処理
//   - 音を鳴らす
//   - 正解か間違いかのテキストを表示する。
// - 解説を加える機能
//   - 解説乗った、<p>タグを追加する。

/*

//まずpタグを作る
const P = document.createElement("p");

// Pの中身を変える
P.textContent = "解説";

//explainの中に追加する。
explain.appendChild(P);

*/

// = document.getElementById();
const catchAnswer = document.getElementById("answer");
const catchAnswerButton = document.getElementById("answer_button");
const explain = document.getElementById("explain");
const AUDIO = document.getElementById("correct-mp3");

// const CATCH_ASNWER
// let catchAnswer

// onclick
// ボタンが押された時に実行

catchAnswerButton.onclick = function () {
  if (catchAnswer.value == "ター") {
    correct();
  } else {
    incorrect();
  }
};

const correct = function () {
  console.log("正解です");
  AUDIO.play();
  const P = document.createElement("p");
  P.textContent = "正解！　解説：スタート、スクール、スクーター";
  explain.appendChild(P);
};

const incorrect = function () {
  console.log("不正解です");
  const P = document.createElement("p");
  P.textContent = "不正解！　解説：スタート、スクール、スクーター";
  explain.appendChild(P);
};
