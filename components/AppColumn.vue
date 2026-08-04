<template>
  <div class="ui-column"><slot /></div>
</template>
<style scoped>
.ui-column {
  width: 50%;
  min-width: 320px;
  padding: 12px;
}

@media (width < 640px) {
  .ui-column {
    width: 100%;
    min-width: 0;
  }
}
</style>
