<template>
  <div class="login">
    <div class="form">
      <div></div>
      <div></div>
      <div>
        
      </div>
    </div> 



  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
  data() {
     const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please enter your password'));
                } else {
                    if (this.formCustom.passwdCheck !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.formCustom.validateField('passwdCheck');
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please enter your password again'));
                } else if (value !== this.formCustom.passwd) {
                    callback(new Error('The two input passwords do not match!'));
                } else {
                    callback();
                }
            };
            const validateAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('Age cannot be empty'));
                }
                // 模拟异步验证效果
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('Please enter a numeric value'));
                    } else {
                        if (value < 18) {
                            callback(new Error('Must be over 18 years of age'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };
    return {
        formCustom: {
                    passwd: '',
                    passwdCheck: '',
                    age: ''
                },
                ruleCustom: {
                    passwd: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    passwdCheck: [
                        { validator: validatePassCheck, trigger: 'blur' }
                    ],
                    age: [
                        { validator: validateAge, trigger: 'blur' }
                    ]
                }
    };
  },
  mounted() {},
  computed: {
    ...mapState({
      routes: (state) => state.user.routes,
    }),
  },
  methods: {
    login() {
      function getToekn() {
        return new Promise((resolve, reject) => {
          const res = {
            code: 200,
            message: '成功',
            data: {
              token: 'TOKEN_KEY',
            },
          };
          resolve(res);
        });
      }
      getToekn().then((res) => {
        localStorage.setItem('TOKEN_KEY', res.data.token);
        this.$router.push({
          path: '/',
        });
      });
      //挂载路由
      this.SET_ROUTES(this.routes);
      //设置菜单
    },
    ...mapMutations(['SET_ROUTES']),
      handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
  },
};
</script>
<style scoped lang="scss">

.login{
  height: 100vh;
  width: 100vw;
  // background-color: lightcyan;
  // background: url('@/assets/images/bg.jpg');
  // background: url('../../assets/images/bg.jpg') no-repeat;
  background-size:100% 100% ;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .form{
    width: 600px;
    height: 600px;
    margin-left: 50px;
    background-color: lightgoldenrodyellow;
    font-size: 16px;
  }
}

</style>
