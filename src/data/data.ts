export type Van = {
    id: number
    name: string
    price: number
    imgUrl: string
    type: string
  }
  
  export const vans: Van[] = [
    {
      id: 1,
      name: "Modest Explorer",
      price: 60,
      imgUrl: "src/assets/van1.png",
      type: "simple",
    },
    {
      id: 2,
      name: "Beach Bum",
      price: 80,
      imgUrl: "src/assets/van2.png",
      type: "rugged",
    },
    {
      id: 3,
      name: "Reliable Red",
      price: 100,
      imgUrl: "src/assets/van3.jpg",
      type: "luxury",
    },
    {
      id: 4,
      name: "Dreamfinder",
      price: 65,
      imgUrl: "src/assets/van6.png",
      type: "simple",
    },
    {
      id: 5,
      name: "The Cruiser",
      price: 120,
      imgUrl: "src/assets/van4.png",
      type: "luxury",
    },
    {
      id: 6,
      name: "Green Wonder",
      price: 70,
      imgUrl: "src/assets/van5.png",
      type: "rugged",
    },
  ]