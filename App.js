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
    '<a class="custom-link" :href="reference" target="_blank">{{ text }}</a><br><br>',
});

app.component("custom-nav", {
    data() {
        return {links: [
          { text: 'texto', link: 'https://open.spotify.com/' },
          { text: 'textoo', link: 'https://open.spotify.com/' },
          { text: 'textooo', link: 'https://open.spotify.com/' }]
    }},
  template:
    '<nav role="navigation"><div id="menuToggle"><input type="checkbox" /><span></span><span></span> <span></span> <ul id="menu"><custom-link v-for="link in links" :text="link.text" :reference="link.link"></custom-link></ul></div></nav>',
});
app.mount("#app");
