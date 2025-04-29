import React, { useRef, useState } from "react";
import { Cropper } from "react-cropper";
import "cropperjs/dist/cropper.css";

// ✅ ฟังก์ชันเพิ่มขอบรอบรูป
const addPaddingToImage = (imageUrl, padding = 100) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width + padding * 2;
      canvas.height = img.height + padding * 2;
      const ctx = canvas.getContext("2d");

      // เติมพื้นหลังขาว
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // วางรูปไว้ตรงกลาง
      ctx.drawImage(img, padding, padding);
      const paddedDataURL = canvas.toDataURL();
      resolve(paddedDataURL);
    };
    img.src = imageUrl;
  });
};

const ImageCropper = () => {
  const cropperRef = useRef(null);
  const [image, setImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const onImageChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const reader = new FileReader();
      reader.onload = async () => {
        const paddedImage = await addPaddingToImage(reader.result, 200); 
        setImage(paddedImage);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const cropImage = () => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      const cropped = cropper.getCroppedCanvas({
        width: 300,
        height: 300,
        fillColor: "#fff", 
      }).toDataURL();
      setCroppedImage(cropped);
    }
  };

  return (
    <div className="p-4 space-y-4">
      <input type="file" accept="image/*" onChange={onImageChange} />

      {image && (
        <Cropper
          src={image}
          style={{ height: 400, width: "100%" }}
          aspectRatio={1}
          guides={true}
          ref={cropperRef}
          viewMode={0} 
          dragMode="move"
          autoCropArea={1}
          background={false}
          responsive={true}
        />
      )}

      <button
        onClick={cropImage}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        ตัดรูป
      </button>

      {croppedImage && (
        <div>
          <h2 className="text-lg font-semibold">รูปที่ถูกตัดแล้ว:</h2>
          <img src={croppedImage} alt="Cropped" className="border mt-2" />
        </div>
      )}
    </div>
  );
};

export default ImageCropper;
