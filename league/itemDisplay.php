<?php

	$TESTING_GET = $_GET["itemSqlPass"];
	//this is gonna get plugged into mysql table


	$servername= "localhost";
	$username = "gale007_rebp1";
	$password = "Raves007";
	$dbname = "ChampionBuilderInfo";

	$champCon = new mysqli("$servername", "$username", "$password", "$dbname");

	if(!$champCon){

		die('could not connect:'. mysqli_error());
	}




	if($result = $champCon->query("SELECT * FROM itemData where id = $TESTING_GET")){

		if($result->num_rows){
			while($row = $result->fetch_object()){

				
				//echo $row->ability1Text."<br>", $row->ability2Text."<br>", $row->ability3Text."<br>", $row->ability4Text."<br>";

				$urlNumber = $row->id;

				$itemDataText = $row->itemDataCol;
				$itemImgHolder = $row->itemImgData;
			}


		}
	}
?>

<html>
		<head>
			<title>ChampionBuilder Template Test</title>
			<script src="js/jquery-1.11.3.min.js"></script>
			<script type="text/javascript" src="js/itemTemplatePageJs.js"></script>


			<script src="js/scrolling-nav.js"></script>
			<link rel="stylesheet" type="text/css" href="css/scrolling-nav.css">
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
		</head>
		

		<body>
			<style type="text/css">
				body{
					color:white;
					background-image:;
					background-color: black;
				}
				#loreOutLine{
				
				border-style: groove;
				border-width: 5px;
				border-radius: 20px;
				
				
				background-color: black;
				opacity: .5;

				margin-left:100px;
				margin-top:100px;
				}

				#loreOutLine h5{

					color:white;

					margin-left: 20px;
				}

				#bgPointer{

				overflow: hidden;
				border-style: groove;
				border-width:5px;
				border-radius: 80px;
			}

				button{

					padding: 0px;
				}

				#favoriteList{

					float: left;
				}

				#favoriteList li{


					display: inline-block;
					

					margin: 5px;

				}

				#favoriteList li a{
					color:orange;
					text-decoration: underline;
					font-weight: bold;
				}
				#champName{

					margin-top: 60px;

				}


				
			</style>

			<script type="text/javascript">
				var itemText = "<?php Print($itemDataText);?>";

				var itemImg = "<?php Print($itemImgHolder);?>";

			
			</script>
			
			<!--this is the html code that will display the champion builder output page-->
			<nav id="mainNav" class="navbar navbar-inverse navbar-fixed-top">
      		  <div class="container-fluid">

                <ul class="nav navbar-nav navbar-left">
                     <li class="active" bootst>
                      

                    </li>


                    <ul>

					</ul>
                </ul>
      		 
                <div class="dropdown">
				  <button class="btn btn-success dropdown-toggle" type="button" data-toggle="dropdown">Favorites
				  <span class="caret"></span></button>
				  <ul class="dropdown-menu" id="favoriteList">
				    
				  </ul>

				</div>
      		  </div>
      		</nav>
			<!--The container and section that holds together all of the code for the main section of the champion builder.-->
			<div  class="container">
				<div class="row">
					<div class="col-md-6">
							<div >
										
									<div>

										<h2 id="champName"></h2>
										<img src="" alt=""  id="bgPointer" height="350" width="550" >
										

										<br>
										(click a skill to see it's effect.)
										<br>

									
									</div>
					
							</div>

					</div>
					
					<div class="col-md-6">
						
								<div id="loreOutLine">


											<h5 id="itemCreated">
																	
																

											</h5>

								</div>		
					
					</div>

				</div>

				<div class="row">
					<div class="col-md-12">
						
					
					</div>
					

					<div class="col-md-12 col-md-offset-3">

						
						<button type="button" class="btn btn-success" id="templateFavorite">favorite</button>
						
					</div>

						
										

				</div>
				

			</div>	
			<script src="js/bootstrap.min.js"></script>

		</body>
</html>