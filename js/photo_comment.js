import {UploadPhotoForm, Submit} from './data.js';

const pristine = new Pristine(UploadPhotoForm, {
    classTo: 'img-upload__text',
    errorTextParent: 'img-upload__text',
    errorTextClass: 'text__description'
});

let isValid = () => {
    Submit.addEventListener('submit', function (evt) {
        evt.preventDefault();
        const isValidChek = pristine.validate();
    })
};

export {isValid};