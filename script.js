document.addEventListener('DOMContentLoaded', () => {

  const pen = {
    active: false,
    moving: false,
    pos: {
      x: 0,
      y: 0,
    },
    prevPos: null,
  };

  var lineWidth = 5;

  const paintable = document.querySelector('#paintable-area');
  const context = paintable.getContext('2d');

  paintable.width = 700;
  paintable.height = 500;

  context.lineWidth = lineWidth;

  const drawLine = (line) => {
    
    context.beginPath();
    context.moveTo(line.prevPos.x, line.prevPos.y);
    context.lineTo(line.pos.x, line.pos.y);
    context.stroke();
  }

  paintable.onmousedown = (e) => {
    pen.active = true;
  }

  paintable.onmouseup = (e) => {
    pen.active = false;
  }

  paintable.onmousemove = (e) => {
    pen.pos.x = e.clientX;
    pen.pos.y = e.clientY;
    pen.moving = true;
  }

  const cycle = () => {
    if(pen.active && pen.moving && pen.prevPos){
      drawLine({pos: pen.pos, prevPos: pen.prevPos})
      
      pen.moving = false;
    }
    pen.prevPos = { x: pen.pos.x, y: pen.pos.y};

    setTimeout(cycle, 10);
  }

  cycle();


  const plus = document.querySelector("#more");

  plus.addEventListener("click", () => {
    lineWidth += 4;
    context.lineWidth = lineWidth;
  });


  const less = document.querySelector("#less");

  less.addEventListener("click", () => {
    lineWidth -= 4;
    context.lineWidth = lineWidth;
  });
  

  const red = document.querySelector(".red");
  red.addEventListener("click", () => {
    context.lineWidth = lineWidth
    context.strokeStyle = "red";
  });

  const blue = document.querySelector(".blue");
  blue.addEventListener("click", () => {
    context.lineWidth = lineWidth
    context.strokeStyle = "blue";
  });

  const green = document.querySelector(".green");
  green.addEventListener("click", () => {
    context.lineWidth = lineWidth
    context.strokeStyle = "green";
  });

  const yellow = document.querySelector(".yellow");
  yellow.addEventListener("click", () => {
    context.lineWidth = lineWidth
    context.strokeStyle = "yellow";
  });

  const black = document.querySelector(".black");
  black.addEventListener("click", () => {
    context.lineWidth = lineWidth
    context.strokeStyle = "black";
  });

  const eraser = document.querySelector(".eraser");
  eraser.addEventListener("click", () => {
    context.strokeStyle = "white";
    context.lineWidth = 16;
  });

  const reload = document.querySelector(".reload");
  reload.addEventListener("click", () => {
    window.location.reload();
  });
})