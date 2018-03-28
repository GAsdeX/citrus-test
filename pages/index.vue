<template>
    <div class="global-container">
        <site-header></site-header>
       <sui-button primary>click me</sui-button>
       <div class="rotations-container">

       </div>
        <sui-card-group :items-per-row="3" v-if="rotations" class="ui grid">
            <rotation-card class="four wide column" v-for="rotation in rotations" :data="rotation" :key="rotation.id"></rotation-card>        
        </sui-card-group>
      
    </div>
</template>

<script>

import siteHeader   from '~/components/siteHeader.vue'
import rotationCard from '~/components/card.vue'

export default {
    
    data: function(){
        return {
            message: 'good'
        }
    },
    computed: {
        rotations: function() {
            return this.$store.getters['content/getRotations'];
        }
    },
    components: {
        'site-header'   : siteHeader,
        'rotation-card' : rotationCard
    }
}
</script>
