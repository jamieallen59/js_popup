function Donation() {
	this.currentAmount = 0
	this.currentSupporters = 0
}

Donation.prototype.contribution = function(amount_donated) {
	this.currentAmount += amount_donated;
	this.currentSupporters += 1;
};


