import Component from '../../Class/Component';
import './style.scss';
import Button from '../Button';
import Bigcard from '../BigCard';

class Card extends Component {
    constructor(props){
        super(props);
        this.onShowBigCard = this.onShowBigCard.bind(this);
        this.onAccept = this.onAccept.bind(this);
        this.onReject = this.onReject.bind(this);
        this.id = `b${this.props.id}`;
    }
    onAccept(e) {
        console.log('onAccept')
        e.stopPropagation();
        this.setStatus('accept');
        this.animationAfterDefined();
    }
    onReject(e) {
        console.log('onReject')
        e.stopPropagation();
        this.setStatus('reject');
        this.animationAfterDefined();
    }
    setStatus(status) {
        /* меняем статус медведя */
        let elm = document.getElementById(this.id);
        if (elm.dataset.status !== 'notDefined') return;
        elm.setAttribute('data-status',status);

        /* ! меняем состояние свойств в объекте */
        this.props.bear.status = status;
    }
    animationAfterDefined() {
        /* убираем кнопки с карточки */
        let elm = document.getElementById(this.id);
        let listButton = elm.querySelectorAll('.button');
        listButton.forEach(button=>{
            /* сначала анимация  */
            button.classList.add('button_hidden');
            /* теперь удаляем елемент со страницы */
            setTimeout(()=>button.style.display = 'none', 400);
        })

        /* для плавности изменим стиль контейнера кнопок после анимации исчезновения кнопок */
        setTimeout(()=>{
            document.getElementById(this.id).querySelector('.card__description').classList.add('card__description_defined');
        },400)
    }
    onShowBigCard(e) {
        /* создаем большую карточку из шаблона */
        let bigcard = new Bigcard({
            bear:this.props.bear,
            url: this.props.url_img,
            onAccept: this.onAccept,
            onReject: this.onReject,
            id: `bigcard_${this.id}`
        });

        /* размываем фон классом с фильтром */
        document.querySelector('.container').classList.add('container_blur')

        /* 
            создаем блок, который добовляется в документ
            в блок добовляется сгенерированая большая карточка
        */
        let modal = document.createElement('div');
        modal.className='blurfon';
        modal.addEventListener('click',(e)=>{
            e.stopPropagation();
            bigcard.onClose();
        });
        modal.append(bigcard.render());
        document.getElementsByTagName('body')[0].append(modal);
    }
    render() {
        let { bear, url_img} = this.props;
        
        return (
            this.createElement('article',{
                className: `card ${bear.reserve? 'card_reserve' : ''}`,
                id: this.id,
                data: [
                        {
                            name: 'status',
                            value: bear.status,
                        },
                        {
                            name: 'reserve',
                            value: bear.reserve
                        }
                    ],
                onClick: this.onShowBigCard

                },[
                    this.createElement('div',{
                        className: `card__thumbnail ${bear.reserve? 'card__thumbnail_reserve' : ''}`,
                        style: `background-image: url(${url_img + bear.thumbnail});`,
                        },
                        this.createElement('div',{className: `card__mask ${bear.reserve? 'card__mask_reserve':''}`},
                            this.createElement('h3',null,'В заповеднике'))
                            ),
                    this.createElement('div',{className: `card__description ${bear.reserve?'card__description_reserve':''} ${bear.status !== 'notDefined'? 'card__description_defined':''}`},[
                        this.createElement('h3',null,bear.name),
                        this.createElement('h4',null,bear.type),
                        this.createElement('h4',null,bear.gender),
                        this.componentTo(Button,{
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
                        }) 
                    ])
                ] )
        )
    }
}

export default Card;