const deleteReroute = async (event) => {
    event.preventDefault();
    const buttonId = event.target.dataset.id
    console.log(buttonId)
    await fetch(`/api/post/${buttonId}`, {
    method: 'DELETE',
  });

  document.location.replace(`/dashboard`);
}

const updateHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value;
  const message = document.querySelector('#post-message').value;

  await fetch(`/api/newpost`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      message,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

//   document.location.reload();
}

document
  .querySelector('.update-post')
  .addEventListener('click', updateHandler)

document
  .querySelector('.delete-post')
  .addEventListener('click', deleteReroute);