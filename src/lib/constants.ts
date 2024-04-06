
import { FilterOptions } from './types'

export const exampleCoffeedata = [
  {
    id: 1,
    name: 'Brew Master',
    notes: 'a caramel and nutty blend with a hint of chocolate.',
    image: '/coffee1.webp',
    price: {
      create: {
        regular: 2,
        large: 5,
      },
    },
    coffeeProfile: {
      create: {
        type: 'decaf',
        strength: 'light',
        flavour: 'fruity',
        origin: 'africa',
      },
    },
    reviews: {
      create: [
        { rating: 5, comment: 'This is the best coffee I have ever had!' },
        { rating: 4, comment: 'nice' },
      ],
    },
  },
  {
    id: 2,
    name: 'Cosmic Bliss',
    notes: 'a caramel and nutty blend with a hint of chocolate.',

    image: '/coffee1.webp',
    price: {
      create: {
        regular: 2,
        large: 5,
      },
    },
    coffeeProfile: {
      create: {
        type: 'espresso',
        strength: 'dark',
        flavour: 'nutty, chocolate',
        origin: 'south america',
      },
    },
    reviews: {
      create: [
        { rating: 5, comment: 'This is the best coffee I have ever had!' },
        { rating: 4, comment: 'nice' },
      ],
    },
  },
  {
    id: 3,
    name: 'Supernova',
    notes: 'a caramel and nutty blend with a hint of chocolate.',

    image: '/coffee3.webp',
    price: {
      create: {
        regular: 2,
        large: 5,
      },
    },
    coffeeProfile: {
      create: {
        type: 'filter',
        strength: 'medium',
        flavour: 'fruity, nutty',
        origin: ' asia',
      },
    },
    reviews: {
      create: [
        { rating: 5, comment: 'This is the best coffee I have ever had!' },
        { rating: 4, comment: 'nice' },
      ],
    },
  },
  {
    id: 4,
    name: 'Phoenix Rising',
    notes: 'a caramel and nutty blend with a hint of chocolate.',

    image: '/coffee3.webp',
    price: {
      create: {
        regular: 2,
        large: 5,
      },
    },
    coffeeProfile: {
      create: {
        type: 'espresso',
        strength: 'light',
        flavour: 'fruity',
        origin: ' asia',
      },
    },
    reviews: {
      create: [
        { rating: 5, comment: 'This is the best coffee I have ever had!' },
        { rating: 4, comment: 'nice' },
      ],
    },
  },
  {
    id: 5,
    name: 'Bliss',
    notes: 'a caramel and nutty blend with a hint of chocolate.',

    image: '/coffee5.webp',
    price: {
      create: {
        regular: 2,
        large: 5,
      },
    },
    coffeeProfile: {
      create: {
        type: 'filter',
        strength: 'medium',
        flavour: 'nutty',
        origin: 'south america',
      },
    },
    reviews: {
      create: [
        { rating: 5, comment: 'This is the best coffee I have ever had!' },
        { rating: 4, comment: 'nice' },
      ],
    },
  },
  {
    id: 6,
    name: 'Moonlight Blend',
    notes: 'a caramel and nutty blend with a hint of chocolate.',

    image: '/coffee5.webp',
    price: {
      create: {
        regular: 2,
        large: 5,
      },
    },
    coffeeProfile: {
      create: {
        type: ' decaf',
        strength: ' dark',
        flavour: ' chocolate',
        origin: 'africa',
      },
    },
    reviews: {
      create: [
        { rating: 5, comment: 'This is the best coffee I have ever had!' },
        { rating: 4, comment: 'nice' },
      ],
    },
  },
  {
    id: 7,
    name: 'Dark Roast Discovery Sets',
    notes: 'a caramel and nutty blend with a hint of chocolate.',

    image: '/coffee8.webp',
    price: {
      create: {
        regular: 2,
        large: 5,
      },
    },
    coffeeProfile: {
      create: {
        type: 'espresso',
        strength: 'medium',
        flavour: ' nutty, chocolate',
        origin: 'africa',
      },
    },
    reviews: {
      create: [
        { rating: 5, comment: 'This is the best coffee I have ever had!' },
        { rating: 4, comment: 'nice' },
      ],
    },
  },
  {
    id: 8,
    name: 'Light Roast Discovery Sets',
    notes: 'a caramel and nutty blend with a hint of chocolate.',

    image: '/coffee8.webp',
    price: {
      create: {
        regular: 2,
        large: 5,
      },
    },
    coffeeProfile: {
      create: {
        type: 'espresso, ',
        strength: 'medium',
        flavour: 'fruity',
        origin: ' asia',
      },
    },
    reviews: {
      create: [
        { rating: 5, comment: 'This is the best coffee I have ever had!' },
        { rating: 4, comment: 'nice' },
      ],
    },
  },
  {
    id: 9,
    name: 'Ultimate Roast Discovery Sets',
    notes: 'a caramel and nutty blend with a hint of chocolate.',

    image: '/coffee8.webp',
    price: {
      create: {
        regular: 2,
        large: 5,
      },
    },
    coffeeProfile: {
      create: {
        type: 'espresso',
        strength: 'dark',
        flavour: 'nutty, chocolate',
        origin: 'asia',
      },
    },
    reviews: {
      create: [
        { rating: 5, comment: 'This is the best coffee I have ever had!' },
        { rating: 4, comment: 'nice' },
      ],
    },
  },
]

// https://source.unsplash.com/W9rOPHK--RQ
// convert images collection to source > images when needed
export const imageCollection = [
  'https://unsplash.com/photos/white-we-have-coffee-neon-light-qTEwRSFBA_4',
  'https://images.unsplash.com/photo-1552750603-ce766628fb20',
  'https://unsplash.com/photos/latte-art-in-brown-cup-in-macro-photography-RFHFV7lVQBY',
  'https://unsplash.com/photos/coffee-in-white-ceramic-container-GJogrGZxKJE',
  'https://unsplash.com/photos/coffee-bean-lot-TD4DBagg2wE',
  'https://unsplash.com/photos/person-making-latte-art-nzyzAUsbV0M',
]

// Filter -------------------------------------------------
export const fiilterBy = [
  { option: 'type', values: ['espresso', 'filter', 'decaf'] },
  { option: 'strength', values: ['light', 'medium', 'dark'] },
  { option: 'flavour', values: ['fruity', 'nutty', 'chocolate'] },
  { option: 'origin', values: ['africa', 'south america', 'asia'] },
]

export const filterOptions: FilterOptions = {
  type: { espresso: false, filter: false, decaf: false },
  strength: { light: false, medium: false, dark: false },
  flavour: { fruity: false, nutty: false, chocolate: false },
  origin: { africa: false, south_america: false, asia: false },
}
