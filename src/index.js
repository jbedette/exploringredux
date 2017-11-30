import React from 'react';
import ReactDOM from 'react-dom'

// create a new component this component should produce some html

// Take this component's generated html and put it on the page

const App  = function(){
    return <div>Fart</div>;
}

ReactDOM.render(<App/>, document.querySelector('.container'))