const questions = document.getElementsByClassName("question");
for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", () => {
    questions[i].classList.toggle("question-open");
    const arrow = questions[i].querySelector("img");
    arrow.classList.toggle("flip");

    const answer = questions[i].nextElementSibling;
    answer.classList.toggle("open");
  });
}
