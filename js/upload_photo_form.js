import {IsEscape, UploadPhotoButton, UploadPhotoForm, Body, CloseModalUploadPhotoButton, photoDescription} from './data.js';
import {ScaleControlValueReset} from './scale_photo.js';
import{setDefaultEffect} from './photo_effects.js';
import {uploadPhoto} from './avatar.js';

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
    photoDescription.value = '';
    UploadPhotoButton.value = '';
    setDefaultEffect();
    document.removeEventListener('keydown', onPopupEscKeydown);
}


// const photoPreview = document.querySelector('.img-upload__preview img');
// const fileChooser = document.querySelector('.img-upload__input');

// const handleFileInputChange = () => {
//     const file = fileChooser.files[0]; // Получение выбранного файла
//     const reader = new FileReader();
  
//     // Функция, которая будет выполнена при успешном чтении файла
//     reader.onload = () => {
//       // Установка атрибута src превью-изображения на data URL выбранного файла
//       photoPreview.src = reader.result;
//     };
  
//     if (file) {
//       // Чтение выбранного файла как data URL
//       reader.readAsDataURL(file);
//     }
//   };

var UploadPhotoButtonEditor = () => {
    UploadPhotoButton.addEventListener('change', function() {
        
        UploadPhotoEditor();
        uploadPhoto();
    })
}

var ClosePhotoButtonEditor = () => {
    CloseModalUploadPhotoButton.addEventListener('click', function(evt) {
        evt.preventDefault();
        ClosePhotoEditor();
    })
}

export {UploadPhotoButtonEditor, ClosePhotoButtonEditor, onPopupEscKeydown};
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




