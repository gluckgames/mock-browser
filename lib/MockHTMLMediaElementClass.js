var MockHTMLMediaElement = function(htmlMediaElementClass) {
    'use strict';

    htmlMediaElementClass.prototype.addTextTrack = () => {};
    htmlMediaElementClass.prototype.captureStream = () => {};
    htmlMediaElementClass.prototype.canPlayType = () => {};
    htmlMediaElementClass.prototype.fastSeek = () => {};
    htmlMediaElementClass.prototype.load = () => {};
    htmlMediaElementClass.prototype.pause = () => {};
    htmlMediaElementClass.prototype.play = () => {};
    htmlMediaElementClass.prototype.seekToNextFrame = () => {};
    htmlMediaElementClass.prototype.setMediaKeys = () => {};
    htmlMediaElementClass.prototype.setSinkId = () => {};
};

module.exports = MockHTMLMediaElement;
