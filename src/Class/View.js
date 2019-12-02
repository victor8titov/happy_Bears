class View {
    pipeline(components,root) {
        if ( !Array.isArray(components) ) return;

        components.map( (component)=>Array.isArray(component) && component.length == 2 ? 
            this.render(component[0],component[1],root) :
            this.render(component,null,root))

    }
    render(component,props,root){
        root.append( this.convertToDOM(component, props) );
    }
    replace(component, props, dom_element){
        /* replace element in DOM */
        dom_element.parentNode.replaceChild(this.convertToDOM(component,props),dom_element);
    }
    convertToDOM(component,props) {
        return (new component(props)).render();
    }
}


export const view = new View;