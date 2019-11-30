import Component from '../../Class/Component';

class Spinner extends Component {
    render(){
        return (
            this.createElement('div',{className: 'spinner main'},
                this.createElement('h1',null,'Идет загрузка'))
        )
    }
}


export default Spinner;