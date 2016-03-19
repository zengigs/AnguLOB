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
<html>
  <head>
    .
    .
    .
  </head>
  <body>
    .
    .
    .
    <script src="angular.js"></script>
    <script src="angulob.js"></script>
  </body>
</html>
```
