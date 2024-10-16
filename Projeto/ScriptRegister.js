  // Função para lidar com o registro adicional
        function handleAdditionalInfo(event) {
            event.preventDefault(); // Impede o envio do formulário

            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const address = document.getElementById('address').value;
            const bloodType = document.getElementById('bloodType').value;
            const disabilities = document.getElementById('disabilities').value;
            const allergies = document.getElementById('allergies').value;

            const users = JSON.parse(localStorage.getItem('users')) || [];
            const loggedInUser = users[users.length - 1]; // Pega o último usuário registrado

            // Salvar informações adicionais no localStorage
            const userInfo = {
                ...loggedInUser,
                name,
                phone,
                address,
                bloodType,
                disabilities,
                allergies
            };

            localStorage.setItem('currentUser', JSON.stringify(userInfo)); // Armazena o usuário atual

            alert("Cadastro salvo com sucesso!");
            // Redirecionar para a página home.html
            window.location.href = 'Home.html';
        }