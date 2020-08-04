<template>
	<div>
		<div v-if="loading"><img src="https://pitchprint.io/rsc/images/loaders/spinner_new.svg"></div>
		<input class="pp-editor-button" v-if="showCustomizeBtn" @click="showEditor" :value="btnShowEditor" type="button"/>
		<input class="pp-editor-button" v-if="showEditBtn" @click="doEditPr" :value="btnEditPr" type="button"/>
		<input class="pp-editor-button" v-if="showResetBtn" @click="doResetPr" :value="btnResetPr" type="button"/>
	</div>
</template>

<script src="./pitchprint.js"></script>

<style type="text/css">
	.pp-editor-button {
		background: #56cfe1;
		border: 0;
		height: 2.5rem;
		color: white;
		text-transform: uppercase;
		font-weight: bold;
		border-radius: 4px;
		cursor: pointer;
		margin-right: 10px;
		min-width: 5rem;
	}
</style>