// npm install angular-in-memory-web-api --save-dev
// provides in-memory data store
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Product } from './product.model'

export class ProductData implements InMemoryDbService{

    createDb(){
        const products: Product[] = [
            {
                id:1,
                name:"Racket",
                category:"Tennis",
                price:345,
                rating:4.5
            },
            {
                id:1,
                name:"Racket",
                category:"Tennis",
                price:345,
                rating:4.5
            },
            {
                id:1,
                name:"Racket",
                category:"Tennis",
                price:345,
                rating:4.5
            },
            {
                id:1,
                name:"Racket",
                category:"Tennis",
                price:345,
                rating:4.5
            }
        ]

        return {products}
    }
}