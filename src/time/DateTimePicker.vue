<template>
  <v-dialog v-model="dialog" max-width="500px">

    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" color="primary">
        {{ buttonText }}
      </v-btn>
    </template>

    <v-card>
      <v-card-title>
        <span class="headline">Dialog Title</span>
      </v-card-title>
      <v-card-text>

      </v-card-text>
      <v-card-actions>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="handleAction">
          Confirm
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    buttonText: String,
  },

  data() {
    return {
      dialog: false,
    };
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
