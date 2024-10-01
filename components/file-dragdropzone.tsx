"use client";

import { useCallback } from "react";
import { uploadFile } from "actions/storage-actions";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "config/ReactQueryClientProvider";
import { useDropzone } from "react-dropzone";
import { Spinner } from "@material-tailwind/react";

export default function FileDragDropZone() {
  const uploadImageMutation = useMutation({
    mutationFn: uploadFile,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["images"],
      });
    },
  });

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const formData = new FormData();

      acceptedFiles.forEach((file) => {
        formData.append(file.name, file);
      });

      uploadImageMutation.mutate(formData);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
  });

  return (
    <div
      {...getRootProps()}
      className="w-full py-20 border-2 border-dotted border-indigo-700 flex flex-col items-center justify-center"
    >
      <input type="file" className="" {...getInputProps()} />
      {uploadImageMutation.isPending ? (
        <Spinner />
      ) : (
        <>
          {isDragActive ? (
            <p>파일을 놓아주세요</p>
          ) : (
            <p>파일을 여기에 끌어다 놓거나 클릭하여 업로드</p>
          )}
        </>
      )}
    </div>
  );
}
