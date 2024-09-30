"use client";

import Image from "next/image";

export default function Logo() {
	return (
		<div className="flex items-center gap-2">
			<Image
				src="/images/dropbox_icon.png"
				alt="minibox logo"
				width={100}
				height={100}
				className="!w-8 !h-auto"
			/>
			<span className="text-xl font-bold">Minibox</span>
		</div>
	);
}
