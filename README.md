<div align='center'>
<img src='https://i.imgur.com/abLiXF0.png' width="300">
</div>

<br />

<!-- TABLE OF CONTENTS -->
<h2 id="table-of-contents"> :book: Table of Contents</h2>

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project"> ➤ About The Project</a></li>
    <li><a href="#prerequisites"> ➤ Prerequisites</a></li>
    <li><a href="#getting-started"> ➤ Getting Started</a></li>
    <li><a href="#demo"> ➤ Demo</a></li>
    <li><a href="#mobile-support"> ➤ Mobile Support</a></li>
    <li><a href="#api-paths"> ➤ API Documentation</a></li>
    <li><a href="#running-tests"> ➤ Running Tests</a></li>
    <li>
      <a href="#user-stories"> ➤ User Stories</a></li>
      <ul>
        <li><a href="#us-01">US-01 Create and list reservations</a></li>
        <li><a href="#us-02">US-02 Create reservation on a future, working date</a></li>
        <li><a href="#us-03">US-03 Create reservation within eligible timeframe</a></li>
          <li><a href="#us-04">US-04 Seat reservation</a></li>
          <li><a href="#us-05">US-05 Finish an occupied table</a></li>
          <li><a href="#us-06">US-06 Reservation Status</a></li>
          <li><a href="#us-07">US-07 Search for a reservation by phone number</a></li>
          <li><a href="#us-08">US-08 Change an existing reservation</a></li>
      </ul>
    </li>
    <li><a href="#source"> ➤ Source</a></li>
  </ol>
</details>


<img src='https://i.imgur.com/DwCJ72P.png'>

<!-- ABOUT THE PROJECT -->
<h2 id="about-the-project"> :pencil: About The Project</h2>

<!--
<p align="justify"> 
  This application was built as the capstone project for the Thinkful Software Engineering Flex Program. It was designed to be used by restaurant personnel to keep track of reservations and table seating, when a request is made by a customer.
</p>
-->

<table>
<tr>
<td>
    This application was built as the capstone project for the Thinkful Software Engineering Flex Program. It was designed to be used by restaurant personnel to keep track of reservations and table seating, when a request is made by a customer.
</td>
</tr>
</table>

<img src='https://i.imgur.com/DwCJ72P.png'>

<!-- PREREQUISITES -->
<h2 id="prerequisites"> :fork_and_knife: Prerequisites</h2>

The following tech stack was used in this project:
* React
* Node
* Express
* PostgreSQL
* Knex

<img src='https://i.imgur.com/DwCJ72P.png'>

<!-- GETTING STARTED -->
<h2 id="getting-started"> :book: Getting Started</h2>

1. Fork and clone this repository.
1. Run `cp ./back-end/.env.sample ./back-end/.env`.
1. Update the `./back-end/.env` file with the connection URL's to your ElephantSQL database instance.
1. Run `cp ./front-end/.env.sample ./front-end/.env`.
1. You should not need to make changes to the `./front-end/.env` file unless you want to connect to a backend at a location other than `http://localhost:5000`.
1. Run `npm install` to install project dependencies.
1. Run `npm run start:dev` to start your server in development mode.

<img src='https://i.imgur.com/DwCJ72P.png'>

<!-- DEMO -->
<h2 id="demo"> :cloud: Demo</h2>

<!-->
Here is a live demo: <a href="https://capstone-rest.herokuapp.com/dashboard">https://capstone-rest.herokuapp.com/dashboard</a> -->

<div>
<img src='https://i.imgur.com/q6EeYKQ.gifg'>
</div>

<img src='https://i.imgur.com/DwCJ72P.png'>

<!-- MOBILE SUPPORT -->
<h2 id="mobile-support"> :iphone: Mobile Support</h2>

<div align='center'>
<img src='https://i.imgur.com/R2N2jUD.png'>
</div>
    
<img src='https://i.imgur.com/DwCJ72P.png'>

<!-- API DOCUMENTATION -->
<h2 id="api-paths"> :newspaper: API Documentation</h2>

The table displays the API endpoints and its use:

| API Endpoint                                             | Description                                                                                                         
| -------------------------------------------------------- | ---------------------------------------------------------------------------
| `/reservations`                                          | GET: List all Reservations. POST: Create a new reservation                                      
| `/reservations/:reservationId`                           | GET: Single reservation by ReservationId, PUT: Update a reservation by ReservationId 
| `/reservations/:reservationId/status`                    | PUT: Update a reservation status as either "Booked", "Seated", "Finished", or "Canceled"
| `/tables`                                                | GET: List all Tables, POST: Create a new table
| `/tables/:tablesID`                                      | GET: List a single table
| `/tables:tableId/seat`                                   | PUT: Updates a single table's status to "Occupied", Delete: Updates a single table's status to "Free"                
    
<img src='https://i.imgur.com/DwCJ72P.png'>

<!-- RUNNING TESTS -->
<h2 id="running-tests"> :grey_exclamation: Running Tests</h2>

This project has unit, integration, and end-to-end (e2e) tests. You have seen unit and integration tests in previous projects.
End-to-end tests use browser automation to interact with the application just like the user does.
Once the tests are passing for a given user story, you have implemented the necessary functionality.

Test are split up by user story. You can run the tests for a given user story by running:

`npm run test:X` where `X` is the user story number.

Have a look at the following examples:

- `npm run test:1` runs all the tests for user story 1 (both frontend and backend).
- `npm run test:3:backend` runs only the backend tests for user story 3.
- `npm run test:3:frontend` runs only the frontend tests for user story 3.

Whenever possible, frontend tests will run before backend tests to help you follow outside-in development.

> **Note** When running `npm run test:X` If the frontend tests fail, the tests will stop before running the backend tests. Remember, you can always run `npm run test:X:backend` or `npm run test:X:frontend` to target a specific part of the application.

Since tests take time to run, you might want to consider running only the tests for the user story you're working on at any given time.

Once you have all user stories complete, you can run all the tests using the following commands:

- `npm test` runs _all_ tests.
- `npm run test:backend` runs _all_ backend tests.
- `npm run test:frontend` runs _all_ frontend tests.
- `npm run test:e2e` runs only the end-to-end tests.

If you would like a reminder of which npm scripts are available, run `npm run` to see a list of available commands.

Note that the logging level for the backend is set to `warn` when running tests and `info` otherwise.

> **Note**: After running `npm test`, `npm run test:X`, or `npm run test:e2e` you might see something like the following in the output: `[start:frontend] Assertion failed:`. This is not a failure, it is just the frontend project getting shutdown automatically.

> **Note**: If you are getting a `unable to resolve dependency tree` error when running the frontend tests, run the following command: `npm install --force --prefix front-end`. This will allow you to run the frontend tests.

> **Hint**: If you stop the tests before they finish, it can leave the test database in an unusual state causing the tests to fail unexpectedly the next time you run them. If this happens, delete all tables in the test database, including the `knex_*` tables, and try the tests again.

### Frontend test timeout failure

Running the frontend tests on a resource constrained computer may result in timeout failures.

If you believe your implementation is correct, but needs a bit more time to finish, you can update the `testTimeout` value in `front-end/e2e/jest.config.js`. A value of 10000 or even 12000 will give each test a few more seconds to complete.

#### Screenshots

To help you better understand what might be happening during the end-to-end tests, screenshots are taken at various points in the test.

The screenshots are saved in `front-end/.screenshots` and you can review them after running the end-to-end tests.

You can use the screenshots to debug your code by rendering additional information on the screen.

<img src='https://i.imgur.com/DwCJ72P.png'>


<!-- USER STORIES -->
<h2 id="user-stories"> :small_orange_diamond: User Stories</h2>

<!-- US-01 -->
<h3 id="us-01"> US-01 Create and list reservations</h3>

As a restaurant manager<br/>
I want to create a new reservation when a customer calls<br/>
so that I know how many customers will arrive at the restaurant on a given day.

#### Acceptance Criteria

1. The `/reservations/new` page will
   - have the following required and not-nullable fields:
     - First name: `<input name="first_name" />`
     - Last name: `<input name="last_name" />`
     - Mobile number: `<input name="mobile_number" />`
     - Date of reservation: `<input name="reservation_date" />`
     - Time of reservation: `<input name="reservation_time" />`
     - Number of people in the party, which must be at least 1 person. `<input name="people" />`
   - display a `Submit` button that, when clicked, saves the new reservation, then displays the `/dashboard` page for the date of the new reservation
   - display a `Cancel` button that, when clicked, returns the user to the previous page
   - display any error messages returned from the API
1. The `/dashboard` page will
   - list all reservations for one date only. (E.g. if the URL is `/dashboard?date=2035-12-30` then send a GET to `/reservations?date=2035-12-30` to list the reservations for that date). The date is defaulted to today, and the reservations are sorted by time.
   - display next, previous, and today buttons that allow the user to see reservations on other dates
   - display any error messages returned from the API
1. The `/reservations` API will have the same validations as above and will return 400, along with an informative error message, when a validation error happens.
   - seed the reservations table with the data contained in `./back-end/src/db/seeds/00-reservations.json`

> **Hint** Dates and times in JavaScript and databases can be challenging.
>
> The users have confirmed that they will be using Chrome to access the site. This means you can use `<input type="date" />` and `<input type="time" />`, which are supported by Chrome but may not work in other browsers.
>
> `<input type="date" />` will store the date in `YYYY-MM-DD` format. This is a format that works well with the PostgreSQL `date` data type.
>
> `<input type="time" />` will store the time in `HH:MM:SS` format. This is a format that works well with the PostgreSQL `time` data type.
>
> **Optional** If you want to add support to other browsers such as Safari or IE, you can use the pattern and placeholder attributes along with the date and time inputs in your form. For the date input you can use `<input type="date" placeholder="YYYY-MM-DD" pattern="\d{4}-\d{2}-\d{2}"/>`, and for the time input you can use `<input type="time" placeholder="HH:MM" pattern="[0-9]{2}:[0-9]{2}"/>`. You can read more about handling browser support [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date#handling_browser_support).
>
> You can assume that all dates and times will be in your local time zone.

> **Hint** In the backend code, be sure to wrap any async controller functions in an `asyncErrorBoundary` call to ensure errors in async code are property handled.

In `back-end/src/errors/asyncErrorBoundary.js`

```javascript
function asyncErrorBoundary(delegate, defaultStatus) {
  return (request, response, next) => {
    Promise.resolve()
      .then(() => delegate(request, response, next))
      .catch((error = {}) => {
        const { status = defaultStatus, message = error } = error;
        next({
          status,
          message,
        });
      });
  };
}

module.exports = asyncErrorBoundary;
```

Use in controllers as part of `module.exports`. For example:

```javascript
module.exports = {
	create: asyncErrorBoundary(create)
}
```
<!-- US-02 -->
<h3 id="us-02"> US-02 Create reservation on a future, working date</h3>

As a restaurant manager<br/>
I only want to allow reservations to be created on a day when we are open<br/>
so that users do not accidentally create a reservation for days when we are closed.<br/>

#### Acceptance criteria

1. The `/reservations/new` page will display an error message with `className="alert alert-danger"` if any of the following constraints are violated:
   - The reservation date is a Tuesday as the restaurant is closed on Tuesdays.
   - The reservation date is in the past. Only future reservations are allowed.
1. The `/reservations` API will have the same validations as above and will return 400, along with an informative error message, when a validation error happens.

> **Hint** There may be more than one validation error on the page at time.
>
> For example, a reservation in the past on a Tuesday violates both rules, so the page should display two errors within a single `className="alert alert-danger"`
>
> However, the API validation does not need to include multiple validation error messages.
> You can run the validation in any order and report only one validation error at a time, and the tests will pass.
>
> Also, parsing a date in YYYY-MM-DD format using the built-in Date class assumes the date is a UTC date. UTC is a time standard that is the basis for civil time and time zones worldwide, but it is NOT a timezone. As a result, keep an eye out for how your dates are interpreted by the Date class.
>
> While there is nothing preventing you from using a third party library to handle dates for your project, you are encouraged to use the built-in Date class.

<!-- US-03 -->
<h3 id="us-03"> US-03 Create reservation within eligible timeframe</h3>

As a restaurant manager<br/>
I only want to allow reservations to be created during business hours, up to 60 minutes before closing<br/>
so that users do not accidentally create a reservation for a time we cannot accommodate.

#### Acceptance criteria

1. The `/reservations/new` page will display an error message with `className="alert alert-danger"`, if any of the following additional constraints are violated:
   - The reservation time is before 10:30 AM.
   - The reservation time is after 9:30 PM, because the restaurant closes at 10:30 PM and the customer needs to have time to enjoy their meal.
   - The reservation date and time combination is in the past. Only future reservations are allowed. E.g., if it is noon, only allow reservations starting _after_ noon today.
1. The `/reservations` API will have the same validations as above and will return 400, along with an informative error message, when a validation error happens.

> **Hint** Parsing a Date that includes the time in JavaScript can be tricky. Again, keep an eye out for which time zone is being used for your Dates.

<!-- US-04 -->
<h3 id="us-04"> US-04 Seat reservation</h3>

As a restaurant manager, <br/>
When a customer with an existing reservation arrives at the restaurant<br/>
I want to seat (assign) their reservation to a specific table<br/>
so that I know which tables are occupied and free.

#### Acceptance Criteria

1. The `/tables/new` page will
   - have the following required and not-nullable fields:
     - Table name: `<input name="table_name" />`, which must be at least 2 characters long.
     - Capacity: `<input name="capacity" />`, this is the number of people that can be seated at the table, which must be at least 1 person.
   - display a `Submit` button that, when clicked, saves the new table then displays the `/dashboard` page
   - display a `Cancel` button that, when clicked, returns the user to the previous page
1. The `/dashboard` page will:

   - display a list of all reservations in one area.
   - each reservation in the list will:
     - Display a "Seat" button on each reservation.
     - The "Seat" button must be a link with an `href` attribute that equals `/reservations/${reservation_id}/seat`, so it can be found by the tests.
   - display a list of all tables, sorted by `table_name`, in another area of the dashboard
     - Each table will display "Free" or "Occupied" depending on whether a reservation is seated at the table.
     - The "Free" or "Occupied" text must have a `data-table-id-status=${table.table_id}` attribute, so it can be found by the tests.

1. The `/reservations/:reservation_id/seat` page will
   - have the following required and not-nullable fields:
     - Table number: `<select name="table_id" />`. The text of each option must be `{table.table_name} - {table.capacity}` so the tests can find the options.
   - do not seat a reservation with more people than the capacity of the table
   - display a `Submit` button that, when clicked, assigns the table to the reservation then displays the `/dashboard` page
   - PUT to `/tables/:table_id/seat/` in order to save the table assignment. The body of the request must be `{ data: { reservation_id: x } }` where X is the reservation_id of the reservation being seated. The tests do not check the body returned by this request.
   - display a `Cancel` button that, when clicked, returns the user to the previous page
1. The `tables` table must be seeded with the following data:
   - `Bar #1` & `Bar #2`, each with a capacity of 1.
   - `#1` & `#2`, each with a capacity of 6.
1. The `/tables` API will have the same validations as above and will return 400, along with an informative error message, when a validation error happens.

- if the table capacity is less than the number of people in the reservation, return 400 with an error message.
- if the table is occupied, return 400 with an error message.

> **Hint** Work through the acceptance criteria in the order listed, step-by-step. A different order may be more challenging.

> **Hint** Seed the `tables` table in a similar way as it's done with the `reservations` table.

> **Hint** Add a `reservation_id` column in the `tables` table. Use the `.references()` and `inTable()` knex functions to add the foreign key reference.


<!-- US-05 -->
<h3 id="us-05"> US-05 Finish an occupied table</h3>

As a restaurant manager<br/>
I want to free up an occupied table when the guests leave<br/>
so that I can seat new guests at that table.<br/>

#### Acceptance Criteria

1. The `/dashboard` page will
   - Display a "Finish" button on each _occupied_ table.
   - the "Finish" button must have a `data-table-id-finish={table.table_id}` attribute, so it can be found by the tests.
   - Clicking the "Finish" button will display the following confirmation: "Is this table ready to seat new guests? This cannot be undone." If the user selects "Ok" the system will: - Send a `DELETE` request to `/tables/:table_id/seat` in order to remove the table assignment. The tests do not check the body returned by this request. - The server should return 400 if the table is not occupied. - Refresh the list of tables to show that the table is now available.
   - Clicking the "Cancel" makes no changes.

> **Hint** The end-to-end test waits for the tables list to be refreshed before checking the free/occupied status of the table, so be sure to send a GET request to `/tables` to refresh the tables list.

<!-- US-06 -->
<h3 id="us-06"> US-06 Reservation Status</h3>

As a restaurant manager<br/>
I want a reservation to have a status of either booked, seated, or finished<br/>
so that I can see which reservation parties are seated, and finished reservations are hidden from the dashboard.

#### Acceptance Criteria

1. The `/dashboard` page will
   - display the status of the reservation. The default status is "booked"
     - the status text must have a `data-reservation-id-status={reservation.reservation_id}` attribute, so it can be found by the tests.
   - display the Seat button only when the reservation status is "booked".
   - clicking the Seat button changes the status to "seated" and hides the Seat button.
   - clicking the Finish button associated with the table changes the reservation status to "finished" and removes the reservation from the dashboard.
   - to set the status, PUT to `/reservations/:reservation_id/status` with a body of `{data: { status: "<new-status>" } }` where `<new-status>` is one of booked, seated, or finished

> **Hint** You can add a field to a table in a migration `up` method by defining a new column. E.g. `table.string("last_name", null).notNullable();` will create a new last_name column.  Be sure to remove the column in the `down` function using `dropColumn()`. E.g. `table.dropColumn("last_name");`

> **Hint** Use [`Knex.transaction()`](http://knexjs.org/#Transactions) to make sure the `tables` and `reservations` records are always in sync with each other.

<!-- US-07 -->
<h3 id="us-07"> US-07 Search for a reservation by phone number</h3>

As a restaurant manager<br/>
I want to search for a reservation by phone number (partial or complete)<br/>
so that I can quickly access a customer's reservation when they call about their reservation.<br/>

#### Acceptance Criteria

1. The `/search` page will
   - Display a search box `<input name="mobile_number" />` that displays the placeholder text: "Enter a customer's phone number"
   - Display a "Find" button next to the search box.
   - Clicking on the "Find" button will submit a request to the server (e.g. GET `/reservations?mobile_phone=555-1212`).
     - then the system will look for the reservation(s) in the database and display all matched records on the `/search` page using the same reservations list component as the `/dashboard` page.
     - the search page will display all reservations matching the phone number, regardless of status.
   - display `No reservations found` if there are no records found after clicking the Find button.

> **Hint** To search for a partial or complete phone number, you should ignore all formatting and search only for the digits.
> You will need to remove any non-numeric characters from the submitted mobile number and also use the PostgreSQL translate function.
>
> The following function will perform the correct search.
>
> ```javascript
> function search(mobile_number) {
>   return knex("reservations")
>     .whereRaw(
>       "translate(mobile_number, '() -', '') like ?",
>       `%${mobile_number.replace(/\D/g, "")}%`
>     )
>     .orderBy("reservation_date");
> }
> ```

<!-- US-08 -->
<h3 id="us-08"> US-08 Change an existing reservation</h3>

As a restaurant manager<br/>
I want to be able to modify a reservation if a customer calls to change or cancel their reservation<br/>
so that reservations are accurate and current.

#### Acceptance Criteria

1. The `/dashboard` and the `/search` page will
   - Display an "Edit" button next to each reservation
     - Clicking the "Edit" button will navigate the user to the `/reservations/:reservation_id/edit` page
   - the "Edit" button must be a link with an `href` attribute that equals `/reservations/${reservation_id}/edit`, so it can be found by the tests.
   - Display a "Cancel" button next to each reservation
   - The Cancel button must have a `data-reservation-id-cancel={reservation.reservation_id}` attribute, so it can be found by the tests.
   - Clicking the "Cancel" button will display the following confirmation: "Do you want to cancel this reservation? This cannot be undone."
     - Clicking "Ok" on the confirmation dialog, sets the reservation status to `cancelled`, and the results on the page are refreshed.
       - set the status of the reservation to `cancelled` using a PUT to `/reservations/:reservation_id/status` with a body of `{data: { status: "cancelled" } }`.
     - Clicking "Cancel" on the confirmation dialog makes no changes.
1. The `/reservations/:reservation_id/edit` page will display the reservation form with the existing reservation data filled in
   - Only reservations with a status of "booked" can be edited.
   - Clicking the "Submit" button will save the reservation, then displays the previous page.
   - Clicking "Cancel" makes no changes, then display the previous page.

> **Hint** The same validation used for create applies to editing a reservation. The form and the API for updating a reservation must not allow the user to violate any of the rules specified when creating a reservation.

<img src='https://i.imgur.com/DwCJ72P.png'>

<!-- SOURCE -->
<h2 id="source"> :scroll: Source</h2>

Project's source code: <a href="https://github.com/Thinkful-Ed/starter-restaurant-reservation">https://github.com/Thinkful-Ed/starter-restaurant-reservation</a>