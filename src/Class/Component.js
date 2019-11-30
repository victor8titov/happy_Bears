class Component {
    constructor(props) {
        this.props = props;
    }
    ComponentTo(component,props) {
        return (new component(props)).render();
    }
    render(){}
    createElement(type,props=null, children=undefined) {
        let element= document.createElement(type);
    
        if (props !== null) {
            /* Attributes */
            props.hasOwnProperty('className') ? element.className = props.className : undefined;
            props.hasOwnProperty('src') ? element.src = props.src : undefined;
            props.hasOwnProperty('alt') ? element.alt = props.alt : undefined;
            
            /* Events list */
            props.onClick !== undefined ? Component.onClick(props.onClick,element) : undefined; 
        }

        if (children === undefined) return element;
        Array.isArray(children) ? children.map((sub_element)=>element.insertAdjacentElement('beforeend',sub_element)):
        typeof children === "string" ? element.insertAdjacentHTML('beforeend',children):
        typeof children ==='object' ? element.insertAdjacentElement('beforeend',children) : '';
        
        return element;
    }
    static onClick(callback,element) {
        element.addEventListener('click',callback,false);
    }
    static onMousemove(){}
    static onMousewheel(){}

}

export default Component;