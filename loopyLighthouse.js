for (var i = 100; i <= 200; i++) {
  //console.log(i);
  var mul3 = (i % 3 === 0);
  var mul4 = (i % 4 === 0);

  if (mul3 && mul4) {
    console.log("LoopyLighthouse");
  } else if (mul3) {
    console.log("Loopy");
  } else if (mul4) {
    console.log("Lighthouse");
  } else {
    console.log(i);
  }
}