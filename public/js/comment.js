const commentFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#post-name').value.trim();
    const comment = document.querySelector('#comment').value.trim();

    if (name && comment) {
        const response = await fetch(`/api/post`, {
          method: 'POST',
          body: JSON.stringify({ name, comment }),
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