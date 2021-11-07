<template>
  <div class="app-container">
    <el-container>
      <el-header>
      </el-header>
      
      <el-table
        :data="participantes"
        style="width: 100%" v-if="viewCensos">
        <el-table-column
          label="Nombre"
          prop="nombre">
        </el-table-column>
        <el-table-column
          label="Apellido"
          prop="apellido"
          sortable>
        </el-table-column>
        <el-table-column
          label="DNI"
          prop="dni"
          sortable>
        </el-table-column>
        <el-table-column
          label="Email"
          prop="email">
        </el-table-column>
        <el-table-column
          align="right">
          <template slot="header">
            <input
              v-model="search"/>
          </template>
          <template slot-scope="">
            <el-button
              size="mini"
              @click="dialogVisible = true">Ver Respuestas</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        v-if="viewCensos"
        style="float: right;"
        background
        layout="prev, pager, next"
        :total="listaCensos.length"
        :current-page.sync="currentpage"
        :page-size="perpagetable">
      </el-pagination>

    </el-container>


        <el-dialog
      title="Respuestas"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
      :show-close="false">

      <el-table
        :data="tabledata"
        style="width: 100%">
        <el-table-column
          label="Pregunta"
          prop="pregunta">
        </el-table-column>
        <el-table-column
          label="Respuesta"
          prop="respuesta">
        </el-table-column>

      </el-table>
      
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleDialogClose()">Cerrar</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>

export default {
  data() {
    return {
      search: '',
      currentpage: 1,
      perpagetable: 5,
      listaCensos: [],
      viewCensos: false,
      participantes: [
          {nombre: 'Juan', apellido: 'Perez', dni: '74185296', email: 'juan@test.com'},
          {nombre: 'Jorge', apellido: 'Valdivia', dni: '44156296', email: 'jorge@test.com'},
          {nombre: 'Luis', apellido: 'Diaz', dni: '25670987', email: 'luis@test.com'},
          {nombre: 'Maria', apellido: 'Pita', dni: '73311678', email: 'maria@test.com'},
          {nombre: 'Renata', apellido: 'Guardia', dni: '74123344', email: 'renata@test.com'},
      ],
      respuestas: [
          {pregunta: "Nivel de educacion?", respuesta: "Primaria"},
          {pregunta: "vive alquilado?", respuesta: "No"},
          {pregunta: "Años de experiencia?", respuesta: "12"},
          {pregunta: "Nivel de ingles?", respuesta: "alto"},
          {pregunta: "Es proactivo?", respuesta: "Si"},
          {pregunta: "Tiene hijos?", respuesta: "Si"},
          {pregunta: "Estado civil?", respuesta: "Casado"},
      ],
      dialogVisible: false
    }
  },
  created: function () {
    this.$store.dispatch('GetCensos').then(response => {
      this.listaCensos = this.$store.state.censos
      this.viewCensos = true
    })
  },
  computed: {
      tabledata: function() {
        var aux =  this.respuestas.slice() 
        var shuffled = aux.sort(() => 0.5 - Math.random())
        return shuffled.slice(0, 4);
      }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleView(index, row) {
      console.log(index, row);
    },
    handleDialogClose() {// Cerrar el dialog sin guardar la nueva pregunta
      this.dialogVisible = false
      this.cleanQuestionState()
    },
    handleClose() {
    },
  },
  }
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

