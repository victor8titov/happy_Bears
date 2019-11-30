import Component from '../../Class/Component';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.createElement('footer',null, 
                this.createElement('p',{className: 'footer',},'Все права защиты happy bears'))
        )
    }
}

export default Footer;