var abilityReference = angular.module('abilityReferenceApp',['ngRoute'])
	.config(function($routeProvider){
			$routeProvider
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
	})
	.controller("referenceCont", referenceCont);

	function referenceCont($scope){
		$scope.championList = [
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
			{name:"Ekko", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Ekko.png", link:"#partials/Ekko.html"},
			{name:"Ekko", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Ekko.png", link:"#partials/Ekko.html"},
			{name:"Ekko", champImg:"http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/Ekko.png", link:"#partials/Ekko.html"}
		];

		$scope.testNames = {name:'dave'};
		$scope.clickTest = function(){
			alert("hey");
		}
	}