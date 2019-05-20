function Remote() {
    this.id = "";
    this.increaseVolume = function(tivi) {
        if (tivi.volume < 100)
            tivi.volume++;
    }
    this.reductionVolume = function(tivi) {
        if (tivi.volume > 0)
            tivi.volume--;
    }
    this.convertChannels = function(tivi) {;
        switch (this.id) {
            case "1":
                return tivi.channels[1];
            case "2":
                return tivi.channels[2];
            case "3":
                return tivi.channels[3];
            case "4":
                return tivi.channels[4];
            case "5":
                return tivi.channels[5];
            case "6":
                return tivi.channels[6];
            case "7":
                return tivi.channels[7];
            case "8":
                return tivi.channels[8];
            case "9":
                return tivi.channels[9];
            case "Up":
                return
            case "-":
            case "Down":
            case "+":
        }
    }
}