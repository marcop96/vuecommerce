import { ref } from 'vue'
import type { Product } from '../../types'

const cartQuantity = ref(0)
const products = ref<Product[]>([])
export function useStore() {
  const handleIncrement = (item: Product) => {
    cartQuantity.value++

    const index = products.value.findIndex(product => product.id === item.id)

    if (index !== -1) {
      products.value[index].quantity = (products.value[index].quantity ?? 0) + 1
    }
    else {
      item.quantity = 1
      products.value.push(item)
    }
  }

  const handleDecrement = (item: Product) => {
    cartQuantity.value--
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

  return { products, cartQuantity, handleIncrement, handleDecrement }
}
