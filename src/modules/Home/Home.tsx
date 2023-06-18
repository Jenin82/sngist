import RandomNamePicker from "../RandomNamePicker/RandomNamePicker";

interface NameData {
    id: number;
    name: string;
    imageLink: string;
}

const Home = () => {
	const data: NameData[] = [
        {
            id: 1,
            name: "AADHIB NASSER VELIYATH",
            imageLink:
                "https://github.com/Jenin82/sngist/blob/main/src/assets/s8%20seniors/aadhib.jpg?raw=true",
        },
        {
            id: 2,
            name: "ABHIJITH K R",
            imageLink:
                "https://github.com/Jenin82/sngist/blob/main/src/assets/s8%20seniors/abijith.jpg?raw=true",
        },
        {
            id: 3,
            name: "AJAY PRABHAKARAN",
            imageLink:
                "https://github.com/Jenin82/sngist/blob/main/src/assets/s8%20seniors/ajayp.jpg?raw=true",
        },
        {
            id: 4,
            name: "AJAY SHAJI VADAKAL",
            imageLink:
                "https://github.com/Jenin82/sngist/blob/main/src/assets/s8%20seniors/ajay.jpg?raw=true",
        },
        {
            id: 5,
            name: "AKARSHA VINODAN",
            imageLink:
                "https://github.com/Jenin82/sngist/blob/main/src/assets/s8%20seniors/akarsha.jpg?raw=true",
        },
        {
            id: 6,
            name: "ANUGRAH P S",
            imageLink:
                "https://github.com/Jenin82/sngist/blob/main/src/assets/s8%20seniors/anugrah.jpg?raw=true",
        },
        {
            id: 7,
            name: "ASIF AMAL E S",
            imageLink:
                "https://github.com/Jenin82/sngist/blob/main/src/assets/s8%20seniors/asif.jpg?raw=true",
        },
        {
            id: 8,
            name: "ATHIRA V",
            imageLink:
                "https://github.com/Jenin82/sngist/blob/main/src/assets/s8%20seniors/athira.jpg?raw=true",
        },
        {
            id: 9,
            name: "BEN JOY",
            imageLink:
                "https://github.com/Jenin82/sngist/blob/main/src/assets/s8%20seniors/ben.jpg?raw=true",
        },
        {
            id: 10,
            name: "KRIPA MARIYA THOMAS",
            imageLink:
                "https://github.com/Jenin82/sngist/blob/main/src/assets/s8%20seniors/kripa.jpg?raw=true",
        },
        {
            id: 11,
            name: "K S AKSHAY",
            imageLink:
                "https://github.com/Jenin82/sngist/blob/main/src/assets/s8%20seniors/akshay.jpg?raw=true",
        },
        {
            id: 12,
            name: "M AISHA SURAIYA",
            imageLink:
                "https://github.com/Jenin82/sngist/blob/main/src/assets/s8%20seniors/aisha.jpg?raw=true",
        },
        {
            id: 13,
            name: "NIKHITHA VINU",
            imageLink:
                "https://github.com/Jenin82/sngist/blob/main/src/assets/s8%20seniors/nikitha.jpg?raw=true",
        },
        {
            id: 14,
            name: "SABARINATH S",
            imageLink:
                "https://github.com/Jenin82/sngist/blob/main/src/assets/s8%20seniors/sabarinath.jpg?raw=true",
        },
        {
            id: 15,
            name: "SAMUEL LESTAR",
            imageLink:
                "https://github.com/Jenin82/sngist/blob/main/src/assets/s8%20seniors/samual.jpg?raw=true",
        },
        {
            id: 16,
            name: "SANAL P S",
            imageLink:
                "https://github.com/Jenin82/sngist/blob/main/src/assets/s8%20seniors/sanal.jpg?raw=true",
        },
        {
            id: 17,
            name: "SHAHIN SHAJAHAN",
            imageLink:
                "https://github.com/Jenin82/sngist/blob/main/src/assets/s8%20seniors/shahin.jpg?raw=true",
        },
        {
            id: 18,
            name: "SHILPA P R",
            imageLink:
                "https://github.com/Jenin82/sngist/blob/main/src/assets/s8%20seniors/shilpa.jpg?raw=true",
        },
        {
            id: 19,
            name: "SHONE M P",
            imageLink:
                "https://github.com/Jenin82/sngist/blob/main/src/assets/s8%20seniors/shon.jpg?raw=true",
        },
        {
            id: 20,
            name: "THAMANNA ASHIK",
            imageLink:
                "https://github.com/Jenin82/sngist/blob/main/src/assets/s8%20seniors/thamana.jpg?raw=true",
        },
        {
            id: 21,
            name: "VISHNU VIJAYAN",
            imageLink:
                "https://github.com/Jenin82/sngist/blob/main/src/assets/s8%20seniors/vishnu.jpg?raw=true",
        },
    ];
    return (
		<div>
			<RandomNamePicker data={data}/>
		</div>
	)
};

export default Home;
