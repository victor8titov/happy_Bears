import { view } from './Class/View';
import './style/main.scss';
import Header from './Component/Header';
import Nav from './Component/Nav';
import Main from './Component/Main';
import Footer from './Component/Footer';
import Spinner from './Component/Spinner';

//const URL = "http://localhost:8080/data.json";
//const URL = "/happybears/data.json"
const URL = "data.json";

window.addEventListener('load',()=>{
    /* оптимизация загрузки изображений прогружаем временную заставку */
    (new Image()).src = "img/bear.jpg";

    /* 
        метод pipeline последовательно создает DOM интерпретацию каждого в списке компонента 
        и помещает его в указанный контейнер 
    */
    view.pipeline(
        [
            Header,
            [Nav,{
                filterChecked: '[data-reserve]',
                isChecked: (elm,flag)=>{
                    let reserve = elm.dataset.reserve === 'true'? true : false;
                    if ( flag && !reserve ) {
                        /* скрываем тех медведей кто не в заповеднике */
                        return false;
                    } else {
                        /* показываем медведей в заповеднике */
                        return true;
                    }
                    if (!flag) {
                        /* если флаг не стоит показывает все */
                        return true;
                    }
                    
                },
                filterSelect: '[data-status]',
                isSelect: (elm,flag)=>{
                    let status = elm.dataset.status;
                    switch(flag) {
                        case 'accept':
                            if (status === 'accept') return true;
                            break;
                        case 'reject':
                            if (status === 'reject') return true;
                            break;
                        case 'enter':
                            if (status === 'notDefined') return true;
                            break;
                    }
                    return false;
                }
                }],
            Main,
            Footer
        ], document.querySelector('.container')
    )
    
    fetch(URL)
        .then(
            response => {
                if (response.ok) {
                    // пока идет загрузка заменим элемент с классом .main на компонент spinner
                    view.replace(Spinner,null,document.querySelector('.main'))
                    return response.json();
                } else {
                    alert("Ошибка HTTP: " + response.status);
                }
                },
            error => console.log('An error occurred.', error) )
        .then( json => {
            // формируем окончательный вид страницы.
            view.replace(Main,json,document.querySelector('.main'))
            
        });

    

});



 