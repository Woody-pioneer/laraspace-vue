<template>
  <div class="product-layout col-lg-3 col-md-3 col-sm-6 col-xs-12">
    <div class="product-thumb transition">
      <div class="image">
        <router-link :to="'/product/' + item.id">
          <img :src="item.image" alt="MacBook" title="MacBook" class="img-responsive">
        </router-link>
      </div>
      <div class="caption">
        <h4>{{ item.name }}</h4>
        <p>{{ item.description }}</p>
        <p class="price">
          ${{ item.price }}
          <span class="price-tax">Ex Tax: ${{ tax }}</span>
        </p>
      </div>
      <div class="button-group">
        <button type="button" @click="addCart(item.id)"><i class="icon-fa icon-fa-shopping-basket"/> <span class="hidden-xs hidden-sm hidden-md">Add to Cart</span></button>
        <button type="button" data-toggle="tooltip" title="" data-original-title="Add to Wish List"><i class="icon-fa icon-fa-heart"/></button>
        <button type="button" data-toggle="tooltip" title="" data-original-title="Compare this Product"><i class="icon-fa  icon-fa-exchange"/></button>
      </div>
    </div>
  </div>
</template>
<script>
import discountMixin from '../../mixins/discount'
import taxMixin from '../../mixins/tax'
export default {
  name: 'ProductItem',
  mixins: [
    discountMixin(),
          taxMixin()
  ],
  props: {
    item: {
      type: Object,
      default: () => ({
        id: 1,
        rate: 0.15,
        price: 150,
        originalPrice: 200,
        image: 'http://cart.bonnetech.net/image/cache/catalog/demo/macbook_1-200x200.jpg',
        name: 'MacBook',
        description: 'ntel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..'
      })
    }
  },
  data () {
    return {

    }
  },
  computed: {
  },
  methods: {
    addCart: function (id) {
     this.$emit('add-cart', id)
    }
  }
}
</script>

<style scoped lang="scss">
  .product-thumb {
    border: 1px solid #ddd;
    margin-bottom: 20px;
    overflow: auto;
    .caption {
      padding: 0 20px;
      min-height: 180px;
    }
    .image {
      text-align: center;
      img {
        margin-left: auto;
        margin-right: auto;
      }
    }
    .price {
      color: #444;
    }
    .price-tax {
      color: #999;
      font-size: 12px;
      display: block;
    }
    h4 {
      font-weight: bold;
    }
    .button-group {
      border-top: 1px solid #ddd;
      background-color: #eee;
      overflow: auto;

      button{
        border: none;
        display: inline-block;
        float: left;
        background-color: #eee;
        color: #888;
        line-height: 38px;
        font-weight: bold;
        text-align: center;
        text-transform: uppercase;
      }
      button:first-child{
        width:60%
      }
      button + button{
        width:20%
      }
    }
  }
</style>
