const goHome = () => {
  let urlHomeLocal = 'http://127.0.0.1:5500/index.html';
  let HOST = 'https://dreamy-haibt-870680.netlify.app/';
  let urlHomeHOST = 'https://dreamy-haibt-870680.netlify.app/index.html';

  let checkProduction = window.document.location.href;
  checkProduction;

  if (checkProduction === HOST) {
    console.log(urlHomeHOST);
    return (window.location = urlHomeHOST);
  }

  console.log(urlHomeLocal);
  window.location = urlHomeLocal;
};

const show404 = () => {
  const getModal404 = document.getElementById('modal-404');
  const modalElement = getModal404;
  modalElement.removeAttribute('class');
  console.log(modalElement);
};

const goBack = () => {
  const getModal404 = document.getElementById('modal-404');
  const modalElement = getModal404;
  modalElement.className = 'hide-modal-404';
  console.log(modalElement);
};