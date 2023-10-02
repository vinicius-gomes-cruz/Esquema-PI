import {model, Schema } from 'mongoose';

export const Endereco = model('Endereco', new Schema({
	nome: {
		type: String,
		required: true,
	},
	numero: {
		type: String,
		required: true,
	},
	complemento: {
		type: String,
		required: true,
	},
	bairro: {
		required: true,
		type: [{
			bairro: {
				type: Schema.Types.ObjectId,
				required: true,
				ref: 'Bairro',
			}
		}],
	},
	cidade: {
		required: true,
		type: [{
			cidade: {
				type: Schema.Types.ObjectId,
				required: true,
				ref: 'Cidade',
			}
		}],
	}
}));