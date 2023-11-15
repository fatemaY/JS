let inputDirection = { x: 0, y: 0}
let lastInoutDirection = { x:0, y:0 }
window.addEventListener('keydown' , e =>{
    switch (e.key){
      case 'ArrowUp':
        if(lastInoutDirection.y !==0) break
        inputDirection = { x:0 ,y:-1 }
        break
      case 'ArrowDown':
        if(lastInoutDirection.y !==0) break
        inputDirection = { x:0 ,y:1 }
        break
      case 'ArrowLeft':
        if(lastInoutDirection.x !==0) break
        inputDirection = { x:-1 ,y:0 }
        break
      case 'ArrowRight':
        if(lastInoutDirection.x !==0) break
        inputDirection = { x:1 ,y:0 }
        break
    }

})
export function getInputDirection(){
    lastInoutDirection = inputDirection
    return inputDirection;
}