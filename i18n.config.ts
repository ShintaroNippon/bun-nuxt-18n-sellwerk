export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      welcome: "Welcome",
      "hello-world": "Hello World",
    },
    de: {
      welcome: "Willkommen",
      "hello-world": "Hallo Welt",
    },
  },
}));
