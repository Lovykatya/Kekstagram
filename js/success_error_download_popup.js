import {IsEscape, UploadPhotoForm, Submit, TemplateSuccessMessage, TemplateErrorMessage} from './data.js';
import {onPopupEscKeydown} from './upload_photo_form.js';

const blockSubmitButton = () => {
    Submit.disabled = true;
    Submit.textContent = 'Сохраняю..';
}

const UnBlockSubmitButton = () => {
  Submit.disabled = false;
  Submit.textContent = 'Опубликовать';
}

const CloseSuccessMessage = () => {
    document.querySelector('.success').remove();
    document.removeEventListener('keydown', onSuccessPopUpEscKeydown);
    document.addEventListener('keydown', onPopupEscKeydown);
};

const onSuccessPopUpEscKeydown = (evt) => {
    if (IsEscape(evt)) {
        evt.preventDefault();
        CloseSuccessMessage();
        document.addEventListener('keydown', onPopupEscKeydown);
    }
}

const showSuccessPopUp = () => {
    UploadPhotoForm.classList.add('hidden');
    const successMessage = TemplateSuccessMessage.cloneNode(true);
    document.body.appendChild(successMessage);
    document.removeEventListener('keydown', onPopupEscKeydown);
    document.addEventListener('keydown', onSuccessPopUpEscKeydown);
    document.querySelector('.error__button').addEventListener('click', CloseSuccessMessage);
    document.addEventListener('click', CloseSuccessMessage)
}

const CloseErrorMessage = () => {
    document.querySelector('.error').remove();
    UploadPhotoForm.classList.remove('hidden');
    document.removeEventListener('keydown', onErrorPopUpEscKeydown);
    document.addEventListener('keydown', onPopupEscKeydown);
};

const onErrorPopUpEscKeydown = (evt) => {
    if (IsEscape(evt)) {
        evt.preventDefault();
        CloseErrorMessage();
    }
}

const showErrorPopUp = () => {
    UploadPhotoForm.classList.add('hidden');
    const ErrorMessage = TemplateErrorMessage.cloneNode(true);
    document.body.appendChild(ErrorMessage);
    document.removeEventListener('keydown', onPopupEscKeydown);
    document.addEventListener('keydown', onErrorPopUpEscKeydown);
    document.querySelector('.error__button').addEventListener('click', CloseErrorMessage);
    document.addEventListener('click', CloseErrorMessage)
}

export {blockSubmitButton, UnBlockSubmitButton, showSuccessPopUp, showErrorPopUp};

