<template>
  <div>
    
    <h1>Lifecycle (console)</h1>

    <br/>
    <br/>
    <lifecycle-child/>
    <lifecycle-child2/>
    <lifecycle-child3/>
    {{ mountTest() }} 
    <br/>

    <button @click="dataChange">데이터 변경 parent</button>
    <h4>{{ testData }}</h4>

    <br/>
    <h2>beforeCreate</h2>
    <p>before data observation and event/watcher setup</p>

    <br/>

    <h2>created</h2>
    <p>cannot access to DOM</p>

    <br/>

    <h2>beforeMount</h2>
    <h4>not called during SSR</h4>
    <p>부모 beforeMount 이후 자식 beforeCreate</p>

    <br/>

    <h2>mounted</h2>
    <h4>not called during SSR</h4>
    <p>자식 컴포넌트가 mounted된 후에</p>
    <p>부모 mounted 실행</p>
    <p>Tip: created를 mount에서 호출</p>
    <p>console.trace 통해 확인 가능</p>

    <br/>

    <h2>beforeUpdate, updated</h2>
    <h4>not called during SSR</h4>
    
    <br/>

    <h2>activated, deactivated</h2>
    <h4>not called during SSR</h4>
    <keep-alive>
      <component :is="showComponent"></component>
    </keep-alive>
    <button ref="btnRef" @click="compoChange">{{ btnName }}</button>

    <br/>
    <br/>
    <br/>

    <h2>beforeDestroy, destroyed</h2>
    <h4>not called during SSR</h4>

    <br/>

    <h2>errorCaptured</h2>

  </div>
</template>
<script>
import LifecycleChild from './LifecycleChild'
import LifecycleChild2 from './LifecycleChild2'
import LifecycleChild3 from './LifecycleChild3'
import keepAliveTest1 from './KeepAliveTest1'
import keepAliveTest2 from './KeepAliveTest2'
export default {
  name: 'MyLifecycle',
  components: { 
    LifecycleChild,  
    LifecycleChild2,
    LifecycleChild3,
    keepAliveTest1,
    keepAliveTest2
  },
  data() {
    return {
      createData: 'hi',
      testData: 0,
      cancelOnOff: false,
      showComponent: 'keep-alive-test1',
      btnName: '컴포넌트 2로 바꾸기',
      btnState: true
    }
  },
  methods: {
    mountTest() {
      console.log( 'mounted Test: this func used in template before child component' )
    },
    dataChange () {
      this.testData++
    },
    compoChange() {
      if ( this.btnState ) {
        this.showComponent = 'keep-alive-test2'
        this.btnState = false
        this.$refs.btnRef.innerText = '컴포넌트 1로 바꾸기'
      } else {
        this.showComponent = 'keep-alive-test1'
        this.btnState = true
        this.$refs.btnRef.innerText = '컴포넌트 2로 바꾸기'
      }
    },
  },
  beforeCreate() {
    console.group( 'beforeCreate' )
    console.log( 'parent.beforeCreate' )
    console.log( 'data: ' + this.createData )
    // console.trace( 'beforeCreate' )
    console.groupEnd( 'beforeCreate' )
  },
  created() {
    console.group( 'created' )
    console.log( 'parent.created' )
    console.log( 'data: ' + this.createData )
    // console.trace( 'created' )
    console.groupEnd( 'created' )
  },
  beforeMount() {
    console.group( 'beforeMounted' )
    console.log( 'parent.beforeMount' )
    // console.trace( 'beforeMount' )
    console.groupEnd( 'beforeMount' )
  },
  mounted() {
    console.group( 'mounted' )
    console.log( 'parent.mounted' )
    // console.trace( 'mounted' )
    console.groupEnd( 'mounted' )
  },
  beforeUpdate() {
    console.group( 'beforeUpate' )
    console.log( 'parent.beforeUpdate' )
    console.groupEnd( 'beforeUpate' )
  },
  updated() {
    console.group( 'updated' )
    console.log( 'parent.updated' )
    console.groupEnd( 'updated' )
  },
  activated() {
    // 자식컴포넌트에!
  },
  deactivated() {
    // 자식컴포넌트에!
  },
  beforeDestroy() {
    console.group( 'beforeDestroy' )
    console.log( 'parent.beforeDestroy' )
    if( this.cancelOnOff ) { this.$emit( 'cancelOff' ) }
    console.groupEnd( 'beforeDestroy' )
  },
  destroyed() {
    console.group( 'destroyed' )
    console.log( 'parent.destroyed' )
    console.groupEnd( 'destroyed' )
  },
  errorCaptured() {
    console.group( 'errorCaptured' )
    console.log( 'parent.errorCaptured' )
    console.groupEnd( 'errorCaptured' )
  },
}
</script>
<style>

</style>