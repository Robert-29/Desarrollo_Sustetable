import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',       
  user: 'root',            
  password: 'robert.29.2005', 
  database: 'desarrollo'  
});

// Función para probar la conexión
const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Conexión a la base de datos MySQL exitosa!');
    connection.release(); 
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
  }
};

testConnection();

export default pool;
