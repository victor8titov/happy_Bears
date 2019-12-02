class View {
    constructor(){
        this.component=undefined;
    }
    pipeline(components,root) {
        if ( !Array.isArray(components) ) return;

        components.map( (component)=>Array.isArray(component) && component.length == 2 ? 
            this.render(component[0],component[1],root) :
            this.render(component,null,root))

    }
    render(component,props,root){
        root.append( this.convertToDOM(component, props) );
        this.componentDidMount(this.component);
    }
    replace(component, props, dom_element){
        /* replace element in DOM */
        dom_element.parentNode.replaceChild(this.convertToDOM(component,props),dom_element);
        this.componentDidMount(this.component);
    }
    convertToDOM(component,props) {
        this.component = new component(props);
        return this.component.render();
    }
    componentDidMount(comp){
        comp.childrens.length ? comp.childrens.map( (component)=> {
            component.componentDidMount();
            component.childrens ? this.componentDidMount(component): undefined; 
        }) : undefined;
    }
}


export const view = new View;