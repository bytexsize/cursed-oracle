object.style.backgroundImage="url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fad90e04-d87b-4668-92f8-9331a94ac86b/d6nzkxb-3a27c7cd-f3a2-42ac-9320-8fcf8d8d26e9.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZmFkOTBlMDQtZDg3Yi00NjY4LTkyZjgtOTMzMWE5NGFjODZiXC9kNm56a3hiLTNhMjdjN2NkLWYzYTItNDJhYy05MzIwLThmY2Y4ZDhkMjZlOS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.VuPl7d2SSOhEwPnBJSmcWiWX2Ni1UHBMbdUXuOOoEBs)";
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
