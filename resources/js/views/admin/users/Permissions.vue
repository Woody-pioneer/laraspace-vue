<template>
  <div class="main-content">
    <div class="page-header">
      <h3 class="page-title">Permission</h3>
      <BreadCrumb :items="breadCrumbs"/>
      <div class="page-actions">
        <a href="#" class="btn btn-primary" @click="createPermission">
          <i class="icon-fa icon-fa-plus"/> New Permission
        </a>
        <button :disabled="selected.length ? false : true" class="btn btn-danger">
          <i class="icon-fa icon-fa-trash"/> Delete
        </button>
      </div>
    </div>
    <!-- Modal Component -->
    <b-modal ref="permissionModal" :title="permissionId > 0 ? 'Edit':'New' " hide-footer centered>
      <label for="inputName">Name</label>
      <b-form-input id="inputName"
                    v-model="permission.name"
                    type="text"
                    placeholder="Enter your name"
                    aria-describedby="inputNameHelp"/>
      <label for="inputDescription">Description</label>
      <b-form-textarea id="inputDescription" v-model="permission.description" rows="3" class="mb-3"/>
      <b-btn class="mt-3 float-right" variant="outline-primary" @click="hidePermissionModal">Save</b-btn>
    </b-modal>
    <div class="card">
      <div class="card-header bg-primary">
        <div class="text-uppercase text-bold text-white">Permissions List</div>
      </div>
      <div class="card-body">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>
                <label class="form-checkbox">
                  <input v-model="selectAll" type="checkbox" @click="select" >
                  <i class="form-icon"/>
                </label>
              </th>
              <th>id</th>
              <th>name</th>
              <th>description</th>
              <th class="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in permissions">
              <td>
                <label class="form-checkbox">
                  <input :value="i.id" v-model="selected" type="checkbox">
                  <i class="form-icon"/>
                </label>
              </td>
              <td>{{ i.id }}</td>
              <td>{{ i.name }}</td>
              <td>{{ i.description }}</td>
              <td class="pull-right"> <a class="btn btn-default btn-sm" @click="editPermission(i.id)">
                <i class="icon-fa icon-fa-edit"/> Edit
              </a></td>
            </tr>
          </tbody>
        </table>
        <div class="mt-3 text-center">
          <b-pagination-nav v-show="pagination.totalPages>1 ? true : false" :number-of-pages="pagination.totalPages" v-model="pagination.currentPage" :link-gen="linkGen" base-url="#" align="center"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">

import BreadCrumb from '../../../components/partials/BreadCrumb'
import RemoteData from '../../../mixins/RemoteData'
export default {
  components: {BreadCrumb},
  mixins: [
    RemoteData({
      permissionList: 'permissions'
    })
  ],
  data () {
    return {
      permissions: [],
      permissionId: 0,
      permission: {
        name: '',
        description: ''
      },
      breadCrumbs: [
        {
          text: 'Home',
          href: '#'
        },
        {
          text: 'Users',
          href: '#'
        },
        {
          text: 'Permissions',
          active: true
        }
      ],
      selected: [],
      selectAll: false,
      pagination: {
        totalPages: 1,
        currentPage: 1,
        count: 0
      },
      endpoint: '/api/admin/permissions'
    }
  },
  watch: {
    selected: function () {
      console.log('watch selected')
      if (this.permissions.length > 0 && this.permissions.length === this.selected.length) {
        this.selectAll = true
      } else {
        this.selectAll = false
      }
    }
  },
  created () {
    this.getPermissions()
  },
  methods: {
    async getPermissions () {
      try {
        let page = this.$route.query.page ? this.$route.query.page : 1
        const response = await axios.get(`${this.endpoint}?page=${page}`)
        if (response.statusText === 'OK') {
          this.pagination = {
            totalPages: response.data.last_page,
            currentPage: response.data.current_page,
            count: response.data.total
          }
          this.permissions = response.data.data
          return response.data.data
        } else {
          const error = new Error('error')
          throw error
        }
      } catch (error) {
        if (error) {
          window.toastr['error']('There was an error', 'Error')
        }
      }
    },
    deletePermission (id) {
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
    createPermission () {
      this.reset()
      this.$refs.permissionModal.show()
    },
    editPermission (id) {
      this.permission = this.permissions.find(item => item.id === id)
      this.permissionId = id
      this.$refs.permissionModal.show()
    },
    async deletePermissionData (id) {
      try {
        let response = await window.axios.delete('/api/admin/permissions/' + id)
        this.users = response.data
        window.toastr['success']('User Deleted', 'Success')
      } catch (error) {
        if (error) {
          window.toastr['error']('There was an error', 'Error')
        }
      }
    },
    linkGen (pageNum) {
      return `?page=${pageNum}`
    },
    select () {
      this.selected = []
      if (!this.selectAll) {
        for (let i in this.permissions) {
          this.selected.push(this.permissions[i].id)
        }
      }
    },
    reset () {
      this.permission = {name: null, description: ''}
      this.permissionId = 0
    },
    showPermissionModal () {
      if (this.permissionId === 0) {
        this.reset()
      }
      this.$refs.permissionModal.show()
    },
    hidePermissionModal: function () {
      this.$refs.permissionModal.hide()
      if (this.permissionId > 0) {
        axios.put(`/api/admin/permissions/${this.permissionId}`, this.permission)
      } else {
        axios.post(`/api/admin/permissions`, this.permission)
        this.$router.go('/admin/permissions/all')
      }
      this.reset()
    }
  }
}
</script>
