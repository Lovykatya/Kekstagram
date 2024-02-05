import {RenderPhoto} from '../js/miniature.js';
import {UploadPhotoButtonEditor, ClosePhotoButtonEditor} from './upload_photo_form.js';
import {PHOTO_PARAMETERS} from './scale_photo.js';
import {isValid} from './photo_comment.js';
import { getData } from './api.js';
import { showAlert } from './show_alert.js';
import './avatar.js';

UploadPhotoButtonEditor();
ClosePhotoButtonEditor ();
PHOTO_PARAMETERS();
isValid(ClosePhotoButtonEditor);
getData(RenderPhoto, showAlert);
