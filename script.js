
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
    });
}

// Função para voltar à página inicial
function goBack() {
    window.location.href = "index.html";
}

// Manipulando o formulário RSVP
document.getElementById("rsvp-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const name = document.getElementById("name").value;
    const attendance = document.getElementById("attendance").value;

    // Salvar no Local Storage
    const rsvpList = JSON.parse(localStorage.getItem("rsvpList")) || [];
    rsvpList.push({ name, attendance });
    localStorage.setItem("rsvpList", JSON.stringify(rsvpList));

    // Exibir mensagem de confirmação
    const message =
        attendance === "yes"
            ? `Obrigada, ${name}! Mal podemos esperar para te ver na festa! 🎉`
            : `Poxa, ${name}, sentimos muito que você não poderá vir. 😢`;

    document.getElementById("rsvp-message").textContent = message;
    document.getElementById("rsvp-message").style.display = "block";

    // Limpa os campos do formulário
    document.getElementById("rsvp-form").reset();
});
