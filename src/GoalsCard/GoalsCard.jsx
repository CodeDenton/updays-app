import React, { useState } from 'react';
function Goals(props) {

    const [goals, setGoals] = useState([]);

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    function handleClick() {
        if(inputValue.trim() !== "") {
            setGoals([...goals, { text: inputValue, completed: false }]);
            setInputValue('');
        }
    }

    return (
        <>
            <div>
                <label htmlFor="myInput">Set Goals For Today: </label>
                <input
                    type="text"
                    id="myInput"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Type here..."
                />
                <button onClick={handleClick}>Set Goal</button>
                <div>
                    {goals.map((goal, index) => (
                        <div key={index}>
                            <input type="checkbox" checked={goal.completed} readOnly />
                            <span>{goal.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Goals