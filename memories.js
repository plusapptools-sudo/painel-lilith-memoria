
// Simulação de memórias (substituir com fetch futuramente)
const memoriasExemplo = [
  {
    nome: "Relatório Final.pdf",
    timestamp: "2025-10-25T22:31:00Z"
  },
  {
    nome: "Plano de Ação.pdf",
    timestamp: "2025-10-24T17:10:00Z"
  }
];

const container = document.getElementById("memorias");

memoriasExemplo.forEach(mem => {
  const div = document.createElement("div");
  div.className = "memoria";
  div.innerHTML = `<strong>${mem.nome}</strong><br><em>Enviado em:</em> ${new Date(mem.timestamp).toLocaleString("pt-BR")}`;
  container.appendChild(div);
});
