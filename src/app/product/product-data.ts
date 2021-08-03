// npm install angular-in-memory-web-api --save-dev
// provides in-memory data store
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Product } from './product.model'

export class ProductData implements InMemoryDbService{

    createDb(){
        const products: Product[] = [
            {
                id:1,
                name:"Watch1",
                code: "wat-001",
                category:"Watches",
                description: "Good Watch, Very Durable",
                price: 1000,
                rating: 4.5
            },
            {
                id:2,
                name:"Watch2",
                code: "wat-002",
                category:"Watches",
                description: "Good Watch, Very Durable",
                price: 2000,
                rating: 4.5
            },
            {
                id:3,
                name:"Watch3",
                code: "wat-003",
                category:"Watches",
                description: "Good Watch, Very Durable",
                price: 3000,
                rating: 4.5
            },
            {
                id:4,
                name:"Watch4",
                code: "wat-004",
                category:"Watches",
                description: "Good Watch, Very Durable",
                price: 4000,
                rating: 4.5
            },
            {
                id:5,
                name:"Watch5",
                code: "wat-005",
                category:"Watches",
                description: "Good Watch, Very Durable",
                price: 5000,
                rating: 4.5
            },
            {
                id:6,
                name:"Watch6",
                code: "wat-006",
                category:"Watches",
                description: "Good Watch, Very Durable",
                price: 6000,
                rating: 4.5
            },
            {
                id:7,
                name:"Watch7",
                code: "wat-007",
                category:"Watches",
                description: "Good Watch, Very Durable",
                price: 7000,
                rating: 4.5
            },
            {
                id:8,
                name:"Watch8",
                code: "wat-008",
                category:"Watches",
                description: "Good Watch, Very Durable",
                price: 8000,
                rating: 4.5
            },
            {
                id:9,
                name:"Watch9",
                code: "wat-009",
                category:"Watches",
                description: "Good Watch, Very Durable",
                price: 9000,
                rating: 4.5
            },
            {
                id:10,
                name:"Watch10",
                code: "wat-010",
                category:"Watches",
                description: "Good Watch, Very Durable",
                price: 10000,
                rating: 4.5
            }
            
        ]

        return {products}
    }
}