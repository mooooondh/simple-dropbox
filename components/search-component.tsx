"use client";

import { Input } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { searchFiles } from "actions/storage-actions";

export default function SearchComponent({ searchInput, setSearchInput }) {
	const searchImageQuery = useQuery({
		queryKey: ["images", searchInput],
		queryFn: () => searchFiles(searchInput),
	});

	return (
		<Input
			label={"Search your image"}
			placeholder={"Search your image"}
			icon={
				<i
					className="fas fa-search"
					onClick={() => searchImageQuery.refetch()}
				/>
			}
			value={searchInput}
			onChange={(e) => setSearchInput(e.target.value)}
		/>
	);
}
