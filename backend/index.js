const express = require('express')
const cors = require('cors')
const { obtenerPosts, agregarPost, modificarLikes, eliminarPost } = require('./consultas')

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

app.put('/posts/like/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const post = await modificarLikes(id);
    res.json(post);
  } catch (error) {
    res.status(500).send("Error al actualizar los likes");
  }
});

app.delete('/posts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const postEliminado = await eliminarPost(id);

    if (!postEliminado) {
      return res.status(404).json({ error: "Post no encontrado" });
    }

    res.json({ message: "Post eliminado con éxito", postEliminado });
  } catch (error) {
    console.error("Error al eliminar el post:", error);
    res.status(500).send("Error al eliminar el post");
  }
});


app.listen(3000, () => console.log('🚀 Servidor corriendo en http://localhost:3000'))
