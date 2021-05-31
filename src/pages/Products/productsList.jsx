import React, { Component } from 'react';

class ProductsList extends Component {
  state = {}
  render() {
    return (
      <>
        <hr />
        <div id="list" className="row">

          <div className="table-responsive col-md-12">
            <table className="table table-striped" cellSpacing="0" cellPadding="0">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome do Produto</th>
                  <th>Em Estoque</th>
                  <th>Valor</th>
                  <th>Data de Modificação</th>
                  <th className="actions">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>15</td>
                  <td>Caneta azul</td>
                  <td>2000</td>
                  <td>0.90</td>
                  <td>31/05/2021</td>
                  <td className="actions">
                    <a className="btn btn-success btn-xs" id="actions">Visualizar</a>
                    <a className="btn btn-warning btn-xs" id="actions">Editar</a>
                    <a className="btn btn-danger btn-xs" id="actions">Excluir</a>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Resma de folhas A4</td>
                  <td>135</td>
                  <td>20.00</td>
                  <td>31/05/2021</td>
                  <td className="actions">
                    <a className="btn btn-success btn-xs" id="actions">Visualizar</a>
                    <a className="btn btn-warning btn-xs" id="actions">Editar</a>
                    <a className="btn btn-danger btn-xs" id="actions">Excluir</a>
                  </td>
                </tr>
                <tr>
                  <td>32</td>
                  <td>Fita Adesiva</td>
                  <td>332</td>
                  <td>3.00</td>
                  <td>31/05/2021</td>
                  <td className="actions">
                    <a className="btn btn-success btn-xs" id="actions">Visualizar</a>
                    <a className="btn btn-warning btn-xs" id="actions">Editar</a>
                    <a className="btn btn-danger btn-xs" id="actions">Excluir</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default ProductsList;