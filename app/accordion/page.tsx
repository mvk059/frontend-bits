import Image from "next/image";
import AccordionItems from "@/app/accordion/AccordionItems";

const Accordian = () => {

	return (
		<main className="relative flex flex-col min-h-screen">
			{/* Top Section */}
			<section className="h-[30vh] w-full relative">

				{/*Desktop Image*/}
				<div className="hidden md:block h-full w-full">
					<Image
						src="accordion/background-pattern-desktop.svg"
						alt="Background pattern"
						className="object-cover"
						fill
						priority
					/>
				</div>

				{/*	Mobile Image*/}
				<div className="block md:hidden h-full w-full">
					<Image
						src="accordion/background-pattern-mobile.svg"
						alt="Background pattern"
						className="object-cover"
						fill
						priority/>
				</div>
			</section>

			{/* Bottom Section */}
			<section className="max-h-screen w-full relative bg-[#f9edff]"/>

			{/*	Card */}
			<div className="absolute left-0 right-0 top-[20vh] mb-2">
				<div className="mx-4 md:mx-32 lg:mx-64 bg-white shadow-lg rounded-2xl p-6">
					<div className="flex flex-row items-center justify-start gap-6">
						<Image
							src="accordion/icon-star.svg"
							alt="Icon star"
							width={56}
							height={56}
						/>
						<h2
							className="[font-size:clamp(2rem,2.5vw,4rem)] font-bold font-[family-name:var(--font-work-sans)]">FAQs</h2>
					</div>
					<div>
						<AccordionItems />
					</div>
				</div>
			</div>
		</main>
	)
}
export default Accordian
