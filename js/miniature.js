import {otherUseresPhoto, templatePicture} from './data.js';

const RenderPhoto = (array) => {
  const CreatePhotoFragment = document.createDocumentFragment();

  array.forEach(({url, likes, description}) => {
    const photoElement = templatePicture.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = description;
    CreatePhotoFragment.appendChild(photoElement);
  });

  otherUseresPhoto.appendChild(CreatePhotoFragment);
};

export {RenderPhoto}
