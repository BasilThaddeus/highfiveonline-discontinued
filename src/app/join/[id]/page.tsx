import Navbar from "@/components/navbar";
import Paragraph from "@/components/paragraph";
import Clipboard from "@/components/clipboard";

import { PrismaClient } from "@prisma/client";
import Highfive from "@/components/highfive";
import { redirect } from "next/navigation";
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

	const joinLobby = async (formData: FormData) => {
		"use server";

		const joinName = formData.get("joinName");

		const joinedLobby = await prisma.lobby.update({
			where: {
				id: params.id as string,
			},
			data: {
				user: joinName as string,
			},
		});

		redirect(`${baseLink}/join/${joinedLobby.id as string}`);
	};

	return (
		<>
			<Navbar />
			<Paragraph center={true} title={"Invite a Friend:"}>
				<Clipboard text={link as string}>Copy to Clipboard</Clipboard>
			</Paragraph>
			{joinName ? (
				<Paragraph center={true}>
					Hi, {joinName}.{" "}
					{authorName
						? `You are in a lobby with ${authorName}`
						: `There is nobody in your lobby.`}
				</Paragraph>
			) : (
				<form action={joinLobby} className="">
					<input
						type="text"
						name="joinName"
						id="joinName"
						className="text-black p-2 text-center rounded-md w-full my-2"
						placeholder="Your Name..."
					/>
					<button
						type="submit"
						className="p-2 bg-teal-500 rounded-md border-zinc-500 border-2 my-2 w-full"
					>
						Join
					</button>
				</form>
			)}
			<Highfive />
		</>
	);
}
