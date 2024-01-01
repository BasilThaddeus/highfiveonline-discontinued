import type { Metadata } from "next";
import { Teko } from "next/font/google";
import "./globals.css";

const inter = Teko({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Highfive Online",
	description: "Hate people? Love highfives? Send one online!",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
