function customRender(Element, container){
    /*
    const domElement = document.createElement(Element.type)
    domElement.innerHTML = Element.children;
    domElement.setAttribute('href', Element.props.href)
    domElement.setAttribute('target', Element.props.target)

    container.appendChild(domElement)
    */

    const domElement = document.createElement(Element.type)
    domElement.innerHTML = Element.children
    console.log(Element.props)
    for (const prop in Element.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, Element.props[prop])                        
    }
    container.appendChild(domElement)

}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer)

