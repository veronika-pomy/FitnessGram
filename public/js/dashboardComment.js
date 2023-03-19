// fetch POST to create comment on specific post
const createCommentButtonHandler = async (event) => {
    event.preventDefault();

    const comment_text = document.getElementById('comment-content').value.trim();
    const postId = location.pathname.split('/')[2];

    console.log(postId);

    // test that only posts when content is provided
    if (comment_text) {
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
    }
};

// handler for post comment btn
document
    .getElementById('button-addon1')
    .addEventListener('click', createCommentButtonHandler);
