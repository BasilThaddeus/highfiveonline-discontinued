import Lobby from "@/components/lobby";
import Navbar from "@/components/navbar";
import Paragraph from "@/components/paragraph";

export default function Home() {
	return (
		<>
			<Navbar />
			<Paragraph title={"FAQ"} desc={"What can I do?"} center={true}>
				Have you ever wanted to truly express a high-five online? Do you despise
				social interaction but want to seem like a normal person? Look no
				further than high-fiving online! Not the same, but close enough!
			</Paragraph>
			<Paragraph desc={"How do I start?"} center={true}>
				Just create a lobby, send it to your friend, and once you both ready up,
				a timer will start to get the perfect high-five.
			</Paragraph>
			<Lobby />
		</>
	);
}
