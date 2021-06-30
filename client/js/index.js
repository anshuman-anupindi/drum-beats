const usernameInput = document.querySelector('.username-input');
const passwordInput = document.querySelector('.password-input');
const loginForm = document.querySelector('.log-in-form');
const loginContainer = document.querySelector('.log-in-container');
const appContainer = document.querySelector('.app-container');


let data = {
    username: 'start',
    password: 'start'
}

axios
    .get('/api/beats')
    .then(res => {
        let tracks = res.data;
        let track = document.createElement('p');
        track.textContent = tracks
        document.body.appendChild(track)
    })

function handleLogin(e) {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(loginForm));
    console.log(data);
    axios.get(`/api/sessions`,{
        params: {username: data.username, password: data.password}
    }).then(res => {
        if (res.data.login) {
            handleLoggedIn();
        }
    })
}

function handleLoggedIn(e) {
    loginContainer.style.display = 'none';
    appContainer.style.display = 'grid';
}


loginForm.addEventListener('submit', handleLogin);
