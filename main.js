const h1 = document.createElement(`h1`);
document.body.appendChild(h1);

const clock = () => {
  let seconds = 0;
  h1.textContent = `Jesteś na stronie 0 sekund.`;

  const timer = () => {
    h1.textContent = `Jesteś na stronie ${++seconds} sekund.`;
  };

  return timer;
};

const showTimeOnSite = clock();

setInterval(showTimeOnSite, 1000);
