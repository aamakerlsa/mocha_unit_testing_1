var assert = require('chai').assert;
var app = require('../app');



describe('App', function(){
    describe('sayHello()', function(){
        it('sayHello should return hello', function(){
                let result = app.sayHello();
                assert.equal(result, 'hello');
        })

        it ('sayHello should return type string', function(){
                let result = app.sayHello();
                assert.typeOf(result, 'string');
        })
    });
    describe('addNumbers()', function(){
        it ('addNumbers should be above 5', function(){
                let result = app.addNumbers(5, 5);
                assert.isAbove(result, 5);
        })
        it ('addNumbers should return type number', function(){
                let result = app.addNumbers(5, 5);
                assert.typeOf(result, 'number');
        })
    })
    describe('getDataPost()', function(){
        it ('getDataPost should return type object', function(){
                let result = app.getDataPost({"num":"1", "name":"akbar"});
                assert.typeOf(result, 'object');
        });
        it ('getDataPost should return object containing name key', function(){
                let result = app.getDataPost({"num":"1", "name":"akbar"});
                assert.property(result, 'name');
        });
        it ('getDataPost should return object with keys - num, name', function(){
                let result = app.getDataPost({"num":"1", "name":"akbar"});
                expect(result).to.have.all.keys(['num', 'name', 'test1234']);
        });
        it ('getDataPost should return object with length of 2', function(){
                let result = app.getDataPost({num:"1", name:"akbar"});
                assert.lengthOf(Object.keys(result), 2);
                //expect(Object.keys(result)).to.have.lengthOf(2);
    });
    })
})