import { Injectable } from "@nestjs/common";
import { ICollectionRepository } from "../../../../domain/ports/out/ICollectionRepository";
import { Collection } from "src/bounded-contexts/collections/domain/entities/Collection";

@Injectable()
export class CollectionRepository implements ICollectionRepository {
    findAll(ids: number[]): Promise<Collection[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: number): Promise<Collection> {
        throw new Error("Method not implemented.");
    }
    create(collection: Collection): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(collection: Collection): Promise<void> {
        throw new Error("Method not implemented.");
    }
    remove(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

}
