<template>
  
  <div class="input_group">
    <div class="input_title">{{title}}</div>
    <div class="input_container">

      <input 
        type="text" 
        :placeholder="placeholder"
        @input="v.$touch()"
        v-model="name"
      >

      <div class="input_border"></div>
    </div>

    <div class="input_error" v-if="emptyError && !customError">
      {{emptyErrorText}}
    </div>

    <div class="input_error" v-else-if="customError">
      {{customErrorText}}
    </div>

    <div class="input_error" v-else></div>

  </div>

</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    emptyError: {
      type: Boolean,
      default: false
    },
    emptyErrorText: {
      type: String,
      default: ""
    },
    customError: {
      type: Boolean,
      default: false
    },
    customErrorText: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    v: {
      type: Object,
      required: true
    }
  },
  computed: {
    name: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit("input", value)
      }
    }
  }
}
</script>