import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';
import { listEnderecos } from './app/useCases/endereco/listEnderecos';
import { createEndereco } from './app/useCases/endereco/createEndereco';
import { listCidade } from './app/useCases/cidade/listCidades';
import { createCidade } from './app/useCases/cidade/createCidade';
import { listCidadeByEndereco } from './app/useCases/endereco/listEnderecoByCidade';
import { listBairro } from './app/useCases/bairro/listBairro';
import { createBairro } from './app/useCases/bairro/createBairro';
export const router = Router();

//configuração do multer
const upload = multer({
	storage: multer.diskStorage({
		destination(req, file, callback){
			callback(null, path.resolve(__dirname, '..', 'uploads'));
		},
		filename(req, file, callback){
			callback(null, `${Date.now()}-${file.originalname}`);
		},
	})

});

//List categories
router.get('/listendereco', listEnderecos);

//Create category
router.post('/endereco', createEndereco);

//List products
router.get('/listcidade', listCidade);

//Create cidade
router.post('/cidade', createCidade);
//Get products by category
router.get('/endereco/:enderecoId/endereco', listCidadeByEndereco);

//List orders
router.get('/listbairro', listBairro);

//Create orders
router.post('/bairro', createBairro);