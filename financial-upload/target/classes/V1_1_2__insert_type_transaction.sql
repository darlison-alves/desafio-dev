

INSERT INTO public.type_transaction
	(id, description, nature)
	select 1, 'Débito', 'entrada'
where not exists (select id from public.type_transaction where id = 1);

 INSERT INTO public.type_transaction
	(id, description, nature)
	select 2, 'Boleto', 'saida'
where not exists (select id from public.type_transaction where id = 2);

INSERT INTO public.type_transaction
(id, description, nature)
select 3, 'Financiamento', 'saida'
where not exists (select id from public.type_transaction where id = 3);

INSERT INTO public.type_transaction
(id, description, nature)
select 4, 'Crédito', 'entrada'
where not exists (select id from public.type_transaction where id = 4);

INSERT INTO public.type_transaction
(id, description, nature)
select 5, 'Recebimento Empréstimo', 'entrada'
where not exists (select id from public.type_transaction where id = 5);

INSERT INTO public.type_transaction
(id, description, nature)
select 6, 'Vendas', 'entrada'
where not exists (select id from public.type_transaction where id = 6);

INSERT INTO public.type_transaction
(id, description, nature)
select 7, 'Recebimento TED', 'entrada'
where not exists (select id from public.type_transaction where id = 7);

INSERT INTO public.type_transaction
(id, description, nature)
select 8, 'Recebimento DOC', 'entrada'
where not exists (select id from public.type_transaction where id = 8);

INSERT INTO public.type_transaction
(id, description, nature)
select 9, 'Aluguel', 'saida'
where not exists (select id from public.type_transaction where id = 9);

INSERT INTO public.type_transaction
(id, description, nature)
select 10, 'Débito', 'entrada'
where not exists (select id from public.type_transaction where id = 10);

INSERT INTO public.type_transaction
(id, description, nature)
select 11, 'Boleto', 'saida'
where not exists (select id from public.type_transaction where id = 11);

INSERT INTO public.type_transaction
(id, description, nature)
select 12, 'Financiamento', 'saida'
where not exists (select id from public.type_transaction where id = 12);

INSERT INTO public.type_transaction
(id, description, nature)
select 13, 'Crédito', 'entrada'
where not exists (select id from public.type_transaction where id = 13);

INSERT INTO public.type_transaction
(id, description, nature)
select 14, 'Recebimento Empréstimo', 'entrada'
where not exists (select id from public.type_transaction where id = 14);

INSERT INTO public.type_transaction
(id, description, nature)
select 15, 'Vendas', 'entrada'
where not exists (select id from public.type_transaction where id = 15);

INSERT INTO public.type_transaction
(id, description, nature)
select 16, 'Recebimento TED', 'entrada'
where not exists (select id from public.type_transaction where id = 16);

INSERT INTO public.type_transaction
(id, description, nature)
select 17, 'Recebimento DOC', 'entrada'
where not exists (select id from public.type_transaction where id = 17);

INSERT INTO public.type_transaction
(id, description, nature)
select 18, 'Aluguel', 'saida'
where not exists (select id from public.type_transaction where id = 18);