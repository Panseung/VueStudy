<template>
  <div>
    <h1>PromiseTest</h1>
    <button @click="b">PromiseTest</button>
  </div>
</template>
<script>
  export default {
    name: 'PromiseTest',
    data() {
      return {

      }
    },
    methods : {
      // a : () => {
      //   const pr = new Promise((resolve, reject) => {
      //     resolve('first success')
      //   })
      //   pr
      //   .then((res) => {
      //     console.log(pr)
      //     console.log(res)
      //     console.log('second success')
      //     return 'third success'
      //   })
      //   .then((res) => {
      //     console.log(res)
      //     return console.log('end')
      //   })
      // },
      a : () => {
        return new Promise((resolve, reject) => {
          console.log('a start')
          resolve('resolve a')
        })
        .then((res) => {
            console.log('second success')
            return 'a finish'
          })
      },
      b : async () => {
        setTimeout(() => {
          console.log('before start')
        }, 500);
        setTimeout(() => {
          console.log('call the function a')
        }, 500);
        const awaitTest = await (() => {
            setTimeout(() => {
              console.log('await')
            }, 1000)
          })
        awaitTest()
        setTimeout(() => {
          console.log('function b finish')
        }, 500);
      }
    }

  }
</script>