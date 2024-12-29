<style>
    .bg{
          background: url("images/Home-page-1.jpg") no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
    }
    
    .mailsent{
        font-size: 2em;
        background-color: white;
        padding: 5%;
        text-align: center;
        max-width: 70%;
        max-height: 300px;
        /* margin-top: 30%; */
        margin: auto;
    }
</style>

<?php 
if(isset($_GET['mobile'])){
    $to = "m3mexpressway@gmail.com"; // this is your Email address
    $from = "noreply@m3mexpressway.com";
    //$from = $_GET['email']; // this is the sender's Email address
    $first_name = $_GET['name'];
    $last_name = $_GET['last_name'];

    $last_name = $_GET['last_name'];
    $subject = "Lead Form submission | Emmar EBD 114";
    $subject2 = "Copy of your form submission";
    $message = "Name: ".$first_name . "\n".
    "Mobile No:" . $_GET['fullMobileNo']. $_GET['mobile']."\n".
    "Email: ".$_GET['email']."\n".
    "Message: ".$_GET['message']."Emmar114 SCO Plot\n".
    //"Reffer: ".$_SERVER['HTTP_REFERER']."\n".
    "Adwords Info: ";
    $message2 = "Thank you. We will call you shortly." ."\n\n";

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    //mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "<div class='mailsent'>Thank you " . $first_name . ", we will contact you shortly.</div>";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>


<!DOCTYPE html>
<head>
    
    
<!-- Global site tag (gtag.js) - Google Ads: 443434657 -->
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-443434657"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-443434657');
</script>


<!-- Event snippet for Submit lead form conversion page -->
<script>

function myFunction() {
    gtag('event', 'conversion', {'send_to': 'AW-443434657/xI50CN7rgYYDEKGNudMB'});
    console.log("Conversion Done");
}

</script>




<title>Form submission</title>
</head>
<body class="bg" onload="myFunction()">
    
<!--
<form action="" method="post">
First Name: <input type="text" name="name"><br>
Last Name: <input type="text" name="last_name"><br>
Email: <input type="text" name="email"><br>
Message:<br><textarea rows="5" name="message" cols="30"></textarea><br>
<input type="submit" name="submit" value="Submit">
</form>

<button onClick="myFunction()" name="submit">Submit</button>
-->
</body>
</html> 