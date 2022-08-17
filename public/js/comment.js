const commentFormHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector('#comment-input').value.trim();

  if (comment) {
    const response = await fetch(`/api/comment`, {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/comment');
    } else {
      alert('Failed to create comment');
    }
  }
};

document
  .querySelector('.new-comment')
  .addEventListener('submit', commentFormHandler);