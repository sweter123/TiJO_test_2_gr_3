describe("BrainCandyListCtrl", function () {
    'use strict';
    beforeEach(module('exerciseApp'));
    var brainCandyListCtrl;
    var CandyDAOmock;
    var sequence = 1;
    var candies = {};
    [
        {
            id: sequence++,
            name: 'Krowka',
            factory: 'Wawel'
        },
        {
            id: sequence++,
            name: 'Tiki-taki',
            factory: 'Wawel'
        },
        {
            id: sequence++,
            name: 'Michalki',
            factory: 'Wawel'
        }
    ].every(function (value) {
        candies[value.id] = value;
        return true;
    });
    beforeEach(function () {
        CandyDAOmock = jasmine.createSpyObj('CandyDAO', ['query']);
        CandyDAOmock.query.andReturn({
            then: function (callback) {
                callback(candies);
                return this;
            }
        });
    });
    beforeEach(inject(function ($controller) {
        brainCandyListCtrl = $controller('BrainCandyListCtrl', {CandyDAO: CandyDAOmock});

    }));

    describe("CandyDAO.query()", function () {
        it("should be called", function () {
            expect(CandyDAOmock.query).toHaveBeenCalled();
        });
    });

    describe("variable  list", function () {
        it("should exist", function () {
            expect(brainCandyListCtrl.list).not.toBe(undefined);
        });

        it("should be a object", function () {
            expect('object' === typeof brainCandyListCtrl.list).toBe(true);
        });

    });
});
