"use server";

import { createServerSupabaseClient } from "utils/supabase/server";

function handleError(error) {
	if (error) {
		console.error(error);
		throw error;
	}
}

export async function uploadFile(formData: FormData) {
	const supabase = await createServerSupabaseClient();
	const file = formData.get("file") as File;

	const { data, error } = await supabase.storage
		.from(process.env.NEXT_PUBLIC_STORAGE_BUCKET)
		.upload(file.name, file, { upsert: true }); // upsert: true 존재하면 upload, 없으면 insert

	if (error) handleError(error);

	return data;
}

export async function searchFiles(search: string = "") {
	const supabase = await createServerSupabaseClient();

	const { data, error } = await supabase.storage
		.from(process.env.NEXT_PUBLIC_STORAGE_BUCKET)
		.list(null, { search });

	if (error) handleError(error);

	return data;
}
