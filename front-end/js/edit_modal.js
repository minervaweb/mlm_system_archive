$(document).ready(function() {
  $('#userTable').on('click', '.edit-btn', function() {
    let userId = $(this).data('id');
    let row = $(this).closest('tr');
    let firstName = row.find('td:nth-child(1)').text();
    let lastName = row.find('td:nth-child(2)').text();
    let phone = row.find('td:nth-child(3)').text();
    let email = row.find('td:nth-child(4)').text();
    let gender = row.find('td:nth-child(5)').text();
    let country = row.find('td:nth-child(6)').text();
    let city = row.find('td:nth-child(7)').text();

    $('#editUserId').val(userId);
    $('#editFirstName').val(firstName);
    $('#editLastName').val(lastName);
    $('#editPhone').val(phone);
    $('#editEmail').val(email);
    $('#editGender').val(gender);
    $('#editCountry').val(country);
    $('#editCity').val(city);
    $('#editUserModal').modal('show');
  });

  $('#saveEditUser').click(function() {
    let userId = $('#editUserId').val();
    let updatedData = {
      id: userId,
      firstName: $('#editFirstName').val(),
      lastName: $('#editLastName').val(),
      phone: $('#editPhone').val(),
      email: $('#editEmail').val(),
      gender: $('#editGender').val(),
      country: $('#editCountry').val(),
      city: $('#editCity').val()
    };

    $.ajax({
      url: `/users/${userId}`,
      type: 'PUT',
      contentType: 'application/json',
      data: JSON.stringify(updatedData),
      success: function(data) {
        // Update the table row with the updated data (You'll need to adapt this based on your server response)
        let row = $(`#userTable tr[data-id="${userId}"]`);
        row.find('td:nth-child(1)').text(data.firstName);
        // ... update other fields similarly ...
        $('#editUserModal').modal('hide');
        alert('User updated successfully!');
      },
      error: function(xhr, status, error) {
        let errorMessage = 'An error occurred.';
        if (xhr.responseJSON && xhr.responseJSON.message) {
          errorMessage = xhr.responseJSON.message;
        } else if (xhr.status === 404) {
          errorMessage = 'User not found.';
        }
        console.error("Error updating user:", error);
        alert(errorMessage);
      }
    });
  });
});
