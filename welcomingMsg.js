(function detectDevTools() {
  const element = new Image();
  Object.defineProperty(element, "id", {
    get: function () {
      console.log(
        "%cHello there 👋\nThank you for reviewing my tasks ❤️",
        "color: #00FF00; font-size: 24px;"
      );
    },
  });

  console.log(element.id);
})();
