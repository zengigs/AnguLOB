# AnguLOB
AnguLOB is a javascript library designed for building line-of-business applications based on the Angularjs framework. Its main goal is to simplify the development of business applications while standardizing the overall process. Applications built with the AnguLOB framework rely on the framework for all the heavy lifting tasks involved in the develoment of a typical line-of-business application. Such tasks include the following:

1.  Fetching of a single or a list of business object(s) from a specified service endpoint which can be attached to the $scope object      of a controller for user interface display
2.  Handling of the number of business objects to be fetched in a server trip
3.  Pagination of the fetched business objects
4.  Searching and filtering of fetched business objects
5.  Creation of new business objects including parent/child objects using specified service endpoints. This includes fetching lists of       related business objects for lookup purposes
6.  Updating of existing business objects
7.  Deletion of existing business objects
8.  Logging of user actions for audit purposes
9.  And more...

##Usage
Using AnguLOB is very easy. Just include the file angulob.js or angulob.min.js (for debugging or production) to your index.html file. Make sure it is after including the angularjs file as angulob depends on angularjs. See markup below

```
index.html
<html>
  <head>
    ...
  </head>
  <body>
    ...
    <script src="angular.js"></script>
    <script src="angulob.js"></script>
  </body>
</html>
```

Then assuming you have a webservice endpoint http://localhost/hrms/api/employees that returns in json format the list of all employees for the human resource management system(hrms), you can write an angular controller for managing fetching of employees as illustrated in the code below:

```
(function () {
    angular.module('app').controller('employeesController', ['$scope', 'bizObjects', function ($scope, bizObjects) {
        bizObjects.init(
            {
              bizObjectName:"Employees",
              bizObjectSvcUrl:"api/employees"
            });
        $scope.employees = bizObjects;
    }])
})();
```
Note the service **bizObjects** injected in the employees controller. This service is implemented by AnguLOB and provides for a generic way of fetching business objects. You initialise this by calling the init method of the **bizObjects** service. The init method takes a configuration object as a parameter. In the code above, *title* is a property that holds the name of the business object you are trying to fetch. It is a required property as it is used in the reporting of status messages from the service. serviceUrl on the other hand is the webservice url without the host name portion.

Below is the complete configuration object API
```
            {
              title:"Employees",  //name of the business object you are trying to fetch (required)
              servicevcUrl:"api/employees", //the webservice url without the host name portion (required)
              pageSize: 10  //Number of records to fetch at a time can be bound to a ui element to change this value (defaults to 10 if not specified)
            }
```
