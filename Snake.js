// Snakes game
//Game Loop-, Init, Draw, Update
function init() {
  //console.log("Init");
  canvas = document.getElementById('mycanvas');
  pen = canvas.getContext('2d');
  W = canvas.width;
  H = canvas.height;
  snake ={
    init_length:5,
    color:"yellow",
    cells:[],
    direction:"right",
    createSnake:function()
    {
      for(var i=this.init_length-1;i>=0;i--)
      {
        this.cells.push({x:i,y:0});
      }
    },
    drawSnake:function()
    {
      for(var i=0;i<this.cells.length;i++)
      {
        pen.fillStyle=this.color;
        pen.strokeStyle="black";
        pen.lineWidth=5;
        pen.strokeRect(this.cells[i].x*10,this.cells[i].y*10,10,10);
        pen.fillRect(this.cells[i].x*10,this.cells[i].y*10,10,10);
      }
    },
    updateSnake:function()
    {
      var headX= this.cells[0].x;
      var headY= this.cells[0].y;
      //Assuming Snake is moving right
      //Insertion at headX
      nextHeadX=headX+1;
      this.cells.pop();
      this.cells.unshift({x:nextHeadX,y:headY});
    }

  };
  snake.createSnake();

}
function draw() {
  pen.clearRect(0,0,W,H);
  snake.drawSnake();
}
function update() {
  snake.updateSnake();
}
function gameLoop() {
  draw();
  update();

}
init();
gameLoop();
//call gameloop after t time
setInterval(gameLoop,100);
