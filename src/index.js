import React from 'react';
import ReactDOM from 'react-dom'

// Create a new component. This component should produce some html
// import * as React from "react";

const App = () => {
    return <div>HI!</div>;
}

// Take this component's generated html and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));