import { PostData } from './api.js';
import {ModalErrorMessage, ImgUploadForm, UploadPhotoForm, Submit, TemplateSuccessMessage, CloseSuccessMessageButton, TemplateErrorMessage, CloseErrorMessageButton} from './data.js';


const pristine = new Pristine(UploadPhotoForm, {
    classTo: 'img-upload__text',
    errorTextParent: 'img-upload__text',
    errorTextClass: 'text__description',
}
);

// const showErrorPopUp = () => {
    
//     const errorPopUpTemplate = document.querySelector('#error').content.querySelector('.error');
//     const errorPopUp = errorPopUpTemplate.cloneNode(true);
//     document.body.appendChild(errorPopUp);
   
//   };

// const showSuccessPopUp = () => {
//     const SuccessMessage = TemplateSuccessMessage.cloneNode(true);
//     document.body.appendchild(SuccessMessage);
//     CloseSuccessMessageButton.addEventListener('click', function(evt){
//         evt.preventDefault();
//         SuccessMessage.remove();
//     })
// }
const CloseErrorMessage = () => {
    ModalErrorMessage.remove();
    UploadPhotoForm.classList.remove('hidden');
};

const showErrorPopUp = () => {
    UploadPhotoForm.classList.add('hidden');
    const ErrorMessage = TemplateErrorMessage.cloneNode(true);
    document.body.appendChild(ErrorMessage);
    CloseErrorMessageButton.addEventListener('click', CloseErrorMessage);
}

const blockSubmitButton = () => {
    Submit.addEventListener('click', function(){
    Submit.disabled = true;
    Submit.textContent = 'Сохраняю..';
    })
}

const UnBlockSubmitButton = () => {
  Submit.disabled = false;
}

// const isValid = () => {
//     ImgUploadForm.addEventListener('submit', (evt) => {
//         evt.preventDefault();
//         const formData = new FormData(evt.target);
//         blockSubmitButton();
//         UnBlockSubmitButton();
//         PostData(showSuccessPopUp(), showErrorPopUp, formData)
// })}

const isValid = (onSuccess) => {
    ImgUploadForm.addEventListener('submit', (evt) => {
        evt.preventDefault();
        const formData = new FormData(evt.target);
        const isValidChek = pristine.validate();
        console.log("блок?>");
        blockSubmitButton();
        console.log("блок");
        if (isValidChek) {
            PostData(
                () => {
                    console.log("success");
                    onSuccess();
                    showSuccessPopUp();
                    UnBlockSubmitButton();
                },
                () => {
                    console.log("error");
                    showErrorPopUp();
                    UnBlockSubmitButton();
                },
                formData
               
            )
            
        }
    })
};

export {isValid};

