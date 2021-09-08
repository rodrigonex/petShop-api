import pg from 'pg';

async function connect() {
  if (global.connection) {
    return global.connection.connect();
  }

  const pool = new pg.Pool({
    connectionString: 'postgres://nrsqzcsb:RqchWoSTL8B39i6wm1SSWpL6q1iEM3cz@chunee.db.elephantsql.com/nrsqzcsb',
  });

  global.connection = pool;
  return pool.connect();
}

export default connect;
