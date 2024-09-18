const monetaryInput = document.querySelector("input[name='monetary-amount']");
const taxInput = document.querySelector("input[name='tax-percentage']");
const results = document.querySelector(".results");

const calculate = (event) => {
  event.preventDefault();
  const monetaryAmount = monetaryInput.value;
  const taxPercentage = taxInput.value;

  const taxAmount = (monetaryAmount * taxPercentage) / 100;

  const finalAmount = monetaryAmount - taxAmount;

  results.innerHTML = `
        <p>Tax amount <span>${taxAmount}</span></p>
        <p>Final amount <span>${finalAmount}</span></p>
    `;
};

document.querySelector("form").addEventListener("submit", calculate);
