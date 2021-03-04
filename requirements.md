# Software Requirements

## Minimum Viable Product :

- What will your MVP functionality be?
  - creat four pages.
  - have two forms take inputs from the user and give him a thanks message.
  - save the information from the user in local storage.
  - the home page contain a slide-show.
  - event contain images flip with text.


- What are your stretch goals?
  - add a calender in event page. 


## Functional Requirements:

Data flow:

Gift form: After the user enter his name and select one of the catogery options, then the user will be able to choose the kind of gift and fill a form depanding on his choise. If it was financial the event will call payment function that contain inputs ask him about credit card details, else (he choose the in-kind) the event will call the inKined function that contain inputs ask him about him  gift details. After that when the user click on submit the submit function will take the informations saved in local storage to give him a message.
Event form: After the user enter his name and select one of the event options and the fill the all inputs.  After that when the user click on submit the submit function will take the informations saved in local storage to give him a message.

