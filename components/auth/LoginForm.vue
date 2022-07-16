<template>
	<div class="loginForm">
		<form>
			<span>
				<p>E-mail</p>
				<input
					name="email"
					type="email"
					id="formText"
					v-model="email"
					:style="emailValidationStyle"
				/>
			</span>
			<span>
				<p>Password</p>
				<input
					name="password"
					type="password"
					id="formText"
					v-model="password"
					:style="passwordValidationStyle"
				/>
			</span>
		</form>
		<div class="action">
			<p>Haven't account? <span @click="$emit('changeMode')">Signup</span></p>
			<input type="button" @click="sendForm" value="Login" />
		</div>
	</div>
</template>

<script>
import Vue from "vue";

export default {
	data: () => ({
		email: "alice.miller@yahoo.com",
		emailValidationStyle: {
			color: "black",
		},
		password: "Password1",
		passwordValidationStyle: {
			color: "black",
		},
	}),
	watch: {
		email(value) {
			this.email = value;
			this.validateEmail(value);
		},
		password(value) {
			this.password = value;
			this.validatePassword(value);
		},
	},
	methods: {
		validateEmail(value) {
			if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]/g.test(value)) {
				this.emailValidationStyle.color = "black";
			} else {
				this.emailValidationStyle.color = "red";
			}
		},
		validatePassword(value) {
			if (
				new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})").test(value)
			) {
				this.passwordValidationStyle.color = "black";
			} else {
				this.passwordValidationStyle.color = "red";
			}
		},
		sendForm() {
			this.$emit("sendForm", {
				email: this.email,
				password: this.password,
			});
		},
	},
};
</script>
<style>
.loginForm .action {
	display: flex;
	justify-content: space-between;
	margin-top: 280px;
}
</style>
