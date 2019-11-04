<template>
  <div>
    <UserSearchForm @submitted="searchUser" />
    <UserProfile :user="user" />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import UserSearchForm from '@/components/UserSearchForm'
import UserProfile from '@/components/UserProfile'

export default {
  name: 'UserView',
  components: {
    UserSearchForm,
    UserProfile
  },
  computed: {
    ...mapState({
      user: 'user'
    })
  },
  methods: {
    searchUser(username) {
      // this.SEARCH_USER({ username })
      this.$store.dispatch('SEARCH_USER', { username })
      // console.log(this.SEARCH_USER({ username }))
    }
  }
}
</script>