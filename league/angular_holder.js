var championCreator = angular.module('championCreatorApp', [])
	.controller("championCreatorController", championCreatorController);

function championCreatorController($scope){

//comment this all out tomorrow or the day after whenever

	$scope.onChampionImageRequest = function(){

		var urlHolder = $('#testInput').val();
		
		var championNameHolder = $('#creationName').val();
		var championImgHolder = $('#bgPointer').attr("src");
		/*$("#testSpan").text(urlHolder); */
		
		$('#bgPointer').css('background-size', 'contain' );

		$('#bgPointer').attr("src", urlHolder);

		$('#bgPointerEnd').attr("src", urlHolder);


		//posting champion info to the server.
		$('#championName').val(championNameHolder);
		$('#championImg').val(urlHolder);

		console.log($('#championName').val());
		console.log($('#championImg').val());
		

	}


	//The main idea for this code is for the user to input a url address into the bar at the top of the screen.
	// then from there they click on buttons where they want to add the img address too. 
	//the $('#testInput') will be the element that passes the the url to the img src attribute.
	//at the end of the program the info that is passed from testInput will be passed into php and stored in a mysql database.

	$scope.onPassiveClick = function(){

		var passiveTextHolder = $('#passiveInput').val();
		var passiveImgHolder = $('#passive_img1').attr("src");
		var urlHolder = $('#testInput').val();

		$("#passive_img1").attr("src", urlHolder);

		$("#imgButton0End").attr("src", urlHolder);

		$("#passive1Data").val(passiveTextHolder);
		$("#passive1img").val(passiveImgHolder);

		console.log(passiveTextHolder);
		console.log(passiveImgHolder);
	}

	$scope.onAbility1ButtonClick = function(){
	
		var abilityTextHolder = $("#ability1Input").val();
		var ability1imgHolder = $("#urlSkillImg_1").attr("src");

		//This is the code that will handle the image setting


		var urlHolder = $('#testInput').val();
		
		
		/*$("#testSpan").text(urlHolder); */


		$("#urlSkillImg_1").attr("src",urlHolder);


		$("#imgButton1End").attr("src",urlHolder);
		

		//this code is for grabbing the lore text and storing it in the input file.

		

		$("#ability1Data").val(abilityTextHolder);

		$("#ability1img").val(ability1imgHolder);
		//console.log($("#textTestArea").val());
		console.log($("#ability1Data").val());
		console.log($("#ability1img").val());
		
	}

	$scope.onAbility2ButtonClick = function(){


		var abilityTextHolder2 = $("#ability2Input").val();
		var ability2imgHolder = $("#urlSkillImg_2").attr("src");


		var urlHolder = $('#testInput').val();
		
		//this code is setting the image for ability 2.

		$("#urlSkillImg_2").attr("src",urlHolder);

		$("#imgButton2End").attr("src",urlHolder);







		$("#ability2Data").val(abilityTextHolder2);

		$("#ability2img").val(ability2imgHolder);

		console.log($("#ability2Data").val());
		console.log($("#ability2img").val());
		
	}


	$scope.onAbility3ButtonClick = function(){

		var abilityTextHolder3 = $("#ability3Input").val();
		var ability3imgHolder = $("#urlSkillImg_3").attr("src");


		var urlHolder = $('#testInput').val();
		/*$("#testSpan").text(urlHolder); */

		//this is the code for setting the image;
		$("#urlSkillImg_3").attr("src",urlHolder);

		$("#imgButton3End").attr("src",urlHolder);


		//sets the text for the ability text;



		$("#ability3Data").val(abilityTextHolder3);

		$("#ability3img").val(ability3imgHolder);
		console.log($("#ability3Data").val());
		console.log($("#ability3img").val());
	}


	$scope.onAbility4ButtonClick = function(){
		var abilityTextHolder4 = $("#ability4Input").val();
		var ability4imgHolder = $("#urlSkillImg_4").attr("src");



		//code for the images of abilities

		var urlHolder = $('#testInput').val();
		
		$("#urlSkillImg_4").attr("src",urlHolder);


		$("#imgButton4End").attr("src",urlHolder);


		//code for the textarea






		$("#ability4Data").val(abilityTextHolder4);


		$("#ability4img").val(ability4imgHolder);
		console.log($("#ability4Data").val());
		console.log($("#ability4img").val());
		
	}



	$scope.finalTextChangeAbility0 = function(){

		var skillsTextHolder = $("#passiveInput").val();

		$("#SkillText").text(skillsTextHolder);

	}

	$scope.finalTextChangeAbility1 = function(){

		var skillsTextHolder = $("#ability1Input").val();

		$("#SkillText").text(skillsTextHolder);

	}


	$scope.finalTextChangeAbility2 = function(){

		var skillsTextHolder = $("#ability2Input").val();

		$("#SkillText").text(skillsTextHolder);

	}


	$scope.finalTextChangeAbility3 = function(){

		var skillsTextHolder = $("#ability3Input").val();

		$("#SkillText").text(skillsTextHolder);

	}


	$scope.finalTextChangeAbility4 = function(){

		var skillsTextHolder = $("#ability4Input").val();

		$("#SkillText").text(skillsTextHolder);

	}

	$scope.finalLoreChange = function(){

		var skillsTextHolder = $("#userCreatedLore").val();

		$("#SkillText").text(skillsTextHolder);
	}



	$scope.confirmSubmit = function(){



		var loreTextHolder = $("#userCreatedLore").val();

		var abilityTextHolder4 = $("#ability4Input").val();
		var ability4imgHolder = $("#urlSkillImg_4").attr("src");


		var abilityTextHolder3 = $("#ability3Input").val();
		var ability3imgHolder = $("#urlSkillImg_3").attr("src");

		var abilityTextHolder2 = $("#ability2Input").val();
		var ability2imgHolder = $("#urlSkillImg_2").attr("src");

		var abilityTextHolder = $("#ability1Input").val();
		var ability1imgHolder = $("#urlSkillImg_1").attr("src");


		var championNameHolder = $('#creationName').val();
		var championImgHolder = $('#bgPointer').attr("src");

		var passiveTextHolder = $("#passiveInput").val();
		var passiveImgHolder = $("#passive_img1").attr("src");


		var urlHolder = $('#bgPointer').attr("src");
		
		var creatorAside = $('#creatorNotes').val();

		if(abilityTextHolder == "" || abilityTextHolder2 == "" || abilityTextHolder3 == "" || abilityTextHolder4 == "" || loreTextHolder == ""){

			alert("Please provide a description for all abilities and lore.");

		}

		else{

			passiveTextHolder = passiveTextHolder.replace(/'/g, "\\'");
			abilityTextHolder = abilityTextHolder.replace(/'/g, "\\'");
			abilityTextHolder2 = abilityTextHolder2.replace(/'/g, "\\'");
			abilityTextHolder3 = abilityTextHolder3.replace(/'/g, "\\'");
			abilityTextHolder4 = abilityTextHolder4.replace(/'/g, "\\'");
			loreTextHolder = loreTextHolder.replace(/'/g,"\\'");
			creatorAside = creatorAside.replace(/'/g,"\\'");

			passiveTextHolder = passiveTextHolder.replace(/"/g, "\\'");
			abilityTextHolder = abilityTextHolder.replace(/"/g, "\\'");
			abilityTextHolder2 = abilityTextHolder2.replace(/"/g, "\\'");
			abilityTextHolder3 = abilityTextHolder3.replace(/"/g, "\\'");
			abilityTextHolder4 = abilityTextHolder4.replace(/"/g, "\\'");
			loreTextHolder = loreTextHolder.replace(/"/g, "\\'");
			creatorAside = creatorAside.replace(/"/g, "\\'");

			console.log(loreTextHolder);



			passiveTextHolder = passiveTextHolder.replace(/\r?\n/g, "<br />");
			abilityTextHolder = abilityTextHolder.replace(/\r?\n/g, "<br />");
			abilityTextHolder2 = abilityTextHolder2.replace(/\r?\n/g, "<br />");
			abilityTextHolder3 = abilityTextHolder3.replace(/\r?\n/g, "<br />");
			abilityTextHolder4 = abilityTextHolder4.replace(/\r?\n/g, "<br />");
			loreTextHolder = loreTextHolder.replace(/\r?\n/g, "<br />");
			creatorAside = creatorAside.replace(/\r?\n/g, "<br />");


			$('#championName').val(championNameHolder);
			$('#championImg').val(urlHolder);

			$("#passive1Data").val(passiveTextHolder);
			$("#passive1img").val(passiveImgHolder);


			$("#ability1Data").val(abilityTextHolder);

			$("#ability1img").val(ability1imgHolder);

			


			$("#ability2Data").val(abilityTextHolder2);

			$("#ability2img").val(ability2imgHolder);

			

			$("#ability3Data").val(abilityTextHolder3);

			$("#ability3img").val(ability3imgHolder);

			


			$("#ability4Data").val(abilityTextHolder4);


			$("#ability4img").val(ability4imgHolder);

			$("#championLore").val(loreTextHolder);

			$("#championNotes").val(creatorAside);

			document.forms['completedForm'].submit();
			
		/*$.post("Champ.php", {passive1: passiveTextHolder, passive1img:passiveImgHolder, ability1:abilityTextHolder, ability2:abilityTextHolder2, ability3:abilityTextHolder3, ability4:abilityTextHolder4, ability1img:ability1imgHolder, ability2img:ability2imgHolder, ability3img:ability3imgHolder,ability4img:ability4imgHolder, championName:championNameHolder, championImg:championImgHolder, championLore:loreTextHolder})

			$.ajax({
				type:"POST",
				url:"Champ.php",
				data:"{passive1:passiveTextHolder}",
				success:function(){
					alert("sent Info");
					
				}
			})*/
			
		}
	}

	
	$scope.itemLockIn = function(){

		var urlHolder = $('#testInput').val();
		$("#itemImgUrl").attr("src", urlHolder);
		
	}

	$scope.saveItemResults = function(){

		var itemImg = $("#itemImgUrl").attr("src");
		var itemText = $("#userCreatedItem").val();


		itemText = itemText.replace(/"/g, "\\'");
		itemText = itemText.replace(/'/g, "\\'");
		itemText = itemText.replace(/\r?\n/g, "<br />");
		
		$("#itemImgData").val(itemImg);
		$("#itemTextData").val(itemText);
		

		document.forms['completedItemForm'].submit();
	}
}
