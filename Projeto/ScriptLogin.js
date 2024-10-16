const users = JSON.parse(localStorage.getItem('users')) || [];

// Função para simular registro de usuário
function handleRegistration(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtenha os valores de email e senha
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Verifique se o usuário já existe
    const userExists = users.some(user => user.email === email);

    if (userExists) {
        alert("Este email já está cadastrado.");
    } else {
        // Adicione o novo usuário ao array
        users.push({ email, password });
        localStorage.setItem('users', JSON.stringify(users)); // Armazena no localStorage
        alert("Usuário criado com sucesso!");
        // Limpar o formulário
        document.getElementById('registrationForm').reset();
    }
}

// Função para simular login
function handleLogin(event) {
    event.preventDefault(); // Impede o envio do formulário

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert("Login bem-sucedido!");
        // Redirecionar para a página register.html
        window.location.href = 'register.html';
    } else {
        alert("Email ou senha incorretos.");
    }
}
