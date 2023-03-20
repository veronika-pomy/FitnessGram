const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
        label: 'My Calories This Week',
        data: [ 2230, 2200, 2800, 2500, 2200, 2300, 3000 ],
        borderWidth: 1
    },
    {
        label: 'My Calories Last Week',
        data: [ 2530, 2400, 3300, 2700, 2500, 2700, 3500 ],
        borderWidth: 1
    }]
    },
    options: {
    scales: {
        y: {
        beginAtZero: true
        }
    }
    }
});