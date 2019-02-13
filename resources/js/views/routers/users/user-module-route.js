// Users
import Users from '../../admin/users/Users.vue'
import Profile from '../../admin/users/Profile.vue'
import Roles from '../../admin/users/Roles.vue'
import Permissions from '../../admin/users/Permissions.vue'

export default [
  {
    path: 'users/profile',
    component: Profile
  },
  {
    path: 'users/all',
    component: Users
  },
  {
    path: 'Roles/all',
    component: Roles
  },
  {
    path: 'permissions/all',
    component: Permissions
  }
]
