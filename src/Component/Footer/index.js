import Component from '../../Class/Component';
import './style.scss';
class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.createElement('footer',{className:'footer'}, 
                this.createElement('div',{className:'footer__container'},
                    this.createElement('p',{className: 'footer__title',},'Все права защищены Happy Bears 2019&#169;'))
            )
        )
    }
}

export default Footer;