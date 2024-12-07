import express from 'express';
import cors from 'cors';
import pool from './db.js';

const app = express();
app.use(cors());
app.use(express.json());

// Obtener la lista de alumnos
app.get('/alumnos', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM alumnos');
        res.json(rows);
    } catch (error) {
        console.error('Error al obtener alumnos:', error);
        res.status(500).json({ message: 'Error al obtener los alumnos' });
    }
});

// Obtener un alumno específico por matrícula
app.get('/alumnos/:matricula', async (req, res) => {
    const { matricula } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM alumnos WHERE matricula = ?', [matricula]);
        if (rows.length > 0) {
            res.json(rows[0]); // Devuelve toda la información del alumno (incluyendo nombre)
        } else {
            res.status(404).json({ message: 'Alumno no encontrado' });
        }
    } catch (error) {
        console.error('Error al obtener el alumno:', error);
        res.status(500).json({ message: 'Error al obtener el alumno' });
    }
});

// Actualizar datos de evaluación de un alumno
app.put('/alumnos/:matricula', async (req, res) => {
    const { matricula } = req.params;
    const { evaluacion_continua, reporte, ponencia, examen, total } = req.body;
    try {
        const [result] = await pool.query(
            `
            UPDATE alumnos
            SET evaluacion_continua = ?, reporte = ?, ponencia = ?, examen = ?, total = ?
            WHERE matricula = ?
            `,
            [evaluacion_continua, reporte, ponencia, examen, total, matricula]
        );

        if (result.affectedRows > 0) {
            res.json({ message: 'Alumno actualizado correctamente' });
        } else {
            res.status(404).json({ message: 'Alumno no encontrado' });
        }
    } catch (error) {
        console.error('Error al actualizar el alumno:', error);
        res.status(500).json({ message: 'Error al actualizar el alumno' });
    }
});

// Inicia el servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
