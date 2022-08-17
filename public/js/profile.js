// const newFormHandler = async (event) => {
//   event.preventDefault();

  // const name = document.querySelector('#project-name').value.trim();
  // const comment = document.querySelector('#comment').value.trim();
  // const description = document.querySelector('#project-desc').value.trim();

//   if (name && comment && description) {
//     const response = await fetch(`/api/post`, {
//       method: 'POST',
//       body: JSON.stringify({ name, comment, description }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to create project');
//     }
//   }
// };

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/post/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete post');
    }
  }
};


document
  .querySelector('.post-list')
  .addEventListener('click', delButtonHandler);
