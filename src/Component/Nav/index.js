import Component from '../../Class/Component';
import './style.scss';
import Select from '../Select';

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
        this.clearAll();
        this.sorting().map( (elm)=>this.Show(elm) )
    }
    onChangeCheckbox(e) {
        this.flagReserve = e.target.checked;
        this.clearAll();
        this.sorting().map( (elm)=>this.Show(elm) )
    }
    sorting() {
        let listElm = [...document.querySelectorAll(`${this.props.filterChecked}, ${this.props.filterSelect}`)];
        if (this.flagReserve !== undefined) {
            listElm = listElm.filter( (elm)=>this.props.isChecked(elm, this.flagReserve) )
        }
        if (this.flagStatus !== undefined) {
            listElm = listElm.filter( (elm)=>this.props.isSelect(elm, this.flagStatus) ) 
        }

        return listElm;
       
    }
    clearAll() {
        let listElm = [...document.querySelectorAll(`${this.props.filterChecked}, ${this.props.filterSelect}`)];
        listElm.map( (elm)=>this.Hidden(elm) );
    }
    Show(elm){
        setTimeout(()=>{
            elm.classList.remove('absolute')
            elm.classList.remove('hidden'); 
        },300)
        
    }
    Hidden(elm) {
        elm.classList.add('hidden');
        //elm.classList.remove('static');
        setTimeout(()=>elm.classList.add('absolute'),300); 
    }
    render() {
        return (
            this.createElement('nav',{className:'nav'},
                this.createElement('div',{className:'nav__container'},
                    this.createElement('div',{className:'nav__row'},
                    [
                        this.createElement('div',{className:'nav__title'},
                            this.createElement('h2',null,'Поступившие заявки')),
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
                            this.componentTo(Select,{onChange: this.onChangeSelect}))
                    ])
                    ))
        )
    }
}

export default Nav;