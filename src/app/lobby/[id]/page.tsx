import Navbar from "@/components/navbar";
import Paragraph from "@/components/paragraph";
import Clipboard from "@/components/clipboard";

import { PrismaClient } from "@prisma/client";
import Highfive from "@/components/highfive";
const prisma = new PrismaClient();

const baseLink = process.env.BASELINK;

export default async function CurrentLobby({ params }: { params: any }) {
	const lobby = await prisma.lobby.findFirst({
		where: {
			id: params.id,
		},
	});

	let link = baseLink + "/join/" + (params.id as string);
	let authorName = lobby?.author;
	let joinName = lobby?.user;

	return (
		<>
			<Navbar />
			<Paragraph center={true} title={"Invite a Friend:"}>
				<Clipboard text={link as string}>Copy to Clipboard</Clipboard>
			</Paragraph>
			<Paragraph center={true}>
				Hi, {authorName}.{" "}
				{joinName
					? `You are in a lobby with ${joinName}`
					: `There is nobody in your lobby.`}
			</Paragraph>
			<Highfive />
		</>
	);
}
