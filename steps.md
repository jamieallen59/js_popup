###Steps taken through the test

I decided not to use a full JS framework as I have a very limited knowledge of Angular (I've been learning it this week), and haven't used any of the others.

Download Jasmine into repo
adapted specs and spec runner to point at the relevant files. Tested spec runner
added views directory and index.html
added assets including css reset and stylesheet

####Breaking the task into smaller problems:

#####high-level:
- select how much they would like to donate
- see how many people have already donated to this cause
- send the donation amount to a server to be stored

#####detail:
- prompt must be triggered. For this I'll use a button.
- For the prompt I will us a modal but there are complexities with testing this... (https://stackoverflow.com/questions/22246813/unit-testing-testing-a-modalinstance-controller-with-karma-jasmine).
- from the pdf I can see i'll need an input box that saves the number entered to a variable
- a donate button that confirms the amount donated
- a dynamic number beneath which shows how many people have donated
- I will build the prompt contents before the "popup" functionality

I began by focussing on the donation itself and wrote tests for: 
- current donation amount
- providing a donation
- number of supporters who have donated
- incrementing number of supporters

I then looked into jasmine-jquery to be able to test my html

Set up a DOM test looking for the button
downloaded JQuery

####Had trouble linking jasmine-jquery tests to SpecRunner:
- html file is included as a source
- new spec file has been given a describe method, but where with JS you would describe the function, with JQuery there is not one. Therefore I am not sure how to link them.

I will continue implementation without testing the view, but the core functionality is all tested.

Added a button to the index page and styled it.
Called in my Donation.js to the html page to reference my JQuery.

Created the popup using html and css to match PDF

Added jquery.modal.js plus css file

Added background fade effect to the on the modal and tidied up the CSS

Using JQuery/AJAX:
- Prevented default action of donate button (within the modal)
- grabbed amount entered into the input field

----------------------------------------

I was unable to send the information to the page using AJAX and have the number update. As this information is coming from the page itsef and not an external API for example, it needs a server or database and a controller to handle the requests.
