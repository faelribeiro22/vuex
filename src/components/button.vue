<template>
  <button :disabled="!hasUser" @click="mudarDados">Mudar Dados do Usuário</button>
</template>

<script>
export default {
  methods: {
    mudarDados() {
      const payload = {
        name: 'Outro nome',
        email: 'email@outro.com',
        level: 'usuario-raso',
        city: 'Lugar nenhum',
        state: 'Aqui mesmo'
      }
      this.$store.commit('CHANGE_USER', payload)
    },
  },
  computed: {
    hasUser () {
      return this.$store.state.user.name !== ''
    }
  }
}
</script>

<style lang="css">
</style>
