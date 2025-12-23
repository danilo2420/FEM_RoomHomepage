
const arrowLeft = document.querySelector(".arrowButtons__left");
const arrowRight = document.querySelector(".arrowButtons__right");
const imageSection = document.querySelector('.firstSection__top');

const imageArr = [
    "images/desktop-image-hero-1.jpg",
    "images/desktop-image-hero-2.jpg",
    "images/desktop-image-hero-3.jpg",
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