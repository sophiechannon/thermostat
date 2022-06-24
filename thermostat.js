class Thermostat {
  constructor() {
    this.temperature = 20;
    this.upperLimit = 25;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    if (this.temperature >= this.upperLimit) {
      this.temperature = this.upperLimit;
    } else {
    this.temperature++;
    };
  };

  down() {
    if (this.temperature <= 10) {
      this.temperature = 10;
    } else {
    this.temperature--;
    };
  };

  setPowerSavingMode(status) {
    if (status === 'off') {
      this.upperLimit = 32;
      console.log("PSM off")
    } else {
      this.upperLimit = 25;
    }
    if (status === 'on' && this.temperature > 25) {
      this.up();
    }
  };

  reset() {
    this.temperature = 20;
    this.upperLimit = 25;
  };

  getEnergyUsage() {
    if (this.temperature < 18) {
      return 'Low';
    } else if (this. temperature < 26) {
      return 'Medium'
    } else {
      return 'High'
    }
  };
};


module.exports = Thermostat;