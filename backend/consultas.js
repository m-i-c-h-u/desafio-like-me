const { Pool } = require('pg')

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'postgres',
  database: 'likeme',
  port: 5432,
  allowExitOnIdle: true
})

const obtenerPosts = async () => {
  const { rows } = await pool.query('SELECT * FROM posts ORDER BY id DESC')
  return rows
}

const agregarPost = async (titulo, img, descripcion) => {
  const { rows } = await pool.query(
    'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0) RETURNING *',
    [titulo, img, descripcion]
  )
  return rows[0]
}

const modificarLikes = async (id) => {
  try {
    const consulta = "UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *";
    const values = [id];
    const result = await pool.query(consulta, values);
    return result.rows[0];
  } catch (error) {
    console.error("Error al modificar los likes:", error);
    throw error;
  }
}

const eliminarPost = async (id) => {
  try {
    const consulta = "DELETE FROM posts WHERE id = $1 RETURNING *";
    const values = [id];
    const result = await pool.query(consulta, values);
    return result.rowCount > 0 ? result.rows[0] : null;
  } catch (error) {
    console.error("Error al eliminar el post:", error);
    throw error;
  }
};



module.exports = { obtenerPosts, agregarPost, modificarLikes, eliminarPost }
