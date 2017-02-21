<template>
  <button @click="mudarDados">Mudar Dados do Usuário</button>
</template>

<script>
export default {
  methods: {
    mudarDados() {
      const payload = {
        name: 'Outro nome',
        email: 'email@outro.com',
        level: 'usuario-raso'
      }
      this.$store.commit('CHANGE_USER', payload)
    },
  }
}
</script>

<style lang="css">
</style>
