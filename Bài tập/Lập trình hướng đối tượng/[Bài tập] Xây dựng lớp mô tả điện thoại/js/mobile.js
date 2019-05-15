function Mobile(){
    this.pin = 0;
    this.messagerWriting = "";
    this.inbox = [];
    this.sentMessager = [];
    this.status = false;
}

Mobile.prototype.checkStatusOnOff = function(){
    return (this.status === true) ? true : false;
}

Mobile.prototype.turnOnOff = function(status){
    this.status = (status === 1) ? true : false;
}

Mobile.prototype.charge = function(){
        setInterval(function(){
            if (this.pin >= 0 && this.pin <= 100 )
            this.pin += 1;
        },5000);
}

Mobile.prototype.writingMessager = function(mess){
    this.messagerWriting = mess;
}

Mobile.prototype.toInbox = function(mess){
    this.inbox.push(mess);
}

Mobile.prototype.sentingMessager = function(){
    this.sentMessager.push(this.messagerWriting);
    return this.messagerWriting;
}

Mobile.prototype.getInbox = function(){
    return this.inbox.join("######");
}

Mobile.prototype.getSentMessager = function(){
    return this.sentMessager.join("######");
}
