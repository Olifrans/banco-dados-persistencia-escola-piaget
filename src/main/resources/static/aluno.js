document.addEventListener('DOMContentLoaded', () => {
  const apiUrl = 'http://localhost:8080/alunos';
  const tbody = document.getElementById('aluno-tbody');
  const form = document.getElementById('aluno-form');
  const alunoId = document.getElementById('aluno-id');
  const nomeInput = document.getElementById('nome');
  const emailInput = document.getElementById('email');
  const telefoneInput = document.getElementById('telefone');

  // Função para carregar alunos
  function carregarAlunos() {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        tbody.innerHTML = '';
        data.forEach(aluno => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td>${aluno.nome}</td>
            <td>${aluno.email}</td>
            <td>${aluno.telefone}</td>
            <td>
              <button class="btn btn-warning btn-sm me-2"
                onclick="editarAluno(${aluno.id}, '${aluno.nome}', '${aluno.email}', '${aluno.telefone}')">
                Editar
              </button>
              <button class="btn btn-danger btn-sm" onclick="excluirAluno(${aluno.id})">
                Excluir
              </button>
            </td>
          `;
          tbody.appendChild(tr);
        });
      })
      .catch(err => {
        console.error('Erro ao buscar alunos:', err);
        alert('Erro ao carregar alunos.');
      });
  }

  // Função salvar (cadastrar ou atualizar)
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const aluno = {
      nome: nomeInput.value,
      email: emailInput.value,
      telefone: telefoneInput.value
    };

    if (alunoId.value) {
      // Atualizar
      fetch(`${apiUrl}/${alunoId.value}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(aluno)
      })
      .then(() => {
        alert('Aluno atualizado com sucesso!');
        form.reset();
        alunoId.value = '';
        carregarAlunos();
      });
    } else {
      // Criar
      fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(aluno)
      })
      .then(() => {
        alert('Aluno cadastrado com sucesso!');
        form.reset();
        carregarAlunos();
      });
    }
  });

  // Expor funções globais
  window.editarAluno = (id, nome, email, telefone) => {
    alunoId.value = id;
    nomeInput.value = nome;
    emailInput.value = email;
    telefoneInput.value = telefone;
  };

  window.excluirAluno = (id) => {
    if (confirm('Deseja excluir este aluno?')) {
      fetch(`${apiUrl}/${id}`, { method: 'DELETE' })
        .then(() => {
          alert('Aluno excluído!');
          carregarAlunos();
        });
    }
  };

  // Inicializar
  carregarAlunos();
});
