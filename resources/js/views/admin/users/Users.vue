<template>
  <div class="main-content">
    <div class="page-header">
      <h3 class="page-title">Users</h3>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Users</a></li>
        <li class="breadcrumb-item active">Users</li>
      </ol>
      <div class="page-actions">
        <b-btn variant="primary" @click="showAddNewUserModal"><i class="icon-fa icon-fa-plus"/>New User</b-btn>
        <button class="btn btn-danger" @click="deleteUser">
          <i class="icon-fa icon-fa-trash"/> Delete
        </button>
      </div>
      <!-- Modal Component -->
      <b-modal ref="addNewUser" hide-footer centered title="Bootstrap-Vue">
        <label for="inputName">Name</label>
        <b-form-input id="inputName"
                      v-model="user.name"
                      :formatter="format"
                      type="text"
                      placeholder="Enter your name"
                      aria-describedby="inputNameHelp"/>
        <b-form-text id="inputNameHelp"/>
        <label for="inputEmail">Email</label>
        <b-form-input id="inputEmail"
                      v-model="user.email"
                      :formatter="format"
                      type="email"
                      placeholder="Enter your email"
                      aria-describedby="inputEmailHelp"/>
        <b-form-text id="inputEmailHelp"/>
        <label for="inputRole">Role</label>
        <b-form-select id="inputRole" v-model="user.role" :options="roles" class="mb-3"/>
        <label for="inputAvatar">Avatar</label>
        <b-form-select id="inputAvatar" v-model="user.avatar" :options="options" class="mb-3"/>
        <b-btn class="mt-3 float-right" variant="outline-primary" @click="hideAddNewUserModal">Save</b-btn>
      </b-modal>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <h6>All Users</h6>
            <div class="card-actions" />
          </div>
          <div class="card-body">
            <table-component
              :data="getUsers"
              sort-by="row.name"
              sort-order="desc"
              table-class="table"
            >
              <table-column :sortable="false"
                            :filterable="false"
                            label=""
              >
                <template slot-scope="row">
                  <b-form-checkbox :value="row.id" v-model="selected"/>
                </template>
              </table-column>
              <table-column show="id" label="Id"/>
              <table-column show="name" label="Name"/>
              <table-column show="email" label="Email"/>
              <table-column show="role" label="Role"/>
              <table-column
                show="created_at"
                label="Registered On"
                data-type="date:YYYY-MM-DD h:i:s"
              />
              <table-column
                :sortable="false"
                :filterable="false"
                label="Action"
              >
                <template slot-scope="row">
                  <router-link to="/admin/users/profile">
                    <a class="btn btn-default btn-sm">
                      <i class="icon-fa icon-fa-search"/> View
                    </a>
                  </router-link>
                  <router-link to="/admin/users/profile">
                    <a class="btn btn-default btn-sm" @click="editUser(row.id)">
                      <i class="icon-fa icon-fa-edit"/> Edit
                    </a>
                  </router-link>
                </template>
              </table-column>
            </table-component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
import { TableComponent, TableColumn } from 'vue-table-component'
export default {
  components: {
    TableComponent,
    TableColumn
  },
  data () {
    return {
      selected: [],
      users: [],
      user: {
        name: null,
        email: null,
        avatar: 'default.png',
        role: 'user'
      },
      options: [
        { value: 'default.png', text: 'default.png' },
        {value: 'girl', text: 'girl.png'},
        { value: 'boy', text: 'boy.png' }
      ],
      roles: [
        { value: 'admin', text: 'Admin' },
        { value: 'user', text: 'User' }
      ]
    }
  },
  async created () {
    this.users = await this.getUsers(1).data
  },
  methods: {
    format (value, event) {
      return value.toLowerCase()
    },
    async getUsers ({ page, filter, sort }) {
      try {
        const response = await axios.get(`/api/admin/users/get?page=${page}`)

        return {
          data: response.data.data,
          pagination: {
            totalPages: response.data.last_page,
            currentPage: page,
            count: response.data.count
          }
        }
      } catch (error) {
        if (error) {
          window.toastr['error']('There was an error', 'Error')
        }
      }
    },
    deleteUser () {
      let self = this
      window.notie.confirm({
        text: 'Are you sure?',
        cancelCallback: function () {
          window.toastr['info']('Cancel')
        },
        submitCallback: function () {
          self.selected.map(id => {
            console.log(id)
            // self.deleteUserData(id)
          })
          // self.deleteUserData(id)
        }
      })
    },
    editUser (id) {
      let self = this
      window.notie.confirm({
        text: 'Are you sure?',
        cancelCallback: function () {
          window.toastr['info']('Cancel')
        },
        submitCallback: function () {
          self.deleteUserData(id)
        }
      })
    },
    async deleteUserData (id) {
      try {
        let response = await window.axios.delete('/api/admin/users/' + id)
        this.users = response.data
        window.toastr['success']('User Deleted', 'Success')
      } catch (error) {
        if (error) {
          window.toastr['error']('There was an error', 'Error')
        }
      }
    },
    onSubmit () {
      this.saved = false
      axios.post('api/admin/users', this.signature)
        .then(({data}) => this.setSuccessMessage())
        .catch(({response}) => this.setErrors(response))
    },

    setErrors (response) {
      this.errors = response.data.errors
    },

    setSuccessMessage () {
      this.reset()
      this.saved = true
    },

    reset () {
      this.errors = []
      this.user = {name: null, email: null, role: 'user', avatar: 'default.png'}
    },
    showAddNewUserModal () {
      this.$refs.addNewUser.show()
    },
    hideAddNewUserModal () {
      this.$refs.addNewUser.hide()
    }
  }
}
</script>
