const questions = document.getElementsByClassName("question");

//loop through each question and add an event listener with the openQuestion(i)
// O(n^2) :(
for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", () => {
    openQuestion(i);
  });
}

//loop through the question again and turn the previous opened question off
//With the position argument, open the question by adding the necessary classes
function openQuestion(position) {
  for (let i = 0; i < questions.length; i++) {
    const arrow = questions[i].querySelector("img");
    const answer = questions[i].nextElementSibling;
    if (answer.classList.contains("open")) {
      answer.classList.toggle("open");
      questions[i].classList.toggle("question-open");
      arrow.classList.toggle("flip");
    } else if (i == position) {
      questions[i].classList.toggle("question-open");
      arrow.classList.toggle("flip");
      answer.classList.toggle("open");
    }
  }
}
