// middleware/db.ts

import { NextApiRequest, NextApiResponse } from 'next';

import mysql from 'mysql2/promise';

const pool = mysql.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	connectionLimit: 10,
});

interface RequestWithDb extends NextApiRequest {
	dbConnection: mysql.PoolConnection;
}

export const withDatabase =
	(
		handler: (
			req: RequestWithDb,
			res: NextApiResponse,
			dbConnection: mysql.PoolConnection,
		) => Promise<void>,
	) =>
	async (req: NextApiRequest, res: NextApiResponse) => {
		console.log('?????????????????');
		const connection = (await pool.getConnection()) as mysql.PoolConnection;
		try {
			const reqWithDb: any = {
				...req,
				connection,
			};
			console.log('working');
			await handler(reqWithDb, res, connection);
		} catch (error) {
			console.error('Error during API request:', error);
			return res.status(500).json({ message: 'Internal server error' });
		} finally {
			connection.release();
		}
	};
