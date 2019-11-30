import { view } from './Class/View';
import './main.scss';
import Header from './Component/Header';
import Nav from './Component/Nav';
import Main from './Component/Main';
import Footer from './Component/Footer';
import Spinner from './Component/Spinner';

const URL = "http://localhost:8080/data.json";

window.addEventListener('load',()=>{

    view.pipeline(
        [
            Header,
            Main,
            Footer
        ], document.querySelector('.container')
    )
    
    fetch(URL)
        .then(
            response => {
                if (response.ok) {
                    view.replace(Spinner,null,document.querySelector('.main'))
                    return response.json();
                } else {
                    alert("Ошибка HTTP: " + response.status);
                }
                },
            error => console.log('An error occurred.', error) )
        .then( json => {
            view.replace(Main,json,document.querySelector('.main'))
        });

});



 