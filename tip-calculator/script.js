const price = document.getElementById("price");
const tipPercent = document.getElementById("tip-percent");
const results = document.getElementById("results");

function tipN(percent) {
    tipPercent.value = percent;
}

function calculate() {
    tip = price.value * (0.01 * tipPercent.value);
    results.innerHTML = tip;
    // document.getElementById("results").
}