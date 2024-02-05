const showAlert = () => {
    const alertContainer = document.createElement('div');
    alertContainer.style.zIndex = '100';
    alertContainer.style.position = 'absolute';
    alertContainer.style.left = '0';
    alertContainer.style.top = '0';
    alertContainer.style.right = '0';
    alertContainer.style.padding = '10px 3px';
    alertContainer.style.fontSize = '30px';
    alertContainer.style.textAlign = 'center';
    alertContainer.style.backgroundColor = 'red';
  
    alertContainer.textContent = 'Не удалось подключиться к серверу';
  
    document.body.append(alertContainer);
  };
export {showAlert};

