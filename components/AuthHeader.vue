<template>
	<header>
		<p>{{ title }}</p>
	</header>
</template>

<script>
import Vue from "vue";

export default {
	props: {
		title: {
			type: String,
			required: true,
		},
	},
	data: () => ({}),
};
</script>

<style>
header {
	background: #5a61e5;
	width: 20%;
}
header p {
	margin-top: 390px;
	margin-left: 60px;
	font-family: "PT Sans";
	font-size: 49px;
	line-height: 63px;
	letter-spacing: 0.5px;
	color: #ffffff;
	transform: rotate(-90deg);
}
</style>
