//your JS code here. If required.
// Function to resolve or reject the promise based on age
function checkAge(age, name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000); // Resolves/rejects after 4 seconds
  });
}

// Event listener for form submission
document.getElementById('myForm').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission
  const age = parseInt(document.getElementById('age').value);
  const name = document.getElementById('name').value;
  if (isNaN(age) || age <= 0 || name.trim() === '') {
    alert('Please fill in all fields with valid values.');
    return;
  }
  checkAge(age, name)
    .then((message) => {
      alert(message); // Resolved message
    })
    .catch((error) => {
      alert(error); // Rejected error message
    });
});
