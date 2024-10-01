"use client";

import { IconButton, Spinner } from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import { deleteFile } from "actions/storage-actions";
import { queryClient } from "config/ReactQueryClientProvider";
import { getImageUrl } from "utils/supabase/storage";

export default function DropboxImage({ image }) {
  const deleteFileMutation = useMutation({
    mutationFn: deleteFile,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["images"],
      });
    },
  });

  return (
    <div className="relative w-full flex flex-col p-4 gap-2 border border-gray-100 rounded-2xl shadow-md">
      <div>
        <img
          src={getImageUrl(image.name)}
          className="w-full aspect-square rounded-md"
        />
      </div>

      <div>{image.name}</div>

      <div className="absolute top-4 right-4">
        <IconButton
          color="red"
          onClick={() => deleteFileMutation.mutate(image.name)}
        >
          {deleteFileMutation.isPending ? (
            <Spinner />
          ) : (
            <i className="fas fa-trash" />
          )}
        </IconButton>
      </div>
    </div>
  );
}
