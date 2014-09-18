describe("Button Click Event Tests", function() {
  var spyEvent;
   
//   beforeEach(function() {
//     setUpHTMLFixture();
//   });
      
  it ("should display button to initiate the prompt", function() {
    expect($('#donate-button')).toBeInDOM()
  });
      
//   it ("should invoke the btnHideMessage click event.", function() {
//     spyEvent = spyOnEvent('#btnHideMessage', 'click');
//     $('#btnHideMessage').trigger( "click" );
       
//     expect('click').toHaveBeenTriggeredOn('#btnHideMessage');
//     expect(spyEvent).toHaveBeenTriggered();
//   });
});


// <script type="text/javascript">
//    var MSG = "Hello World!";
      
//    function hideMessage() {
//      $( "#pMsg" ).html("");
//    }
     
//    function showMessage() {
//      $( "#pMsg" ).html(MSG); 
//    }
      
//    function setUpHTMLFixture() {
//      setFixtures('<form id="testForm" action="">'
//                 +'  <h1>Test Form</h1>'
//                 +'  <input type="text" id="txtMessage">'
//                 +'  <br>'
//                 +'  <button id="btnHideMessage" type="button" onclick="hideMessage()">Hide Message</button>'
//                 +'  <button id="btnShowMessage" type="button" onclick="showMessage()">Show Message</button>'
//                 +'  <br>'
//                 +'  <p id="pMsg"></p>'
//                 +'</form>');
       
//    }
//   </script>