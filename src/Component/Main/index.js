import Component from '../../Class/Component';


class Main extends Component {
    render() {
        
        if (this.props) {
            
            //var URL = this.props ? this.props.settings.url_img + this.props.bears.b1.thumbnail : '';
            console.log(URL);
        }
        

        return (
            this.createElement('div',{className: 'main'},
                this.createElement('img',{
                        //src: URL,
                        alt: 'bears',
                        style: 'width:220px; height: 146px; border-radius: 10px;'}))
        )
    }
}

export default Main;