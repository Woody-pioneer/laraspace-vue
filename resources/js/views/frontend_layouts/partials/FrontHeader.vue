<template>
  <div>
    <nav id="top">
      <div class="container">
        <slot name="language"/>
        <slot name="currency"/>
        <div id="top-links" class="nav pull-right">
          <ul class="list-inline">
            <li><a href="countact"><i class="fa fa-phone"/></a> <span
              class="hidden-xs hidden-sm hidden-md"> telephone </span></li>
            <li class="dropdown"><a href=" account " title=" text_account " class="dropdown-toggle"
                                    data-toggle="dropdown"><i class="fa fa-user"/> <span
                                      class="hidden-xs hidden-sm hidden-md"> text_account </span> <span
                                        class="caret"/></a>
              <ul class="dropdown-menu dropdown-menu-right">
                <li><a href=" register "> text_register </a></li>
                <li><a href=" login "> text_login </a></li>
              </ul>
            </li>
            <li><a id="wishlist-total" href=" wishlist " title=" text_wishlist "><i
              class="fa fa-heart"/> <span
                class="hidden-xs hidden-sm hidden-md"> text_wishlist </span></a></li>
            <li><a href=" shopping_cart " title=" text_shopping_cart "><i
              class="fa fa-shopping-cart"/> <span class="hidden-xs hidden-sm hidden-md"> text_shopping_cart </span></a>
            </li>
            <li><a href=" checkout " title=" text_checkout "><i class="fa fa-share"/> <span
              class="hidden-xs hidden-sm hidden-md"> text_checkout </span></a></li>
          </ul>
        </div>
      </div>
    </nav>
    <header>
      <div class="container">
        <div class="col-sm-4"/>
        <div class="col-sm-5">search</div>
        <div class="col-sm-3">cart</div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'FrontHeader'
}
</script>

<style scoped>

</style>
