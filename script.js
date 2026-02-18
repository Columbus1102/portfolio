(function () {
  var margin = 40;

  function randTarget() {
    return {
      x: margin + Math.random() * (window.innerWidth - 2 * margin),
      y: margin + Math.random() * (window.innerHeight - 2 * margin)
    };
  }

  function runClownfish() {
    var fish = document.getElementById("clownfish-link");
    if (!fish) return;

    var x = 0.38 * window.innerWidth;
    var y = 0.42 * window.innerHeight;
    var vx = 0.4 + Math.random() * 0.5;
    var vy = (Math.random() - 0.5) * 0.4;
    var target = randTarget();

    function update() {
      var dx = target.x - x;
      var dy = target.y - y;
      var dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 20) {
        target = randTarget();
      } else {
        var speed = 0.6 + Math.random() * 0.3;
        vx = (dx / dist) * speed;
        vy = (dy / dist) * speed;
      }

      x += vx;
      y += vy;

      if (x < margin) {
        x = margin;
        target = randTarget();
      } else if (x > window.innerWidth - margin) {
        x = window.innerWidth - margin;
        target = randTarget();
      }
      if (y < margin) {
        y = margin;
        target = randTarget();
      } else if (y > window.innerHeight - margin) {
        y = window.innerHeight - margin;
        target = randTarget();
      }

      fish.style.left = x + "px";
      fish.style.top = y + "px";

      if (vx < 0) {
        fish.classList.add("facing-left");
      } else {
        fish.classList.remove("facing-left");
      }

      requestAnimationFrame(update);
    }

    fish.style.left = x + "px";
    fish.style.top = y + "px";
    requestAnimationFrame(update);
  }

  function runFlirtFish() {
    var fish = document.getElementById("flirt-fish-link");
    var img = document.getElementById("flirt-fish-img");
    if (!fish || !img) return;

    var srcRight = "assets/fish/arets-flirt-hojre.png.png";
    var srcLeft = "assets/fish/arets-flirt-venstre.png.png";

    var x = 0.5 * window.innerWidth;
    var y = 0.35 * window.innerHeight;
    var vx = 0.35 + Math.random() * 0.45;
    var vy = (Math.random() - 0.5) * 0.35;
    var target = randTarget();

    function update() {
      var dx = target.x - x;
      var dy = target.y - y;
      var dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 20) {
        target = randTarget();
      } else {
        var speed = 0.5 + Math.random() * 0.35;
        vx = (dx / dist) * speed;
        vy = (dy / dist) * speed;
      }

      x += vx;
      y += vy;

      if (x < margin) {
        x = margin;
        target = randTarget();
      } else if (x > window.innerWidth - margin) {
        x = window.innerWidth - margin;
        target = randTarget();
      }
      if (y < margin) {
        y = margin;
        target = randTarget();
      } else if (y > window.innerHeight - margin) {
        y = window.innerHeight - margin;
        target = randTarget();
      }

      fish.style.left = x + "px";
      fish.style.top = y + "px";

      if (vx < 0) {
        img.src = srcLeft;
      } else {
        img.src = srcRight;
      }

      requestAnimationFrame(update);
    }

    fish.style.left = x + "px";
    fish.style.top = y + "px";
    if (vx < 0) {
      img.src = srcLeft;
    } else {
      img.src = srcRight;
    }
    requestAnimationFrame(update);
  }

  function runPinkFish() {
    var fish = document.getElementById("pink-fish-link");
    var img = document.getElementById("pink-fish-img");
    if (!fish || !img) return;

    var srcRight = "assets/fish/pinkfiskhojre.png.png";
    var srcLeft = "assets/fish/pinkfiskvenstre.png.png";

    var x = 0.6 * window.innerWidth;
    var y = 0.5 * window.innerHeight;
    var vx = 0.35 + Math.random() * 0.45;
    var vy = (Math.random() - 0.5) * 0.35;
    var target = randTarget();

    function update() {
      var dx = target.x - x;
      var dy = target.y - y;
      var dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 20) {
        target = randTarget();
      } else {
        var speed = 0.5 + Math.random() * 0.35;
        vx = (dx / dist) * speed;
        vy = (dy / dist) * speed;
      }

      x += vx;
      y += vy;

      if (x < margin) {
        x = margin;
        target = randTarget();
      } else if (x > window.innerWidth - margin) {
        x = window.innerWidth - margin;
        target = randTarget();
      }
      if (y < margin) {
        y = margin;
        target = randTarget();
      } else if (y > window.innerHeight - margin) {
        y = window.innerHeight - margin;
        target = randTarget();
      }

      fish.style.left = x + "px";
      fish.style.top = y + "px";

      if (vx < 0) {
        img.src = srcLeft;
      } else {
        img.src = srcRight;
      }

      requestAnimationFrame(update);
    }

    fish.style.left = x + "px";
    fish.style.top = y + "px";
    if (vx < 0) {
      img.src = srcLeft;
    } else {
      img.src = srcRight;
    }
    requestAnimationFrame(update);
  }

  function runTrifish() {
    var fish = document.getElementById("trifish-link");
    if (!fish) return;

    var x = 0.25 * window.innerWidth;
    var y = 0.55 * window.innerHeight;
    var vx = 0.4 + Math.random() * 0.5;
    var vy = (Math.random() - 0.5) * 0.4;
    var target = randTarget();

    function update() {
      var dx = target.x - x;
      var dy = target.y - y;
      var dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 20) {
        target = randTarget();
      } else {
        var speed = 0.6 + Math.random() * 0.3;
        vx = (dx / dist) * speed;
        vy = (dy / dist) * speed;
      }

      x += vx;
      y += vy;

      if (x < margin) {
        x = margin;
        target = randTarget();
      } else if (x > window.innerWidth - margin) {
        x = window.innerWidth - margin;
        target = randTarget();
      }
      if (y < margin) {
        y = margin;
        target = randTarget();
      } else if (y > window.innerHeight - margin) {
        y = window.innerHeight - margin;
        target = randTarget();
      }

      fish.style.left = x + "px";
      fish.style.top = y + "px";

      if (vx < 0) {
        fish.classList.add("facing-left");
      } else {
        fish.classList.remove("facing-left");
      }

      requestAnimationFrame(update);
    }

    fish.style.left = x + "px";
    fish.style.top = y + "px";
    requestAnimationFrame(update);
  }

  function runBvFish() {
    var fish = document.getElementById("bv-fish-link");
    if (!fish) return;

    var x = 0.7 * window.innerWidth;
    var y = 0.3 * window.innerHeight;
    var vx = 0.4 + Math.random() * 0.5;
    var vy = (Math.random() - 0.5) * 0.4;
    var target = randTarget();

    function update() {
      var dx = target.x - x;
      var dy = target.y - y;
      var dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 20) {
        target = randTarget();
      } else {
        var speed = 0.6 + Math.random() * 0.3;
        vx = (dx / dist) * speed;
        vy = (dy / dist) * speed;
      }

      x += vx;
      y += vy;

      if (x < margin) {
        x = margin;
        target = randTarget();
      } else if (x > window.innerWidth - margin) {
        x = window.innerWidth - margin;
        target = randTarget();
      }
      if (y < margin) {
        y = margin;
        target = randTarget();
      } else if (y > window.innerHeight - margin) {
        y = window.innerHeight - margin;
        target = randTarget();
      }

      fish.style.left = x + "px";
      fish.style.top = y + "px";

      if (vx < 0) {
        fish.classList.add("facing-left");
      } else {
        fish.classList.remove("facing-left");
      }

      requestAnimationFrame(update);
    }

    fish.style.left = x + "px";
    fish.style.top = y + "px";
    requestAnimationFrame(update);
  }

  function runSoFish() {
    var fish = document.getElementById("so-fish-link");
    var img = document.getElementById("so-fish-img");
    if (!fish || !img) return;

    var srcLeft = "assets/fish/so.png";
    var srcRight = "assets/fish/som.png";

    var x = 0.55 * window.innerWidth;
    var y = 0.45 * window.innerHeight;
    var vx = 0.4 + Math.random() * 0.5;
    var vy = (Math.random() - 0.5) * 0.4;
    var target = randTarget();

    function update() {
      var dx = target.x - x;
      var dy = target.y - y;
      var dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 20) {
        target = randTarget();
      } else {
        var speed = 0.6 + Math.random() * 0.3;
        vx = (dx / dist) * speed;
        vy = (dy / dist) * speed;
      }

      x += vx;
      y += vy;

      if (x < margin) {
        x = margin;
        target = randTarget();
      } else if (x > window.innerWidth - margin) {
        x = window.innerWidth - margin;
        target = randTarget();
      }
      if (y < margin) {
        y = margin;
        target = randTarget();
      } else if (y > window.innerHeight - margin) {
        y = window.innerHeight - margin;
        target = randTarget();
      }

      fish.style.left = x + "px";
      fish.style.top = y + "px";

      if (vx < 0) {
        img.src = srcLeft;
      } else {
        img.src = srcRight;
      }

      requestAnimationFrame(update);
    }

    fish.style.left = x + "px";
    fish.style.top = y + "px";
    if (vx < 0) {
      img.src = srcLeft;
    } else {
      img.src = srcRight;
    }
    requestAnimationFrame(update);
  }

  runClownfish();
  runFlirtFish();
  runPinkFish();
  runTrifish();
  runBvFish();
  runSoFish();
})();
