# PitchPrint - VueJs
***
This is a VueJs component that can be easily used in your project. This component will display the PitchPrint editor on the page that you render the component. 

# Installation
    npm install --save vue-pitchprint
    
# How to use
Import the PitchPrint component:

    import PitchPrint from 'vue-pitchprint'

Use the component

    export default {
      name: 'App',
      components: {
    	PitchPrint,
      },
      mounted() {
    	this.$root.$on('pitchprint-project-saved', this.showPreview);
      },
      methods: {
    	showPreview(data) {
    		document.querySelector('.preview').innerHTML = `<img src="${data.previews[0]}"/>`;
    	}
      }
    }

Use the component in your template:

    <template>
      <div id="app">
        <h1>Welcome to PitchPrint VueJS Demo App</h1>
        <PitchPrint apiKey="asf" designId="1234" langCode="en" display="modal" />
        <div class="preview"></div>
      </div>
    </template>
    	

# Live Demo

https://vue.demo.pitchprint.io/