<template>
  <v-dialog v-model="dialog" max-width="500px">

    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" color="primary">
        {{ buttonText }}
      </v-btn>
    </template>

    <slot></slot>
  </v-dialog>
</template>

<script>
export default {
  name: "ActivatorDialog",

  props: {
    buttonText: String,
    showDialog: Boolean,
  },

  computed: {
    dialog: this.showDialog,
  },

  methods: {
    handleAction() {
      console.log('Action confirmed!');
      this.dialog = false;
    },
  },
};
</script>

<style scoped>

</style>
