import React, { Component } from "react";
import ReactDOM from "react-dom";
import Month from "./month.react";
import "./index.css";

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

class RootHtml extends Component {
    constructor() {
        super();
        this.state = {
            calendar: matchMonthNamesWithDays(),
        };

        this.brightenDay = this.brightenDay.bind( this );
    }
    brightenDay( day, month ) {
        return () => {
            const { calendar } = this.state;
            const theMonth = calendar.find( oneMonth => oneMonth.name === month.name );

            const monthIndex = findItemIndex( calendar, month, "name" );
            const dayIndex = findItemIndex( theMonth.days, day, "date" );

            const newHexagon = Object.assign( {}, day.hexagons[ 0 ], {
                completed: !day.hexagons[ 0 ].completed,
            } );

            day.hexagons = [ newHexagon ];

            theMonth.days = [
                ...theMonth.days.slice( 0, dayIndex ),
                day,
                ...theMonth.days.slice( dayIndex + 1 ),
            ];
            const newMonth = Object.assign( {}, theMonth );

            this.setState( {
                calendar: [
                    ...calendar.slice( 0, monthIndex ),
                    newMonth,
                    ...calendar.slice( monthIndex + 1 ),
                ],
            } );
        };
    }
    render() {
        const { calendar } = this.state;
        return (
            <div className="year-calendar">
                {calendar.map( ( month, index ) => (
                    <Month month={month}
                        key={index}
                        brightenDay={this.brightenDay} />
                ) )}
            </div>
        );
    }
}

function findItemIndex( collection, item, key ) {
    let index = 0;
    collection.forEach( ( obj, ind ) => {
        if ( item[ key ] === obj[ key ] ) {
            index = ind;
        }
    } );

    return index;
}

const rootElement = document.getElementById( "root" );
ReactDOM.render( <RootHtml />, rootElement );
