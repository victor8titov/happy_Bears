class Component {
    constructor(props) {
        this.props = props;
        this.childrens = [];
    }
    componentTo(component,props) {
        let new_comp = new component(props); 
        this.childrens = [...this.childrens,new_comp ]
        return new_comp.render();
    }
    render(){}
    createElement(type,props=null, children=undefined) {
        let element= document.createElement(type);
    
        if (props !== null) {
            /* Attributes */
            props.hasOwnProperty('className') ? element.className = props.className : undefined;
            props.hasOwnProperty('src')  ? element.src = props.src : undefined;
            props.hasOwnProperty('alt') ? element.alt = props.alt : undefined;
            props.hasOwnProperty('alt') ? element.alt = props.alt : undefined;
            props.hasOwnProperty('style') ? element.style.cssText = props.style : undefined;
            props.hasOwnProperty('data') ? Array.isArray(props.data) ? 
                props.data.map(data=>element.setAttribute(`data-${data.name}`,data.value)) :
                element.setAttribute(`data-${props.data.name}`,props.data.value) : 
                undefined;
            props.hasOwnProperty('id') ? element.id = props.id : undefined;
            props.hasOwnProperty('tabindex') ? element.setAttribute('tabindex',props.tabindex) : undefined;

            
            /* Form attribute */
            props.hasOwnProperty('type') ? element.type = props.type : undefined;
            props.hasOwnProperty('value') ? element.value = props.value : undefined;
            props.hasOwnProperty('name') ? element.name = props.name : undefined;
            props.hasOwnProperty('size') ? element.size = props.size : undefined;
            props.hasOwnProperty('selected') ? element.selected = props.selected : undefined;
            props.hasOwnProperty('for') ? element.setAttribute('for',props.for) : undefined;
            props.hasOwnProperty('checked') ? element.setAttribute('checked',props.checked) : undefined;
            
            /* Events list */
            props.onClick !== undefined ? Component.onClick(props.onClick,element) : undefined; 
            props.onChange !== undefined ? Component.onChange(props.onChange,element) : undefined;
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
    static onChange(callback,element) {
        element.addEventListener('change',callback,false);
    }
    static onMousemove(){}
    static onMousewheel(){}
    componentDidMount() {}
    
}

export default Component;