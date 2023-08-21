/* eslint-disable import/no-unresolved */
import mysql from 'mysql2/promise'; // Correct the module name

import { withDatabase } from '../../middleware/db';

export default withDatabase(async (reqWithDb, res) => {
	console.log('API USERS');
	if (reqWithDb.method === 'GET') {
		const connection = reqWithDb.connection as unknown as mysql.PoolConnection;

		const [results, fields] = await connection.execute('SELECT * FROM users');

		const users = Array.isArray(results) ? results : [];

		if (users.length === 0) {
			// 더미 데이터 생성
			const dummyUsers = [
				{ id: 1, name: 'John Doe' },
				{ id: 2, name: 'Jane Smith' },
				// 더 많은 더미 데이터 추가 가능
			];

			return res.status(200).json(dummyUsers);
		}

		return res.status(200).json(users);
	}
});
