document.getElementById('searchList').addEventListener('input', function() {
	let filter = this.value.toLowerCase();
	let rows = document.querySelectorAll('#userTable tbody tr');

	rows.forEach(row => {
		let id = row.cells[0].textContent.toLowerCase();
		let fullName = row.cells[1].textContent.toLowerCase();
		let email = row.cells[2].textContent.toLowerCase();

		if (id.includes(filter) || fullName.includes(filter) || email.includes(filter)) {
			row.style.display = '';
		} else {
			row.style.display = 'none';
		}
	});
});


/* for the edit pop up */
$(document).ready(function() {
    $('#userTable').on('click', '.edit-btn', function() {
        let row = $(this).closest('tr');
        let data = row.children('td').map(function() { return $(this).text(); }).get();
        $('#editUserId').val(row.data('id'));
        $('#editFirstName').val(data[0]);
        $('#editLastName').val(data[1]);
        $('#editParentId').val(data[2]);
        $('#editPhone').val(data[3]);
        $('#editEmail').val(data[4]);
        $('#editGender').val(data[5]);
        $('#editCountry').val(data[6]);
        $('#editCity').val(data[7]);
        $('#editUserModal').modal('show');
    });

    $('#saveEditUser').click(function() {
        $('#editUserModal').modal('hide');
    });
});


