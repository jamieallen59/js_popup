describe("DonatePrompt", function() {
  var player;
  var song;

  beforeEach(function() {
    prompt = new DonatePrompt();
  });

  it("should be able to play a Song", function() {
    player.play(song);
    expect(player.currentlyPlayingSong).toEqual(song);

    //demonstrates use of custom matcher
    expect(player).toBePlaying(song);
  });
});
