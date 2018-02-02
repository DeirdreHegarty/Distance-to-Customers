# Distance-to-Customers

### Problem

* Have some customer records in a text file (customers.json) -- one customer
  per line, JSON-encoded. 
* Want to invite any customer within 100km of our location. 
* Read the full list of customers and output the names and user ids of matching
  customers (within 100km), sorted by User ID (ascending).

### Towards a Solution

`npm init` creates a node package.  

*to set up testing:*.  
`npm install jasmine`.  
`npm install -g jasmine` - install the jasmine command globally.  
`jasmine init` - this creates `spec` folder.  

To create a test file: create a file names 'whatever-name-desired' + 'Spec.js' e.g. 'fooSpec.js' or 'barSpec.js'.
This file needs to be placed within the spec directory.

### To Run
1. Open getClient.html in a browser.
2. `npm install` to get dependencies.
3. `npmt test` - this runs jasmine.