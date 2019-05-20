function Mobile() {
    this.pin = 0;
    this.messagerWriting = "";
    this.inbox = [];
    this.sentMessager = [];
    this.status = false;

    this.checkStatusOnOff = function() {
        return (this.status === true) ? true : false;
    }

    this.turnOnOff = function(status) {
        this.status = (status === 1) ? true : false;
    }

    this.charge = function() {
        setInterval(function() {
            if (this.pin >= 0 && this.pin <= 100)
                this.pin += 1;
        }, 5000);
    }

    this.writingMessager = function(mess) {
        this.messagerWriting = mess;
    }

    this.toInbox = function(mess) {
        this.inbox.push(mess);
    }

    this.sentingMessager = function() {
        this.sentMessager.push(this.messagerWriting);
        return this.messagerWriting;
    }

    this.getInbox = function() {
        return this.inbox.join("######");
    }

    this.getSentMessager = function() {
        return this.sentMessager.join("######");
    }
}