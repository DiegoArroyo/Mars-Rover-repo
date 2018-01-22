//Iteration 1 | The Rover Object.
var roverDirection = {
  direction: "N"
}

//Iteration 2 | Turning the Rover.
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (roverDirection.direction) {
    case "N":
      roverDirection.direction = "W";
      return(roverDirection.direction);
    case "W":
      roverDirection.direction = "S";
      return(roverDirection.direction);
    case "S":
      roverDirection.direction = "E";
      return(roverDirection.direction);
    case "E":
      roverDirection.direction = "N";
      return(roverDirection.direction);
    default:
    console.log("Rover don't move");
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (roverDirection.direction) {
    case "N":
      roverDirection.direction = "E";
      return(roverDirection.direction);
    case "E":
      roverDirection.direction = "S";
      return(roverDirection.direction);
    case "S":
      roverDirection.direction = "W";
      return(roverDirection.direction);
    case "W":
      roverDirection.direction = "N";
      return(roverDirection.direction);
    default:
    console.log("Rover don't move");
  }
}
//Iteration 3 | Moving the Rover.
roverDirection.x = 0;
roverDirection.y = 0;

function moveForward(rover){
  console.log("moveForward was called");
  switch (roverDirection.direction) {
    case "N":
      roverDirection.y--;
      console.log(roverDirection);
      return(roverDirection.y);      
    case "E":
      roverDirection.x++;
      console.log(roverDirection);
      return(roverDirection.x);
    case "S":
      roverDirection.y++;
      console.log(roverDirection);      
      return(roverDirection.y);
    case "W":
      roverDirection.x--;
      console.log(roverDirection);      
      return(roverDirection.x);
    default:
    console.log("Rover don't move");
} 
} 
//Iteration 4 | Commands
function commands(turnLeft, turnRight, moveForward){
return turnLeft(rover);
}