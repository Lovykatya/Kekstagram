import { PostData } from './api.js';
import {ImgUploadForm, UploadPhotoForm} from './data.js';
import {blockSubmitButton, UnBlockSubmitButton, showSuccessPopUp, showErrorPopUp} from './success_error_download_popup.js';

const pristine = new Pristine(UploadPhotoForm, {
    classTo: 'img-upload__text',
    errorTextParent: 'img-upload__text',
    errorTextClass: 'text__description',
});

const isValid = (onSuccess) => {
    ImgUploadForm.addEventListener('submit', (evt) => {
        evt.preventDefault();
        const formData = new FormData(evt.target);
        const isValidChek = pristine.validate();
        blockSubmitButton();
        if (isValidChek) {
            PostData(
                () => {
                    onSuccess();
                    showSuccessPopUp();
                    UnBlockSubmitButton();
                },
                () => {
                    showErrorPopUp();
                    UnBlockSubmitButton();
                },
                formData
               
            )
            
        }
    })
};

export {isValid};

