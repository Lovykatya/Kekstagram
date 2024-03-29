const otherUseresPhoto = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const Submit = document.querySelector('.img-upload__submit');
const ScaleControlSmaller = document.querySelector('.scale__control--smaller');
const ScaleControlBigger = document.querySelector('.scale__control--bigger');
const ScaleControlValue = document.querySelector('.scale__control--value');
const PhotoUploadPreview = document.querySelector('.img-upload__preview');
const UploadPhotoButton = document.querySelector('#upload-file');
const UploadPhotoForm = document.querySelector('.img-upload__overlay');
const imgUploadInput = document.querySelector('.img-upload__input');
const Body = document.querySelector('body');
const CloseModalUploadPhotoButton = document.querySelector('#upload-cancel');
const ScaleBarForm = document.querySelector('.img-upload__effect-level');
const ScaleBarSlider = UploadPhotoForm.querySelector('.effect-level__slider');
const EffectLevelValue = UploadPhotoForm.querySelector('.effect-level__value');
const ImgUploadForm = document.querySelector('#upload-select-image');
const TemplateSuccessMessage = document.querySelector('#success').content.querySelector('.success');
const TemplateErrorMessage = document.querySelector('#error').content.querySelector('.error');
const ModalErrorMessage = document.querySelector('.error');
const photoDescription = document.querySelector('.text__description');


const SCALE_MIN_VALUE = 25;
const SCALE_MAX_VALUE = 100;
const SCALE_STEP = 25;
const DEFAULT_SCALE = 100;

let IsEscape = (evt) => evt.key === 'Escape';

export {imgUploadInput, ModalErrorMessage, ImgUploadForm, TemplateErrorMessage, otherUseresPhoto, templatePicture, Submit, ScaleControlSmaller, ScaleControlBigger, ScaleControlValue, PhotoUploadPreview, UploadPhotoButton, UploadPhotoForm, Body, CloseModalUploadPhotoButton, SCALE_MIN_VALUE, SCALE_MAX_VALUE, SCALE_STEP, DEFAULT_SCALE, ScaleBarForm, ScaleBarSlider, EffectLevelValue, TemplateSuccessMessage};
export {photoDescription, IsEscape};

