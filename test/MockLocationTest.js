var should = require('chai').should(),
dash = require('lodash' ),
MockHTMLMediaElement = require('../lib/MockHTMLMediaElement');

describe('MockHTMLMediaElement', function() {
'use strict';

    describe('#instance', function() {
        var mediaElement = new MockHTMLMediaElement(),
            methods = [
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
            ];

        it('should create an instance of MockHTMLMediaElement', function() {
            should.exist( mediaElement );
            mediaElement.should.be.instanceof( MockHTMLMediaElement );
        });

        it('should have all known methods by size and type', function() {
            dash.functionsIn( mediaElement ).length.should.equal( methods.length );
            methods.forEach(function(method) {
                mediaElement[ method ].should.be.a( 'function' );
            });
        });
    });
});
