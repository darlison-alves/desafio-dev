import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Operation } from "src/entities/operation.entity";
import { TypeTransaction } from "src/entities/typeTransaction.entity";

export const config: TypeOrmModuleOptions = {
  type: "postgres",
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities: [Operation, TypeTransaction],
  synchronize: true,
  logger: 'advanced-console',
  autoLoadEntities: true,
  migrations: ['database/migrations/**/*.ts'],
  cli: { migrationsDir: "database/migrations" },
  logging: "all",
  useUTC: true,
  
}
