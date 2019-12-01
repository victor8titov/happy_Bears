import Component from '../../Class/Component';
import './style.scss';
import Button from '../Button';
import Bigcard from '../BigCard';

class Card extends Component {
    constructor(props){
        super(props);
        this.onShowBigCards = this.onShowBigCards.bind(this);
    }
    onAccept(e) {
        e.stopPropagation();
        console.log('onAccept')
    }
    onReject(e) {
        e.stopPropagation();
        console.log('onReject')
    }
    onShowBigCards(e) {
        /* создаем большую карточку из шаблона */
        let bigcard = this.componentTo(Bigcard,{
            bear:this.props.bear,
            url: this.props.url_img,
            onAccept: this.onAccept,
            onReject: this.onReject,
        });

        /* размываем фон классом с фильтром */
        document.querySelector('.container').classList.add('container_blur')

        /* 
            создаем блок, который добовляется в документ
            в блок добовляется сгенерированая большая карточка
        */
        let modal = document.createElement('div');
        modal.append(bigcard);
        document.getElementsByTagName('body')[0].append(modal);
    }
    render() {
        let { bear, id, url_img} = this.props;
        return (
            this.createElement('article',{
                className: `card ${bear.reserve? 'card_reserve' : ''}`,
                id: `b${id}`,
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
                onClick: this.onShowBigCards

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