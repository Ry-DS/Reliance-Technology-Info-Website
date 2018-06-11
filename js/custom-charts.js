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
    type: 'pie',
	responsive: true,
	maintainAspectRatio: false,

    // The data for our dataset
    data: {
      labels: ["Army", "Arts", "Customer Service", "Finance", "Medicine","Science","Entertainer"],
      datasets: [{
        label: "Number of students who selected",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#c45822","#DAe657"],
        data: [1,2,1,2,4,8,1]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Future Careers students plan to take'
      }
    }
});
ctx=document.getElementById('graph').getContext('2d');
chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',
	responsive: true,
	maintainAspectRatio: false,

    // The data for our dataset
    data: {
      labels: ["Yes", "No"],
      datasets: [{
        label: "Amount",
        backgroundColor: ["#3e95cd", "#8e5ea2"],
        data: [10,9]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Number of students who believe robots will have a negative impact'
      }
    }
});
ctx=document.getElementById('line').getContext('2d');
chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'radar',
	responsive: true,
	maintainAspectRatio: false,

    // The data for our dataset
    data: {
      labels: ["1", "2","3","4","5"],
      datasets: [{
        label: "Amount",
        backgroundColor: ["#3e34cd"],
        data: [5,0,5,4,5]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Comfort Rating of students working alongside robots'
      }
    }
});