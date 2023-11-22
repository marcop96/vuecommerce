import { ref, watch } from 'vue'
import type { Product } from '../../types'

const products = ref<Product[]>([])
watch(products, (v) => { console.log(v) })
export function useStore() {
  const increment = () => products.value
  const handleItem = (item: Product) => {
    for (let i = 0; i < products.value.length; i++) {
      if (products.value[i].id === item.id) {
        products.value[i].quantity++
        return
      }
    }
    products.value.push(item)
  }

  return { products, increment, handleItem }
}
