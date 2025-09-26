import React from 'react';

class Hello extends React.Component{
    constructor(){
        super();
        this.state = {name:"Bob"};

        this.HandleClick = this.HandleClick.bind(this);
    }

    HandleClick(){
        // document.writeln("Hello " +  this.state.name);
        let id= document.getElementById("hello");
        id.innerText= id.innerText + this.state.name;
        console.log(id.innerText);
        // id.style.color="red";
        // id.append(this.state.name);
    }

    render(){
        return(
            <>
            <h1 id="hello">hello</h1>
            <button onClick={this.HandleClick}>Click Me</button>
            </>
        )
    }
}

export default Hello;