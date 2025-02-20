// Add your JavaScript code here to handle form submissions, AJAX calls,
// dynamic table population, search functionality, and modals.  This will
// require significant JavaScript code to interact with your backend.
$(document).ready(function(){
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      localStorage.setItem('activeTab', $(this).attr('href'));
    });
    var activeTab = localStorage.getItem('activeTab');
    if(activeTab){
      $('#myTab a[href="' + activeTab + '"]').tab('show');
    }
  });
