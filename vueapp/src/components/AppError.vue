<template>
    <div
      id="form-error"
      class="alert alert-danger alert-dismissible fade show"
      role="alert"
      v-if="show"
    >
      There was an error while processing your request. Please try again.
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: ["show"],
  };
  </script>
  
  <style>
  </style>