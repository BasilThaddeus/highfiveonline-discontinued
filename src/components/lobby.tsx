import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
const prisma = new PrismaClient();

const baseLink = process.env.BASELINK;

export default function Lobby() {
	const createLobby = async (formData: FormData) => {
		"use server";

		const userName = formData.get("name");

		const lobby = await prisma.lobby.create({
			data: {
				author: userName as string,
			},
		});

		redirect(`${baseLink}/lobby/${lobby.id as string}`);
	};

	const joinLobby = async (formData: FormData) => {
		"use server";

		const joinUser = formData.get("joinUser");
		const joinUserName = formData.get("joinName");

		const joinedLobby = await prisma.lobby.findFirst({
			where: {
				author: joinUser as string,
			},
		});

		if (joinedLobby) {
			console.log(`[LOBBY]: Found user with name "${joinUser as string}"`);
			const updatedLobby = await prisma.lobby.update({
				where: {
					id: joinedLobby.id,
				},
				data: {
					user: joinUserName as string,
				},
			});
			redirect(`${baseLink}/join/${joinedLobby.id as string}`);
		} else {
			console.log(
				`[LOBBY ERR]: No users with name "${joinUser as string} found."`
			);
		}
	};

	return (
		<>
			<div className="rounded-md h-2/3 text-2xl">
				<div className="p-4 bg-zinc-800">
					<p className="text-center my-2 text-3xl">Create a Lobby</p>
					<form action={createLobby} className="">
						<input
							type="text"
							name="name"
							id="name"
							className="text-black p-2 text-center rounded-md w-full my-2"
							placeholder="Your Name..."
						/>
						<button
							type="submit"
							className="p-2 bg-teal-500 rounded-md border-zinc-500 border-2 my-2 w-full"
						>
							Create
						</button>
					</form>
				</div>
				<div className="p-4 bg-zinc-700">
					<p className="text-center my-2 text-3xl">Join a Lobby</p>
					<form action={joinLobby} className="">
						<input
							type="text"
							name="joinName"
							id="joinName"
							className="text-black p-2 text-center rounded-md w-full my-2"
							placeholder="Your Name..."
						/>
						<input
							type="text"
							name="joinUser"
							id="joinUser"
							className="text-black p-2 text-center rounded-md w-full my-2"
							placeholder="Friends Name..."
						/>
						<button
							type="submit"
							className="p-2 bg-teal-500 rounded-md border-zinc-500 border-2 my-2 w-full"
						>
							Join
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
