export default function taxMixin ({
  itemProp = 'item',
  taxProp = 'tax',
  priceProp = 'price',
  rateProp = 'rate'
} = {}) {
  return {
    computed: {
      [taxProp] () {
        const item = this[itemProp]
        const price = item[priceProp]
        const rate = item[rateProp]

        return rate * price
      },
    }
  }
}
