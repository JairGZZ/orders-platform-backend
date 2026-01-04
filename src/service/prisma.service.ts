import 'dotenv/config'
import { PrismaMssql } from '@prisma/adapter-mssql'
import { PrismaClient } from 'generated/prisma/client'
import { Injectable } from '@nestjs/common';



@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
   const config = {
  user: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,
  database: process.env.DB_NAME!,
  server: process.env.HOST!,
  port: Number(process.env.PORT),
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};



const adapter = new PrismaMssql(config)
    super({ adapter });
  }
}
