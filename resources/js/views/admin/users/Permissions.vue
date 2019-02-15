<template>
  <div class="main-content">
    <div class="page-header">
      <h3 class="page-title">Permission</h3>
      <BreadCrumb :items="breadCrumbs"/>
      <div class="page-actions">
        <a href="#" class="btn btn-primary">
          <i class="icon-fa icon-fa-plus"/> New Permission
        </a>
        <button class="btn btn-danger">
          <i class="icon-fa icon-fa-trash"/> Delete
        </button>
      </div>
      <table class="table table-hover">
        <tbody>
          <tr>
            <td class="cell-checkbox">name</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script type="text/babel">

import BreadCrumb from '../../../components/partials/BreadCrumb'
export default {
  components: {BreadCrumb},
  data () {
    return {
      users: [],
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
      ]
    }
  },
  methods: {
    async getUsers ({ page, filter, sort }) {
      try {
        const response = await axios.get(`/api/roles?page=${page}`)

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
    deleteUser (id) {
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
    }
  }
}
</script>
