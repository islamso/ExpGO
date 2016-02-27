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
        $first_name = addslashes($_POST['fName']);
        $last_name = addslashes($_POST['lName']);
        $email = addslashes($_POST['email']);
        $password = addslashes($_POST['pass']);
        $university = addslashes($_POST['college']);
        $year = addslashes($_POST['year']);
        $course = addslashes($_POST['course']);
    }
    else
    {
        $first_name = $_POST['fName'];
        $last_name = $_POST['lName'];
        $email = $_POST['email'];
        $password = $_POST['pass'];
        $university = $_POST['college'];
        $year = $_POST['year'];
        $course = $_POST['course'];
    }
    	
    	// INSERT VALUES
    	$sql = "INSERT INTO students (firstName,lastName, email,password,university,year,course)
    	VALUES ('$first_name', '$last_name', '$email','$password','$university','$year','$course')";
    
    	// use exec() because no results are returned
    	$conn->exec($sql);
    	echo "New record created successfully";
        // SUCCESSFUL: redirect them to profile
        header('Location: http://expgo.gq/student_profile.html/');
    }
	catch(PDOException $e)
    {
    	echo $sql . "<br>" . $e->getMessage();
	}
	$conn = null;
?>