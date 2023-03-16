// fetch POST to create postconst createPostButtonHandler = async (event) => {
const createPostButtonHandler = async (event) => {
    event.preventDefault();

    const post_content = document.querySelector('#post-content').value.trim();
    // const is_workout = document.querySelector('#checkbox'); 
    // need to figure out how it will work with a checkbox, right now probably defaults to 0
    // const calories = document.querySelector('#post-calories').value.trim();

    if (title && content) {
        const response = await fetch(`/api/dashboard`, {
        method: 'POST',
        body: JSON.stringify({ post_content, is_workout, calories }),
        headers: {
            'Content-Type': 'application/json',
        },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Could not create a new post. Please try again!');
        }
    }
};

// fetch POST to create comment on specific post
const createCommentButtonHandler = async (event) => {
    event.preventDefault();

    const comment_text = document.querySelector("#comment-content").value.trim();
    const locationArr = location.pathname.split('/');
    const postId = locationArr[locationArr - 1];

    const response = await fetch('/api/dashboard/post/' + postId , {
        method: 'POST',
        body: JSON.stringify({comment_text}),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert('Could not leave a comment. Please try again!');
    };
};

// fetch PUT to update post
async function updatePostButtonHandler (event) {

    if (event.target.hasAttribute('data-id')){

        const id = event.target.getAttribute('data-id');
        const update = document.querySelector(`#post-content-update-${id}`).value.trim(); // this is probably id from the db

        const response = await fetch(`/api/dashboard/post/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    'post_content': update,
                }
            )
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Could not update post. Please try again!');
        }
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
  .querySelector('.form-post-btn') // refer to views
  .addEventListener('submit', createPostButtonHandler);

// handler for post comment btn
document
  .querySelector('.form-comment-btn') // refer to views
  .addEventListener('submit', createCommentButtonHandler);

// handler for update post btn

// handler for delete post btn

// write a handler for checking working out box

// if have time - write handler for liking post