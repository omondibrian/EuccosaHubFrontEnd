import React, { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import "./ImageCrop.css";

const ImageCrop = ({ Profile }) => {
  let fileUrl, imageRef;
  const [state, setState] = useState({
    cropSrc: null,
    crop: {
      unit: "px",
      x: 0,
      y: 0,
      width: 200,
      height: 200,
      aspect: 1 / 1,
    },
    isCroping: false,
    croppedImageUrl: null,
    cropDone: false,
  });
  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setState({ ...state, cropSrc: reader.result, isCroping: true });
        e.target.value = "";
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const onCropChange = (crop, percentCrop) => {
    // You could also use percentCrop:
    // setState({ crop: percentCrop });
    if (crop.height < 200) {
      crop.height = 200;
      crop.width = 200;
    }
    setState({ ...state, crop: crop });
  };

  const getCroppedImg = (image, crop, fileName) => {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error("Canvas is empty");
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(fileUrl);
        fileUrl = window.URL.createObjectURL(blob);
        resolve(fileUrl);
      }, "image/jpeg");
    });
  };
  const makeClientCrop = async (crop) => {
    if (imageRef && crop.width && crop.height) {
      const croppedImageUrl = await getCroppedImg(
        imageRef,
        crop,
        "newFile.jpeg"
      );
      setState({ ...state, croppedImageUrl: croppedImageUrl });
    }
  };
  const onImageLoaded = (image) => {
    imageRef = image;
  };

  const onCropComplete = (crop) => {
    makeClientCrop(crop);
  };

  const cropDone = () => {
    setTimeout(() => {
      setState({ ...state, isCroping: false, cropDone: true });
    }, 300);
  };
  return (
    <div className="image-crop d-none">
      <div className="card pt-3">
        <div className="controls d-flex justify-content-between mx-2">
          <button
            className="btn btn-secondary my-0 px-4 my-2"
            onClick={() =>
              document.querySelector(".image-crop").classList.add("d-none")
            }
          >
            Cancel
          </button>
          <button
            className="btn crop-btn rounded"
            onClick={cropDone}
            title="crop image"
          >
            <i className="material-icons">crop</i>
          </button>
          <button
            className="btn btn-primary my-0 px-4 my-2"
            onClick={() => setState({ ...state, isCroping: false })}
            style={
              !state.cropDone
                ? { visibility: "hidden" }
                : { visibility: "visible" }
            }
          >
            Done
          </button>
        </div>

        <div className="card crop-container">
          {state.isCroping && (
            <ReactCrop
              src={state.cropSrc}
              crop={state.crop}
              ruleOfThirds
              onImageLoaded={onImageLoaded}
              onComplete={onCropComplete}
              onChange={onCropChange}
            />
          )}
        </div>

        <img
          src={state.croppedImageUrl ? state.croppedImageUrl : Profile}
          className={!state.isCroping ? "profile mx-auto " : "d-none"}
          alt="profile"
        />
        <div className="card-body mt-4 py-1">
          <div className="file file--upload">
            <label htmlFor="input-file">
              <i className="material-icons">cloud_upload</i>Upload Image
            </label>
            <input
              id="input-file"
              type="file"
              accept="image/*"
              onChange={onSelectFile}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCrop;
