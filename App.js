let app = Vue.createApp({
  data: function () {
    return {};
  },
});

app.component("custom-btn", {
  props: { text: String, reference: String, emphasis: String },
  template:
    '<a style="text-decoration: none;" :href="reference" target="blank_"><button :class="emphasis" name="button">{{ text }}</button></a>',
});

app.component("custom-link", {
  props: { text: String, reference: String },
  template:
    '<a class="custom-link" :href="reference" target="_blank">{{ text }}</a>',
});

app.mount("#app");
