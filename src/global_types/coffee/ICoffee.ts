export type ICoffee = {
    description: string
    id: number
    image: string
    title: string
    price: number
    quantity: number
    total_price: number | null
    ingredients?: []
}