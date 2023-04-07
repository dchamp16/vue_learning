let arr = ["peter", "justine", "ramos"];

const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 45,
      count: 0,
    };
  },
  methods: {
    changeTitle(count) {
      this.title = arr[count];
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount("#app");
