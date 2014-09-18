describe("Donation", function() {
  var donation;

  beforeEach(function() {
    donation = new Donation();
  });

  it("should begin at 0", function() {
    expect(donation.currentAmount).toEqual(0);
  });

  it("should allow a donation of an amount given", function() {
    donation.contribution(100);

    expect(donation.currentAmount).toEqual(100);
  });

  it('should show how many people have currently donated', function() {
    expect(donation.currentSupporters).toEqual(0);
  });

  it('should increment by 1 for every new donation', function() {
    donation.contribution(20);
    donation.contribution(35);
    donation.contribution(10);

    expect(donation.currentSupporters).toEqual(3);
  });

});
