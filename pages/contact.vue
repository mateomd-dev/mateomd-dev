<template> 
	<div>
		<h1 class="text-center display-4 mt-2 mb-3">Contact</h1>
		<div class="d-flex justify-content-center mb-3">
			<ul class="list-group list-group-horizontal">
				<li class="list-group-item border-0">
					<a href="https://medium.com/@mateomd_dev" class="icon"><font-awesome-icon :icon="['fab', 'medium']" /></a>
				</li>
				<li class="list-group-item border-0">
					<a href="https://twitter.com/mateomd_dev" class="icon"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
				</li>
				<li class="list-group-item border-0">
					<a href="https://www.instagram.com/mateomd_dev/" class="icon"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
				</li>
				<li class="list-group-item border-0">
					<a href="https://github.com/mateomd-dev" class="icon"><font-awesome-icon :icon="['fab', 'github']" /></a>
				</li>
			</ul>
		</div>
		<div class="row justify-content-center">
            <form @submit.prevent="handleSubmit" class="col-7 needs-validation">
                <div class="form-group has-validation mb-3">
                    <label for="name" class="form-label">Name:</label>
                    <input v-model="name" type="text" id="name" class="form-control" required>
                    <div class="invalid-feedback">
                        Invalid name!	
                    </div>
                </div>

                <div class="form-group mb-3">
                    <label for="email" class="form-label">Email:</label>
                    <input v-model="email" type="text" id="email" class="form-control" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required>
                    <div class="invalid-feedback">
                        Invalid email!	
                    </div>
                </div>

                <div class="form-group mb-3">
                    <label for="message" class="form-label">Message:</label>
                    <textarea v-model="message" id="message" rows="5" class="form-control" required></textarea>
                    <div class="invalid-feedback">
                        Invalid message!	
                    </div>
                </div>
                <div class="d-flex justify-content-end">
                    <button v-if="!success" type="submit" class="btn">Submit</button>
                    <div v-if="success" class="alert-success">Sent!</div>
                </div>
            </form>
        </div>
	</div>
</template>

<script>
import { collection, addDoc } from 'firebase/firestore';

export default {
	data() {
		return {
			name: '',
			email: '',
			message: '',
			success: false
		}
	},
	methods: {
		handleSubmit() {
			let form = document.querySelector('.needs-validation')
			form.classList.add('was-validated')
			
			const payload = {
				name: this.name,
				email: this.email,
				message: this.message
			}
			const { firestore } = useFirebase();
			const colRef = collection(firestore, 'messages');
			const docRef = addDoc(colRef, payload);
			this.success = true
			this.name = ''
			this.email = ''
			this.message = ''
			form.classList.remove('was-validated')
		}
	}
}
</script>

<style scoped>
.list-group-item {
	background-color: transparent;
}

.icon {
	color: var(--background-secondary-color);
	font-size: 1.6rem;
	padding: 0 0.1rem 0 0;
	transition: .2s;
	border: none;
}

.icon:hover {
	color: var(--foreground-secondary-color);
}

label {
	color: var(--background-secondary-color);
}

input, textarea {
	background-color: var(--background-primary-color) !important;
	color: var(--foreground-primary-color) !important;
	border: 1px solid var(--background-secondary-color) !important;
}

.btn {
	background-color: var(--foreground-secondary-color) !important;
	color: var(--background-primary-color) !important;
}

.btn:hover {
	background-color: var(--primary-color) !important;
}

.alert-success {
	color: var(--foreground-secondary-color);
}
</style>
