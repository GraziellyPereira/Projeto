import React, { Component } from 'react';

class Paginator extends Component {
  state = {}
  render() {
    return (
      <div id="bottom" className="row">
        <div className="col-md-12">
          <ul className="pagination">
            <li className="disabled"><a>Anterior</a></li>
            <li className="disabled"><a>1</a></li>
            <li className="next"><a rel="next">Próximo</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Paginator;