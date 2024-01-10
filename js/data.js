import {getRandomPositiveInteger} from '../js/util.js';

var otherUseresPhoto = document.querySelector('.pictures');
var templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const Submit = document.querySelector('.img-upload__submit');
const ScaleControlSmaller = document.querySelector('.scale__control--smaller');
const ScaleControlBigger = document.querySelector('.scale__control--bigger');
const ScaleControlValue = document.querySelector('.scale__control--value');
const PhotoUploadPreview = document.querySelector('.img-upload__preview');
const UploadPhotoButton = document.querySelector('#upload-file');
const UploadPhotoForm = document.querySelector('.img-upload__overlay');
const Body = document.querySelector('body');
const CloseModalUploadPhotoButton = document.querySelector('#upload-cancel');
const ScaleBarForm = document.querySelector('.img-upload__effect-level');
const ScaleBarSlider = UploadPhotoForm.querySelector('.effect-level__slider');
const EffectLevelValue = UploadPhotoForm.querySelector('.effect-level__value');

const SCALE_MIN_VALUE = 25;
const SCALE_MAX_VALUE = 100;
const SCALE_STEP = 25;
const DEFAULT_SCALE = 100;

let COUNTOFPHOTO = 25;

let IsEscape = (evt) => evt.key === 'Escape';

let alldescription = [
     'привет', "пока", "хай","hello", "синий бегемот", "красивая луна"
];

let likes = {
    min: 15,
    max: 200,
};
let comments =  {
    min: 0,
    max: 200,
};

let CreatePhotoDescription = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: alldescription[getRandomPositiveInteger(0, alldescription.length-1)],
  likes: getRandomPositiveInteger(likes.min, likes.max),
});


let CatalogDescription = Array.from({length: COUNTOFPHOTO}, (_, index) => CreatePhotoDescription(index + 1));

export {otherUseresPhoto, templatePicture, Submit, ScaleControlSmaller, ScaleControlBigger, ScaleControlValue, PhotoUploadPreview, UploadPhotoButton, UploadPhotoForm, Body, CloseModalUploadPhotoButton, SCALE_MIN_VALUE, SCALE_MAX_VALUE, SCALE_STEP, DEFAULT_SCALE, ScaleBarForm, ScaleBarSlider, EffectLevelValue};
export {CreatePhotoDescription, CatalogDescription, IsEscape};

