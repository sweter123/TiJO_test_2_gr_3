describe('app', function ()
{
    'use strict';

    var exercise = window.app;

    describe('upperCase', function () {
        it('should converts the first letter each word in upper case', function () {
            expect(exercise.upperCase('This is a sentence')).toBe('This Is A Sentence');
            expect(exercise.upperCase('pisze sobie testy')).toBe('Pisze Sobie Testy');
        });
        it('should not change upper case letter', function () {
            expect(exercise.upperCase('ThisIs Hard')).toBe('ThisIs Hard');
            expect(exercise.upperCase('UnitTesty Sa Proste')).toBe('UnitTesty Sa Proste');
        });
        it('should not change punctuation', function () {
            expect(exercise.upperCase('This is,m Hard')).toBe('This Is,m Hard');
            expect(exercise.upperCase('tak,lub nie')).toBe('Tak,lub Nie');
        });
    });

    describe('findAlmostMax', function () {
        it('should return second greatest number', function () {
            expect(exercise.findAlmostMax([2, 3, 4])).toBe(3);
            expect(exercise.findAlmostMax([9, 8, 7, 6])).toBe(8);
        });
        it('should return second greatest number', function () {
            expect(exercise.findAlmostMax([50, 40, 30, 10])).toBe(40);
            expect(exercise.findAlmostMax([1, 2, 3, 9])).toBe(3);
        });
        it('string should be omnitted', function () {
            expect(exercise.findAlmostMax([50, 'str', 30, 10])).toBe(30);
            expect(exercise.findAlmostMax([1, 2, 'trzy', 5])).toBe(2);
        });
        it('empty array should return false', function () {
            expect(exercise.findAlmostMax([])).toEqual(false);
            expect(exercise.findAlmostMax([])).toBe(false);
        });
        it('array of string should return false', function () {
            expect(exercise.findAlmostMax(['cat', 'kot'])).toEqual(false);
            expect(exercise.findAlmostMax(['tak', 'nie', 'czasami'])).toEqual(false);
        });
    });
});
