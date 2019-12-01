import Component from '../../Class/Component';
import './style.scss';
import Button from '../Button';

class BigCard extends Component {
    onClose(e) {
        
        let parent = e.target.parentNode;
        parent.classList.add('bigcard_close');
        setTimeout(()=>parent.remove(),400);
        document.querySelector('.container').classList.remove('container_blur');
    }
    render() {
        console.log(this.props)
        let {bear, url, name = bear.name, type=bear.type, gender=bear.gender, desc=bear.description, onAccept, onReject} = this.props;
        return (
            this.createElement('div',{
                className:`bigcard ${bear.reserve?'bigcard_reserve':''}`,
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
                    this.componentTo(Button,{
                        onClick: onAccept,
                        text: 'Принять',
                        type: 1,
                        modifi: bear.reserve,
                    }),
                    this.componentTo(Button,{
                        onClick: onReject,
                        text: 'Отклонить',
                        type: 2,
                        modifi: bear.reserve,
                    })

                ]),
                this.createElement('div',{
                    className:'bigcard__close',
                    onClick: this.onClose})
            ])
            )

    }
}

export default BigCard;