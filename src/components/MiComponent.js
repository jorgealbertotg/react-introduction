import React, { Component } from 'react';

// Creación de componentes de clase en un archivo separado
class MiComponente extends Component {
  render() {
    return (<h1>Hola, soy el {this.props.name} {this.props.disabled} {this.props.cual} componente llamado MiComponente</h1>);
  };
}

export default MiComponente;