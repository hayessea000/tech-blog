const newPostSection = document.querySelector('.newpost');

const newPostReroute = (e) => {
  e.preventDefault();
  newPostSection.classList.remove("hidden");
}

const newPostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value;
  const message = document.querySelector('#post-message').value;

  await fetch(`/api/post`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      message,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.reload();
}

document
  .querySelector('.createPostButton')
  .addEventListener('click', newPostHandler)

document
  .querySelector('#new-post')
  .addEventListener('click', newPostReroute);