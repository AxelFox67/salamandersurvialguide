const postFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#post-name').value.trim()
    const description = document.querySelector('#post-desc').value.trim();

    if (name && description) {
        const response = await fetch(`/api/post`, {
          method: 'POST',
          body: JSON.stringify({ name, description }),
          headers: {
            'Content-Type': 'application/json',
          },
        });


    if (response.ok) {
        document.location.replace('/post');
      } else {
        alert('Failed to create project');
      }
    }
  };

  document
  .querySelector('.new-post')
  .addEventListener('submit', postFormHandler);