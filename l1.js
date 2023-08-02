function checkPassword() {
  // Get the entered username and password
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Replace the below example with your own username and password
  const validUsername = "uma";
  const validPassword = "uma123";

  // Perform basic password verification
  if (username === validUsername && password === validPassword) {
    alert("Login successful!");
    // Redirect to the target page after successful login
    window.location.href = "todo.html";
    return false; // Prevent form submission to stay on the current page
  } else {
    alert("Invalid username or password. Please try again.");
    return false;
  }
}