function saveUserProfile(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const user = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        bloodType: document.getElementById('bloodType').value,
        disabilities: document.getElementById('disabilities').value,
        allergies: document.getElementById('allergies').value
    };

    localStorage.setItem('currentUser', JSON.stringify(user));
    // Redireciona para a página de perfil após salvar
    window.location.href = 'Profile.html';
}


document.addEventListener('DOMContentLoaded', () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
        document.getElementById('nameDisplay').textContent = currentUser.name || 'N/A';
        document.getElementById('phoneDisplay').textContent = currentUser.phone || 'N/A';
        document.getElementById('addressDisplay').textContent = currentUser.address || 'N/A';
        document.getElementById('bloodTypeDisplay').textContent = currentUser.bloodType || 'N/A';
        document.getElementById('disabilitiesDisplay').textContent = currentUser.disabilities || 'N/A';
        document.getElementById('allergiesDisplay').textContent = currentUser.allergies || 'N/A';
    } else {
        alert("Nenhum usuário encontrado. Faça o registro primeiro.");
        window.location.href = 'register.html'; // Redireciona se não houver usuário
    }
});
