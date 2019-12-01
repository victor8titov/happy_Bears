import Component from '../../Class/Component';
import './style.scss';

class Button extends Component {
    render() {
        let {modifi, text, type, onClick} = this.props;
        return (
            this.createElement('div',{
                className: `button ${modifi? 'button_modifi':''} ${type === 1? 'button_type_1': type===2 ?'button_type_2':''}`,
                onClick: onClick,
            },text)
        )
    }
}

export default Button;