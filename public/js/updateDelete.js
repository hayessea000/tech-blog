const newPostSection = document.querySelector('.updatepost');

const deleteReroute = async (event) => {
    event.preventDefault();
    const buttonId = event.target.dataset.id
    console.log(buttonId)
    await fetch(`/api/post/${buttonId}`, {
    method: 'DELETE',
  });

  document.location.replace(`/dashboard`);
}


const updateHandler = (e) => {
    e.preventDefault();
    newPostSection.classList.remove("hidden");
}

const nowUpdateHandler = async (event) => {
  event.preventDefault();

  const buttonId = event.target.dataset.id
  const title = document.querySelector('#post-title').value;
  const body = document.querySelector('#post-message').value;

  await fetch(`/api/post/${buttonId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      body,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.reload();
}

document
  .querySelector('.updatePostButton')
  .addEventListener('click', nowUpdateHandler);

document
  .querySelector('.update-post')
  .addEventListener('click', updateHandler)

document
  .querySelector('.delete-post')
  .addEventListener('click', deleteReroute);
