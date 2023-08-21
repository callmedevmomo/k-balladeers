/* eslint-disable import/no-extraneous-dependencies */
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		// const exclusiveItems = ["fluv_welcome_1"];
		const r = {
			data: {
				status: 'success',
			},
		};
		res.status(200).json(r.data);
	} catch (error) {
		throw Error('error occurred');
	}
};
