import React, { useState } from "react";

interface NameData {
    id: number;
    name: string;
    imageLink: string;
}

interface RandomNamePickerProps {
    data: NameData[];
}

const RandomNamePicker: React.FC<RandomNamePickerProps> = ({ data }) => {
    const [selectedName, setSelectedName] = useState<string>("");
    const [selectedImage, setSelectedImage] = useState<string>("");
    const [usedNames, setUsedNames] = useState<string[]>([]);

    const handlePickRandomName = () => {
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

        const randomIndex = Math.floor(Math.random() * availableNames.length);
        const randomData = availableNames[randomIndex];
        setSelectedName(randomData.name);
        setSelectedImage(randomData.imageLink);
        setUsedNames([...usedNames, randomData.name]);
    };

    return (
        <div>
            <button onClick={handlePickRandomName}>Pick a Random Name</button>
            {selectedName && (
                <div>
                    <p>Selected Name: {selectedName}</p>
                    <img src={selectedImage} alt={selectedName} />
                </div>
            )}
        </div>
    );
};

export default RandomNamePicker;
