<template>
  <div>
    <h1>Promise, Async&Await Test</h1>
    <h3>await을 쓰려면 Promise객체를</h3>
    <h3>리턴하는 함수를 써야한다.</h3>
    <h3>promiseAll은 하나라도 reject나면</h3>
    <h3>첫 reject 리턴</h3>
    <button @click="promiseTest">promiseTest</button>
    <button @click="asyncTest">asyncTest</button>
    <button @click="promiseAllTest">promiseAllTest</button>
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
      promiseTest :() => {
        const myPromise = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve('2초 지남')
          }, 2000);
        })
        // const myPromise = () => {
        //   return new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //       resolve('2초지남')
        //     }, 2000)
        //   })
        // }

        myPromise
          .then((res) => {
            console.log(res)
            return 'next'
          })
          .then((res) => {
            console.log(res)
            setTimeout(() => {
              console.log('끝')
            },2000)
          })
      },
      asyncTest : async() => {
        // const twoSeconds = new Promise((resolve, reject) => {
        //   setTimeout(() => {
        //     resolve(console.log('2초지남'))
        //   }, 2000)
        // })

        // const threeSconds = new Promise((resolve, reject) => {
        //   setTimeout(() => {
        //     resolve(console.log('3초 지남'))
        //   }, 3000)
        // })
        // await twoSeconds()
        // console.log('next')
        // await threeSconds()
        // console.log('끝')


        const twoSeconds = ( time ) => {
          return new Promise( ( resolve, reject ) => {
            setTimeout(() => {
              resolve(console.log( time * 0.001 + '초지남'))
            }, time)
          } )
        }
        
        await twoSeconds( 2000 )
        await twoSeconds( 3000 )
      },
      promiseAllTest : () => {
        const promise1 = Promise.resolve(3);
        const promise2 = 42;
        const promise3 = new Promise((resolve, reject) => {
          if (1) {
            reject(20)
          }
          resolve(444)
        })

        const promise4 = new Promise((resolve, reject) => {
          if (1) {
            reject(30)
          }
          resolve(10)
        })
        Promise.all([promise1,promise2,promise3, promise4])
        .then((res) => {
          console.log(res)
        })
      }
    }

  }
</script>