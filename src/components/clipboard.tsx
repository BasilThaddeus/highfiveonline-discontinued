"use client";

export default function Clipboard({
	text,
	children,
}: {
	text: string;
	children: any;
}) {
	return (
		<a
			onClick={() => {
				navigator.clipboard.writeText(text);
			}}
			className="hover:cursor-pointer"
		>
			{children}
		</a>
	);
}
