import Component from '../../Class/Component';
import './style.scss';
import Button from '../Button';

class BigCard extends Component {
    constructor(props){
        super(props);
        this.onAccept = this.onAccept.bind(this);
        this.onReject = this.onReject.bind(this);
    }
    onClose(e) {
        
        let parent = e.target.parentNode;
        parent.classList.add('bigcard_close');
        setTimeout(()=>parent.remove(),400);
        document.querySelector('.container').classList.remove('container_blur');
    }
    onAccept(e) {
        this.animationAfterDefined()
        this.props.onAccept(e);
    }
    onReject(e) {
        this.animationAfterDefined()
        this.props.onReject(e);
    }
    animationAfterDefined() {
        console.log('-:','animate',this.props)
        /* убираем кнопки с карточки */
        let elm = document.getElementById(this.props.id);
        let listButton = elm.querySelectorAll('.button');
        listButton.forEach(button=>{
            /* сначала анимация  */
            button.classList.add('button_hidden');
            /* теперь удаляем елемент со страницы */
            setTimeout(()=>button.style.display = 'none', 400);
        })

        /* для плавности изменим стиль контейнера кнопок после анимации исчезновения кнопок */
        /* setTimeout(()=>{
            document.getElementById(this.id).querySelector('.card__description').classList.add('card__description_defined');
        },400) */
    }
    render() {
        let {bear, url, name = bear.name, type=bear.type, gender=bear.gender, desc=bear.description} = this.props;
        return (
            this.createElement('div',{
                className:`bigcard ${bear.reserve?'bigcard_reserve':''}`,
                id: this.props.id,
            },
            [
                this.createElement('div',
                    {
                        className: 'bigcard__thumbnail',
                        style: `background-image:url(${url+bear.thumbnail});`,
                    },
                        this.createElement('div',{className:`bigcard__mask ${bear.reserve ? 'bigcard__mask_reserve':''}`},
                            this.createElement('h3',null,'В заповеднике'))
                    ),
                this.createElement('div',{className: `bigcard__description ${bear.reserve?'bigcard__description_reserve':''}`},
                [
                    this.createElement('h3',null,name),
                    this.createElement('h4',null,type),
                    this.createElement('h4',null,gender),
                    ...desc.map(paragraph=>this.createElement('p',null,paragraph)),
                    ...bear.status === 'notDefined' ? 
                    [this.componentTo(Button,{
                        onClick: this.onAccept,
                        text: 'Принять',
                        type: 1,
                        modifi: bear.reserve,
                    }),
                    this.componentTo(Button,{
                        onClick: this.onReject,
                        text: 'Отклонить',
                        type: 2,
                        modifi: bear.reserve,
                    })] :
                    [],

                ]),
                this.createElement('div',{
                    className:'bigcard__close',
                    onClick: this.onClose})
            ])
            )

    }
}

export default BigCard;