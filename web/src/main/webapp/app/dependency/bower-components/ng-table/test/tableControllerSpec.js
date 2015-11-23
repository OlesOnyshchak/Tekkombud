describe('ngTableParams', function () {
    var scope, ctrl, params, data = [
        {name: "Moroni", age: 50, role: 'Administrator'},
        {name: "Tiancum", age: 43, role: 'Administrator'},
        {name: "Jacob", age: 27, role: 'Administrator'},
        {name: "Nephi", age: 29, role: 'Moderator'},
        {name: "Enos", age: 34, role: 'user'},
        {name: "Tiancum", age: 43, role: 'user'},
        {name: "Jacob", age: 27, role: 'user'},
        {name: "Nephi", age: 29, role: 'Moderator'},
        {name: "Enos", age: 34, role: 'user'},
        {name: "Tiancum", age: 43, role: 'Moderator'},
        {name: "Jacob", age: 27, role: 'user'},
        {name: "Nephi", age: 29, role: 'user'},
        {name: "Enos", age: 34, role: 'Moderator'},
        {name: "Tiancum", age: 43, role: 'user'},
        {name: "Jacob", age: 27, role: 'user'},
        {name: "Nephi", age: 29, role: 'user'},
        {name: "Enos", age: 34, role: 'user'}
    ];
    beforeEach(module('ngTable'));

    /*beforeEach(inject(function ($controller, $rootScope, ngTableParams) {
        scope = $rootScope.$new();
        params = scope.params = new ngTableParams();
        ctrl = $controller(ngTableController, {
            $scope: scope
        });
    }));

    it('ngTableController should have parameters', inject(function (ngTableParams) {
        var params = new ngTableParams();
        expect(ngTableParams).toBeDefined();
    }));*/
});
