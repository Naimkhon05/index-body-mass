let mInput = document.getElementById("mass");
let rostInput = document.getElementById("rost");
let resSpan = document.getElementById("res");
let btn = document.getElementById("btn");

btn.onclick = function (event) {
  event.preventDefault();
  let m = mInput.value;
  let r = rostInput.value / 100;

  let res = m / (r * r);

  resSpan.innerHTML = res.toFixed(1);
};
