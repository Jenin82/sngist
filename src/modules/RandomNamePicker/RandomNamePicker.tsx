import React, { useState } from "react";
import './randomNamePicker.css'

interface NameData {
    id: number;
    name: string;
    imageLink: string;
}

interface RandomNamePickerProps {
    data: NameData[];
    className?: string;
}

const RandomNamePicker: React.FC<RandomNamePickerProps> = ({
    data,
}) => {
    const [selectedName, setSelectedName] = useState<string>("");
    const [selectedImage, setSelectedImage] = useState<string>("");
    const [usedNames, setUsedNames] = useState<string[]>([]);
    const [rolling, setRolling] = useState<boolean>(false);

    const handlePickRandomName = () => {
        if (rolling) return; // Prevent picking a name while rolling animation is active
        setRolling(true);

        // Show rolling animation for 3 seconds
        setTimeout(() => {
            setRolling(false);

            const availableNames = data.filter(
                (nameData) => !usedNames.includes(nameData.name)
            );
            if (availableNames.length === 0) {
                // All names have been used, reset the usedNames array
                setUsedNames([]);
                setSelectedName("");
                setSelectedImage("");
                return;
            }

            const randomIndex = Math.floor(
                Math.random() * availableNames.length
            );
            const randomData = availableNames[randomIndex];
            setSelectedName(randomData.name);
            setSelectedImage(randomData.imageLink);
            setUsedNames([...usedNames, randomData.name]);
        }, 4000);
    };

    return (
        <div className={"random-name-picker"}>
            {rolling ? (
                <div className="scene">
                    <div className="shadow"></div>
                    <div className="jumper">
                        <div className="spinner">
                            <div className="scaler">
                                <div className="loader">
                                    <div className="cuboid">
                                        <div className="cuboid__side"></div>
                                        <div className="cuboid__side"></div>
                                        <div className="cuboid__side"></div>
                                        <div className="cuboid__side"></div>
                                        <div className="cuboid__side"></div>
                                        <div className="cuboid__side"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                selectedName && (
                    <div>
                        <img src={selectedImage} alt={selectedName} />
                        <h1>{selectedName}</h1>
                    </div>
                )
            )}
            <button onClick={handlePickRandomName}>Pick a Random Name</button>
        </div>
    );
};

export default RandomNamePicker;
