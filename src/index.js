import React from "react";
import ReactDOM from "react-dom";

const RootHtml = () => (
    <div>
        <h1>App</h1>
    </div>
);

const rootElement = document.getElementById( "root" );
ReactDOM.render( <RootHtml />, rootElement );
