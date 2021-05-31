import React from 'react';

const UtilityBar = () => {
  return (
    <div id="top" className="row">
      <div className="col-sm-3">
        <h2>Itens</h2>
      </div>
      <div className="col-sm-6">

        <div className="input-group h2">
          <input name="data[search]" className="form-control" id="search" type="text" placeholder="Pesquisar Itens" />
          <span className="input-group-btn">
            <button className="btn btn-primary" type="submit">
              <span >Buscar</span>
            </button>
          </span>
        </div>
      </div>
      <div className="col-sm-3">
        <a className="btn btn-primary pull-right h2">Novo Item</a>
      </div>
    </div>
  );
}

export default UtilityBar;