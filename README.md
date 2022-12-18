# Getting Started

This project is using expressJS framework.

## Assumptions made

1. Country code has been converted into integer values to be used in the query because the schema provided shows that the country_id is stored in BIGINT format.
2. The query is crafted as follows:
  a. Top 3 most rented books regardless of country.
  b. Retrieve top 3 people who have rented it in the specific country based on number of times they have borrowed each of said book.
  c. Sort these 3 people based on the total number of books they have rented, not solely based on the number of times they have borrowed each book.
3. We are assuming that we need to return the names of the borrowers for "top_x_borrower_value"

## Proposed structure
├──controllers<br/>
├──models<br/>
├──routes<br/>
├──services<br/>
├──util<br/>
index.js<br/>

## Details of structure
| Folder name  | What is it used for |
| ------------- | ------------- |
| controllers  | Contains all controller methods and handles the req, res |
| models  | Contains mapping files to postgresql using Sequelize |
| routes  | Contains routing to controller methods |
| services  | Contains all business logic for the project |
| utils  | Reusable utility functions |

## Available Scripts

In the project directory, you can run:

### `node index.js`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm i`

If you have node installed on your computer, this command will automatically download the node_modules for this project.

To download node, you can refer to [https://nodejs.org/en/](https://nodejs.org/en/) .
