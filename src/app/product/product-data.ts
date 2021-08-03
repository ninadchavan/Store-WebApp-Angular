// npm install angular-in-memory-web-api --save-dev
// provides in-memory data store
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Product } from './product.model'

export class ProductData implements InMemoryDbService{

    createDb(){
        const products: Product[] = [
            {
                id:1,
                name:"Apple Watch",
                code: "wat-001",
                category:"Watches",
                description: "Good Watch, Very Durable",
                price: 1000,
                rating: 4.5
            },
            {
                id:2,
                name:"Samsung Watch2",
                code: "wat-002",
                category:"Watches",
                description: "Good Watch, Very Durable",
                price: 2000,
                rating: 2.5
            },
            {
                id:3,
                name:"Apple Iphone 12",
                code: "mob-001",
                category:"Mobiles",
                description: "Good Phone, Very Durable",
                price: 3000,
                rating: 3.5
            },
            {
                id:4,
                name:"Pixel 6",
                code: "mob-002",
                category:"Mobiles",
                description: "Good Phone, Very Durable",
                price: 4000,
                rating: 5.0
            },
            {
                id:5,
                name:"One Plus 9R",
                code: "mob-003",
                category:"Mobiles",
                description: "Good Phone, Very Durable",
                price: 5000,
                rating: 4.0
            },
            {
                id:6,
                name:"Lenovo Laptop",
                code: "lap-001",
                category:"Laptops",
                description: "Good Laptop, Very Durable",
                price: 6000,
                rating: 1.5
            },
            {
                id:7,
                name:"Dell Laptop",
                code: "lap-007",
                category:"Laptops",
                description: "Good Laptop, Very Durable",
                price: 7000,
                rating: 1.0
            },
            {
                id:8,
                name:"Asus Laptop",
                code: "lap-008",
                category:"Laptops",
                description: "Good Laptop, Very Durable",
                price: 8000,
                rating: 4.5
            },
            {
                id:9,
                name:"Boat Headphone",
                code: "mus-009",
                category:"Music Devices",
                description: "Good Headphones, Very Durable",
                price: 9000,
                rating: 4.0
            },
            {
                id:10,
                name:"Sony Headphone",
                code: "mus-010",
                category:"Music Devices",
                description: "Good Headphones, Very Durable",
                price: 10000,
                rating: 4.5
            }
            
        ]

        return {products}
    }
}