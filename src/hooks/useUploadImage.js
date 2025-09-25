// hooks/useUploadImage.js
import { useState } from "react";

export default function useUploadImage() {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState(null);

  const uploadImage = async (file) => {
    if (!file) {
      setError("No file provided");
      throw new Error("No file provided");
    }

    setIsUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "uploadImage"); // نفس preset اللي ضيفاه في Cloudinary

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dkkuddfuv/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Cloudinary error:", errorText);
        throw new Error("Failed to upload image");
      }

      const data = await res.json();
      console.log("✅ Uploaded image URL:", data.secure_url);
      return data.secure_url;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsUploading(false);
    }
  };

  return { uploadImage, isUploading, error };
}
