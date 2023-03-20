// fetch POST to create a new post 
const postButtonHandler = async (event) => {
    event.preventDefault();

    const post_content = document.getElementById("floatingTextarea2").value.trim();

        const response = await fetch('/profile', {
            method: 'POST',
            body: JSON.stringify({post_content}),
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

// fetch DELETE to delete post
async function deletePostButtonHandler (event) {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/dashboard/post/${id}`, {
            method: "DELETE",
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Could not delete post. Please try again!');
        }
    }
};

// handler for post post btn
document
    .getElementById("btn-post")
    .addEventListener('click', postButtonHandler);

