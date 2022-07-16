<template>
	<div class="signUpForm">
		<form>
			<span id="firstname">
				<p>First name</p>
				<input
					name="firstname"
					type="text"
					id="formText"
					v-model="firstname"
					:style="firstnameValidationStyle"
					required
				/>
			</span>
			<span id="lastname">
				<p>Last name</p>
				<input
					name="lastname"
					type="text"
					id="formText"
					v-model="lastname"
					:style="lastnameValidationStyle"
					required
				/>
			</span>
			<span id="nationality">
				<p>Nationality</p>
				<select v-model="nationality">
					<option disabled value="">Please select one</option>
					<option>American</option>
					<option>Russian</option>
					<option>Chinese</option>
				</select>
			</span>
			<span id="email">
				<p>E-mail</p>
				<input
					name="email"
					type="email"
					id="formText"
					v-model="email"
					:style="emailValidationStyle"
					required
				/>
			</span>
			<span id="dateOfBirth">
				<p>Date of Birth</p>
				<input name="dateOfBirth" type="date" v-model="dateOfBirth" />
			</span>
			<span id="gender">
				<p>Gender</p>
				<input name="genderMale" type="radio" value="Male" v-model="gender" />
				<label for="genderMale">Male</label>
				<input
					name="genderFemale"
					type="radio"
					value="Female"
					v-model="gender"
				/>
				<label for="genderFemale">Female</label>
			</span>
			<span id="password">
				<p>Password</p>
				<input
					name="password"
					type="password"
					id="formText"
					v-model="password"
					:style="passwordValidationStyle"
				/>
			</span>
			<span id="password">
				<p>Confirm password</p>
				<input
					name="confirmPassword"
					type="password"
					id="formText"
					v-model="confirmPassword"
					:style="confirmPasswordValidationStyle"
				/>
			</span>
		</form>
		<div class="action">
			<p>Have an account? <span @click="$emit('changeMode')">Login</span></p>
			<input type="button" @click="sendForm" value="Complete Signup" />
		</div>
	</div>
</template>

<script>
import Vue from "vue";
export default {
	data: () => ({
		firstname: "Alice",
		firstnameValidationStyle: {
			color: "#111111",
		},
		lastname: "Miller",
		lastnameValidationStyle: {
			color: "#111111",
		},
		nationality: "American",
		email: "alice.miller@yahoo.com",
		emailValidationStyle: {
			color: "#111111",
		},
		dateOfBirth: "1997-12-21",
		gender: "Female",
		password: "Password1",
		passwordValidationStyle: {
			color: "#111111",
		},
		confirmPassword: "Password1",
		confirmPasswordValidationStyle: {
			color: "#111111",
		},
	}),
	watch: {
		firstname(value) {
			this.firstname = value;
			this.validateFirstname(value);
		},
		lastname(value) {
			this.lastname = value;
			this.validateLastname(value);
		},
		email(value) {
			this.email = value;
			this.validateEmail(value);
		},
		password(value) {
			this.password = value;
			this.validatePassword(value);
		},
		confirmPassword(value) {
			this.confirmPassword = value;
			this.validateConfirmPassword(value);
		},
	},
	methods: {
		validateFirstname(value) {
			if (new RegExp("^[a-zA-Z]{1,}$").test(value)) {
				this.firstnameValidationStyle.color = "#111111";
			} else {
				this.firstnameValidationStyle.color = "#eb4137";
			}
		},
		validateLastname(value) {
			if (new RegExp("^[a-zA-Z]{1,}$").test(value)) {
				this.lastnameValidationStyle.color = "#111111";
			} else {
				this.lastnameValidationStyle.color = "#eb4137";
			}
		},
		validateEmail(value) {
			if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]/g.test(value)) {
				this.emailValidationStyle.color = "#111111";
			} else {
				this.emailValidationStyle.color = "#eb4137";
			}
		},
		validatePassword(value) {
			if (
				new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})").test(value)
			) {
				this.passwordValidationStyle.color = "#111111";
			} else {
				this.passwordValidationStyle.color = "#eb4137";
			}
		},
		validateConfirmPassword(value) {
			if (this.password == this.confirmPassword) {
				this.confirmPasswordValidationStyle.color = "#111111";
			} else {
				this.confirmPasswordValidationStyle.color = "#eb4137";
			}
		},
		sendForm() {
			this.$emit("sendForm", {
				firstname: this.firstname,
				lastname: this.lastname,
				nationality: this.nationality,
				email: this.email,
				dateOfBirth: this.dateOfBirth,
				gender: this.gender,
				password: this.password,
			});
		},
	},
};
</script>
<style>
form {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
form span {
	width: 235px;
	margin-top: 16px;
}
form p {
	font-family: "Work Sans";
	font-size: 12px;
	line-height: 14px;
	color: #7c7c7c;
}
form input {
	font-family: "Work Sans";
	font-size: 14px;
	line-height: 16px;
	color: #111111;
}
#formText {
	outline: none;
	border: 0;
	border-bottom: 1px solid #f2f2f2;
	width: 235px;
}
.signUpForm .action {
	display: flex;
	justify-content: space-between;
	margin-top: 105px;
}
.action p {
	font-family: "Work Sans";
	font-size: 13px;
	line-height: 15px;
	color: #000000;
}
.action p span {
	color: #5a61e5;
}
.action input {
	width: 154px;
	height: 32px;
	border: 0;
	background: #5a61e5;
	font-family: "PT Sans";
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 18px;
	color: #ffffff;
}
</style>
