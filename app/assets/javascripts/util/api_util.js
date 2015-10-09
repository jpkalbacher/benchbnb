/* global ApiActions */
var ApiUtil = {
  fetchBenches: function(){
    $.ajax({
    url:'api/benches',
    // datatype: 'json',
    success:
      function(benches) {
        ApiActions.receiveAll(benches);
      }
    });
  }
};
