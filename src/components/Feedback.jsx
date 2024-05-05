export const Feedback = ({ onIncrementClickGood, onIncrementClickNeutral, onIncrementClickBad, totalClick }) => {
    return (
        <>
            <div>
                <p>Please leave feedback</p>
            </div>
            <div>
                <button type="button" onClick={() => { onIncrementClickGood(); totalClick(); }}>Good</button>
                <button type="button" onClick={() => { onIncrementClickNeutral(); totalClick(); }}>Neutral</button>
                <button type="button" onClick={() => { onIncrementClickBad(); totalClick(); }}>Bad</button>
            </div>
        </>
    )
}