<?php

$host="mysql6.000webhost.com"; 
$username="mysql6.000webhost.com";
$password="UMpass61"; 
$db_name="a5349876_users";
$tbl_name1="students";
$tbl_name2="business"; 

mysql_connect("$host", "$username", "$password")or die("cannot connect"); 
mysql_select_db("$db_name")or die("cannot select DB");

$myusername=$_POST['myusername']; 
$mypassword=$_POST['mypassword']; 

$myusername = stripslashes($myusername);
$mypassword = stripslashes($mypassword);
$myusername = mysql_real_escape_string($myusername);
$mypassword = mysql_real_escape_string($mypassword);
$sql="SELECT * FROM $tbl_name1 WHERE username='$myusername' and password='$mypassword'";
$result=mysql_query($sql);

$count=mysql_num_rows($result);

if($count==1){
$accountType = 'student';
session_register("myusername");
session_register("mypassword");
session_register("accountType");
$firstName = "SELECT firstName FROM $tbl_name1 WHERE username='$myusername' and password='$mypassword'";
$lastName = "SELECT lastName FROM $tbl_name1 WHERE username='$myusername' and password='$mypassword'";
$uni = "SELECT university FROM $tbl_name1 WHERE username='$myusername' and password='$mypassword'";
$year = "SELECT year FROM $tbl_name1 WHERE username='$myusername' and password='$mypassword'";
$course = "SELECT course FROM $tbl_name1 WHERE username='$myusername' and password='$mypassword'";
$bio = 'This is how your profile page would look!';
session_register("firstName");
session_register("lastName");
session_register("uni"); 
session_register("year");
session_register("bio");
session_register("course");
header("location:student_profile.html");
}
else if{
$sql="SELECT * FROM $tbl_name2 WHERE username='$myusername' and password='$mypassword'";
$result=mysql_query($sql);
$count=mysql_num_rows($result);
if($count==1){
$accountType = 'business';
session_register("myusername");
session_register("mypassword"); 
session_register("accountType");
$name = "SELECT name FROM $tbl_name2 WHERE username='$myusername' and password='$mypassword'";
$address = "SELECT address1 FROM $tbl_name2 WHERE username='$myusername' and password='$mypassword'";
$industry = "SELECT industry FROM $tbl_name2 WHERE username='$myusername' and password='$mypassword'";
$phone = "SELECT phone FROM $tbl_name2 WHERE username='$myusername' and password='$mypassword'";
$bio = 'This is how your profile page would look!';
session_register("firstName");
session_register("lastName");
session_register("uni"); 
session_register("year");
session_register("bio");
header("location:business_profile.html");
}
}
else {
echo "Wrong Username or Password";
}
?>