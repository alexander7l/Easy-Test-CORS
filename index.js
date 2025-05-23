const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Habilita CORS para todos los orígenes (útil para pruebas con CodePen)
app.use(express.json()); // Parsea JSON en requests

// Ruta básica de prueba
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente ✅');
});

// Ruta POST para pruebas
app.post('/api/echo', (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Falta el parámetro "message".' });
  }

  // Retorna el mensaje recibido, modificado
  res.json({
    received: message,
    response: `Recibí tu mensaje: "${message}". ¡Funciona! 🚀`,
  });
});

// Arrancar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
