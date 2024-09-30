"use client";

import DropboxImage from "./dropbox-image";

export default function DropoxImageList() {
	return (
		<section className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2">
			<DropboxImage />
			<DropboxImage />
			<DropboxImage />
			<DropboxImage />
		</section>
	);
}
