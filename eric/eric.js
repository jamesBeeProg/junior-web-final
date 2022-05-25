/*****************************************************
 * JavaScript File for Eric Edwards' College Pages
 * 5/25/2022
 * By: Eric Edwards
 * Help By: Ryan Griffin
 *****************************************************/
// Constants for each information section.
const section2 = document.getElementById('information2');
const section3 = document.getElementById('information3');
const section4 = document.getElementById('information4');
const section5 = document.getElementById('information5');
const section6 = document.getElementById('information6');

/****************************************************
 * Event Listener that runs the transitioning.
 * Javascript Event, runs when scrolling. It will fade in and fade out the sections of text when scrolled to, or scrolled past.
 ****************************************************/
document.addEventListener('scroll', () => {
    // Constants based on the screen size used in the If statement math.
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
    /****************************************************
     * Ifs and Elses that will either set opacity to full, or to no opacity based on your screen's location relative to the section.
     * Ifs: Will set opacity to full, or visible, when the section has been scrolled through half of the section's height.
     * Else, when the section has been scrolled past going up, it will set opacity back to 0, or none.
     * If with not as much math: Checks to see if you've gone the height of the section a little over two times, sets opacity to 0, or none.
     ****************************************************/
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

/****************************************************
 * This forces the page up to the top, or 0,0 scrolling
 * This makes it so on start, people will always start at the top of the file
 * This is meant to be a safety measure to ensure the JS works as intended
 ****************************************************/
window.onbeforeunload = () => {
    window.scrollTo(0, 0);
};
