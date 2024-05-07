<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Raja Gokulakrishnan - Portfolio</title>
  <link rel="stylesheet" href="login.css">
</head>
<body>
  <div id="login-container">
    <h2>Sign in</h2>
    <form id="login-form" method="POST">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" placeholder="Enter your name" required>
      <input type="submit" value="Submit">
    </form>
  </div>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Your database connection details
    $servername = "localhost";
    $username = "root"; 
    $password = ""; 
    $dbname = "portfolio_db";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname); // Corrected this line

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // User input
    $user = $_POST['username']; 

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO logins (table_name) VALUES (?)");
    $stmt->bind_param("s", $user);

    // Execute and redirect or error
    if ($stmt->execute()) {
        echo "<script>window.location.href = 'home.html';</script>";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();
}
?>
</body>
</html>
