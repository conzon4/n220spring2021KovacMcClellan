let buttonOne = document.getElementById("fq");
buttonOne.addEventListener("click", onClick);
let buttonTwo = document.getElementById("sq");
buttonTwo.addEventListener("click", onClick);
let buttonThree = document.getElementById("tq");
buttonThree.addEventListener("click", onClick);

function onClick(event) {
  let buttonRes = event.target.getAttribute("data-response");
  console.log(buttonRes)
  if (buttonRes == "uno"){
    event.target.value = "New Delhi";
  }else if (buttonRes == "dos"){
    event.target.value = "206";
  }else if (buttonRes == "tres"){
    event.target.value = "42";
  }
}