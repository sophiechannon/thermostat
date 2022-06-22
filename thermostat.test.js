const Thermostat = require('./thermostat');

describe('getTemperature', () => {
  it('returns 20 by default', () => {
    thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toBe(20);
  });
  
})