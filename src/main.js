'use strict';

document.querySelectorAll('.drop-down-button').forEach((button) => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        button.parentElement.classList.toggle('drop-down-active');
        if (button.parentElement.classList.contains('drop-down-active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = 0;
        }
    });
});

burger.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('burger-active');
});
