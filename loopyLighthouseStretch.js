function loopyLighthouse(range, multiples, words) {
  for (var i = range[0]; i <= range[1]; i++) {
    //console.log(i);
    var mulr1 = (i % multiples[0] === 0);
    var mulr2 = (i % multiples[1] === 0);

    if (mulr1 && mulr2) {
      console.log(words[0] + words[1]);
    } else if (mulr1) {
      console.log(words[0]);
    } else if (mulr2) {
      console.log(words[1]);
    } else {
      console.log(i);
    }
  }
}


//loopyLighthouse([100,200], [3,4], ["Loopy", "Lighthouse"]);
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
