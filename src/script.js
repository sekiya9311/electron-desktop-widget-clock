(() => {
  const zeroPadding = (val, dig) => ('0'.repeat(dig) + val).slice(-dig);

  const element = document.querySelector('#app');
  const calcTime = () => {
    const now = new Date();

    const year = zeroPadding(now.getFullYear(), 4);
    const month = zeroPadding(now.getMonth() + 1, 2);
    const day = zeroPadding(now.getDate(), 2);
    const hour = zeroPadding(now.getHours(), 2);
    const minute = zeroPadding(now.getMinutes(), 2);
    const second = zeroPadding(now.getSeconds(), 2);

    element.innerHTML = `<p>${year}/${month}/${day}</p><p>${hour}:${minute}:${second}</p>`;
  };

  setInterval(calcTime, 100);
})();
