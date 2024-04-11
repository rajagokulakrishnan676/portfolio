<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Your database connection details
    $servername = "localhost";
    $username = "gokulakrishnan"; 
    $password = "raja676gokulakrishnan"; 
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
