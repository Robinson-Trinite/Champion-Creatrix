var abilityReference = angular.module('abilityReferenceApp',['ngRoute'])
	.config(function($routeProvider){
			$routeProvider

			//this is the mapping section of the angular model that will handle
			//what html file is loaded and what will.
			//In order to make a new partial, copy the basic format with .when
			//then add the html files that partials files,

			.when("/", {templateUrl:"partials/Aatrox.html"})
			.when("/partials/Ahri.html",{templateUrl:"partials/Ahri.html"})
			.when("/partials/Akali.html",{templateUrl:"partials/Akali.html"})
			.when("/partials/Alistar.html",{templateUrl:"partials/Alistar.html"})
			.when("/partials/Amumu.html",{templateUrl:"partials/Amumu.html"})
			.when("/partials/Anivia.html",{templateUrl:"partials/Anivia.html"})
			.when("/partials/Annie.html",{templateUrl:"partials/Annie.html"})
			.when("/partials/Ashe.html",{templateUrl:"partials/Ashe.html"})
			.when("/partials/Azir.html",{templateUrl:"partials/Azir.html"})
			

			.when("/partials/Bard.html",{templateUrl:"partials/Bard.html"})
			.when("/partials/Blitz.html",{templateUrl:"partials/Blitz.html"})
			.when("/partials/Brand.html",{templateUrl:"partials/Brand.html"})
			.when("/partials/Braum.html",{templateUrl:"partials/Braum.html"})

			.when("/partials/Caitlyn.html",{templateUrl:"partials/Caitlyn.html"})
			.when("/partials/Cassiopeia.html",{templateUrl:"partials/Cassiopeia.html"})
			.when("/partials/Chogath.html",{templateUrl:"partials/Chogath.html"})
			.when("/partials/Corki.html",{templateUrl:"partials/Corki.html"})
			
			.when("/partials/Darius.html",{templateUrl:"partials/Darius.html"})
			.when("/partials/Diana.html",{templateUrl:"partials/Diana.html"})
			.when("/partials/DrMundo.html",{templateUrl:"partials/DrMundo.html"})
			.when("/partials/Draven.html",{templateUrl:"partials/Draven.html"})
			
			.when("/partials/Ekko.html",{templateUrl:"partials/Ekko.html"})
			.when("/partials/Elise.html",{templateUrl:"partials/Elise.html"})
			.when("/partials/Evelynn.html",{templateUrl:"partials/Evelynn.html"})
			.when("/partials/Ezreal.html",{templateUrl:"partials/Ezreal.html"})


			.when("/partials/FiddleSticks.html",{templateUrl:"partials/FiddleSticks.html"})
			.when("/partials/Fiora.html",{templateUrl:"partials/Fiora.html"})
			.when("/partials/Fizz.html",{templateUrl:"partials/Fizz.html"})

			.when("/partials/Galio.html",{templateUrl:"partials/Galio.html"})
			.when("/partials/Gangplank.html",{templateUrl:"partials/Gangplank.html"})
			.when("/partials/Garen.html",{templateUrl:"partials/Garen.html"})
			.when("/partials/Gnar.html",{templateUrl:"partials/Gnar.html"})
			.when("/partials/Gragas.html",{templateUrl:"partials/Gragas.html"})
			.when("/partials/Graves.html",{templateUrl:"partials/Graves.html"})

			.when("/partials/Hecarim.html",{templateUrl:"partials/Hecarim.html"})
			.when("/partials/Heimerdinger.html",{templateUrl:"partials/Heimerdinger.html"})


			.when("/partials/Irelia.html",{templateUrl:"partials/Irelia.html"})

			.when("/partials/Janna.html",{templateUrl:"partials/Janna.html"})
			.when("/partials/Jarvan.html",{templateUrl:"partials/Jarvan.html"})
			.when("/partials/Jax.html",{templateUrl:"partials/Jax.html"})
			.when("/partials/Jayce.html",{templateUrl:"partials/Jayce.html"})

			.when("/partials/Jinx.html",{templateUrl:"partials/Jinx.html"})
			.when("/partials/Kalista.html",{templateUrl:"partials/Kalista.html"})
			.when("/partials/Karma.html",{templateUrl:"partials/Karma.html"})
			.when("/partials/Karthus.html",{templateUrl:"partials/Karthus.html"})
			.when("/partials/Kennen.html",{templateUrl:"partials/Kennen.html"})
	})
	.controller("referenceCont", referenceCont);

	function referenceCont($scope){
		$scope.championList = [

			//this is controlling the champions being added to the table that will call
			//champions icon  in the table and anchor to the table.
			{name:"Aatrox", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Aatrox.png", link:"#/"},
			{name:"Ahri", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Ahri.png", link:"#partials/Ahri.html"},
			{name:"Akali", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Akali.png", link:"#partials/Akali.html"},
			{name:"Alistar", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Alistar.png", link:"#partials/Alistar.html"},
			{name:"Ammumu", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Amumu.png", link:"#partials/Amumu.html"},
			{name:"Anivia", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Anivia.png", link:"#partials/Anivia.html"},
			{name:"Annie", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Annie.png", link:"#partials/Annie.html"},
			{name:"Ashe", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Ashe.png", link:"#partials/Ashe.html"},
			{name:"Azir", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Azir.png", link:"#partials/Azir.html"},
			

			{name:"Bard", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Bard.png", link:"#partials/Bard.html"},
			{name:"Blitz", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Blitzcrank.png", link:"#partials/Blitz.html"},
			{name:"Brand", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Brand.png", link:"#partials/Brand.html"},
			{name:"Braum", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Braum.png", link:"#partials/Braum.html"},
			

			{name:"Caitlyn", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Caitlyn.png", link:"#partials/Caitlyn.html"},
			{name:"Cassiopeia", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Cassiopeia.png", link:"#partials/Cassiopeia.html"},
			{name:"Chogath", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Chogath.png", link:"#partials/Chogath.html"},
			{name:"Corki", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Corki.png", link:"#partials/Corki.html"},
			
			{name:"Darius", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Darius.png", link:"#partials/Darius.html"},
			{name:"Diana", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Diana.png", link:"#partials/Diana.html"},
			{name:"DrMundo", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/DrMundo.png", link:"#partials/DrMundo.html"},
			{name:"Draven", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Draven.png", link:"#partials/Draven.html"},
			
			{name:"Elise", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Elise.png", link:"#partials/Elise.html"},
			{name:"Evelynn", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Evelynn.png", link:"#partials/Evelynn.html"},
			{name:"Ezreal", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Ezreal.png", link:"#partials/Ezreal.html"},
			

			{name:"FiddleSticks", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/FiddleSticks.png", link:"#partials/FiddleSticks.html"},
			{name:"Fiora", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Fiora.png", link:"#partials/Fiora.html"},
			{name:"Fizz", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Fizz.png", link:"#partials/Fizz.html"},

			{name:"Galio", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Galio.png", link:"#partials/Galio.html"},
			{name:"Gangplank", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Gangplank.png", link:"#partials/Gangplank.html"},
			{name:"Garen", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Garen.png", link:"#partials/Garen.html"},
			{name:"Gnar", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Gnar.png", link:"#partials/Gnar.html"},
			{name:"Gragas", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Gragas.png", link:"#partials/Gragas.html"},
			{name:"Graves", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Graves.png", link:"#partials/Graves.html"},
			
			{name:"Hecarim", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Hecarim.png", link:"#partials/Hecarim.html"},
			{name:"Heimerdinger", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Heimerdinger.png", link:"#partials/Heimerdinger.html"},
			

			{name:"Irelia", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Irelia.png", link:"#partials/Irelia.html"},
			
			{name:"Janna", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Janna.png", link:"#partials/Janna.html"},
			{name:"Jarvan", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/JarvanIV.png", link:"#partials/Jarvan.html"},
			{name:"Jax", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Jax.png", link:"#partials/Jax.html"},
			
			{name:"Jayce", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Jayce.png", link:"#partials/Jayce.html"},
			{name:"Jinx", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Jinx.png", link:"#partials/Jinx.html"},
			
			{name:"Kalista", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Kalista.png", link:"#partials/Kalista.html"},
			{name:"Karma", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Karma.png", link:"#partials/Karma.html"},
			{name:"Karthus", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Karthus.png", link:"#partials/Karthus.html"},
			{name:"Kennen", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Kennen.png", link:"#partials/Kennen.html"},

		];

		$scope.testNames = {name:'dave'};
		$scope.clickTest = function(){
			alert("hey");
		}
	}