<template>
  <div class="component-content">
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SampleComponent',
  props: {
    msg: String,
  },
});
</script>
