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
        $company_name = addslashes($_POST['cName']);
        $email = addslashes($_POST['email']);
        $phone = addslashes($_POST['phone']);
        $password = addslashes($_POST['pass']);
        $username = addslashes($_POST['admin']);
        $address1 = addslashes($_POST['address']);
        $address2 = addslashes($_POST['address2']);
        $industry = addslashes($_POST['industry']);
        $bio = addslashes($_POST['bio']);
    }
    else
    {
        $company_name = $_POST['cName'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $password = $_POST['pass'];
        $username = $_POST['admin'];
        $address1 = $_POST['address'];
        $address2 = $_POST['address2'];
        $industry = addslashes($_POST['industry']);
        $bio = addslashes($_POST['bio']);
    }
    	
    	// INSERT VALUES
    	$sql = "INSERT INTO businesses (name,email, phone,username,password,address1,address2,industry,bio)
    	VALUES ('$company_name', '$email', '$phone','$password','$username','$address1','$address2','$industry','$bio')";
    
    	// use exec() because no results are returned
    	$conn->exec($sql);
    	echo "New record created successfully";
        // SUCCESSFUL: redirect them to profile
        header('Location: http://expgo.gq/business_profile.html/');
    }
	catch(PDOException $e)
    {
    	echo $sql . "<br>" . $e->getMessage();
	}
	$conn = null;
?>