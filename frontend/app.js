async function checkEligibility() {
  const age = document.getElementById('age').value;
  const status = document.getElementById('status').value;

  const resultElement = document.getElementById('result');
  resultElement.innerText = "Checking...";

  try {
    const response = await fetch('https://eligibility-api.onrender.com/api/eligibility', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ age: Number(age), status })
    });

    if (!response.ok) {
      throw new Error("API error");
    }

    const data = await response.json();

    if (!data.success) {
      resultElement.innerText = data.error;
    } else {
      resultElement.innerText = data.data.message;
    }

  } catch (error) {
    resultElement.innerText = "Server is starting, please try again in a few seconds...";
  }
}