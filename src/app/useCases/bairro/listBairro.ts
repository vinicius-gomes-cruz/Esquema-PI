import { Request, Response } from 'express';
import { Bairro } from '../../models/Bairro';

export async function listBairro(req: Request, res: Response) {
	try {
		const bairro = await Bairro.find()
			.sort({creatAt: 1})
			.populate('cidade.cidades');

		res.json(bairro);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}

}