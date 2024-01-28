import {IsEscape, UploadPhotoButton, UploadPhotoForm, Body, CloseModalUploadPhotoButton} from './data.js';
import {ScaleControlValueReset} from './scale_photo.js';
import{setDefaultEffect} from './photo_effects.js';

const onPopupEscKeydown = (evt) => {
    if (IsEscape(evt)) {
    evt.preventDefault();
    ClosePhotoEditor();
    }
}

var UploadPhotoEditor = () => {
    UploadPhotoForm.classList.remove('hidden');
    Body.classList.add('modal-open');
    document.addEventListener('keydown', onPopupEscKeydown);
} 

var ClosePhotoEditor = () => {
    UploadPhotoForm.classList.add('hidden');
    Body.classList.remove('modal-open');
    // UploadPhotoButton = '';
    ScaleControlValueReset();
    document.removeEventListener('keydown', onPopupEscKeydown);
}

var UploadPhotoButtonEditor = () => {
    UploadPhotoButton.addEventListener('change', function() {
        UploadPhotoEditor()
    })
}

var ClosePhotoButtonEditor = () => {
    CloseModalUploadPhotoButton.addEventListener('click', function(evt) {
        evt.preventDefault();
        ClosePhotoEditor();
        setDefaultEffect();
    })
}

export {UploadPhotoButtonEditor, ClosePhotoButtonEditor};
// ВАРИАНТ ЗАГРУЗКИ ФОТО ВНУТРИ ЛИСТНЕРА (ТАК КАК В ПРИМЕРАХ СДЕЛАНО ИНАЧЕ, ПЕРЕДЕЛАЛА БЕЗ ВЛОЖЕННОСТИ)
// function UploadPhotoPopup () {
// UploadPhotoButton.addEventListener('click', function() {
//     UploadPhoto.addEventListener('input', function() {
//         UploadPhotoForm.classList.remove('hidden');
//         Body.classList.add('modal-open');

//         document.addEventListener('keydown', onPopupEscKeydown);
//        })
//     })
   
//     CloseModalUploadPhotoButton.addEventListener('click', function() {
//         UploadPhotoForm.classList.add('hidden');
//         Body.classList.remove('modal-open');

//         document.removeEventListener('keydown', onPopupEscKeydown);
//     })    


// }




