export default function Paragraph({
	children,
	center = false,
	title = "",
	desc = "",
}: {
	children: any;
	center?: boolean;
	title?: string;
	desc?: string;
}) {
	return (
		<>
			<div className={center ? "p-2 text-center block" : "p-2"}>
				<p className="text-teal-500 text-4xl font-semibold">{title}</p>
				<p className="text-teal-800 text-3xl">{desc}</p>
				<p className="text-2xl font-light">{children}</p>
			</div>
		</>
	);
}
