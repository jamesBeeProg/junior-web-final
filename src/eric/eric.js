const section2 = document.getElementById('information2');
const section3 = document.getElementById('information3');
const section4 = document.getElementById('information4');
const section5 = document.getElementById('information5');
const section6 = document.getElementById('information6');
document.addEventListener('scroll', () => {
    const clientheight = document.documentElement.clientHeight;
    const section2Y = section2.getBoundingClientRect().y;
    const section2Height = section2.getBoundingClientRect().height;
    const section3Y = section3.getBoundingClientRect().y;
    const section3Height = section3.getBoundingClientRect().height;
    const section4Y = section4.getBoundingClientRect().y;
    const section4Height = section4.getBoundingClientRect().height;
    const section5Y = section5.getBoundingClientRect().y;
    const section5Height = section5.getBoundingClientRect().height;
    const section6Y = section6.getBoundingClientRect().y;
    const section6Height = section6.getBoundingClientRect().height;
    if (clientheight > section2Y + (section2Height * 2.5) / 5) {
        section2.style.opacity = 1;
    } else {
        section2.style.opacity = 0;
    }
    if (clientheight > section2Y + section2Height * 2.5) {
        section2.style.opacity = 0;
    }
    if (clientheight > section3Y + (section3Height * 2.5) / 5) {
        section3.style.opacity = 1;
    } else {
        section3.style.opacity = 0;
    }
    if (clientheight > section3Y + section3Height * 2.5) {
        section3.style.opacity = 0;
    }
    if (clientheight > section4Y + (section4Height * 2.5) / 5) {
        section4.style.opacity = 1;
    } else {
        section4.style.opacity = 0;
    }
    if (clientheight > section4Y + section4Height * 2.5) {
        section4.style.opacity = 0;
    }
    if (clientheight > section5Y + (section5Height * 2.5) / 5) {
        section5.style.opacity = 1;
    } else {
        section5.style.opacity = 0;
    }
    if (clientheight > section5Y + section5Height * 2.5) {
        section5.style.opacity = 0;
    }
    if (clientheight > section6Y + (section6Height * 2.5) / 5) {
        section6.style.opacity = 1;
    } else {
        section6.style.opacity = 0;
    }
    if (clientheight > section6Y + section6Height * 2.5) {
        section6.style.opacity = 0;
    }
});

window.onbeforeunload = () => {
    window.scrollTo(0, 0);
};
