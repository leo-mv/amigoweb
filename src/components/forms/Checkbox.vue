<template>
  <div 
    class="checkbox_container"
    :class="{active: isActive}"
    @click="toggle"
  >
    <div class="checkbox"></div>
    <div class="checkbox_placeholder">Принимаю <a href="#">условия</a> использования</div>
  </div>
</template>

<script>
export default {
  props: ['ischeck', 'v'],
  data() {
    return {
      isActive: this.ischeck
    }
  },
  methods: {
    toggle() {
      this.v.$touch()
      this.isActive = !this.isActive
      this.$emit('change', this.isActive)
    }
  }
}
</script>