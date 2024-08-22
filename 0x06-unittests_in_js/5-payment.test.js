const {describe, it} = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./5-payment");
const expect = require("chai").expect;

describe("sendPaymentRequestToApi", function() {
    beforeEach("create spy", function() {
	sinon.spy(console, "log");
    });
    afterEach("restore the spy", function() {
	console.log.restore();
    });
    it("console log check", function() {
	sendPaymentRequestToApi(100, 20);

	expect(console.log.withArgs("The total is: 120").calledOnce).to.be.true;
    });
    it("console log check", function() {
	sendPaymentRequestToApi(10, 10);

	expect(console.log.withArgs("The total is: 20").calledOnce).to.be.true;
    });
});
