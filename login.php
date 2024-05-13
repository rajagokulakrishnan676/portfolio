<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "portfolio";

$con = mysqli_connect($servername,  $username, $password, $dbname);
if (mysqli_connect_errno()) {

  exit('Failed to connect to MySQL: ' . mysqli_connect_error());
}


?>
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
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required>
      <?php
      if (isset($_POST['submit'])) {
        if (!empty($_POST['username']) && !empty($_POST['password'])) {
          $user = $_POST['username'];
          $pass = $_POST['password'];
          $query = mysqli_query($con, "SELECT * FROM authenticate where user_name = '" . $user . "' and password = '" . $pass . "' ");
          $numrows = mysqli_num_rows($query);
          if ($numrows != 0) {
            while ($row = mysqli_fetch_assoc($query))
              $username = $row['user_name'];
            $password = $row['password'];
          }
          if ($user == $username && $password == $password) {
            header('location:home.html');
            $query = mysqli_query($con, "insert into visitors(name) values('$username')");
          } else {
            echo "invalid user id & pass";
          }
        }
      }
      ?>
      <input type="submit" name="submit" value="Submit">
    </form>
  </div>

</body>

</html>