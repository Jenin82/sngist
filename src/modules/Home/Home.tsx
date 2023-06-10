import RandomNamePicker from "../RandomNamePicker/RandomNamePicker";

interface NameData {
    id: number;
    name: string;
    imageLink: string;
}

const Home = () => {
	const data: NameData[]  = [
        { id: 1, name: "Name", imageLink: 'true' },
        { id: 2, name: "Name2", imageLink: 'true' },
        { id: 3, name: "Name3", imageLink: 'true' },
        { id: 4, name: "Name4", imageLink: 'true' },
    ];
    return (
		<div>
			<RandomNamePicker data={data}/>
		</div>
	)
};

export default Home;
