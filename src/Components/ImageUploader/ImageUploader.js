import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateImage } from "../ProductEdit/ProductEditActions";
import { multerUpload } from "./ImageUploaderActions";

const ImageUploader = () => {
    const [image, setImage] = useState({
        name: '',
        lastModified: '',
        lastModifiedDate: '',
        size: 0,
        type: 'image/png'
    });
    const [previewUrl, setPreviewUrl] = useState("");
    const fileInput = useRef(null);
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.SignIn);
    const [multerImage, setMulterImage] = useState('');


    const uploadImage = (e) => {
        console.log('inside upload image')
        const files = document.getElementById("files");
        const formData = new FormData();
        setMulterImage(URL.createObjectURL(e.target.files[0]));

        for(let i = 0; i < files.files.length; i++) {
            formData.append("files", files.files[i]);
        }

        dispatch(multerUpload(formData, user)); 
    }
    

    const handleFile = (file) => {
        //you can carry out any file validations here...
        console.log('1: file: ', file)
        
        setImage(file);
        setPreviewUrl(URL.createObjectURL(file));
        dispatch(updateImage(file, user))
    }
    useEffect(() => {
        console.log('image: ', image)

    }, [image])

    const handleOndragOver = e => {
        e.preventDefault();
    }

    const handleOndrop = e => {
        //prevent the browser from opening the image
        e.preventDefault();
        e.stopPropagation();


        console.log('e.target.files[0]: ',e.target)
        const formData = new FormData();

        axios.post('/api/uploads', formData) 
        .then((res) => console.log('res: ',res.data))
        .catch(( error ) => console.log(error))




        //let's grab the image file
        let imageFile = e.dataTransfer.files[0];
        console.log('imageFile', imageFile)
        handleFile(imageFile);
    }

    return (
        <div className="wrapper">
            <div className='input-block'>
                <label htmlFor="image">Image</label>
                <input
                    type="file"
                    name = 'file'
                    accept='image/*'
                    ref={fileInput}
                    multiple
                    onChange={e => handleFile(e.target.files[0])} />
            </div>



            <div className = 'imageContainer'>
                <div className = 'process'>
                    <input type = 'file' id="files" name='imageData' className = 'process_upload-btn' onChange = {(e) => uploadImage(e, 'multer')} multiple/>
                    <img src = {multerImage} alt = 'upload-image' className = 'process_image' />
                </div>
            </div>



            <div
                className="drop_zone"
                onDragOver={handleOndragOver}
                onDrop={handleOndrop}
                onClick={() => fileInput.current.click()}
            >
                <p>Click to select or Drag and drop image here....</p>
                <input
                    type="file"
                    name = 'file'
                    accept='image/*'
                    multiple
                    ref={fileInput} hidden
                    onChange={e => handleFile(e.target.files[0])}
                />
            </div>
            { previewUrl && <div className="image">
                <img src={previewUrl} alt = 'does not exist' />
                <span> {image.name} </span>
            </div>}
        </div>
    )
}
export default ImageUploader;