
(function () {

    angular.module('app').factory('dataCtx', ['$http', '$log', 'logger', dataCtx]);

    function dataCtx($http, $log, logger) {
        var service = {
            save: save,
            create: create,
            update: update,
            remove: remove,
            refresh: refresh,
            load: load,
            fetchLookup: fetchLookup,

        };
        return service;



        function save(method, url, data) {
            return $http({ method: method, url: url, data: data });
        };

        //function logAudit(method, url, currentData, previousData) {
        //    var audit = {
        //        Action: method,
        //        Module: url,
        //        RecordId: "0",
        //        User: 'user',
        //        PreviousValue: previousData,
        //        CurrentValue: currentData,
        //        ActionTime: new Date()
        //    };

        //    $http({ method: 'POST', url: 'AuditTrails', data: audit })
        //        .then(function () {
        //            logger.logWarning("Transaction Logged", "", "", true);
        //        });
        //};

        function create(url, rooturl, data) {

            //  logAudit("New", rooturl + url, data, "{}");
            return save('POST', rooturl + url, data);
        };



        // function updatetemStatus(parameters) {
        //    var itemStatus = {
        //        ModuleType: service.metaData,
        //        ModuleId: service.entity.ID,
        //        ModuleStateId: service.entity.NextStateId,
        //        IsCancelled: false
        //    };


        //    var workFlow = {
        //        ModuleType: service.metaData,
        //        ModuleID: service.entity.ID,
        //        ModuleStateId: service.entity.NextStateId,
        //        IsCancelled: false,
        //        TimeOfAction: new Date()
        //    };
        //}

        function update(url, rooturl, data) {
            // logAudit("Update", rooturl + url, data, "{}");
            return save('PUT', rooturl + url, data);
        };

        function remove(url, rooturl) {
            //  logAudit("Delete", rooturl + url, "{}", "{}");
            return $http({ method: 'DELETE', url: rooturl + url });

        };

        //function getMetaData() {
        //    $http({ method: 'GET', url: url + pagingquery });

        //}


        function refresh(url, rooturl, forceRefresh, currentPage, pageSize, recordFilter) {
            //var  recordFilterquery =  ;
            var pagingquery = "?$top=" + pageSize + "&$skip=" + ((currentPage - 1) * pageSize) + "&$orderby=ID desc";
            // logAudit("View", url + pagingquery, "{}", "{}");
            if (recordFilter) {
                return $http({ method: 'GET', url: rooturl + url + pagingquery + "&" + recordFilter + "&" + "$count=true" });
            } else {
                return $http({ method: 'GET', url: rooturl + url + pagingquery + "&" + "$count=true" });
            }
        };
        function load(url, rooturl) {
            //  logAudit("Get", url, "{}", "{}");
            return $http({ method: 'GET', url: rooturl + url });
        };
        function fetchLookup(url, rooturl) {
            return $http({ method: 'GET', url: rooturl + url });
        };
    };
})();
