
import { view } from './Class/View';

import './style.scss';

import Header from './Component/Header';
import Footer from './Component/Footer';
import Nav from './Component/Nav';


let props = {
    src: 'banana.jpg',
    title: 'happy Bears',
    button_t: 'london',
}

view.pipeline(
    [
        [Header,props],
        Nav,
        Footer
    ], document.querySelector('.container')
    )
 
view.replace(Nav,null,document.querySelector('.header'));