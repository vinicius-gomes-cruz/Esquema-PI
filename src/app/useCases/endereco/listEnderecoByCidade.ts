import { Request, Response } from 'express';
import { Endereco } from '../../models/Endereco';

export async function listCidadeByEndereco(req: Request, res: Response) {
	try {
		const {EnderecoId} = req.params;

		const endereco = await Endereco.find().where('cidade').equals(EnderecoId);

		res.json(endereco);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}

}