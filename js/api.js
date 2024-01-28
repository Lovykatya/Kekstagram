
const PostData = (onSuccess, onError, body) => {
  fetch(
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
        console.log("hf,jnf");
        onSuccess()
       }
       else {
        console.log("блокddddddd>");
        onError('Не удалось отправить форму. Попробуйте ещё раз')}
    }
  )
  .catch ((() => onError('Не удалось отправить форму. Попробуйте ещё раз')))
}  
  

export {PostData}