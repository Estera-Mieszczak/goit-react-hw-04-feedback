import React from "react";

export const Statistics = ({ good, neutral, bad, value, result }) => {
    result = 0;

    if (good !== 0) {
        result = (good / value) * 100;
        result = result.toFixed(2)
    }

    if (value === 0) {
        return (
            <div>
                No feedback given
            </div>
        )
    }
    else {
    
        return (
            <div>
                <p>Statistics</p>
                <p>Good: <span>{good}</span> </p>   
                <p>Neutral: <span>{neutral}</span> </p>
                <p>Bad: <span>{bad}</span></p>
                <p>total:{value}</p>
                <p>positive feedback: {result}%</p>
            </div>
        )
    }
}