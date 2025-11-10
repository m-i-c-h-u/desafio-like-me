const express = require('express')
const cors = require('cors')
const { obtenerPosts, agregarPost } = require('./consultas')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/posts', async (req, res) => {
  try {
    res.json(await obtenerPosts())
  } catch (e) {
    res.status(500).send('Error al obtener posts')
  }
})

app.post('/posts', async (req, res) => {
  try {
    const { titulo, img, descripcion } = req.body
    res.status(201).json(await agregarPost(titulo, img, descripcion))
  } catch (e) {
    res.status(500).send('Error al agregar post')
  }
})

app.listen(3000, () => console.log('🚀 Servidor corriendo en http://localhost:3000'))
