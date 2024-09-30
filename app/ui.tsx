"use client";

import { useState } from "react";

import Logo from "components/logo";
import SearchComponent from "components/search-component";
import FileDragDropZone from "components/file-dragdropzone";
import DropoxImageList from "components/dropbox-image-list";

export default function UI() {
	const [searchInput, setSearchInput] = useState("");

	return (
		<main className="w-full p-2 flex flex-col gap-4">
			<Logo />

			<SearchComponent
				searchInput={searchInput}
				setSearchInput={setSearchInput}
			/>

			<FileDragDropZone />

			<DropoxImageList />
		</main>
	);
}
