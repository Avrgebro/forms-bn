<template>
  <div class="app-container">
    <el-container>
      <el-header>
      </el-header>
      
      <el-table
        :data="listaCensos.slice(((currentpage-1)*perpagetable), ((currentpage-1)*perpagetable)+perpagetable)"
        style="width: 100%" v-if="viewCensos">
        <el-table-column
          label="Identificador"
          prop="periodo">
        </el-table-column>
        <el-table-column
          label="Creado"
          prop="fechaRegistro"
          sortable>
        </el-table-column>
        <el-table-column
          label="Estado"
          prop="estado"
          sortable>
        </el-table-column>
        <el-table-column
          label="Enviados"
          prop="viviendas">
        </el-table-column>
        <el-table-column
          label="Contestados"
          prop="vivEncuestadas">
        </el-table-column>
        <el-table-column
          align="right">
          <template slot="header">
            <input
              v-model="search"/>
          </template>
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleView(scope.$index, scope.row)">Participantes</el-button>
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
      viewCensos: false
    }
  },
  created: function () {
    this.$store.dispatch('GetCensos').then(response => {
      this.listaCensos = this.$store.state.censos
      this.viewCensos = true
    })
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
      this.$router.push({name: 'participantes', params: {data: row}})
    }
  },
  }
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

