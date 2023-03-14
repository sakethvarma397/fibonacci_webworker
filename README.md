# Calculating the Fibonacci number with Web workers
This is a practice project to see how the Web Workers work. 

In this I've calcualted the Fibonacci number on the main thread first, to see how it blocks the UI. You can notice how the click counter interation is blocked while calculating the Fib Number for number over 40.

Then I've changed the code to create a new worker for every calculation, and update the UI once the calculation is done and the threa is termianted. This way the main threa is not blocked and the user can interact with the rest of the page.


<img width="879" alt="Screenshot 2023-03-14 at 11 43 19 AM" src="https://user-images.githubusercontent.com/29940063/224911843-dca7e658-c471-470a-8292-fbe7a27b3ab6.png">

## Available Scripts

In the project directory, you can run:

### `npm install`

To install all the Packages

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## How to go through the code

- Go to [http://localhost:3000](http://localhost:3000) to calculate the number on main thread
- Go to [http://localhost:3000/worker](http://localhost:3000/worker) to calculate the number with worker
