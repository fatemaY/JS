const users = [];
async function fetchUserInfo() {
    const username = document.getElementById('username').value;
    //     try {
//       if(users.includes(username)){
//         throw new Error('Error fetching user info:');
//       }
//       users.push(username);
//       const userData = await response.json();
//     //   console.log(userData)
//       displayUserInfo(userData);
//     }
//      catch (err) {
//       console.error(err);
//     }
// }
try {
  if(users.includes(username)){
          alert('User already processed...try again');
          return;
    }
  const response = await fetch(`https://api.github.com/users/${username}`);
  const userData = await response.json();
users.push(username)
console.log(users)
  displayUserInfo(userData);
} catch (error) {
  console.error('Error fetching user info:', error);
}
}

  
  function displayUserInfo(userData) {
    const userInfoContainer = document.getElementById('user-info');
    // userInfoContainer.innerHTML = '';
  
    if (userData.message === 'Not Found') {
      userInfoContainer.innerHTML = '<p>User not found.</p>';
      return;
    }
    const card = document.createElement('div');
    card.classList.add('card');
    card.addEventListener('click', () => openGithubProfile(userData.html_url));
  
    const avatar = document.createElement('img');
    avatar.src = userData.avatar_url;
    avatar.alt = 'User Avatar';
  
    const userInfo = document.createElement('div');
    const name = document.createElement('h3');
    name.innerText = `Name: ${userData.login}`;
  
    const publicRepos = document.createElement('p');
    publicRepos.innerText = `Public Repos: ${userData.public_repos}`;
  
    userInfo.appendChild(name);
    userInfo.appendChild(publicRepos);
  
    card.appendChild(avatar);
    card.appendChild(userInfo);
  
    userInfoContainer.appendChild(card);
    username.innerText='';
  }
  
  function openGithubProfile(profileUrl) {
    window.open(profileUrl, '_blank');
  }
  