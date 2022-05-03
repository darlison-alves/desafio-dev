import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Operation } from "./src/entities/operation.entity";
import { TypeTransaction } from "./src/entities/typeTransaction.entity";

export const config: TypeOrmModuleOptions = {
  type: "postgres",
  host: process.env.URL_DATABASE,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Operation, TypeTransaction],
  synchronize: true,
  logger: 'advanced-console',
  autoLoadEntities: true,
  migrations: ['database/migrations/**/*.ts'],
  cli: { migrationsDir: "database/migrations" },
  logging: "all",
  useUTC: true  
}
