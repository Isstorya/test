<template>
	<div class="signUpComponent">
		<h1>New user?</h1>
		<h2>Use the form below to create your account.</h2>
		<sign-up-form @changeMode="$emit('changeMode')" @sendForm="sendForm" />
	</div>
</template>

<script>
import Vue from "vue";
import SignUpForm from "./SignUpForm.vue";

export default {
	data: () => ({}),
	components: { SignUpForm },
	methods: {
		sendForm(value) {
			this.$emit("sendForm", value);
		},
	},
};
</script>
<style>
h1 {
	font-family: "Work Sans";
	font-size: 22px;
	line-height: 26px;
	letter-spacing: -0.46px;
	color: #111111;
}
h2 {
	font-family: "Work Sans";
	font-size: 14px;
	line-height: 16px;
	color: #111111;
}
.signUpComponent {
	padding: 38px 22px;
}
</style>
