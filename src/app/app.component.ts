import { Component } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	title = 'sweetalert2-angular';
	delete(){
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
			if (result.value) {
				Swal.fire(
					'Deleted!',
					'Your file has been deleted.',
					'success'
					)
			}
		})
	}

	toast(){
		const Toast = Swal.mixin({
			toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 3000
		});

		Toast.fire({
			type: 'success',
			title: 'Signed in successfully'
		})
	}

	dialog(){
		Swal.fire({
			position: 'top-end',
			type: 'success',
			title: 'Your work has been saved',
			showConfirmButton: false,
			timer: 1500
		})
	}

	dialogMiddle(){
		Swal.fire({
			// position: 'top-end',
			type: 'success',
			title: 'Your work has been saved',
			showConfirmButton: false,
			timer: 1500
		})
	}
}
