<template>
    <div class="global-container">
        <div class="container">
            <site-header />
            <div class="row" v-if="rotations">
                <b-card-group columns>
                    <rotation-card class="four wide column" v-for="rotation in rotations" :key="rotation.id" :data="rotation"></rotation-card>
                </b-card-group>
    
            </div>
        </div>
        
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
