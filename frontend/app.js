function checkEligibility() {
  const age = document.getElementById('age').value;
  const status = document.getElementById('status').value;

  let result = "Not eligible";

  if (age >= 18 && status === "unemployed") {
    result = "Eligible for support";
  }

  document.getElementById('result').innerText = result;
}