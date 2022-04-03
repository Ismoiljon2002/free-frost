// chevron down icons
const chevron1 = document.querySelector('.chevron-1'),
    chevron2 = document.querySelector('.chevron-2'),
    chevron3 = document.querySelector('.chevron-3'),
    chevron4 = document.querySelector('.chevron-4'),
    chevron5 = document.querySelector('.chevron-5'),
    chevron6 = document.querySelector('.chevron-6');

// buttons
const collapseOne = document.querySelector('.collapseOne'),
    collapseTwo = document.querySelector('.collapseTwo'),
    collapseThree = document.querySelector('.collapseThree'),
    collapseFour = document.querySelector('.collapseFour'),
    collapseFive = document.querySelector('.collapseFive'),
    collapseSix = document.querySelector('.collapseSix');

// icon state (pressed or not)
let isPressed1 = 1,
    isPressed2 = 1,
    isPressed3 = 1,
    isPressed4 = 1,
    isPressed5 = 1,
    isPressed6 = 1;

// chevron 1
collapseOne.addEventListener('click', () => {
    if (isPressed1) {
        chevron1.style.transform = 'rotateZ(-180deg)';
        isPressed1 = 0;
    } else {
        chevron1.style.transform = 'rotateZ(0deg)';
        isPressed1 = 1;
    };
});

// chevron 2
collapseTwo.addEventListener('click', () => {
    if (isPressed2) {
        chevron2.style.transform = 'rotateZ(-180deg)';
        isPressed2 = 0;
    } else {
        chevron2.style.transform = 'rotateZ(0deg)';
        isPressed2 = 2;
    };
});

// chevron 3
collapseThree.addEventListener('click', () => {
    if (isPressed3) {
        chevron3.style.transform = 'rotateZ(-180deg)';
        isPressed3 = 0;
    } else {
        chevron3.style.transform = 'rotateZ(0deg)';
        isPressed3 = 1;
    };
});

// chevron 4
collapseFour.addEventListener('click', () => {
    if (isPressed4) {
        chevron4.style.transform = 'rotateZ(-180deg)';
        isPressed4 = 0;
    } else {
        chevron4.style.transform = 'rotateZ(0deg)';
        isPressed4 = 1;
    };
});

// chevron 5
collapseFive.addEventListener('click', () => {
    if (isPressed5) {
        chevron5.style.transform = 'rotateZ(-180deg)';
        isPressed5 = 0;
    } else {
        chevron5.style.transform = 'rotateZ(0deg)';
        isPressed5 = 1;
    };
});

// chevron 6
collapseSix.addEventListener('click', () => {
    if (isPressed6) {
        chevron6.style.transform = 'rotateZ(-180deg)';
        isPressed6 = 0;
    } else {
        chevron6.style.transform = 'rotateZ(0deg)';
        isPressed6 = 1;
    };
});


// showing a fixed card 
const moreCard = document.querySelector('.more'),
    exitBtn = document.querySelector('.exit'),
    showCardBtn = document.querySelector('.fixed-chevron');

showCardBtn.addEventListener('click', () => {
    moreCard.style.transform = 'translateX(0)';
});
exitBtn.addEventListener('click', () => {
    moreCard.style.transform = 'translateX(100%)';
});

// Finally Comment Section !!!
const rightBtn = document.querySelector('.right'),
    leftBtn = document.querySelector('.left'),
    dot1 = document.querySelector('.dot1'),
    dot2 = document.querySelector('.dot2'),
    dot3 = document.querySelector('.dot3');

let card1 = document.querySelector('.card-1'),
    card2 = document.querySelector('.card-2'),
    card3 = document.querySelector('.card-3'),
    count = 1;

dot1.onclick = function () {
    count = 0;
    toggleClass();
    rightBtn.removeAttribute('disabled');
    rightBtn.style.opacity = '1';
    rightBtn.style.cursor = 'pointer';
}
dot2.onclick = function () {
    count = 1;
    toggleClass();

    rightBtn.removeAttribute('disabled');
    rightBtn.style.opacity = '1';
    rightBtn.style.cursor = 'pointer';

    leftBtn.removeAttribute('disabled');
    leftBtn.style.opacity = '1';
    leftBtn.style.cursor = 'pointer';
}
dot3.onclick = function () {
    count = 2;
    toggleClass();
    leftBtn.removeAttribute('disabled');
    leftBtn.style.opacity = '1';
    leftBtn.style.cursor = 'pointer';
};

rightBtn.addEventListener('click', () => {
    count++;
    leftBtn.removeAttribute('disabled');
    leftBtn.style.opacity = '1';
    leftBtn.style.cursor = 'pointer';
    if (count > 2) {
        count = 2;
    };
    toggleClass();
});
leftBtn.addEventListener('click', () => {
    count--;
    rightBtn.removeAttribute('disabled');
    rightBtn.style.opacity = '1';
    rightBtn.style.cursor = 'pointer';

    if (count < 0) {
        count = 0;
    };
    toggleClass();
});

function toggleClass() {
    if (count === 0) {
        leftBtn.setAttribute('disabled', true);
        leftBtn.style.opacity = '.5';
        leftBtn.style.cursor = 'auto';
        // Changing background and scale
        dot1.style.background = '#FF844B';
        dot1.style.transform = 'scale(1.25)';
        dot2.style.background = '#C4C4C4';
        dot2.style.transform = 'scale(1)';
        dot3.style.background = '#C4C4C4';
        dot3.style.transform = 'scale(1)';

        card1.style.opacity = '1';
        card2.style.opacity = '.3';
        card3.style.opacity = '.3';

        getPositionAt0();
    }
    else if (count === 1) {
        // Changing background and scale
        dot2.style.background = '#FF844B';
        dot2.style.transform = 'scale(1.25)';
        dot1.style.background = '#C4C4C4';
        dot1.style.transform = 'scale(1)';
        dot3.style.background = '#C4C4C4';
        dot3.style.transform = 'scale(1)';

        card2.style.opacity = '1';
        card1.style.opacity = '.3';
        card3.style.opacity = '.3';

        getPositionAt1();
    }
    else if (count === 2) {
        rightBtn.setAttribute('disabled', true);
        rightBtn.style.opacity = '.5';
        rightBtn.style.cursor = 'auto';
        // Changing background and scale
        dot3.style.background = '#FF844B';
        dot3.style.transform = 'scale(1.25)';
        dot1.style.background = '#C4C4C4';
        dot1.style.transform = 'scale(1)';
        dot2.style.background = '#C4C4C4';
        dot2.style.transform = 'scale(1)';

        card3.style.opacity = '1';
        card1.style.opacity = '.3';
        card2.style.opacity = '.3';

        getPositionAt2();
    };
};

function getPositionAt0 () {
    if ( innerWidth > 674 ) {
        card1.style.transform = 'translateX(31%) scale(1)';
        card2.style.transform = 'translateX(27%) scale(.8)';
        card3.style.transform = 'translateX(33%) scale(.8)';
    } else {
        card1.style.transform = 'translateX(5%) scale(1)';
        card2.style.transform = 'translateX(0%) scale(.8)';
        card3.style.transform = 'translateX(5%) scale(.8)';
    };
};

function getPositionAt1 () {
    if ( innerWidth > 674 ) {
        card1.style.transform = 'translateX(-66%) scale(.8)';
        card2.style.transform = 'translateX(-70%) scale(1)';
        card3.style.transform = 'translateX(-75%) scale(.8)';
    } else {
        card1.style.transform = 'translateX(-83%) scale(.8)';
        card2.style.transform = 'translateX(-91%) scale(1)';
        card3.style.transform = 'translateX(-99%) scale(.8)';
    };
};

function getPositionAt2 () {
    if ( innerWidth > 674 ) {
        card1.style.transform = 'translateX(-170%) scale(.8)';
        card2.style.transform = 'translateX(-166%) scale(.8)';
        card3.style.transform = 'translateX(-170%) scale(1)';
    } else {
        card1.style.transform = 'translateX(-175%) scale(.8)';
        card2.style.transform = 'translateX(-183%) scale(.8)';
        card3.style.transform = 'translateX(-189%) scale(1)';
    };
};

// Removing container on mobile
const priceSection = document.querySelector('.prices-section');
if ( innerWidth < 768 ) {
    priceSection.classList.remove('container');
};
window.addEventListener('resize', () => {
    if ( innerWidth < 768 ) {
        priceSection.classList.remove('container');
    } else {
        priceSection.classList.add('container');
    };
});

// Replacing call center bg
const callCenterBG = document.querySelector('.call-center-bg');
if ( innerWidth < 768 ) {
    callCenterBG.src = './img/call-center-bg-mobile.png';
};
window.addEventListener('resize', () => {
    if ( innerWidth < 768 ) {
        callCenterBG.src = './img/call-center-bg-mobile.png';
    } else {
        callCenterBG.src = './img/Rectangle 1235.png';
    };
});

// Navbar Button onclick effect
const navbarBtn = document.querySelector('.navbarBtn'),
      line1 = document.querySelector('.line-1'),
      line2 = document.querySelector('.line-2'),
      line3 = document.querySelector('.line-3');
let isNavbarBtnPressed = 0;

navbarBtn.addEventListener('click', () => {
    if ( isNavbarBtnPressed === 1 ) {
        line1.classList.remove('pressed-1');
        line2.classList.remove('pressed-2');
        line3.classList.remove('pressed-3');
        isNavbarBtnPressed = 0;
    } else {
        line1.classList.add('pressed-1');
        line2.classList.add('pressed-2');
        line3.classList.add('pressed-3');
        isNavbarBtnPressed = 1;
    }
});