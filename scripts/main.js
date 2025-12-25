// Import CSS
import "../styles/global.css";
import "../styles/mobile.css";
import "../styles/tablet.css";
import "../styles/desktop.css";
import "../styles/animations.css";

// Import scripts
import { runTypographiesScript } from "./typographies.js";
import { runBurgerMenuScript } from "./burgerMenu.js";
import { runImageButtonsScript } from "./imageButtons.js";
import { runLetterAnimation } from "./letterAnimation.js";

import { animate } from "animejs";


// Main
function main() {
    runTypographiesScript();
    runBurgerMenuScript();
    runImageButtonsScript();
    runLetterAnimation();
}

main();