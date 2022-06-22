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
  })

})