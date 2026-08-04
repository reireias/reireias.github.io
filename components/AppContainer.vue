<template>
  <div class="ui-container"><slot /></div>
</template>
<style scoped>
.ui-container {
  width: min(100% - 32px, 1120px);
  margin-inline: auto;
  padding-block: 32px;
}
</style>
