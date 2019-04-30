<template>
  <div class="login">
    <Card style="width:220px; padding-top: 20px;">
      <div style="text-align:center">
        <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
          <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="Username">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem>
            <Button style="width: 120px;" type="primary" @click="handleSubmit('formInline')">Signin</Button>
          </FormItem>
        </Form>
      </div>
    </Card>

  </div>
</template>

<script>
  export default {
    name: 'login',

    data() {
      return {
        formInline: {
          user: 'ff',
          password: 'ffffff'
        },
        ruleInline: {
          user: [
            { required: true, message: 'Please fill in the user name', trigger: 'blur' }
          ],
          password: [
            { required: true, message: 'Please fill in the password.', trigger: 'blur' },
            { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            fetch('http://localhost:3000/login', {
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: 'POST',
              body: JSON.stringify({
                username: this.formInline.user,
                password: this.formInline.password
              })
            })
              .then(res => {
                return res.json()
              })
              .then(data => {
                const { token } = data
                localStorage.setItem('token', token)

                this.$router.push('/console')
              })
          }
        })
      }
    }
  }
</script>

<style>
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>