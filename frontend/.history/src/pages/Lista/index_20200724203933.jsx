import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';
import { FiEdit, FiTrash } from 'react-icons/fi';
import Editable from 'react-x-editable';
import EditIcon from 'material-ui/svg-icons/image/edit'
import {Table,TableBody,TableHeader,TableHeaderColumn,TableRow,TableRowColumn} from 'material-ui/Table'


 function Lista() {
    const [doadores, setDoadores] = useState([]);
    const history = useHistory();
    const $ = require('jquery');
    $.DataTable = require('datatables.net');

    const funcionarioEmail = localStorage.getItem('funcionarioEmail');

    // use effect serve para disparar uma função em um determinado momento do componente
    useEffect(() => {
        api.get('lista').then(response => {
            setDoadores(response.data);
        })
    }, [funcionarioEmail]);

    async function handleDeleteDoador(cpf) {
        try {
            await api.delete(`doador/${cpf}`, {

            });
            setDoadores(doadores.filter(doador => doador.cpf != cpf));
        }
        catch (err) {
            alert("Erro ao deletar pessoa")
        }
    }
    const row = (
        x,
        i,
        header,
        startEditing,
        editIdx,
        handleChange,
        stopEditing
      ) => {
        const currentlyEditing = editIdx === i;

    return (
        <TableRow key={`tr-${i}`} selectable={false}>
        {header.map((y, k) => (
          <TableRowColumn key={`trc-${k}`}>
            {currentlyEditing ? (
              <TextField
                name={y.prop}
                onChange={e => handleChange(e, y.prop, i)}
                value={x[y.prop]}
              />
            ) : (
              x[y.prop]
            )}
          </TableRowColumn>
        ))}
         <TableRowColumn>
        {currentlyEditing ? (
          <CheckIcon onClick={() => stopEditing()} />
        ) : (
          <EditIcon onClick={() => startEditing(i)} />
        )}
      </TableRowColumn>
     
    </TableRow>
  );
};
export default ({
    data,
    header,
    handleRemove,
    startEditing,
    editIdx,
    handleChange,
    stopEditing
  }) => (
    <Table>
      <TableHeader>
        <TableRow>
          {header.map((x, i) => (
            <TableHeaderColumn key={`thc-${i}`}>{x.name}</TableHeaderColumn>
          ))}
          <TableHeaderColumn />
          <TableHeaderColumn />
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((x, i) =>
          row(
            x,
            i,
            header,
            startEditing,
            editIdx,
            handleChange,
            stopEditing
          )
        )}
      </TableBody>
    </Table>
  )
          }