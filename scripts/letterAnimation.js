import { animate, splitText, stagger } from "animejs";

// Elements
const shopNowElement = document.querySelector('.firstSection__bottom__shopNow__text');
const { chars } = splitText(
        '.firstSection__bottom__shopNow__text', 
        { words: false, chars: true}
    );

// Variables
let animationAvailable = true;
let animationDirection = "clockwise";

// Script
export function runLetterAnimation() {
    shopNowElement.addEventListener('mouseover', () => {
        if (animationAvailable) {
            animationAvailable = false;
            runAnimation();
            setTimeout(() => {
                animationAvailable = true;
            }, 1200);
        }
        
    })
}

function runAnimation() {
    let turn = animationDirection == "clockwise" ? "-1turn" : "1turn";
    animationDirection = animationDirection == "clockwise" ? "counterclockwise" : "clockwise";

    animate(chars, {
        rotate: { from: turn },
        duration: 1000,
        delay: stagger(50)
    });
}