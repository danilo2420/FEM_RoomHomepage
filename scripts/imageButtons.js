import img1 from '../images/desktop-image-hero-1.jpg';
import img2 from '../images/desktop-image-hero-2.jpg';
import img3 from '../images/desktop-image-hero-3.jpg';

const arrowLeft = document.querySelector(".arrowButtons__left");
const arrowRight = document.querySelector(".arrowButtons__right");
const imageSection = document.querySelector('.firstSection__top');

const imageArr = [
    img1,
    img2,
    img3
] 

let currentIndex = 0;

export function runImageButtonsScript() {
    arrowLeft.onclick = () => {
        changeIndex(false);
        setImage();
    }

    arrowRight.onclick = () => {
        changeIndex(true);
        setImage();
    }
}

function changeIndex(plusOne) {
    if (plusOne) {
        if (currentIndex + 1 < imageArr.length) currentIndex++;
    } else {
        if (currentIndex - 1 >= 0) currentIndex--;
    }
}

function setImage() {
    imageSection.style.backgroundImage = "url('" + imageArr[currentIndex] + "')";
}