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
                "https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg",
        },
        {
            id: 2,
            name: "ABHIJITH K R",
            imageLink:
                "https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg",
        },
        {
            id: 3,
            name: "AJAY PRABHAKARAN",
            imageLink:
                "https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg",
        },
        {
            id: 4,
            name: "AJAY SHAJI VADAKAL",
            imageLink:
                "https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg",
        },
	{
            id: 5,
            name: "AKARSHA VINODAN",
            imageLink:
                "https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg",
        },
	{
            id: 6,
            name: "ANUGRAH P S",
            imageLink:
                "https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg",
        },
	{
            id: 7,
            name: "ASIF AMAL E S",
            imageLink:
                "https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg",
        },
	{
            id: 8,
            name: "ATHIRA V",
            imageLink:
                "https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg",
        },
	{
            id: 9,
            name: "BEN JOY",
            imageLink:
                "https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg",
        },
	{
            id: 10,
            name: "KRIPA MARIYA THOMAS",
            imageLink:
                "https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg",
        },
	{
            id: 11,
            name: "K S AKSHAY",
            imageLink:
                "https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg",
        },
	{
            id: 12,
            name: "M AISHA SURAIYA",
            imageLink:
                "https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg",
        },
	{
            id: 13,
            name: "NIKHITHA VINU",
            imageLink:
                "https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg",
        },
	{
            id: 14,
            name: "SABARINATH S",
            imageLink:
                "https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg",
        },
	{
            id: 15,
            name: "SAMUEL LESTAR",
            imageLink:
                "https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg",
        },
	{
            id: 16,
            name: "SANAL P S",
            imageLink:
                "https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg",
        },
	{
            id: 17,
            name: "SHAHIN SHAJAHAN",
            imageLink:
                "https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg",
        },
	{
            id: 18,
            name: "SHILPA P R",
            imageLink:
                "https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg",
        },
	{
            id: 19,
            name: "SHONE M P",
            imageLink:
                "https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg",
        },
	{
            id: 20,
            name: "THAMANNA ASHIK",
            imageLink:
                "https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg",
        },
	{
            id: 21,
            name: "VISHNU VIJAYAN",
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
