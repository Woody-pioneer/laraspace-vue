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
        <button :disabled="selected.length ? false : true" class="btn btn-danger" @click="deleteUser">
          <i class="icon-fa icon-fa-trash"/> Delete
        </button>
      </div>
      <!-- Modal Component -->
      <b-modal ref="addNewUser" :title="userId > 0 ? 'Edit':'New' " hide-footer centered>
        <label for="inputName">Name</label>
        <b-form-input id="inputName"
                      v-model="user.name"
                      type="text"
                      placeholder="Enter your name"
                      aria-describedby="inputNameHelp"/>
        <b-form-text id="inputNameHelp"/>
        <label for="inputEmail">Email</label>
        <b-form-input id="inputEmail"
                      v-model="user.email"
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
                class="pull-right"
              >
                <template slot-scope="row">
                  <router-link to="/admin/users/profile">
                    <a class="btn btn-default btn-sm">
                      <i class="icon-fa icon-fa-search"/> View
                    </a>
                  </router-link>
                  <a class="btn btn-default btn-sm" @click="editUser(row.id)">
                    <i class="icon-fa icon-fa-edit"/> Edit
                  </a>
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
      users: {},
      userId: 0,
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
  created () {
  },
  methods: {
    format (value, event) {
      return value.toLowerCase()
    },
    async getUsers ({ page, filter, sort }) {
      try {
        const response = await axios.get(`/api/admin/users/get?page=${page}`)
        this.users = {
          data: response.data.data,
          pagination: {
            totalPages: response.data.last_page,
            currentPage: page,
            count: response.data.count
          }
        }
        return this.users
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
            self.deleteUserData(id)
          })
          window.toastr['success']('User Deleted', 'Success')
        }
      })
    },
    editUser (id) {
      this.userId = id
      this.user = this.users.data.find(user => user.id === id)
      console.log(this.user)
      this.$refs.addNewUser.show()
    },
    async deleteUserData (id) {
      try {
        let response = await window.axios.delete('/api/admin/users/' + id)
        this.users = response.data
      } catch (error) {
        if (error) {
          window.toastr['error']('There was an error', 'Error')
        }
      }
    },
    reset () {
      this.userId = 0
      this.user = {name: null, email: null, role: 'user', avatar: 'default.png'}
    },
    showAddNewUserModal () {
      this.$refs.addNewUser.show()
    },
    hideAddNewUserModal: function () {
      this.$refs.addNewUser.hide()
      if (this.userId > 0) {
        axios.put(`/api/admin/users/${this.userId}`, this.user)
      } else {
        axios.post(`/api/admin/users`, this.user)
        this.$router.go('/admin/users/all')
      }
      this.reset()
    }
  }
}
</script>
