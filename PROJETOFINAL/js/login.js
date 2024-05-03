
const loginContainer = document.getElementById('logcontainer')

const moveOverlay = () => loginContainer.classList.toggle('move')

document.getElementById('cadastrar').addEventListener('click', moveOverlay)
document.getElementById('logar').addEventListener('click', moveOverlay)
document.getElementById('open-register-mobile').addEventListener('click', moveOverlay)
document.getElementById('open-login-mobile').addEventListener('click', moveOverlay)

function logar(){
    let login = document.getElementById('login').value;
    let senha = document.getElementById('senha').value;
    
    console.log(login);
    console.log(senha);
    if (login === 'teste@gmail.com' && senha === 'senha123') {
        alert("Logado com sucesso!");
        location.href = "../Perfil.html"
    } else {
        alert("Login ou senha incorretos."); 
    }
}