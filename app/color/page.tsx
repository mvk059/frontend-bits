"use client";

import {colorCodes, getBestContrastTextColor} from "@/constants/color";
import {IoCopyOutline} from "react-icons/io5";

const ColorGenerator = () => {

	function getRandomColor(): string {
		let color = "#"
		for (let i = 0; i < 6; i++) {
			const randomColor = Math.floor(Math.random() * colorCodes.length);
			color += colorCodes[randomColor];
		}
		return color;
	}

	const color = getRandomColor();
	const textColor = getBestContrastTextColor(color);

	return (
		<main className="w-screen h-screen flex justify-center items-center flex-col gap-4"
		      style={{backgroundColor: color, color: textColor}}>

			<div className="text-2xl font-semibold">
				HEX
			</div>

			<div className="text-4xl font-bold tracking-wide">
				{color}
			</div>

			<div className="p-2">
				<IoCopyOutline/>
			</div>

		</main>
	)
}

export default ColorGenerator
