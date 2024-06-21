document
  .getElementById("mortgage-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const principal = parseFloat(document.getElementById("principal").value);
    const yearlyRate = parseFloat(document.getElementById("rate").value);
    const years = parseInt(document.getElementById("years").value);

    if (
      isNaN(principal) ||
      isNaN(yearlyRate) ||
      isNaN(years) ||
      principal <= 0 ||
      yearlyRate <= 0 ||
      years <= 0
    ) {
      alert("Please enter valid values.");
      return;
    }

    const monthlyRate = yearlyRate / 1200;
    const n = years * 12;
    const payment =
      (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));

    document.getElementById("payment").textContent = payment.toFixed(2);
  });
