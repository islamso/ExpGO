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
        $position = addslashes($_POST['pos']);
        $description = addslashes($_POST['desc']);
        $pay = addslashes($_POST['pay']);
        $min_requirements = addslashes($_POST['minReq']);
        $duration = addslashes($_POST['dur']);
        $q1 = addslashes($_POST['q1']);
        $q2 = addslashes($_POST['q2']);
        $q3 = addslashes($_POST['q3']);
    }
    else
    {
        $position = $_POST['pos'];
        $description = $_POST['desc'];
        $pay = $_POST['pay'];
        $min_requirements = $_POST['minReq'];
        $duration = $_POST['dur'];
        $q1 = $_POST['q1'];
        $q2 = $_POST['q2'];
        $q3 = ($_POST['q3']);
    }
    	
    	// INSERT VALUES
    	$sql = "INSERT INTO posts (position,description, pay, requirements, duration, q1, q2, q3)
    	VALUES ('$position', '$description', '$pay','$min_requirements','$duration','$q1','$q2','$q3')";
    
    	// use exec() because no results are returned
    	$conn->exec($sql);
    	echo "New record created successfully";
        // SUCCESSFUL: redirect them to profile
        
    }
	catch(PDOException $e)
    {
    	echo $sql . "<br>" . $e->getMessage();
	}
	//$conn = null;
    session_register($username);
    session_register($password);
    header('Location: http://expgo.gq/business_profile.html');
    
?>