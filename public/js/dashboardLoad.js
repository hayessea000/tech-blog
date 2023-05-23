const renderSelectedPost = async (event) => {
    const buttonId = event.target.dataset.id
    console.log({buttonId});
  
    document.location.replace(`/dashboard/${buttonId}`);
    
  };
  
  document.querySelectorAll('.postCard').forEach(button => {button.addEventListener('click', renderSelectedPost)});