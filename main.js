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

const sidebar = {
    james: 'James',
    felipe: 'Felipe',
    wyatt: 'Wyatt',
    eduardo: 'Eduardo',
    lucas: 'Lucas',
    eric: 'Eric',
    jaxan: 'Jaxan',
    ryang: 'Ryan G',
    austin: 'Austin',
    tye: 'Tye',
    kyleS: 'Kyle S',
    leandro: 'Leandro',
    shea: 'Shea',
};

const navbar = document.querySelector('body > nav');

for (const [path, text] of Object.entries(sidebar)) {
    if (!location.href.includes(`/${path}/`)) continue;

    const query = `//button[contains(., '${text}')]`;
    const button = document.evaluate(query, navbar).iterateNext();

    button.parentElement.classList.add('drop-down-active');

    const content = button.nextElementSibling;
    content.style.maxHeight = content.scrollHeight + 'px';

    break;
}
