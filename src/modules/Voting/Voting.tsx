import { useState, useEffect } from "react";

const LivePoll = () => {
    const [options, setOptions] = useState([
        { id: 1, text: "Option 1", count: 0 },
        { id: 2, text: "Option 2", count: 0 },
        { id: 3, text: "Option 3", count: 0 },
    ]);
    const [hasVoted, setHasVoted] = useState(false);

    useEffect(() => {
        const storedVote = localStorage.getItem("vote");
        if (storedVote) {
            setHasVoted(true);
        }
    }, []);

    const handleVote = (optionId: number) => {
        if (!hasVoted) {
            setOptions((prevOptions) =>
                prevOptions.map((option) =>
                    option.id === optionId
                        ? { ...option, count: option.count + 1 }
                        : option
                )
            );
            setHasVoted(true);
            localStorage.setItem("vote", "true");
        }
    };

    const totalVotes = options.reduce(
        (total, option) => total + option.count,
        0
    );

    // Sort options in descending order based on count
    const sortedOptions = [...options].sort((a, b) => b.count - a.count);

    return (
        <div>
            <h1>Live Poll</h1>
            {!hasVoted ? (
                <ul>
                    {options.map((option) => (
                        <li key={option.id}>
                            {option.text} - {option.count} votes
                            <button onClick={() => handleVote(option.id)}>
                                Vote
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <div>
                    <h2>Results</h2>
                    <ul>
                        {sortedOptions.map((option) => (
                            <li key={option.id}>
                                {option.text} - {option.count} votes (
                                {((option.count / totalVotes) * 100).toFixed(2)}
                                %)
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default LivePoll;
