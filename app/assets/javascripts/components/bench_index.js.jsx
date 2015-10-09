/* global React, BenchStore */
(function(root) {
  'use strict';

  var Index = React.createClass({
    getInitialState: function(){
      this.setState({benches: BenchStore.all()});
    },

    render: function(){
      return(
        <div>
          {this.state.benches}
        </div>
      );
    }
  });
}(this));
