const moon =
  "M26 64C26 99.3462 64 128 64 128C28.6538 128 0 99.3462 0 64C0 28.6538 28.6538 0 64 0C64 0 26 28.6538 26 64Z";

const sun =
  "M128 64C128 99.3462 99.3462 128 64 128C28.6538 128 0 99.3462 0 64C0 28.6538 28.6538 0 64 0C99.3462 0 128 28.6538 128 64Z";

const darkModel = document.querySelector("#darkMode");
let toggle = false;

darkModel.addEventListener("click", () => {
  const timeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo"
  });
  timeline
    .add({
      targets: ".sun",
      d: [
        {
          value: toggle ? sun : moon
        }
      ]
    })
    .add(
      {
        targets: "#darkMode",
        rotate: toggle ? 0 : 320
      },
      "-=350"
    )
    .add(
      {
        targets: "section",
        backgroundColor: toggle ? "rgb(255,255,255)" : "rgb(22,22,22)"
      },
      "-=700"
    )
    .add(
      {
        targets: "h1",
        color: toggle ? "rgb(22,22,22)" : "rgb(255,255,255)"
      },
      "-=700"
    )
   
  //როცა დაეკლიკება ფოლსი თრუ გახდება და პირიქით
  if (!toggle) {
    toggle = true;
  } else {
    toggle = false;
  }
});
