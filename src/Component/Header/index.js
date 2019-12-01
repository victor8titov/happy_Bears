import Component from '../../Class/Component';
import './style.scss';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    onClick(e) {
        console.log(e)
        let head = document.querySelector('.header');
        head.style.color = 'red';

    }
    render() {
       return (
            this.createElement('header',
                {
                    className: 'header',         
                },
                [
                   this.createElement('div',{className: 'header__container'},[
                        this.createElement('img',{
                                src:'img/logo_bear.svg',
                                alt: 'logo bear',
                                className: 'header__logo',
                            }),
                        this.createElement('h1',{className: 'header__title'},'happy Bears')
                   ])
                ] 
            )
       )
    }
}

export default Header