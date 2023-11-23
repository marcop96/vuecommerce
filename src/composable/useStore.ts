import { ref } from 'vue'
import type { Product } from '../../types'

const products = ref<Product[]>([])
export function useStore() {
  const handleIncrement = (item: Product) => {
    for (let i = 0; i < products.value.length; i++) {
      if (products.value[i].id === item.id) {
        products.value[i].quantity++
        return
      }
    }
    products.value.push(item)
  }
  const handleDecrement = (item: Product) => {
    for (let i = 0; i < products.value.length; i++) {
      if (products.value[i].id === item.id) {
        if (products.value[i].quantity > 1)
          products.value[i].quantity--

        else
          products.value.splice(i, 1)

        return
      }
    }
  }

  return { products, handleIncrement, handleDecrement }
}
