<template>
  <div class="content">
    <SampleComponent msg="This is a sample"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { SampleComponent } from '@/app/components';

export default defineComponent({
  name: 'SampleView',
  components: {
    SampleComponent,
  },
});
</script>
