<?php
$dbhost="mysql6.000webhost.com";
$dbuser="a5349876_userMan";
$dbpass="UMpass61";
$dbname="a5349876_users";

try {
  $conn = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
        // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  if (! get_magic_quotes_gpc())
  {
    $firstName = addslashes($_POST['fName']);
    $lastName = addslashes($_POST['lName']);
    $email = addslashes($_POST['email']);
    $password = addslashes($_POST['pass']);
    $uni = addslashes($_POST['college']);
    $year = addslashes($_POST['year']);
    $course = addslashes($_POST['course']);
}
else
{
    $firstName = $_POST['fName'];
    $lastName = $_POST['lName'];
    $email = $_POST['email'];
    $password = $_POST['pass'];
    $uni = $_POST['college'];
    $year = $_POST['year'];
    $course = $_POST['course'];
}

        // INSERT VALUES
$sql = "INSERT INTO students (firstName,lastName, email,password,university,year,course)
VALUES ('$firstName', '$lastName', '$email','$password','$uni','$year','$course')";

        // use exec() because no results are returned
$conn->exec($sql);
echo "New record created successfully";
}
catch(PDOException $e)
{
   echo $sql . "<br>" . $e->getMessage();
}
    //$conn = null;
session_register($username);
$_SESSION["username"] = $username;
session_register($password);
$_SESSION["password"] = $password;
session_register($firstName);
$_SESSION["firstName"] = $firstName;
session_register($lastName);
$_SESSION["lastName"] = $lastName;
session_register($uni); 
$_SESSION["univ"] = $uni;
session_register($year);
$_SESSION["year"] = $year;
//session_register($bio);
session_register($course);
$_SESSION["course"] = $course;
header("location:../student_profile.html");
?>