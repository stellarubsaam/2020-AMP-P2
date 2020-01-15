const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let grid = new Grid();

let point = new DPoint(new Vector2d(200,200),new Vector2d(7,8),new Vector2d(0,1),20,"white");

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  point.update();
  grid.draw(context);
  point.draw(context);
  point.vel.draw(context,point.pos,10);
}

animate()
