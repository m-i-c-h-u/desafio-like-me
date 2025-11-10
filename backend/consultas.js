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

module.exports = { obtenerPosts, agregarPost }
