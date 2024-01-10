import {ScaleControlSmaller, ScaleControlBigger, ScaleControlValue, PhotoUploadPreview, SCALE_MIN_VALUE, SCALE_MAX_VALUE, SCALE_STEP, DEFAULT_SCALE}  from './data.js';

const PHOTO_PARAMETERS = (value = DEFAULT_SCALE) => {
    ScaleControlValue.value = `${value}%`;
    PhotoUploadPreview.style.transform = `scale(${value / 100})`;
    console.log('value:', value);
}

var ScaleBigger = () => {
    let NewValue;
    const CurrentValue = parseInt(ScaleControlValue.value, 10);
    console.log('Bigger value:', CurrentValue);
    if (CurrentValue < SCALE_MAX_VALUE) {
        NewValue = CurrentValue + SCALE_STEP
    } else {
        NewValue = SCALE_MAX_VALUE;
    }
    PHOTO_PARAMETERS(NewValue);
}


var ScaleSmaller = () => {
    let NewValue;
    const CurrentValue = parseInt(ScaleControlValue.value, 10);
    console.log('Smaller value:', CurrentValue);
    if (CurrentValue > SCALE_MIN_VALUE) {
        NewValue = CurrentValue - SCALE_STEP;
    } else {
        NewValue = SCALE_MIN_VALUE;
    }
    PHOTO_PARAMETERS(NewValue);
}

ScaleControlBigger.addEventListener('click', function() {
    ScaleBigger()
})

ScaleControlSmaller.addEventListener('click', function() {
    ScaleSmaller()
})

var ScaleControlValueReset = () => {
    PHOTO_PARAMETERS();
}

export {PHOTO_PARAMETERS, ScaleControlValueReset}





