"use strict";

var Driver = source("driver");

var Cylon = require('cylon'),
    Buffy = require('buffy');

describe("Cylon.Drivers.Neurosky", function() {
  var driver;

  beforeEach(function() {
    driver = new Driver({ adaptor: {} });
  });

  it('subclasses Cylon.Driver', function() {
    expect(driver).to.be.an.instanceOf(Cylon.Driver);
    expect(driver).to.be.an.instanceOf(Driver);
  });

  describe("#start", function() {
    var read;

    beforeEach(function() {
      driver.adaptor = { read: stub() };
      read = driver.adaptor.read;
    });

    it("calls #read on the adaptor", function() {
      driver.start(function() {});
      expect(read).to.be.called;
    });

    describe("the callback to #read", function() {
      beforeEach(function() {
        driver.emit = spy();
        driver.parse = spy();

        read.yields("data");
        driver.start(function() { });
      });

      it("emits the provided data", function() {
        expect(driver.emit).to.be.calledWith('data', 'data');
      });

      it("calls #parse with the data", function() {
        expect(driver.parse).to.be.calledWith('data');
      })
    });
  });

  describe("#parse", function() {
    it("needs tests");
  });

  describe("#parsePacket", function() {
    it("needs tests");
  });

  describe("#parseEEG", function() {
    it("needs tests");
  });

  describe("#parse3ByteInteger", function() {
    it("needs tests");
  });
});