$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

    createPlatform(650, 610, 200, 20); //Middle Part Top
    createPlatform(1, 200, 200, 20); //Start Platform
    createPlatform(200, 200, 270, 20); //Start Platform 2
    createPlatform(570, 200, 15, 150); //drop 2
    createPlatform(470, 200, 15, 150); //drop 1
    createPlatform(740, 610, 15, 150); //Midlle Part T
    createPlatform(200, 510, 15, 150); //Left Side Middle
    createPlatform(200, 610, 15, 150); //Left Side Bottom
    createPlatform(200, 410, 15, 150); //Left Side Top
    createPlatform(400, 550, 50, 20); //Float Platform
    createPlatform(300, 450, 50, 20); //Float Platform
    createPlatform(0, 520, 130, 20); //Left Side Platform - 
    createPlatform(130, 650, 75, 20); //Left Side Platform -
    createPlatform(650, 200, 40, 20); //Platform Right 1
    createPlatform(800, 150, 40, 20); //Platofrm Right 2
    createPlatform(900, 100, 40, 20); //Platofrm Right 3
    createPlatform(1000, 100, 70, 20); //Platofrm Right 4


    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)

    createCollectable("steve", 720, 550, 0, 0);
    createCollectable("steve", 150, 600, 0, 0);
    createCollectable("steve", 1000, 50, 0, 0);
    createCollectable("steve", 680, 650, 0, 0);


    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

    createCannon("left", 650, 1000);
    createCannon("right", 200, 2000);
    createCannon("right", 300, 2000);
    createCannon("top", 800, 2000);
    


    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
