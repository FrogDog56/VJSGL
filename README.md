# VJSGL
A lightweight and easy to use vanilla javascript game library for making front end browser games

# Example
``
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="lib/VJSGL.css" />
    <script type="text/javascript" src="lib/VJSGL.js"></script>
    <title>Document</title>
  </head>
  <body>
    <canvas
      id="myCanvas"
      class="canvas-l canvas-center"
      style="border: 1px solid #d3d3d3"
    >
      Your browser does not support the HTML canvas tag.</canvas
    >
    <script>
        let screen = new Registry();
        let bgFill = new BackgroundFill(white);
        const back = new Image();
        back.src = "resources/assets/images/background.jpg";
        let bg = new Background(back);
        const frog = new Image();
        frog.src = "resources/assets/images/frog.png";
        let sprite = new Sprite(frog, 100, 100, 50, 50, 1);
        screen.register(bg);
        screen.register(sprite);
        init();
        let x = sprite.getX();
        let y = sprite.getY();
        let gameLoop = function() {
          
          screen.updateFrame();
          requestAnimationFrame(gameLoop);
        }
        gameLoop();
    </script>
  </body>
</html>
``
