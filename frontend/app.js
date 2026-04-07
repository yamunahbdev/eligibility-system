async function checkEligibility() {
  const age = document.getElementById('age').value;
  const status = document.getElementById('status').value;

  const resultElement = document.getElementById('result');
  resultElement.innerText = "Checking...";

  try {
    const response = await fetch('http://localhost:3000/api/eligibility', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ age: Number(age), status })
    });

    const data = await response.json();

    if (data.error) {
      resultElement.innerText = data.error;
    } else {
      resultElement.innerText = data.message;
    }

  } catch (error) {
    resultElement.innerText = "Server error";
  }
}