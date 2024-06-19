const cl = console.log;

const colorSelected = document.getElementById("selectedColor");
const alldiv = [...document.querySelectorAll(".all")];
const body = document.querySelector("body");

const onColor = (eve) => {
  alldiv.forEach((clr) => clr.classList.add("d-none"));
  let getClass = eve.target.value;
  let selectedDiv = [...document.getElementsByClassName(getClass)];
  selectedDiv.forEach((obj) => obj.classList.remove("d-none"));
  if(eve.target.value ==="rohit"){
    body.style.backgroundImage = url("https://img.freepik.com/free-vector/decorative-golden-mandala-red-background_1035-25425.jpg?w=740&t=st=1718802542~exp=1718803142~hmac=7beeebba8ad93027376704751c82c3202852b956476eff570a1b59794f00d11d")
  }
};

colorSelected.addEventListener("change", onColor);
