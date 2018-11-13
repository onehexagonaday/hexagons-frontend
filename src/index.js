import React from "react";
import ReactDOM from "react-dom";

function matchMonthNamesWithDays() {
    const monthNames = "jan-feb-mar-apr-may-jun-jul-aug-sep-oct-nov-dec".split( "-" );
    const monthDays = "31-29-31-30-31-30-31-31-30-31-30-31".split( "-" );

    return monthNames.map( ( monthName, index ) => {
        const month = {
            name: monthName,
            days: [],
        };

        for ( let i = 1; i <= parseInt( monthDays[ index ], 10 ); i++ ) {
            month.days.push( {
                date: i,
                hexagons: [ { name: "Breathing", completed: false } ],
            } );
        }

        return month;
    } );
}

console.log( matchMonthNamesWithDays() );

const RootHtml = () => (
    <div>
        <h1>App</h1>
    </div>
);

const rootElement = document.getElementById( "root" );
ReactDOM.render( <RootHtml />, rootElement );
