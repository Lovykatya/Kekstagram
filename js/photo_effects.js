import {UploadPhotoForm, PhotoUploadPreview, ScaleBarForm, ScaleBarSlider, EffectLevelValue} from './data.js';

const FILTER_EFFECTS = [
  {name: 'none', min: 0, max: 100, step: 1},
  {name: 'chrome', style: 'grayscale', min: 0, max: 1, step: 0.1, units: ''},
  {name: 'sepia', style: 'sepia', min: 0, max: 1, step: 0.1, units: ''},
  {name: 'marvin', style: 'invert', min: 0, max: 100, step: 1, units: '%'},
  {name: 'phobos', style: 'blur', min: 0, max: 3, step: 0.1, units: 'px'},
  {name: 'heat', style: 'brightness', min: 1, max: 3, step: 0.1, units: ''}
];

const DEFAULT_EFFECT = FILTER_EFFECTS[0];
let CurrentEffect = DEFAULT_EFFECT;

const UpdateEffect = () => {
  ScaleBarForm.classList.remove('hidden');
  ScaleBarSlider.noUiSlider.updateOptions ({
    range: {
      min: CurrentEffect.min,
      max: CurrentEffect.max,
    },
    start: CurrentEffect.max,
    step: CurrentEffect.step,
  })
  if (CurrentEffect === DEFAULT_EFFECT) {
    ScaleBarForm.classList.add('hidden');
  } 
}

const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {  
    return;
  }
  CurrentEffect = FILTER_EFFECTS.find((effect) => effect.name === evt.target.value);
  UpdateEffect();
}

const onUpdateEffect = () => {
  PhotoUploadPreview.style.filter = 'none';
  PhotoUploadPreview.className = '';
  EffectLevelValue.value = '';
  if (CurrentEffect === DEFAULT_EFFECT) {
    return
  }

  const EffectValue = ScaleBarSlider.noUiSlider.get();
  PhotoUploadPreview.style.filter = `${CurrentEffect.style}(${EffectValue}${CurrentEffect.units})`;
  PhotoUploadPreview.classList.add(`effects__preview--${CurrentEffect.name}`);
  EffectLevelValue.value = EffectValue;
}

const setDefaultEffect = () => {
  CurrentEffect = DEFAULT_EFFECT;
  UpdateEffect()
}

noUiSlider.create(ScaleBarSlider, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
  format: {
    to: function (value) {
      return value;
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
})
UpdateEffect();

UploadPhotoForm.addEventListener('change', onFormChange);
ScaleBarSlider.noUiSlider.on('update', onUpdateEffect)

export {setDefaultEffect};
