$(document).ready(function(){
	
	//changes twitter link to the short version instead of the long 

	
	




	function templatePageJS(){

		$("#templatePassive").on("click", this.onTemplatePassiveClick.bind(this));

		$("#templateAbility1").on("click", this.onTemplateAbility1Click.bind(this));
		$("#templateAbility2").on("click", this.onTemplateAbility2Click.bind(this));
		$("#templateAbility3").on("click", this.onTemplateAbility3Click.bind(this));
		$("#templateAbility4").on("click", this.onTemplateAbility4Click.bind(this));


		$("#templateFavorite").on("click", this.onTemplateFavoriteClick.bind(this));



		$("#championLore").on("click", this.onLoreButtonClick.bind(this));

		$("#creatorNote").on("click", this.onNoteButtonClick.bind(this));

		$("#templatePassiveImg").attr("src", passiveImg);

		$("#skill1Img").attr("src", ability1Img);
		$("#skill2Img").attr("src", ability2Img);

		$("#skill3Img").attr("src", ability3Img);
		$("#skill4Img").attr("src", ability4Img);

		$("#bgPointer").attr("src", championImg);
		$("#champName").html(championName);

		$("#textHolder").html(championLore);


		//when button is clicked it will remove elements from the favorite bar,
		//as well as the local storage arrays, going to test more later but for now it works,
		//once done place with other local storage section.

		$(".removeButton").on("click", function(){
			
			var parentName = $(this).parent().get(0);
			var removeButtonClicked = $(this).parent().remove();
			//champNames[]
			console.log(this.id);

			var champNames = JSON.parse(localStorage["favoriteChamps"]);
			var favoriteChampsURL = JSON.parse(localStorage["favoriteChampsURL"]);
			var counterChange = JSON.parse(localStorage["counter"]);

			console.log(favoriteChampsURL);
			console.log(champNames);
			for(var i = 0; i<champNames.length; i++)
			{
				if(this.id === "removeFav"+i){

					champNames.splice(i, 1);
					favoriteChampsURL.splice(i,1);
					counterChange - 1;
					localStorage["favoriteChampsURL"] = JSON.stringify(favoriteChampsURL);
					localStorage["favoriteChamps"] = JSON.stringify(champNames);
					//localStorage["counter"] = JSON.stringify(counterChange);
					//alert("hit");
				}
			}

		})
	}



	//when you click this it will plug into the p tag that will display all of the char's data
	templatePageJS.prototype.onTemplatePassiveClick = function(){

		
		$("#textHolder").html(passiveHolder);
		$("#twitterShare").data("url", "http://bit.ly/1hKRiSJ");
	}




	templatePageJS.prototype.onTemplateAbility1Click = function(){

		
		$("#textHolder").html(abilityHolder);
		
	}

	templatePageJS.prototype.onTemplateAbility2Click = function(){

		
		$("#textHolder").html(abilityHolder2);
		
	}


	templatePageJS.prototype.onTemplateAbility3Click = function(){

		
		$("#textHolder").html(abilityHolder3);
		
	}

	templatePageJS.prototype.onTemplateAbility4Click = function(){

		
		$("#textHolder").html(abilityHolder4);
		
	}


	//here is how you do this future trin you have to set up the local storage then set them to something without them resetting
	//then you have to find a way, to stringify the arrays and set them equal to the local storage then you can start storing stuff using
	//the formula below

	//this function is storing the users favorite pages so they can view them again later
	templatePageJS.prototype.onTemplateFavoriteClick = function(){
	

		localStorage.counter = Number(localStorage.counter) + 1;
		
		if(localStorage.counter >= 1){
		
			
			champNames[localStorage.counter] = document.getElementById("champName").innerHTML;
			
			favoriteChampsURL[localStorage.counter] = document.URL;


			localStorage["favoriteChamps"] = JSON.stringify(champNames);


			localStorage["favoriteChampsURL"] = JSON.stringify(favoriteChampsURL);



			//linking


			var userFavs = JSON.parse(localStorage["favoriteChamps"]);

			var userFavsUrls = JSON.parse(localStorage["favoriteChampsURL"]);

			console.log(userFavs);
			console.log(userFavsUrls);
			//localStorage.setItem("favoriteChamps", document.getElementById("champName").innerHTML);
			
			templatePageJS.prototype.favoriteCheck()
		}
	
		

	}

	//This code handles the localStorage portion of the site.
	//The local storage will take the name and url of the champion 
	//favorited then add it to a list where the user can find their favorite
	//champions again. 

	//the localstorage is initiated if the browser finds no trace of localstorage for this 
	//specific site.


	var items = localStorage.getItem('items')

	if( items === undefined || localStorage.counter == undefined)
	{
		localStorage.setItem("counter", 0);	

		
		localStorage.setItem("favoriteChamps", "0");
		localStorage.setItem("favoriteChampsURL", "0");
	}
	



	if(localStorage.counter == 0)	{
		var champNames = new Array();
		var favoriteChampsURL = new Array();

		
	}
	else{
		//more local storage stuff
		
		var champNames = new Array();
		var favoriteChampsURL = new Array();

		champNames = JSON.parse(localStorage["favoriteChamps"]);
				
		favoriteChampsURL = JSON.parse(localStorage["favoriteChampsURL"])


		var ul = document.getElementById("favoriteList");
		for(var i = 1; i < champNames.length; i++)
		{
			if(champNames[i] !== null && champNames[i] !== ""){
				var li = document.createElement("li");
				
				li.setAttribute("id","i"+i);
				
				li.innerHTML = "<a href="+favoriteChampsURL[i]+">"+champNames[i]+"</a><button style='display:inline;' id='removeFav"+i+"' class='removeButton'>remove</button>";
			
				ul.appendChild(li);
			}
		}

		
	}


	

	templatePageJS.prototype.favoriteCheck = function(){
		
			var currentUrl = window.location.href;

			for(var i = 1; i < favoriteChampsURL.length; i++)
			{
				if(currentUrl === favoriteChampsURL[i])
				{
					$('#templateFavorite').remove();
				}
			}

			// add in later the ability to remove from favorites
	}
	
	templatePageJS.prototype.favoriteCheck()

	templatePageJS.prototype.onLoreButtonClick = function(){

		
		$("#textHolder").html(championLore);
		
	}

	templatePageJS.prototype.onNoteButtonClick = function(){

		$("#textHolder").html(creatorNote);
	}


	var page = new templatePageJS();
})