<?php

	$TESTING_GET = $_GET["sqlPass"];
	
	
	//this is gonna get plugged into mysql table


	$servername= "localhost";
	$username = "galeglory007";
	$password = "Raves007";
	$dbname = "Champion_Creatrix_Data";


	$champCon = new mysqli("$servername", "$username", "$password", "$dbname");

	if(!$champCon){

		die('could not connect:'. mysqli_error());
	}




	if($result = $champCon->query("SELECT * FROM urlLocationNumbers where urlLocationNumber = $TESTING_GET")){

		if($result->num_rows){
			while($row = $result->fetch_object()){

				
				
				//echo $row->ability1Text."<br>", $row->ability2Text."<br>", $row->ability3Text."<br>", $row->ability4Text."<br>";

				$urlNumber = $row->urlLocationNumber;

				$phpPassiveTextHolder = $row->passive1Text;
				$phpPassiveImgHolder = $row->passive1img;

				$phpAbility1Holder = $row->ability1Text;
				$phpAbility2Holder = $row->ability2Text;
				$phpAbility3Holder = $row->ability3Text;
				$phpAbility4Holder = $row->ability4Text;



				$phpAbilityImg1 = $row->buttonImg1;

				$phpAbilityImg2 = $row->buttonImg2;

				$phpAbilityImg3 = $row->buttonImg3;

				$phpAbilityImg4 = $row->buttonImg4;


				$phpChampionName = $row->championName;

				$phpChampionImg = $row->championImg;

				$phpChampionLore = $row->championLore;
				
				$phpCreatorNotes = $row->creatorAside;
				//echo($phpAbility1Holder)."<br>";

				//echo($phpAbility2Holder)."<br>";

				//echo($phpAbility3Holder)."<br>";

				//echo($phpAbility4Holder)."<br>";
			}


		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	$urlTest = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
	
	function bitly_shorten($url)
	{
	    $query = array(
	        "version" => "2.0.1",
	        "longUrl" => $url,
	        "login" => gale007, // replace with your login
	        "apiKey" => R_bb0d54d089c74d8b97466bed8595eacf // replace with your api key
	    );
	 
	    $query = http_build_query($query);
	 
	    $ch = curl_init();
	    curl_setopt($ch, CURLOPT_URL, "http://api.bit.ly/shorten?".$query);
	    curl_setopt($ch, CURLOPT_HEADER, 0);
	    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	 
	    $response = curl_exec($ch);
	    curl_close($ch);
	 
	    $response = json_decode($response);
	 
	    if($response->errorCode == 0 && $response->statusCode == "OK") {
	        return $response->results->{$url}->shortUrl;
	    } else {
	        return null;
	    }
	}
	
	
?>

<html>
		<head>
			<title>Champion Creatrix: Make and Share Champions</title>
			<script src="js/jquery-1.11.3.min.js"></script>
			<script type="text/javascript" src="templatePageJS.js"></script>

			
			<script src="js/scrolling-nav.js"></script>
			<link rel="stylesheet" type="text/css" href="css/scrolling-nav.css">
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
			
			<meta property="og:image" content="http://championcreatrix.com/league/img/champNameSection2.jpg"/>
			<meta property="og:image:secure_url" content="http://championcreatrix.com/league/img/champNameSection2.jpg" />
		</head>
		

		<body>
			<style type="text/css">
				body{
					color:white;
					background: url(img/reviewSection2.jpg) no-repeat center center fixed;
					background-color: black;
					
					  -webkit-background-size: cover;
					  -moz-background-size: cover;
					  -o-background-size: cover;
					 
					overflow-x:hidden;
				}
				
				
				
				
				
				/*nav bar css start*/
				.navbar-default {
				    border-color: rgba(34,34,34,.05);
				    font-family: 'Open Sans','Helvetica Neue',Arial,sans-serif;
				    background-color: #fff;
				    -webkit-transition: all .35s;
				    -moz-transition: all .35s;
				    transition: all .35s;
				}

				.navbar-default .navbar-header .navbar-brand {
				    text-transform: uppercase;
				    font-family: 'Open Sans','Helvetica Neue',Arial,sans-serif;
				    font-weight: 700;
				    color: #f05f40;
				}

				.navbar-default .navbar-header .navbar-brand:hover,
				.navbar-default .navbar-header .navbar-brand:focus {
				    color: #eb3812;
				}

				.navbar-default .nav > li>a,
				.navbar-default .nav>li>a:focus {
				    text-transform: uppercase;
				    font-size: 13px;
				    font-weight: 700;
				    color: #222;
				}

				.navbar-default .nav > li>a:hover,
				.navbar-default .nav>li>a:focus:hover {
				    color: #f05f40;
				}

				.navbar-default .nav > li.active>a,
				.navbar-default .nav>li.active>a:focus {
				    color: #f05f40!important;
				    background-color: transparent;
				}

				.navbar-default .nav > li.active>a:hover,
				.navbar-default .nav>li.active>a:focus:hover {
				    background-color: transparent;
				}

				@media(min-width:768px) {
				    .navbar-default {
				        border-color: rgba(255,255,255,.3);
				        background-color: transparent;
				    }

				    .navbar-default .navbar-header .navbar-brand {
				        color: rgba(255,255,255,.7);
				    }

				    .navbar-default .navbar-header .navbar-brand:hover,
				    .navbar-default .navbar-header .navbar-brand:focus {
				        color: #fff;
				    }

				    .navbar-default .nav > li>a,
				    .navbar-default .nav>li>a:focus {
				        color: rgba(255,255,255,.7);
				    }

				    .navbar-default .nav > li>a:hover,
				    .navbar-default .nav>li>a:focus:hover {
				        color: #fff;
				    }

				    .navbar-default.affix {
				        border-color: rgba(34,34,34,.05);
				        background-color: #fff;
				    }

				    .navbar-default.affix .navbar-header .navbar-brand {
				        font-size: 14px;
				        color: #f05f40;
				    }

				    .navbar-default.affix .navbar-header .navbar-brand:hover,
				    .navbar-default.affix .navbar-header .navbar-brand:focus {
				        color: #eb3812;
				    }

				    .navbar-default.affix .nav > li>a,
				    .navbar-default.affix .nav>li>a:focus {
				        color: #222;
				    }

				    .navbar-default.affix .nav > li>a:hover,
				    .navbar-default.affix .nav>li>a:focus:hover {
				        color: #f05f40;
				    }
				}
				/*nav bar stuff end*/

				
				
				
				
				
				
				
				#loreOutLine{
				
				border-style: groove;
				border-width: 5px;
				border-radius: 20px;
				
				
				background-color: black;
				opacity: .5;
				
				
				margin-left:100px;
				margin-top:140px;
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

				#favoriteButton{
				
					margin-top:5px;
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
				
				#shareLink{
					margin:10px;
					display: inline-block;
				}
				
				#fbLink{
					margin:10px;
					margin-bottom:20px;
				}
				
				#champName{
					
					text-align: center;
					margin-top: 60px;

				}


				.headerFade{

			    height: 150%;
			    width: 100%;
			    background-color:rgba(0,0,0,0.7);
			    position: fixed;
			    top:0px;
			    
			   
					
			    z-index: 1;
			}


			.aboveFade{

			    z-index: 2;
			}
			</style>

			<script type="text/javascript">
				var passiveHolder = "<?php Print($phpPassiveTextHolder);?>";


				var abilityHolder = "<?php Print($phpAbility1Holder);?>";
				var abilityHolder2 = "<?php Print($phpAbility2Holder);?>";
				var abilityHolder3 = "<?php Print($phpAbility3Holder);?>";
				var abilityHolder4 = "<?php echo($phpAbility4Holder);?>";


				var passiveImg = "<?php Print($phpPassiveImgHolder);?>";

				var ability1Img = "<?php echo($phpAbilityImg1);?>";
				var ability2Img = "<?php echo($phpAbilityImg2);?>";
				var ability3Img = "<?php echo($phpAbilityImg3);?>";
				var ability4Img = "<?php echo($phpAbilityImg4);?>";

				var championName = "<?php echo($phpChampionName);?>";
				var championImg = "<?php echo($phpChampionImg);?>";
				var championLore = "<?php echo($phpChampionLore);?>";
				
				var creatorNote = "<?php echo($phpCreatorNotes);?>";

				var shortUrl = "<?php echo bitly_shorten($urlTest);?>";
				

				abilityHolder4 = abilityHolder4.replace(/(?:\r\n|\r|\n)/g, '<br />');
			</script>
			

			<div id="fb-root"></div>
			<script>(function(d, s, id) {
			  var js, fjs = d.getElementsByTagName(s)[0];
			  if (d.getElementById(id)) return;
			  js = d.createElement(s); js.id = id;
			  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
			  fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));</script>


			<!--this is the html code that will display the champion builder output page-->
			<nav id="mainNav" class="navbar navbar-default navbar-fixed-top">
	      		  <div class="container-fluid">
				  	<div class="navbar-header">
				                <ul class="nav navbar-nav navbar-left">
				                    <li class="active" bootst>
				                      
		                			<div class="dropdown">
										  <button class="btn btn-success dropdown-toggle" type="button" data-toggle="dropdown" id="favoriteButton">Favorites
										  <span class="caret"></span></button>
										  <ul class="dropdown-menu" id="favoriteList">
										    
										  </ul>
										  
									 
									</div>
								
				                    </li>
				
				          		</ul>
		      		</div>
      		 	
					<!-- Collect the nav links, forms, and other content for toggling -->
		             <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		                <ul class="nav navbar-nav navbar-right">
		                     <li class="active" bootst>
		                      
					 
		
		                    </li>
		
											
			                <li class="">
			                    <a href="http://championcreatrix.com/overwatch/index.html" class="page-scroll">Create an Overwatch Hero</a>
			                </li>


			                <li class="">
			                    <a target="_blank" href="http://championcreatrix.com/">Create a League Champion</a>
			                </li>
			                   
			                <li class="">
			                    <a target="_blank" href="http://championcreatrix.com/league/DonationPage.html">Support Champion Creatrix</a>
			                </li>
			                    
				    	
		                </ul>

		            </div>
      		 
		      		 <ul class="nav navbar-nav navbar-right aboveFade">
		                    
		            </ul>
		      		 
      		  </div>
      		</nav>
			<!--The container and section that holds together all of the code for the main section of the champion builder.-->
			
			<div class="headerFade">

			</div>
			<div  class="container">


				<div class="row">
					<div class="col-md-6 aboveFade">
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
					
					<div class="col-md-6 aboveFade">
						
								<div id="loreOutLine">


											<h5 id="textHolder">
																	
																

											</h5>

								</div>
		
					
					</div>

				</div>
				
				<div class="row">
					<div class="col-md-12 aboveFade">
					
												
								<a href="https://twitter.com/share" class="twitter-share-button" data-url="<?php echo bitly_shorten($urlTest);?>"; data-size="large" id="twitterShare">Tweet</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
								
								<div class="fb-share-button" data-href="<?php echo bitly_shorten($urlTest);?>" data-layout="button_count"></div>

						
						
								<span id="shareLink" >Shareable URL: <?php echo bitly_shorten($urlTest);?></span>
						


						<div>
							<link rel="image_src" 
							      type="image/jpeg" 
							      href="http://championcreatrix.com/league/img/champNameSection2.jpg" />
						</div>

					</div>
				</div>
				
				<div class="row">
					<div class="col-md-12 aboveFade">
						<button type="button" class="btn btn-warning"  id="templatePassive"><img src="" width="100px" height="100px" id="templatePassiveImg"><br>passive</button>

						<button type="button" class="btn btn-primary"  id="templateAbility1"><img src="" width="100px" height="100px" id="skill1Img"><br>Q</button>
						<button type="button" class="btn btn-primary" id="templateAbility2"><img src="" width="100px" height="100px" id="skill2Img"><br>W</button>
						<button type="button" class="btn btn-primary" id="templateAbility3"><img src="" width="100px" height="100px" id="skill3Img"><br>E</button>
						<button type="button" class="btn btn-primary"  id="templateAbility4"><img src="" width="100px" height="100px" id="skill4Img"><br>R</button>
						<br>

				</div>
					

					<div class="col-md-9 col-md-offset-3 aboveFade">

						<button type="button" class="btn btn-primary" id="championLore">Lore</button>
								
						<button type="button" class="btn btn-success" id="templateFavorite">favorite</button>
						
						<button type="button" class="btn btn-warning" id="creatorNote">Creator Notes/Credit</button>
					
					
					</div>

						
										

				</div>
				
				
				<div class="row">
					<div class="col-md-12 aboveFade">
						
						<div>
							
							<div id="disqus_thread" class="aboveFade"></div>
							<script type="text/javascript">
							    /* * * CONFIGURATION VARIABLES * * */
							    var disqus_shortname = 'httpwwwgloriousgalecom';
							    
							    /* * * DON'T EDIT BELOW THIS LINE * * */
							    (function() {
							        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
							        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
							        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
							    })();
							</script>
							<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>
										
						</div>
					
					</div>
				<div>
		
			
			<script src="js/bootstrap.min.js"></script>
			
			
			

		
		
		</body>
</html>