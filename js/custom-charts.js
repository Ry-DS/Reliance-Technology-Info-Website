//circliful 
$( document ).ready(function() {
		
        $("#people-opinion").circliful({
            animationStep: 2,
				backgroundColor: "white",
			//animateInView: true,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 15,
            percent: 58
        });
    });
    $( document ).ready(function() {
        $("#people-opinion2").circliful({
            animationStep: 2,
			backgroundColor: "white",
			//animateInView: true,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 15,
            percent: 97.6
        });
    });
    $( document ).ready(function() {
        $("#people-opinion3").circliful({
            animationStep: 0.5,
			backgroundColor: "white",
			//animateInView: true,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 15,
            percent: 18
        });
    });
//chart.js
var ctx = document.getElementById('careers').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },

    // Configuration options go here
    options: {}
});