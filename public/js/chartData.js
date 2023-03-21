// fetch POST to add calorie count to table
const caloriesButtonHandler = async (event) => {
    event.preventDefault();

    const calories = document.getElementById("floatingTextarea2").value.trim();

        const response = await fetch('/api/dashboard/calories', {
            method: 'POST',
            body: JSON.stringify({ calories }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    
    if (response.ok) {
        document.location.reload();
    } else {
        alert('Could not create a new post. Please try again!');
    }
};

// handler for calories post btn
document
    .getElementById("btn-post-calories")
    .addEventListener('click', caloriesButtonHandler);