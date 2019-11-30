import Component from '../../Class/Component';


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
            this.createElement('div',
                {
                    className: 'header',         
                },
                [
                    this.createElement(
                        'img',
                        {
                            className: 'logo',
                            src: 'this.props.src',
                            alt: ''

                        }),
                    this.createElement('h1',null,'this.props.title'),
                    this.createElement(
                        'button',
                        {
                            onClick: this.onClick,

                        },
                        'this.props.button_t')
                ] 
            )
       )
    }
}

export default Header