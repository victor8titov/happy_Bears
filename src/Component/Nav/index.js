import Component from '../../Class/Component';
import './style.scss';

class Nav extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            this.createElement('nav',{className:'nav'},
                this.createElement('div',{className:'nav__container'},
                    this.createElement('div',{className:'nav__row'},
                    [
                        this.createElement('h2',{className:'nav__title'},'Поступившие заявки'),
                        this.createElement('div',{className:'nav__reserve'},
                            [
                                this.createElement('input',{
                                    type: 'checkbox',
                                    id: 'reserve',
                                    name: 'reserve',
                                    className: 'nav__checkbox'
                                }),
                                this.createElement('label',{
                                    for: 'reserve',
                                    className: 'nav__label'
                                },'Только из заповедника'),
                            ]),
                        this.createElement('div',{className:'nav__filter'},
                            this.createElement('select',{
                                id: 'filter',
                                size: 1,
                                name: 'filter',
                                className: 'nav__select'
                            },
                                [
                                    this.createElement('option',{
                                        value: 'enter',
                                        selected: true
                                    },'Входящие медведи'),
                                    this.createElement('option',{
                                        value: 'accept',
                                    },'Принятые медведи'),
                                    this.createElement('option',{
                                        value: 'reject',
                                    },'Отклонёные медведи'),
    
                                ]))
                    ])
                    ))
        )
    }
}

export default Nav;