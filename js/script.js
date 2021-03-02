let tl = anime.timeline({
  easing: "easeOutExpo",
  duration: 750,
});

let firstDuration = 200;
let translationStart = 0;
let translationEnd = 100;

const translateY = (duration, riseAmount) => {
  return {
    translateY: riseAmount,
    duration: duration,
  };
};

tl.add({
  targets: ".first",
  translateX: 250,
  // backgroundColor: "#FFF",
  duration: 200,
});
while (translationStart <= translationEnd) {
  tl.add({ targets: ".first", ...translateY(firstDuration, translationStart) });
  tl.add({ targets: ".first", ...translateY(firstDuration, translationEnd) });
  translationStart = translationStart + 10;
}

tl.add({
  targets: "#second",
  translateX: 250,
  // backgroundColor: "#FFF",
  ...translateY(100, 100),
  update: function () {
    document.getElementById("second").innerHTML = "<h1>World</h1>";
  },
});
