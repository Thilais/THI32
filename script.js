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

// Manipulando o formulário RSVP
document.getElementById("rsvp-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const name = document.getElementById("name").value.trim(); // Remove espaços extras
    const attendance = document.getElementById("attendance").value;

    // Validação dos campos
    if (!name || !attendance) {
        document.getElementById("rsvp-message").textContent = "Por favor, preencha todos os campos antes de enviar.";
        document.getElementById("rsvp-message").style.color = "red";
        document.getElementById("rsvp-message").style.display = "block";
        return;
    }

    // Enviar os dados para o Google Sheets via Web App
    fetch("https://script.google.com/macros/s/AKfycby070uCfjlnJF7-f9Sw840td62E9uPH8iktf_sToNO7XGm4qJ4NcK1OGhmNCpnSghk/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, attendance }),
    })
        .then(response => response.text())
        .then(data => {
            document.getElementById("rsvp-message").textContent = "Confirmação enviada com sucesso!";
            document.getElementById("rsvp-message").style.color = "green";
            document.getElementById("rsvp-message").style.display = "block";
        })
        .catch(error => {
            document.getElementById("rsvp-message").textContent = "Erro ao enviar confirmação. Tente novamente.";
            document.getElementById("rsvp-message").style.color = "red";
            document.getElementById("rsvp-message").style.display = "block";
            console.error("Erro:", error);
        });

    // Limpa os campos do formulário
    document.getElementById("rsvp-form").reset();
});
