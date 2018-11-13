import React, { Component } from "react";

class Day extends Component {
    render() {
        const { day, month } = this.props;
        const { hexagons } = day;

        const completed = hexagons[ 0 ].completed;

        const completedClass = completed ? "btn-completed" : "";
        return (
            <div className="day">
                <button
                    className={`${ completedClass } btn`}
                    onClick={this.props.brightenDay( day, month )}
                >
                    <span className="day-date">{day.date}</span>
                </button>
            </div>
        );
    }
}

export default Day;
