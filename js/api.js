const getData = (onSuccess, onError) => {
  fetch ('https://27.javascript.htmlacademy.pro/kekstagram-simple/data')
    .then((response) => response.json())
    .then ((photos) => onSuccess(photos))
    .catch(() => onError())
}

const PostData = async (onSuccess, onError, body) => {
  await fetch(
    'https://27.javascript.htmlacademy.pro/kekstagram-simple',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body
    })
    .then((response) => {
      if (response.ok){
        onSuccess()
       }
       else {
        onError('Не удалось отправить форму. Попробуйте ещё раз')}
    }
  )
  .catch ((() => onError('Не удалось отправить форму. Попробуйте ещё раз')))
}  
  

export {getData, PostData}