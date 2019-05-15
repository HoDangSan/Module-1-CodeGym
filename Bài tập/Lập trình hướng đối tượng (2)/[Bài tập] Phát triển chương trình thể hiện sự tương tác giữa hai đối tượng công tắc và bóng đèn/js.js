let Lamp = function(){
    this.status = false;
}
let SwitchButton = function(){
    this.status = false;
    this.switchOnOff = function(lamp){
        if (this.status === false) lamp.status = false;
        if (this.status === true) lamp.status = true;
    }
}