import React, { useRef, useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import "./ImageCrop.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../../../state/slices/user";
import {
  getApplicationState,
  createFlushMessage,
} from "../../../state/slices/Application";
import classNames from "classnames";
import FileUploader from "../../button/fileUploader";

/**
 * This component receives image src and jsx className attribute  as props
 * @param {string} Profile - image src
 * @param {string} className - jsx className attribute
 */
const ImageCrop = ({ Profile, className }) => {
  let fileUrl, file;
  const dispatch = useDispatch();
  const { application } = useSelector(getApplicationState);
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
  /**
   * reads uploaded image from file input
   * @param {Event} e - jsx event
   */
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
  /**
   * sets current selected region in the image
   */
  const onCropChange = (crop) => {
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
    const id = application.userID;
    formData.append("id", id);
    let request = new XMLHttpRequest();
    request.open("PUT", "http://192.168.43.154:3001/auth/profile");
    request.send(formData);
    request.onload = (res) => {
      dispatch(
        fetchUserProfile({
          id,
        })
      );
      dispatch(
        createFlushMessage({
          className: "alert-success",
          message: "Your profile has been updated",
        })
      );
    };
    request.onerror = () => {
      dispatch(
        createFlushMessage({
          className: "alert-danger",
          message: "An error occured",
        })
      );
    };
    document.querySelector(".image-crop").classList.add("d-none");
  };

  const cropBtnClasses = classNames(
    "btn btn-info rounded crop-btn",
    state.isCroping ? "visible" : "invisible"
  );
  const saveBtnClasses = classNames(
    "btn btn-primary my-0 px-4 my-2",
    state.cropDone ? "visible" : "invisible"
  );
  const cropClasses = classNames(className, "image-crop");
  const cropRef = useRef();
  return (
    <div className={cropClasses} ref={cropRef}>
      <div className="card pt-3">
        <div className="controls d-flex justify-content-between mx-2">
          <button
            className="btn btn-secondary my-0 px-4 my-2"
            onClick={() => cropRef.current.classList.add("d-none")}
          >
            Cancel
          </button>
          <button
            className={cropBtnClasses}
            onClick={makeClientCrop}
            title="crop image"
          >
            <i className="material-icons">crop</i>
            <small className="d-block">crop</small>
          </button>
          <button
            className={saveBtnClasses}
            onClick={async () => {
              await sendImage(state.file, state.fileName);
            }}
          >
            save
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

          <FileUploader
            id="input-file"
            type="file"
            accept="image/*"
            onChange={onSelectFile}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageCrop;
