# quartet

Here is my submission for the Quartet PHQ-9 Depression screener built in React.

Setup should be quite simple. Copy the repository and run:
npm install
then when that is complete:
npm start

which should open the app in a new window.

A few notes on the process I used:

In order to minimize set up time, I used a Yeoman generator to get this app up and running, specifically this one: https://github.com/newtriks/generator-react-webpack
It uses Babel to allow for ES2015 JavaScript, and has a host of other neat tools built into it. Whether or not it's ideal for 
building a more complex application is another discussion and one which I will not address here- I simply used it to hit the ground
running as quickly as possible. Furthermore, there will be some repetition around things like "import React from 'react'" 
as I was not concerned with the application structure as a whole but rather just the React code itself.

All the interesting source code will be found within the src/ directory. Since I was using Babel, all the JS is written in ES6,
meaning we can use classes and all the other utilities that comes with it. 

Finally, I have coded this with mobile first in mind, so this will look best on a phone or tablet viewport. I tried to make it 
as pretty as I can, but there are certainly design improvements that could be made. Again, I was first and foremost concerned
with functionality and implementing React, but it should look fine enough. With more time I could certainly make it prettier :)

That's it! Let me know if you run into any issues or have any questions. I am more than happy to go over this all.
