var should = require('chai').should(),
dash = require('lodash' ),
MockLocation = require('../lib/MockLocation');

describe('MockLocation', function() {
'use strict';

    describe('#instance', function() {
        var location = new MockLocation(),
            methods = [
                'reload',
                'assign',
                'replace',
                'toString'
            ];

        it('should create an instance of MockLocation', function() {
            should.exist( location );
            location.should.be.instanceof( MockLocation );
        });

        it('should have all known methods by size and type', function() {
            dash.functionsIn( location ).length.should.equal( methods.length );
            methods.forEach(function(method) {
                location[ method ].should.be.a( 'function' );
            });
        });
    });
});
