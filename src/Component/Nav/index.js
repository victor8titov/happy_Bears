import Component from '../../Class/Component';
import './style.scss';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
        this.onChangeSelect = this.onChangeSelect.bind(this);
        this.flagReserve = false;
        this.flagStatus = undefined;
    }
    onChangeSelect(e) {
        this.flagStatus = e.target.value;
        let listElement = [...document.querySelectorAll(this.props.filterSelect)];
        
        if (this.flagReserve !== undefined) {
            listElement = listElement.filter((elm)=>{
                if ( !this.props.isChecked(elm, this.flagReserve) ) {
                    //this.Hidden(elm);
                    return false;
                } else {
                    //this.Show(elm);
                    return true;
                }
            })
        }

        listElement.forEach((elm)=> this.props.isSelect(elm,this.flagStatus) ? this.Show(elm) : this.Hidden(elm) );
        
    }
    onChangeCheckbox(e) {
        this.flagReserve = e.target.checked;
        let listElement = [...document.querySelectorAll(this.props.filterChecked)];
        
        if (this.flagStatus !== undefined) {
            listElement = listElement.filter((elm)=>{
                if ( !this.props.isSelect(elm, this.flagStatus) ) {
                    //this.Hidden(elm);
                    return false;
                } else {
                    //this.Show(elm);
                    return true;
                }
            })
        }
        listElement.forEach((elm)=> this.props.isChecked(elm,this.flagReserve) ? this.Show(elm) : this.Hidden(elm) )
        
    }
    sorting() {

        let listElement = [...document.querySelectorAll(this.props.filterSelect)];
        listElement = listElement.filter((elm)=>{
            if ( !this.props.isChecked(elm, this.flagReserve) ) {
                this.Hidden(elm);
                return false;
            } else {
                this.Show(elm);
                return true;
            }
        })

        if (this.flagStatus === undefined) return;
        listElement.forEach((elm)=> this.props.isSelect(elm,filter) ? this.Show(elm) : this.Hidden(elm) )
    }
    Show(elm){
        elm.classList.remove('absolute')
        elm.classList.remove('hidden'); 
    }
    Hidden(elm) {
        elm.classList.add('hidden');
        //elm.classList.remove('static');
        setTimeout(()=>elm.classList.add('absolute'),4400); 
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
                                    className: 'nav__checkbox',
                                    onChange: this.onChangeCheckbox,
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
                                className: 'nav__select',
                                onChange: this.onChangeSelect,
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