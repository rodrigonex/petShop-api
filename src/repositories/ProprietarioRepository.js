import connect from './db.js';

class ProprietarioRepository {
  async getProprietarios() {
    const conn = await connect();
    try {
      const res = await conn.query('SELECT * FROM proprietarios');
      return res.rows;
    } catch (Err) {
      throw new Err();
    } finally {
      conn.release();
    }
  }

  async getProprietario(id) {
    const conn = await connect();
    try {
      const res = await conn.query('SELECT * FROM proprietarios WHERE proprietario_id = $1', [id]);
      return res.rows[0];
    } catch (Err) {
      throw new Err();
    } finally {
      conn.release();
    }
  }

  async insertProprietario(proprietario) {
    const conn = await connect();
    try {
      const sql = 'INSERT INTO proprietarios (nome, telefone) VALUES ($1, $2) RETURNING *';
      const values = [proprietario.nome, proprietario.telefone];
      const res = await conn.query(sql, values);
      return res.rows[0];
    } catch (Err) {
      throw new Err();
    } finally {
      conn.release();
    }
  }

  async updateProprietario(proprietario, id) {
    const conn = await connect();
    try {
      const sql = 'UPDATE proprietarios SET nome = $1, telefone = $2 WHERE proprietario_id = $3 RETURNING *';
      const values = [proprietario.nome, proprietario.telefone, id];
      const res = await conn.query(sql, values);
      return res.rows[0];
    } catch (Err) {
      throw new Err();
    } finally {
      conn.release();
    }
  }

  async deleteProprietario(id) {
    const conn = await connect();
    try {
      await conn.query('DELETE FROM proprietarios WHERE proprietario_id = $1', [id]);
    } catch (Err) {
      throw new Err();
    } finally {
      conn.release();
    }
  }
}

export default new ProprietarioRepository();
