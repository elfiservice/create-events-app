export const errorMsg = (msgElement, errorMessage) => {
    msgElement.innerHTML = `<span> ${errorMessage} </span>`;
    msgElement.classList.add('msgError');
  }

  export const successMsg = (msgElement, displayName) => {
    msgElement.innerHTML = `<span> Success ${displayName}!! Redirecting...</span>`;
    msgElement.classList.add('msgSuccess');
  }

  export const cleanMsgs = (msgElement) => {
    msgElement.innerHTML = ``;
    msgElement.classList.remove('msgError');
    msgElement.classList.remove('msgSuccess');
  }


