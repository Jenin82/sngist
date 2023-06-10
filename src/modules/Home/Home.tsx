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
            name: "Alan K Anil",
            imageLink:
                "https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg",
        },
        {
            id: 2,
            name: "Name2",
            imageLink:
                "https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg",
        },
        {
            id: 3,
            name: "Name3",
            imageLink:
                "https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg",
        },
        {
            id: 4,
            name: "Name4",
            imageLink:
                "https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg",
        },
    ];
    return (
		<div>
			<RandomNamePicker data={data}/>
		</div>
	)
};

export default Home;
