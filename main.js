const h1 = document.createElement(`h1`);
document.body.appendChild(h1);

const timeSpent = () => {
  let seconds = 0;

  function time() {
    h1.textContent = `Jesteś na stronie ${seconds++} sekund.`;
  }

  return time;
};

const showTimeOnSite = timeSpent();

setInterval(showTimeOnSite, 1000);
