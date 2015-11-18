<?php
	
	$itemImg = "";
	$itemText = "";


	$itemText = $_POST["itemText"];
	
	//this code gets the image urls for the buttons

	$itemImg = $_POST["itemImg"];

	echo($itemImg."<br><br> dsafs ");
	echo($itemText."<br><br> fasdfas");
	
	$servername= "localhost";
	$username = "gale007_rebp1";
	$password = "Raves007";
	$dbname = "ChampionBuilderInfo";

	$itemCon = new mysqli("$servername", "$username", "$password", "$dbname");

	if(!$itemCon){

		die('could not connect:'. mysqli_error());
	}


	$onItemDataEntry = "INSERT INTO itemData(itemDataCol, itemImgData) VALUES('$itemText', '$itemImg')";

	$itemCon->query($onItemDataEntry);

	

	if($result = $itemCon->query("SELECT * FROM itemData")){

		if($result->num_rows){
			while($row = $result->fetch_object()){

				
				
				$urlNumber = $row->id;


			}


		}
	}

	
?>

<html>
	<body>
		<h2>
			
			<form method="get" action="http://www.gloriousgale.com/Championcreatrix/itemDisplay.php" name="itemCreationConfirm">
			<input type="hidden" name='itemSqlPass' value=<?php echo($urlNumber);?> >
			<input type="submit" Value="Submit">
			</form>
		</h2>

		<script type="text/javascript">
			window.onload = function(){

				//document.forms['itemCreationConfirm'].submit();

			}
		</script>
	</body>
</html>
