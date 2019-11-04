<template>
  <div>
    <form @submit.prevent="$emit('submitted', username)">
      <el-input type="text" v-model="username" placeholder="search for user" class="search-form__input">
        <el-button native-type="submit" slot="append" icon="el-icon-search" class="search-form__button">提交</el-button>
      </el-input>
    </form>
  </div>
</template>
<script>
export default {
  name: 'UserSearchForm',
  data() {
    return {
      username: ''
    }
  }
}
</script>