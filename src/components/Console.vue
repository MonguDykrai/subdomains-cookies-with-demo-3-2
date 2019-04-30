<template>
  <div class="console">
    <Button type="primary" @click="gotoProjectB">goto project-b</Button>
  </div>
</template>

<script>
  export default {
    name: 'console',

    created: function () {
      if (!localStorage.getItem('token')) {
        this.$router.push('/login')
      }
    },

    mounted: function () {
      const iframe = document.createElement('iframe')
      iframe.src = 'http://localhost:8081/#/magic-door'
      iframe.width = 200
      iframe.height = 200
      iframe.name = 'project-b'

      document.body.prepend(iframe)

      const projectB = window.frames['project-b'];

      const token = localStorage.getItem('token')

      projectB.postMessage(token, "http://localhost:8081/#/magic-door");
    },

    methods: {
      gotoProjectB: function () {
        location.href = 'http://localhost:8081/#/overview'
      }
    }
  }
</script>

<style>
  .console {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>