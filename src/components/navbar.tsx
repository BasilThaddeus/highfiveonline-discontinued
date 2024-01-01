import Link from "next/link";
import { SiGithub } from "react-icons/si";

export default function Navbar() {
	return (
		<div className="w-screen flex flex-row text-4xl justify-between p-4 bg-zinc-800 shadow-sm shadow-zinc-700">
			<Link href="/">
				<span className="font-bold">High Five Online</span>
			</Link>
			<Link href="https://github.com/BasilThaddeus" target="_blank">
				<SiGithub className="" />
			</Link>
		</div>
	);
}
