import {UploadPhotoButton} from './data.js';

// const photoPreview = document.querySelector('.img-upload__preview img');

const FILE_TYPE = ['jpg', 'jpeg', 'png'];

const  uploadPhoto = () => {
    console.log('1');
    const file = UploadPhotoButton.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPE.some((it) => fileName.endsWith(it));
    if (matches) {
        console.log('2');
        const fileURL = window.URL.createObjectURL(file);
         const imgPreview = document.querySelector('.img-upload__preview img');
         console.log('sjsj', imgPreview )
        if (imgPreview) { // Проверяем наличие элемента
            imgPreview.src = fileURL;
        } else {
            console.error("Элемент .img-upload__preview img не найден на странице.");
        }
        // document.querySelector('.img-upload__preview img').src = fileURL;
        // fileURL = photoPreview.src;
    }
    // console.log(fileURL)

}


export {uploadPhoto}