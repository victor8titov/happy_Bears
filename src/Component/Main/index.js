import Component from '../../Class/Component';
import Card from '../Card';
import './style.scss';

class Main extends Component {
    render() {
        let props = this.props;
        return (
            this.createElement('section',{className: 'main'},
                !props ? 
                    this.createElement('div',{className:'main__not-content'},'Заявок нет.') :
                    props.bears.map((bear,id)=>this.componentTo(Card,{bear, id, url_img:props.settings.url_img}) ) 
            )
        )
    }
}

export default Main;