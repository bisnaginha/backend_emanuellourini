const authController = require('./authController.js');

function criar(req, res) {
  // Verifica se a requisição possui um usuário autenticado
  const usuario = authController.usuarioDaRequisicao(req);
  if (usuario === null) {
    return res.status(401).json({ erro: 'Faca login primeiro.' });
  }

  // Prossegue com a criação normal do treino
  // ... lógica existente do seu treinosController ...
}
