"use client";
import { useState } from "react";
import { CldImage, CldUploadWidget } from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");

  return (
    <>
      {publicId && (
        <CldImage src={publicId} height={270} width={850} alt="upload image" />
      )}
      <CldUploadWidget
        uploadPreset="w59revr7"
        onUpload={(result, widget) => {
          if (result.event !== "success") {
            console.log("not success");
            return;
          }

          const info = result.info as CloudinaryResult;

          setPublicId(info.public_id);
        }}
      >
        {({ open }) => {
          return (
            <button className="btn btn-primary" onClick={() => open()}>
              Upload an Image
            </button>
          );
        }}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
