<template>
  <div v-if="data">
      <sui-card>
        <sui-image :src="data.images.preview.url" />
        <sui-card-content>
          <sui-card-header v-text="data.content.preview"></sui-card-header>
          <sui-card-meta>Friends</sui-card-meta>
          <sui-card-description>
            Matthew is an interior designer living in New York.
          </sui-card-description>
        </sui-card-content>
        <sui-card-content extra>
          <sui-icon name="user" /> 75 Friends
          <span slot="right">Joined in 2013</span>
          </sui-card-content>
      </sui-card>
   
  </div>
</template>

<script>
    export default {
        props : ['data']
    }
</script>
