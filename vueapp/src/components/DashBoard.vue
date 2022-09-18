<template>
  <div>
    <h2>My Notes</h2>
    <div class="notes">
      <NotePad v-for="(note, index) in notes" :key="index" :text="note.note" />
    </div>
    <h2>Add a New Note</h2>
    <form @submit.prevent="addNote">
      <textarea v-model="newNote" placeholder="Note Content..."> </textarea>
      <button>Add Note</button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import NotePad from "./NotePad.vue";
export default {
  name: "DashBoard",
  components: {
    NotePad,
  },
  data() {
    return {
      notes: [],
      newNote: "",
    };
  },
  mounted() {
    this.created();
  },

  methods: {
    ...mapMutations(["showLoader", "stopLoader", "showError"]),

    addNote() {
      let url = "/api/v1/notes/";
      this.showLoader();
      this.$axios
        .post(url, { note: this.newNote })
        .then((resp) => {
          console.log("get notes data response =", resp);
          if (resp.data) {
            this.newNote = "";
            this.notes.push(resp.data);
          }
        })
        .catch((err) => {
          console.log(err);
          this.showError(true);
        })
        .finally(() => {
          console.log("stop loading now ...");
          this.stopLoader();
        });
    },

    loadNotes() {
      let url = "/api/v1/notes/";
      this.showLoader();
      this.$axios
        .get(url)
        .then((resp) => {
          console.log("get notes data response =", resp);
          if (resp.data) {
            this.notes = resp.data;
          }
        })
        .catch((err) => {
          console.log(err);
          this.showError(true);
        })
        .finally(() => {
          console.log("stop loading now ...");
          this.stopLoader();
        });
    },

    created() {
      this.loadNotes();
    },
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  width: 100vw;
  min-width: 300px;
  max-width: 1000px;
  margin: 0 auto;
}
.notes {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 20px;
  justify-content: center;
}
h2 {
  margin: 10px;
}
form {
  margin: 20px;
  display: flex;
  flex-direction: column;
}
form textarea {
  resize: none;
  height: 220px;
  margin: 0 10px;
  background: beige;
  outline: none !important;
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  padding: 10px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1em;
}
form button {
  background: lightgreen;
  color: darkgreen;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
  outline: none !important;
}
form button:hover {
  background-color: #a0fea0;
}
</style>