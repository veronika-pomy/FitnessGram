const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
        label: 'Number of workouts 2022',
        data: [ 7, 10, 14, 10, 13, 14, 7, 9, 8, 10, 7, 5 ],
        borderWidth: 1
    },
    {
        label: 'Number of workouts 2023',
        data: [ 9, 11, 15, ],
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