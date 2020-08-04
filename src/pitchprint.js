import jQuery from 'jquery';
window.jQuery = jQuery;

export default {
	name: 'PitchPrint',
	props: {
		apiKey: String,
		langCode: String,
		designId: String,
		display: String,
	},
	data: () => ({
		btnShowEditor: 'Customize',
		btnEditPr: 'Edit',
		btnResetPr: 'Reset',
		showCustomizeBtn: false,
		showEditBtn: false,
		showResetBtn: false,
		checkPPClientClass: 50,
		loading: true,
	}),
	mounted() {
      let clientScript = document.createElement('script');
      clientScript.setAttribute('src', 'https://pitchprint.io/rsc/js/client.js');
      document.head.appendChild(clientScript);
      this.init();
    },
    methods: {
		init() {
			if (!this.checkPPClientClass) return;
			
			/* eslint-disable-next-line */
			if ( typeof PitchPrintClient === "undefined") {
				this.checkPPClientClass--;
				setTimeout(this.init, 500);
				return;
			} 
			
			/* eslint-disable-next-line */
			window.ppclient = new PitchPrintClient({
				apiKey: this.apiKey || '3dda9361ec74898ec376e970ffff891c',
				designId: this.designId || '8be2b573f4db5f6d6adc76bd9786a0f1',
				langCode: this.langCode || 'en',
				custom: true,
				mode: this.display || 'modal',
			});
			window.ppclient.on('app-validated', this.validate);
			window.ppclient.on('project-saved', this.projSaved);
		},
		projSaved(e) {
			this.showCustomizeBtn = false;
			this.showEditBtn = true;
			this.showResetBtn = true;
			this.$root.$emit('pitchprint-project-saved', e.data);
			// ToDo: set localStorage
		},
		validate() {
			//Function to run once the app is validated (ready to be used)
			this.showCustomizeBtn = true;				//Enable the Launch button
			this.loading = false;						//Hide the loader
		},
		showEditor() {
			window.ppclient.showApp();
		},
		doEditPr() {
			window.ppclient.showApp();
		},
		doResetPr() {
			// ToDo: clear localStorage
			window.location.reload();
		}
	}
};
