<template>
  <div class="hello">
    <h1>{{ str }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
    </p>
    <h3>Installed CLI dfdfdfd Plugins</h3>
    <h3>Essential Links</h3>
    <h3>Ecosystem</h3>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
     str: dayjs().format('DD/MM/YYYY')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
