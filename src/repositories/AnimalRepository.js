import connect from './db.js';

class AnimalRepository {
  async getAnimais() {
    const conn = await connect();
    try {
      const res = await conn.query('SELECT * FROM animais');
      return res.rows;
    } catch (Err) {
      throw new Err();
    } finally {
      conn.release();
    }
  }

  async getAnimal(id) {
    const conn = await connect();
    try {
      const res = await conn.query('SELECT * FROM animais WHERE animal_id = $1', [id]);
      return res.rows[0];
    } catch (Err) {
      throw new Err();
    } finally {
      conn.release();
    }
  }

  async insertAnimal({ nome, tipo, proprietario_id }) {
    const conn = await connect();
    try {
      const sql = 'INSERT INTO animais (nome, tipo, proprietario_id) VALUES ($1, $2, $3) RETURNING *';
      const values = [nome, tipo, proprietario_id];
      const res = await conn.query(sql, values);
      return res.rows[0];
    } catch (Err) {
      throw new Err();
    } finally {
      conn.release();
    }
  }
}

export default new AnimalRepository();
