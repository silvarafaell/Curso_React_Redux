export default function handler(req, res) {
  const codigo = req.query.codigo;
  res.status(200).json({
    id: codigo,
    nome: `Rafael ${codigo}`,
    email: `francisco_rafael${codigo}@hotmail.com.br`,
  });
}
