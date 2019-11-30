import Component from '../../Class/Component';

class Nav extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            this.createElement('section',{className:'main'},
                [
                    this.createElement('input',null,''),
                    //this.createElement('input',null, )
                ])
        )
    }
}

export default Nav;