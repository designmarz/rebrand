$(document).ready(function() {
  	Chart.defaults.global.responsive = true;
  	Chart.defaults.global.showTooltips = false;


  	var data = [{
					value: 200,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "HTML"
				},{
					value: 50,
					color: "#fff",
					highlight: "#555",
					label: "I'll master it one day!"
				}];

	var data1 = [{
					value: 100,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "CSS"
				},{
					value: 50,
					color: "#fff",
					highlight: "#555",
					label: "I'll master it one day!"
				}];

	var data2 = [{
					value: 500,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "JavaScript"
				},{
					value: 50,
					color: "#fff",
					highlight: "#555",
					label: "I'll master it one day!"
				}];

	var data3 = [{
					value: 400,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "Ruby"
				},{
					value: 50,
					color: "#fff",
					highlight: "#555",
					label: "I'll master it one day!"
				}];				





  	var ctx = document.getElementById("myChart").getContext("2d");
	var myNewChart = new Chart(ctx).Doughnut(data);

	var ctx1 = document.getElementById("myChart1").getContext("2d");
	var myNewChart = new Chart(ctx1).Doughnut(data1);

	var ctx2 = document.getElementById("myChart2").getContext("2d");
	var myNewChart = new Chart(ctx2).Doughnut(data2);

	var ctx3 = document.getElementById("myChart3").getContext("2d");
	var myNewChart = new Chart(ctx3).Doughnut(data3);
});
