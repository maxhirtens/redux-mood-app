const face = document.querySelector("#face");
const buttons = document.querySelectorAll("button");
const happyButton = document.querySelector("#happy-btn");
const sadButton = document.querySelector("#sad-btn");
const angryButton = document.querySelector("#angry-btn");
const confusedButton = document.querySelector("#confused-btn");

for (let button of buttons) {
  button.addEventListener("click", (e) => {
    const mood = e.target.innerText.toLowerCase();
    store.dispatch({ type: "UPDATE", payload: mood });
    const state = store.getState();
    face.innerText = state.face;
  });
}
