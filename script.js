function scrollToDetails() {
    const detailsSection = document.getElementById('details');
    detailsSection.scrollIntoView({ behavior: 'smooth' });
}

function goToDetails() {
    window.location.href = "details.html";
}

// Função para copiar o endereço
function copyAddress() {
    const address = "Av. Bartholomeu de Carlos, 675 - Salão de Festas";
    navigator.clipboard.writeText(address).then(() => {
        alert("Endereço copiado para a área de transferência!");
    }).catch(() => {
        alert("Erro ao copiar o endereço. Tente novamente!");
    });
}

// Função para voltar à página inicial
function goBack() {
    window.location.href = "index.html";
}

// Evento para o botão "Sim, eu vou"
document.getElementById("yes-button").addEventListener("click", function () {
    const url = "https://wa.me/5511945208820?text=Olá!%20Confirmo%20minha%20presença%20na%20festa!%20Mal%20posso%20esperar!%20🎉";
    window.open(url, "_blank"); // Abre o link em uma nova aba
});

// Evento para o botão "Não vou poder ir"
document.getElementById("no-button").addEventListener("click", function () {
    const url = "https://wa.me/5511945208820?text=Olá!%20Infelizmente%20não%20poderei%20comparecer%20à%20festa.%20Desejo%20um%20ótimo%20evento!%20❤️";
    window.open(url, "_blank"); // Abre o link em uma nova aba
});
