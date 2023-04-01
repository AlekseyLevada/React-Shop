export type ICoffee = {
    description: string
    id: number | null
    image: string
    title: string
    price: number |  null
    quantity?: number
    total_price?: number
    ingredients?: []
}