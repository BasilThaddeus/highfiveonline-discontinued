import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default function Lobby() {
	const createLobby = async (formData: FormData) => {
		"use server";

		const userName = formData.get("name");

		const lobby = await prisma.lobby.create({
			data: {
				author: userName as string,
			},
		});
	};

	const joinLobby = async (formData: FormData) => {
		"use server";

		const joinUser = formData.get("joinUser");
		const joinUserName = formData.get("joinName");

		const joinLobby = await prisma.lobby.findFirst({
			where: {
				author: joinUser as string,
			},
		});

		if (joinLobby) {
			console.log("Found lobby!");
			prisma.lobby.update({
				where: {
					id: joinLobby.id,
				},
				data: {
					user: joinUserName as string,
				},
			});
			console.log(joinLobby);
		} else {
			console.log("Nothing...");
		}
	};

	return (
		<>
			<div className="rounded-md h-2/3 text-2xl">
				<div className="p-4 bg-zinc-800">
					<p className="text-center mb-4">Create a Lobby</p>
					<form action={createLobby} className="">
						<input
							type="text"
							name="name"
							id="name"
							className="text-black p-2 text-center rounded-md w-full"
							placeholder="Your Name..."
						/>
						<button
							type="submit"
							className="p-2 bg-teal-500 rounded-md border-zinc-500 border-2 mt-4 w-full"
						>
							Create
						</button>
					</form>
				</div>
				<div className="p-4 bg-zinc-700">
					<p>Join a Lobby</p>
					<form action={joinLobby} className="">
						<input
							type="text"
							name="joinName"
							id="joinName"
							className="text-black p-2 text-center rounded-md w-full"
							placeholder="Your Name..."
						/>
						<input
							type="text"
							name="joinUser"
							id="joinUser"
							className="text-black p-2 text-center rounded-md w-full"
							placeholder="Friends Name..."
						/>
						<button
							type="submit"
							className="p-2 bg-teal-500 rounded-md border-zinc-500 border-2 mt-4 w-full"
						>
							Join
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
