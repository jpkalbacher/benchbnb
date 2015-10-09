/* global EventEmitter, AppDispatcher, BenchConstants */

(function(root) {
  'use strict';

  var CHANGE_EVENT = "change";

  var _benches = [];
  var resetBenches = function(benches) {
    _benches = benches;
  };

  root.BenchStore = $.extend({}, EventEmitter.prototype, {

    all: function(){
      return _benches.slice(0);
    },

    addChangeListener: function(callback){
      this.on(CHANGE_EVENT);
    },

    removeChangeListener: function(callback){
      this.removeChangeListener(CHANGE_EVENT);
    },

    dispatcherId: AppDispatcher.register(function(payload){
        if(payload.actionType === BenchConstants.BENCHES_RECEIVED){
          this.BenchStore.emit(CHANGE_EVENT);
          resetBenches(payload.benches);
        }
    })
  });






}(this));
