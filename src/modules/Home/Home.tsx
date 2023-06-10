import { Link } from "react-router-dom";

const Home = () => {
    return (
		<div>
			Hello World
			<Link to={"/test"}></Link>
		</div>
	)
};

export default Home;
