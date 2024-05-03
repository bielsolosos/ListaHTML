function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var errorMessages = [];

    if (name.trim() == '') {
        errorMessages.push("O campo nome é obrigatório.");
    }

    if (email.trim() == '') {
        errorMessages.push("O campo email é obrigatório.");
    } else if (!isValidEmail(email)) {
        errorMessages.push("Por favor, insira um email válido.");
    }

    if (message.trim() == '') {
        errorMessages.push("O campo mensagem é obrigatório.");
    }

    if (errorMessages.length > 0) {
        alert(errorMessages.join('\n'));
        return false;
    }

    //  mensagem de agradecimento
    document.getElementById('thanks').style.display = 'block';
    
    // Esconder o formulário
    document.getElementById('myForm').style.display = 'none';

    return false; // Evitar o envio do formulário
}

function isValidEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function selectDifficulty(difficulty) {
    var difficulties = document.getElementsByClassName('difficulty-option');
    for (var i = 0; i < difficulties.length; i++) {
        difficulties[i].classList.remove('selected');
    }
    difficulty.classList.add('selected');
}
