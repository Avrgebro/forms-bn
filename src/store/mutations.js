export default {
  Login(state, user) {
    //Administrador 1
    //Encuestador 2
    //Cliente 3
    state.usuario = user;
    // state.permisos[0].show = false;
    // state.permisos[1].show = false;
    // if (user.body.idTipo === 1) {
    //   state.permisos[0].show = true;
    //   state.permisos[1].show = true;
    // } else {
    //   state.permisos[1].show = true;
    // }
  },
  getFormularios(state, formularios) {
    state.formularios = formularios
  },
  storeFormulario(state, formulario) {
    state.formularios.push(formulario[0])
  },
  getCensos(state, censos) {
    state.censos = censos
  },
  storeCenso(state, censo) {
    state.censos.push(censo)
  },
  getFams(state, familias) {
    state.familias = familias
  },
  getAllFams(state, fams) {
    state.fams = fams
  },
  newFam(state, fam) {
    state.familias.push(fam)
  }
};
