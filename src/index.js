import Header from './Component/Header';

import './style.scss';

let props = {
    src: 'banana.jpg',
    title: 'happy Bears',
    button_t: 'london',
}

let header = new Header(props);
let container = document.querySelector('.container').append(header.render());