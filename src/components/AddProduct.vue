<template>
  <div class="product-action-bar">
    <div class="row">
      <div class="col-12">
        <input
          placeholder="product name..."
          class="product-name-input"
          type="text"
          :value="productNameToCreate"
          @input="setProductNameToCreate($event.target.value)"
          @keypress.enter="triggerAddProductAction"
        />
      </div>
      <div class="col-12">
        <textarea
          placeholder="Product Description..."
          class="product-description-input"
          type="text"
          :value="productDescriptionToCreate"
          @input="setProductDescriptionToCreate($event.target.value)"
          @keypress.enter="triggerAddProductAction"
        />
      </div>
      <div class="col-12">
        <input type="file" accept="image/*" :value="productImageToCreate" @change="setProductImageToCreate"/>
      </div>
      <div class="col-12 image-preview" v-if="imageData.length > 0">
                <img class="preview" :src="imageData">
            </div>
      <div class="col-12">
        <div
          :class="{ disabled: productCreationPending }"
          class="create-product-btn"
          @click="triggerAddProductAction"
        >
          add product
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      imageData: ""
    }
  },
  computed: mapState('products', [
    'productNameToCreate',
    'productDescriptionToCreate',
    'productCreationPending',
    'productImageToCreate'
  ]),
  methods: {
    setProductImageToCreate: function(event) {
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
      }
    },
    ...mapMutations('products', ['setProductNameToCreate', 'setProductDescriptionToCreate']),
    ...mapActions('products', ['triggerAddProductAction'])
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.product-action-bar {
  display: flex;
  align-items: center;
  justify-content: center;

  .product-name-input, .product-description-input {
    padding-left: 5px;
    height: 30px;
    width: 150px;
    outline: none;
    font: inherit;
    border: 1px solid;
    border-color: #2c3e50;
    border-radius: 3px;
  }

  .create-product-btn {
    cursor: pointer;
    padding: 5px 10px;
    border: 1px solid;
    display: inline-block;
    border-radius: 3px;
    margin-left: 10px;
    border-color: #2c3e50;

    &.disabled {
      pointer-events: none;
      background-color: #aaa;
    }

    &:hover {
      color: $vue-color;
      border-color: $vue-color;
    }
  }
}
</style>
