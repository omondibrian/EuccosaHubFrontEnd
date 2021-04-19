import React, { useRef, useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import "./ImageCrop.css";
import { useDispatch } from "react-redux";
import { fetchUserProfile } from "../../../state/slices/user";

const ImageCrop = ({ Profile }) => {
  let fileUrl, file;
  const dispatch = useDispatch();
  const [state, setState] = useState({
    cropSrc: null,
    crop: {
      unit: "px",
      x: 0,
      y: 0,
      width: 300,
      height: 300,
      aspect: 1 / 1,
    },
    isCroping: false,
    croppedImageUrl: null,
    cropDone: false,
    file: null,
    fileName: null,
    imageRef: null,
  });
  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      let fName = e.target.files[0].name.split(".")[0];
      reader.addEventListener("load", () => {
        setState({
          ...state,
          cropSrc: reader.result,
          isCroping: true,
          fileName: fName,
        });
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
    if (crop.y > 200) {
      crop.y = 200;
    }
    setState({ ...state, crop: crop });
  };

  const getCroppedImg = (image, fileName) => {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = state.crop.width;
    canvas.height = state.crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      state.crop.x * scaleX,
      state.crop.y * scaleY,
      state.crop.width * scaleX,
      state.crop.height * scaleY,
      0,
      0,
      state.crop.width,
      state.crop.height
    );
    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          console.error("Canvas is empty");
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(fileUrl);
        fileUrl = window.URL.createObjectURL(blob);
        file = blob;
        resolve({ fileUrl, file });
      }, "image/jpeg");
    });
  };
  const makeClientCrop = async () => {
    if (state.imageRef && state.crop.height && state.crop.width) {
      const { fileUrl, file } = await getCroppedImg(
        state.imageRef,
        "profileImg.jpeg"
      );

      setState({
        ...state,
        croppedImageUrl: fileUrl,
        file: file,
        isCroping: false,
        cropDone: true,
      });
    } else {
      setState({
        ...state,
        crop: {
          unit: "px",
          x: 0,
          y: 0,
          width: 200,
          height: 200,
          aspect: 1 / 1,
        },
      });
    }
  };
  const onImageLoaded = (image) => {
    state.imageRef = image;
  };
  const sendImage = async (file, fileName) => {
    const formData = new FormData();
    formData.append("profilePic", file, `${fileName}.jpeg`);
    const id = localStorage.getItem("ID");
    formData.append("id", id);
    let request = new XMLHttpRequest();
    request.open("PUT", "http://192.168.43.154:3001/auth/profile");
    request.send(formData);
    request.onload = (res) => {
      cropRef.classList.add("d-none");
      dispatch(
        fetchUserProfile({
          id,
        })
      );
    };
  };
  const cropRef = useRef();
  return (
    <div className="image-crop d-none" ref={cropRef}>
      <div className="card pt-3">
        <div className="controls d-flex justify-content-between mx-2">
          <button
            className="btn btn-secondary my-0 px-4 my-2"
            onClick={() => cropRef.current.classList.add("d-none")}
          >
            Cancel
          </button>
          <button
            style={
              state.isCroping
                ? { visibility: "visible" }
                : { visibility: "hidden" }
            }
            className="btn crop-btn rounded"
            onClick={makeClientCrop}
            title="crop image"
          >
            <i className="material-icons">crop</i>
          </button>
          <button
            className="btn btn-primary my-0 px-4 my-2"
            onClick={async () => {
              await sendImage(state.file, state.fileName);
            }}
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
              onComplete={() => null}
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
