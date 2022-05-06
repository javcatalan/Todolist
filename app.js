const app = new Vue ({
    el: "#app1",
    data: {
        titulo: "Alta prioridad",
        tareas: [],
        nuevaTarea: "",
    },
    methods: {
        agregarTarea: function() {
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false,
            });
            this.nuevaTarea = "";
            localStorage.setItem("Postick-vue", JSON.stringify(this.tareas))
        },
        editarTarea: function (index) {
            this.tareas[index].estado = true;
            localStorage.setItem("Postick-vue", JSON.stringify(this.tareas))
        },
        eliminarTarea: function (index) {
            this.tareas.splice (index, 1);
            localStorage.setItem("Postick-vue", JSON.stringify(this.tareas))
        }
    },
    created: function () {
        let datosenlocalstorege = JSON.parse(localStorage.getItem("Postick-vue"));
        if (datosenlocalstorege === null) {
            this.tareas = [];
        } else {
            this.tareas = datosenlocalstorege;
        }
    },

 });

const app2 = new Vue({
    el: "#app2",
    data: {
      titulo: "Mediana prioridad",
      tareas: [],
      nuevaTarea: "",
    },
    methods: {
      agregarTarea: function () {
        this.tareas.push({
          nombre: this.nuevaTarea,
          estado: false,
        });
        this.nuevaTarea = "";
        localStorage.setItem("gym-vue", JSON.stringify(this.tareas));
      },
      editarTarea: function (index) {
        this.tareas[index].estado = true;
        localStorage.setItem("gym-vue", JSON.stringify(this.tareas));
      },
      eliminarTarea: function (index) {
        this.tareas.splice(index, 1);
        localStorage.setItem("gym-vue", JSON.stringify(this.tareas));
      },
    },
    created: function () {
      let datosDB = JSON.parse(localStorage.getItem("gym-vue"));
      if (datosDB === null) {
        this.tareas = [];
      } else {
        this.tareas = datosDB;
      }
    },
  });

  
const app3 = new Vue({
    el: "#app3",
    data: {
      titulo: "Baja prioridad",
      tareas: [],
      nuevaTarea: "",
    },
    methods: {
      agregarTarea: function () {
        this.tareas.push({
          nombre: this.nuevaTarea,
          estado: false,
        });
        this.nuevaTarea = "";
        localStorage.setItem("gym-vue", JSON.stringify(this.tareas));
      },
      editarTarea: function (index) {
        this.tareas[index].estado = true;
        localStorage.setItem("gym-vue", JSON.stringify(this.tareas));
      },
      eliminarTarea: function (index) {
        this.tareas.splice(index, 1);
        localStorage.setItem("gym-vue", JSON.stringify(this.tareas));
      },
    },
    created: function () {
      let datosDB = JSON.parse(localStorage.getItem("gym-vue"));
      if (datosDB === null) {
        this.tareas = [];
      } else {
        this.tareas = datosDB;
      }
    },
  });
  
  