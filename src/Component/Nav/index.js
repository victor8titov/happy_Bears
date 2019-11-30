import Component from '../../Class/Component';

class Nav extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            this.createElement('section',{className:'nav'},
                [
                    this.createElement('div',{className: 'checkbox'},[
                        this.createElement('p',null,'уже в зоопарке'),
                        this.createElement('input',{
                            type: 'checkbox',
                            name: 'inZoo',
                            })]
                            ),
                    this.createElement('div',{className: 'option'},
                        this.createElement('select',{
                            size: 1,
                            name: 'type'
                            },[
                                this.createElement('option',{value: 'op1'},'option 1'),
                                this.createElement('option',{value: 'op2'},'option 2'),
                                this.createElement('option',{value: 'op3', selected: true},'option 3'),
                                this.createElement('option',{value: 'op4'},'option 4'),
                                this.createElement('option',{value: 'op5'},'option 5'),
                                this.createElement('option',{value: 'op6'},'option 6'),
                            ]) )
                ])
        )
    }
}

export default Nav;