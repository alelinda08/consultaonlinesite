function showAlert() {
    alert("Agendamentos de consulta em breve");
}

document.getElementById("contactForm").addEventListener("submit",function(event){
    event.preventDefault();
    alert("Mensagem enviada com sucesso");
});