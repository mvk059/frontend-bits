"use client";

import {useState} from "react";
import {FAQ} from "@/constants/accordion";
import Image from "next/image";

const AccordionItems = () => {
	const [faqs, setFAQs] = useState<Accordion[]>(FAQ);

	function handleClick(id: number) {
		setFAQs(prevFaqs => prevFaqs.map(item => {
			return item.id == id ? {...item, isOpen: !item.isOpen} : item
		}))
	}

	return (
		<>
			{
				faqs.map((faq, index) => {
					const icon = faq.isOpen ? "accordion/icon-minus.svg" : "accordion/icon-plus.svg"
					const isLastItem = index === faqs.length - 1

					return (
						<div
							key={faq.id}
							className={`py-4 ${!isLastItem ? "border-b border-gray-100" : ""}`}>

							<div className="flex flex-row justify-between items-center cursor-pointer"
							     onClick={() => handleClick(faq.id)}
							     aria-expanded={faq.isOpen} >

								<p
									className="text-lg font-bold font-[family-name:var(--font-work-sans)] text-gray-800  hover:text-[#AD28EB]">
									{faq.title}
								</p>

								<Image
									src={icon}
									alt="Expand/Collapse Icon"
									width={24}
									height={24}
									role="img"
									aria-hidden="true" />
							</div>

							<div
								className={`transition-all duration-300 ease-in-out overflow-hidden ${faq.isOpen ? "max-h-screen mt-4" : "max-h-0"}`}>
								<p className="text-gray-500 font-[family-name:var(--font-work-sans)]">
									{faq.content}
								</p>
							</div>
						</div>
					)
				})
			}
		</>
	)
}
export default AccordionItems
