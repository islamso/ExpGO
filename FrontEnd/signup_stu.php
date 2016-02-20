<?php
$dbhost = 'mysql1.000webhost.com';
      $dbuser = 'a9689672_Webmast';
      $dbpass = 'x8p5s4d19r';
      $conn = mysql_connect($dbhost, $dbuser, $dbpass);
      if(! $conn )
      {
       die('Could not connect: ' . mysql_error());
    }
    $sql = "INSERT INTO students ".
    "(firstName,lastName,email,password,college,year,course) ".
    "VALUES ".
    "('$fname','$lName','$email','$pass','$college','$year','$course')";
    mysql_select_db('accounts');
    $retval = mysql_query( $sql, $conn );
    if(! $retval )
    {
     die('Could not enter data: ' . mysql_error());
  }
  echo "Entered data successfully\n";
  mysql_close($conn);
  ?>
  