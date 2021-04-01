const button = document.getElementById("button");
const input = document.getElementById("input");
const answer = document.getElementById("answer");
const eight = document.getElementById("eight");
const answers = [
  "My sources say yes",
  "Best not to say",
  "No",
  "How far are you willing to go?",
  "Don't go home",
  "You may rely on it.",
  "He knows",
  "Concentrate and ask again.",
  "No, but I'm going to miss you when you're gone",
  "The Council is still debating the issue",
  "Without a doubt.",
  "oh...how cute.",
  "It doesn't matter",
  "It will be so",
  "Three Days...",
  "The call will come from inside the house",
  "You have more important things to worry about.",
  "It won't happen while you're alive, so soon..."
  ];


button.addEventListener("click", function() {
  "use strict";
  if (input.value.length < 1) {
    eight.innerText = "";
    answer.innerText = "Ask your question, if you still dare.";
  } else {
    eight.innerText = "";
    let num = input.value.length % answers.length;
    answer.innerText = answers[num];
  }
});
