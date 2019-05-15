function Temperature(c){
    this.c = c;
}
Temperature.prototype.cToF = function(){
    let c0 = this.c;
    return (9 * c0) / 5 + 32;
}
Temperature.prototype.cToH = function(){
    let c1 = this.c;
    return c1 + 273.15;
}