const data = $$.createData({
  message: "Welcome to QueryScript",
});

$$("#app", {
  data,
  methods: {
    changeMessage: function () {
      this.message = "This is working";
    },
  },
});
