import React, { useState, useEffect } from "react";
import Select from "react-select";

interface Option {
    id: number;
    text: string;
    count: number;
}

interface Poll {
    id: number;
    question: string;
    options: Option[];
}

interface PollProps {
    poll: Poll;
}

const Poll: React.FC<PollProps> = ({ poll }) => {
    const [options, setOptions] = useState<Option[]>(poll.options);
    const [hasVoted, setHasVoted] = useState<boolean>(false);

    useEffect(() => {
        const hasVoted = localStorage.getItem(`poll_${poll.id}_voted`);
        if (hasVoted) {
            setHasVoted(true);
        }
    }, [poll.id]);

    const handleVote = (optionId: number) => {
        setOptions((prevOptions) =>
            prevOptions.map((option) =>
                option.id === optionId
                    ? { ...option, count: option.count + 1 }
                    : option
            )
        );
        setHasVoted(true);
        localStorage.setItem(`poll_${poll.id}_voted`, "true");
    };

    return (
        <div>
            {hasVoted ? (
                <div>
                    <h2>Thank you for voting in {poll.question}</h2>
                </div>
            ) : (
                <div>
                    <h2>{poll.question}</h2>
                    <select name="pets" id="pet-select">
                        <option value="">--Please choose an option--</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="hamster">Hamster</option>
                        <option value="parrot">Parrot</option>
                        <option value="spider">Spider</option>
                        <option value="goldfish">Goldfish</option>
                    </select>
                    {options.map((option) => (
                        <div key={option.id}>
                            <p>{option.text}</p>
                            <button onClick={() => handleVote(option.id)}>
                                Vote
                            </button>
                            <p>Count: {option.count}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Poll;