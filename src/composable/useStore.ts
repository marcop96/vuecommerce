import { ref } from 'vue'
import type { Product } from '../../types'

const product = ref<Product[]>([])

export function useStore() {
  const increment = () => product.value
  const addToCart = (item: Product) => product.value.push(item)
  return { product, increment, addToCart }
}
