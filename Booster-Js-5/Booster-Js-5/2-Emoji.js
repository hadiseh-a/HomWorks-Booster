/*
- We should have 4 buttons.

- In the names: happy, sad, angry and random.

- Clicking on each button should show an emoji with the same state.

* Each time a different emoji of the same state should be observed.

- When an emoji is shown, its state is written below.

- By clicking on the random button, an emoji should be shown from all modes.
*/
const happy = document.querySelector("#happy");
const sad = document.querySelector("#sad");
const angry = document.querySelector("#angry");
const random = document.querySelector("#random");
const moodType = document.querySelector(".moodType");

const happyEmojis = ["😁", "😂", "🤣", "😃", "😄", "😆", "😀"];
const sadEmojis = ["😣", "😔", "😞", "🙁", "☹", "😖", "😒"];
const angryEmojis = ["👿", "👹", "👺", "😠", "😡", "🤬", "😾"];
let randomEmoji;

happy.addEventListener("click", () => {
  randomEmoji = Math.floor(Math.random() * 7);
  moodType.textContent = happyEmojis[randomEmoji] + "happy";
});
sad.addEventListener("click", () => {
  randomEmoji = Math.floor(Math.random() * 7);
  moodType.textContent = sadEmojis[randomEmoji] + " sad";
});
angry.addEventListener("click", () => {
  randomEmoji = Math.floor(Math.random() * 7);
  moodType.textContent = angryEmojis[randomEmoji] + " angry";
});
random.addEventListener("click", () => {
  moodType.textContent =
    angryEmojis[Math.floor(Math.random() * 7)] +
    " " +
    sadEmojis[Math.floor(Math.random() * 7)] +
    " " +
    happyEmojis[Math.floor(Math.random() * 7)] +
    " ";
});
