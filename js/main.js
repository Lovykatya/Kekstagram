import {RenderPhoto} from '../js/miniature.js';
import { CatalogDescription } from './data.js';
import {UploadPhotoButtonEditor, ClosePhotoButtonEditor} from './upload_photo_form.js';
import {PHOTO_PARAMETERS} from './scale_photo.js';
// import './photo_effects.js';
import {isValid} from './photo_comment.js';
import './change_photo.js';


//console.log('here');
//const randomPhotoObjects = UserPhoto();//генерирует обьекты с фотографиями
console.log('array', CatalogDescription);
RenderPhoto(CatalogDescription);
UploadPhotoButtonEditor();
ClosePhotoButtonEditor ();
PHOTO_PARAMETERS();
isValid(ClosePhotoButtonEditor);
