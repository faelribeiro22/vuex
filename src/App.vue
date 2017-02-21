<template>
  <div id="app">
    <h1>Welcome Vue2</h1>
    {{user}}
    <hr>
    <cc-users></cc-user>
  </div>
</template>

<script>

import CcUsers from './components/users/main.vue'

export default {
  components: {
    CcUsers
  },
  computed: {
    user() {

      const { name, email } = this.$store.state.user

      return 'O usuario logado é '+ name + 'e possui o email '+ email
    }
  }
}
</script>
