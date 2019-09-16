import Slider from "./elements/slider";

const SLIDERS = [
    "decimation",
    "missing-threshold"
];

void function setup() {
    if(typeof localStorage.getItem("missing-threshold") === "undefined") {
        localStorage.setItem("missing-threshold", "0.05");
    }


    for(let slider of SLIDERS) {
        let el = document.getElementById(slider) as Slider;
        el.value = Number(localStorage.getItem(slider));

        el.onchange = function() {
            localStorage.setItem(slider, el.value.toString());
        }
    }
}();