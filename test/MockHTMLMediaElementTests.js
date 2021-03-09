var should = require('chai').should(),
dash = require('lodash' ),
mockHTMLMediaElementClass = require('../lib/MockHTMLMediaElementClass');

describe('MockHTMLMediaElement', function() {
'use strict';

    class testClass {};

    describe('#instance', function() {
        mockHTMLMediaElementClass(testClass);
        var methods = [
                'addTextTrack',
                'captureStream',
                'canPlayType',
                'fastSeek',
                'load',
                'pause',
                'play',
                'seekToNextFrame',
                'setMediaKeys',
                'setSinkId'
            ],
            mediaElement = new testClass();

        it('should create an instance of MockHTMLMediaElement', function() {
            should.exist( mediaElement );
            mediaElement.should.be.instanceof( testClass );
        });

        it('should have all known methods by size and type', function() {
            dash.functionsIn( mediaElement ).length.should.equal( methods.length );
            methods.forEach(function(method) {
                mediaElement[ method ].should.be.a( 'function' );
            });
        });
    });
});
