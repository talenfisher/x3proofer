import Slider from "./elements/slider";

const SLIDERS = [
    "decimation"
];

void function setup() {
    for(let slider of SLIDERS) {
        let el = document.getElementById(slider) as Slider;
        el.value = Number(localStorage.getItem(slider));

        el.onchange = function() {
            localStorage.setItem(slider, el.value.toString());
        }
    }
}();