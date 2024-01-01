"use client";

import { useState, useEffect } from "react";
import io from "socket.io-client";

export default function Highfive() {
	return (
		<div className="text-center">
			<div className="flex flex-row justify-between mt-24">
				<img src="/left.png" className="" />
				<img src="/right.png" className="" />
			</div>

			<div className="text-4xl" id="countdown"></div>
			<button className="bg-teal-500 p-4 text-3xl rounded-md my-5">
				Ready Up
			</button>
		</div>
	);
}
