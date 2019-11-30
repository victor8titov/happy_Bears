import Component from '../../Class/Component';


class Main extends Component {
    render() {
        console.log(this.props);
        return this.createElement('div',{className: 'main'},'body')
    }
}

export default Main;