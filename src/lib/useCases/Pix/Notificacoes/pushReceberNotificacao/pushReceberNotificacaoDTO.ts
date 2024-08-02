
export interface pushReceberNotificacaoDTO {
	tipoNotificacao: string;
	cpfCnpj: string;
	mensagem: {
		key: string;
		keyType: string;
		account: {
			participant: string;
			branch: string;
			accountNumber: string;
			accountType: string;
			openingDate: string;
		},
		owner: {
			type: string;
			taxIdNumber: string;
			name: string;
			tradeName: string;
		},
		creationDate: string;
		keyOwnershipDate: string;
		status: string;

	};
}

