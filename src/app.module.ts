import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductCatalogModule } from './bounded-contexts/products-catalog/productCatalog.module';
import { ProductEntity } from "./bounded-contexts/products-catalog/infrastructure/entities/Product.entity";
import { CollectionEntity } from "./bounded-contexts/collections/infrastructure/entities/Collection.entity";
import { CollectionsModule } from './bounded-contexts/collections/collections.module';
import { CategoriesModule } from './bounded-contexts/categories/categories.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [ ProductEntity, CollectionEntity ],
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductCatalogModule,
    CollectionsModule,
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
