<template>
  <div 
      class="select"
      :class="[{'active' : isOpenSelect}]"
    >
      <div class="select_title">{{selectTitle}}</div>

      <div class="select_container">
        <div 
          class="select_button"
          @click="openSelect"
          v-click-outside="closeSelect"
        >
          {{currentPlaceholder}}
        </div>
        
        <div class="select_dropdown">
          <div 
            v-for="(option, id) in selectOptions"
            :key="id"
            class="select_option"
            :class="{active: currentId === id}"
            @click="changeSelect(option, id)"
          >
            {{option.selectPlaceholder}}
          </div>
        </div>
      </div>

    </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  props: {
    selectTitle: {
      type: String,
      default: ""
    },
    selectOptions: {
      type: Array,
      default: ""
    }
  },
  
  data() {
    return {
      currentPlaceholder: this.selectOptions[0].selectPlaceholder,
      isOpenSelect: false,
      currentId: null
    }
  },
  methods: {
    openSelect() {
      this.isOpenSelect = !this.isOpenSelect
    },
    closeSelect() {
      this.isOpenSelect = false
    },
    changeSelect(item, id) {
      this.currentPlaceholder = item.selectPlaceholder
      this.currentId = id

      this.$emit('changeSelect', {
        selectValue: item.selectValue,
        selectPlaceholder: item.selectPlaceholder
      })
    }
  },
  directives: {
    ClickOutside
  }
}
</script>