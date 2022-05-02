
export class teste1651434863154 {

    async up(queryRunner) {
        await queryRunner.query(
            `INSERT INTO public.type_transaction
            (description, nature)
            VALUES('Débito', 'entrada');
            INSERT INTO public.type_transaction
            (description, nature)
            VALUES('Boleto', 'saida');
            INSERT INTO public.type_transaction
            (description, nature)
            VALUES('Financiamento', 'saida');
            INSERT INTO public.type_transaction
            (description, nature)
            VALUES('Crédito', 'entrada');
            INSERT INTO public.type_transaction
            (description, nature)
            VALUES('Recebimento Empréstimo', 'entrada');
            INSERT INTO public.type_transaction
            (description, nature)
            VALUES('Vendas', 'entrada');
            INSERT INTO public.type_transaction
            (description, nature)
            VALUES('Recebimento TED', 'entrada');
            INSERT INTO public.type_transaction
            (description, nature)
            VALUES('Recebimento DOC', 'entrada');
            INSERT INTO public.type_transaction
            (description, nature)
            VALUES('Aluguel', 'saida');`
        )
    }

    async down(queryRunner) {
    }

}
