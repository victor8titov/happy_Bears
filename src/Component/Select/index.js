import Component from '../../Class/Component';
import './style.scss';

class Select extends Component {

    render() {
        return (
            this.createElement('div',{className: 'select-box'},
            [
                this.createElement('div',{className: 'select-box__current',tabindex: 1},
                [
                    this.createElement('div',{className:'select-box__value'},
                    [
                        this.createElement('input',{
                            className: 'select-box__input',
                            type: 'radio',
                            id: 0,
                            value:'enter',
                            name: 'filter',
                            checked: "checked",
                            onChange: this.props.onChange,
                        }),
                        this.createElement('p',{className:'select-box__input-text'},'Входящие медведи')
                    ]),
                    this.createElement('div',{className:'select-box__value'},
                    [
                        this.createElement('input',{
                            className: 'select-box__input',
                            type: 'radio',
                            id: 1,
                            value:'accept',
                            name: 'filter',
                            checked: "checked",
                            onChange: this.props.onChange,
                        }),
                        this.createElement('p',{className:'select-box__input-text'},'Принятые медведи')
                    ]),
                    this.createElement('div',{className:'select-box__value'},
                    [
                        this.createElement('input',{
                            className: 'select-box__input',
                            type: 'radio',
                            id: 2,
                            value:'reject',
                            name: 'filter',
                            checked: "checked",
                            onChange: this.props.onChange,
                        }),
                        this.createElement('p',{className:'select-box__input-text'},'Отклонённые медведи')
                    ]),
                    this.createElement('span',{
                        className:'select-box__icon',
                    })
                ]),
                this.createElement('ul',{className: 'select-box__list'},
                [
                    this.createElement('li',null,
                        this.createElement('label',{
                            className:'select-box__option',
                            for: 0,

                        }, 'Входящие медведи')),
                    this.createElement('li',null,
                        this.createElement('label',{
                            className:'select-box__option',
                            for: 1,

                        }, 'Принятые медведи')),
                    this.createElement('li',null,
                        this.createElement('label',{
                            className:'select-box__option select-box__option_last',
                            for: 2,

                        }, 'Отклонённые медведи')),
                    
                ])
            ])
        )
    }
}

export default Select;
