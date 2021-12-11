<?php
	
	$passive1img = "";

	$ability1img = "";
	$ability2img = "";
	$ability3img = "";
	$ability4img = "";
	

	$passive1Text = "";
	$ability1Text = "";
	$ability2Text = "";
	$ability3Text = "";
	$ability4Text = "";

	$creatorAside = "";

	$passive1Text = $_POST["passive1"];

	$ability1Text = $_POST["ability1"];
	$ability2Text = $_POST["ability2"];
	$ability3Text = $_POST["ability3"];
	$ability4Text = $_POST["ability4"];
	

	//this code gets the image urls for the buttons

	$passive1img = $_POST["passive1img"];

	$ability1img = $_POST["ability1img"];
	$ability2img = $_POST["ability2img"];
	$ability3img = $_POST["ability3img"];
	$ability4img = $_POST["ability4img"];

	$championName = $_POST["championName"];
	$championImage = $_POST["championImg"];
	$championLore = $_POST["championLore"];

	$creatorAside = $_POST["championNotes"];

	

	$servername= "localhost";
	$username = "galeglory007";
	$password = "";
	$dbname = "Champion_Creatrix_Data";

	$champCon = new mysqli("$servername", "$username", "$password", "$dbname");

	if(!$champCon){

		die('could not connect:'. mysqli_error());
	}


	$onChampDataEntry = "INSERT INTO urlLocationNumbers(championName, championLore ,ability1Text, ability2Text, ability3Text, ability4Text, championImg ,buttonImg1, buttonImg2, buttonImg3, buttonImg4, passive1Text, passive1img, creatorAside) VALUES('$championName', '$championLore' ,'$ability1Text', '$ability2Text', '$ability3Text', '$ability4Text', '$championImage', '$ability1img', '$ability2img', '$ability3img', '$ability4img', '$passive1Text', '$passive1img', '$creatorAside')";

	$champCon->query($onChampDataEntry);

	

	if($result = $champCon->query("SELECT * FROM urlLocationNumbers")){

		if($result->num_rows){
			while($row = $result->fetch_object()){

				
				

				$urlNumber = $row->urlLocationNumber;


			}


		}
	}

	
?>

<html>
	<body>
		<h2>
			
			<form method="get" action="http://championcreatrix.com/league/champdisplay.php" name="creationConfirm">
			<input type="hidden" name='sqlPass' value=<?php echo($urlNumber);?> >
			<input type="submit" Value="Submit">
			</form>
		</h2>

		<script type="text/javascript">
			window.onload = function(){

				document.forms['creationConfirm'].submit();

			}
		</script>
	</body>
</html>
