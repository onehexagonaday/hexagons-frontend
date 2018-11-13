import React from "react";
import Day from "./day.react";

function Month( props ) {
    const { month } = props;

    return (
        <div className="month">
            <div className="month-header">
                <h2>{month.name}</h2>
            </div>
            <div className="month-body">
                {month.days.map( ( day, index ) => (
                    <Day day={day}
                        month={month}
                        key={index}
                        brightenDay={props.brightenDay} />
                ) )}
            </div>
        </div>
    );
}

export default Month;
