const Thermostat = require('./thermostat');

describe('getTemperature', () => {
  it('returns 20 by default', () => {
    thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toBe(20);
  });

  it('returns 22 when temperature is increased twice', () => {
    thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(22);
  });

  it('returns 21 when temperature is increased twice & down once', () => {
    thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(21);
  });

  it('is capped at a minimum of 10', () => {
    thermostat = new Thermostat();
    for (let i = 0 ; i < 12 ; i++) {
      thermostat.down();
    }    
    expect(thermostat.getTemperature()).toBe(10);
  });

  it('is capped at a minimum of 25 when PSM is on by default', () => {
    thermostat = new Thermostat();
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    };
    expect(thermostat.getTemperature()).toBe(25);
  });

  it('can exceed 25 when PSM is turned off', () => {
    thermostat = new Thermostat();
    thermostat.setPowerSavingMode("off"); 
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    };
    expect(thermostat.getTemperature()).toBe(30);
  });

  it('is capped at a minimum of 32 when PSM is turned on', () => {
    thermostat = new Thermostat();
    thermostat.setPowerSavingMode("off"); 
    for (let i = 0 ; i < 25 ; i++) {
      thermostat.up();
    }; 
    expect(thermostat.getTemperature()).toBe(32);
  });

  it('resets from a higher temp to 25 when PSM is turned on', () => {
    thermostat = new Thermostat();
    thermostat.setPowerSavingMode("off"); 
    for (let i = 0 ; i < 25 ; i++) {
      thermostat.up();
    }; 
    thermostat.setPowerSavingMode('on');
    expect(thermostat.getTemperature()).toBe(25);
  });

  it('resets to 20 when reset is pressed', () => {
    thermostat = new Thermostat();
    for (let i = 0 ; i < 25 ; i++) {
      thermostat.up();
    }; 
    thermostat.reset();
    expect(thermostat.getTemperature()).toBe(20);
  });
});

describe('getEnergyUsage', () => {
  it('returns low usage if temperature is less than 18', () => {
    thermostat = new Thermostat();
    for (let i = 0 ; i < 3; i++) {
      thermostat.down();
    }; 
    expect(thermostat.getTemperature()).toBe(17);
    expect(thermostat.getEnergyUsage()).toEqual('Low');
  });

  it('returns medium usage if temperature is between 19 - 25', () => {
    thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toBe(20);
    expect(thermostat.getEnergyUsage()).toEqual('Medium');
  });

  it('returns high usage if temperature is between > 25', () => {
    thermostat = new Thermostat();
    thermostat.setPowerSavingMode("off");
    for (let i = 0 ; i < 7; i++) {
      thermostat.up();
    }; 
    expect(thermostat.getTemperature()).toBe(27);
    expect(thermostat.getEnergyUsage()).toEqual('High');
  });
});
