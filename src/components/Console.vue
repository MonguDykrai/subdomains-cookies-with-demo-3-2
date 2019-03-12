<template>
  <div class="console">
    <Button type="primary" @click="gotoDataImport">goto data-import</Button>
  </div>
</template>

<script>
import Cookies from "cookies-js";

export default {
  name: "console",

  // beforeRouteEnter(to, from, next) {
  //   if (Cookies.get("token")) {
  //     next();
  //   } else {
  //     location.href = "/";
  //   }
  // },

  beforeRouteEnter(to, from, next) {
    const locationHref = "http://localhost:8080";

    const URL = "http://localhost:3000/login-verify";

    fetch(URL, {
      method: "POST",
      credentials: "include",

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        const { statusMsg, statusCode } = data;

        if (statusCode == 401) {
          location.href = locationHref;
        } else if (statusCode == 200) {
          next();
        }
      })
      .catch(err => {
        if (err) {
          location.href = locationHref;
        }
      });
  },

  created: function() {},

  mounted: function() {},

  methods: {
    gotoDataImport: function() {
      location.href = "http://localhost:8081/#/overview";
    }
  }
};
</script>

<style>
.console {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>