const slides = document.getElementsByClassName("slide");

function handleClickLeft() {
  let indexActive;

  for (let index = 0; index < slides.length; index++) {
    const element = slides[index];

    if (element.classList.contains("active")) {
      element.classList.remove("active");
      indexActive = index;
      break;
    }
  }

  if (indexActive < 4) {
    slides[indexActive + 1].classList.add("active");
  } else {
    slides[0].classList.add("active");
  }
}

function handleClickRight() {
  let indexActive;

  for (let index = 0; index < slides.length; index++) {
    const element = slides[index];

    if (element.classList.contains("active")) {
      element.classList.remove("active");
      indexActive = index;
      break;
    }
  }

  if (indexActive === 0) {
    slides[4].classList.add("active");
  } else {
    slides[indexActive - 1].classList.add("active");
  }
}


