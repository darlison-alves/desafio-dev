import { NestFactory } from '@nestjs/core';
import { getConnection } from 'typeorm';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3000']
  })
  await app.listen(5000, () => {
    getConnection().query(`INSERT INTO public.type_transaction
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
    VALUES('Aluguel', 'saida');`)
  });
}
bootstrap();
