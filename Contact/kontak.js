   // Tambahkan JavaScript untuk mengubah latar belakang navbar saat di-scroll
   $(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('navbar-scrolled');
        } else {
            $('.navbar').removeClass('navbar-scrolled');
        }
    });
});

$(document).ready(function() {
    // Menggunakan jQuery untuk menangani pengiriman form
    $("form").submit(function(event) {
      event.preventDefault(); // Mencegah pengiriman form default
  
      // Dapatkan data dari form
      var firstName = $("#firstName").val();
      var lastName = $("#lastName").val();
      var phoneNumber = $("#phoneNumber").val();
      var email = $("#email").val();
      var purpose = $("input[name='purpose']:checked").map(function() {
        return $(this).val();
      }).get().join(', ');
      var message = $("#message").val();
  
      // Buat pesan notifikasi berdasarkan data yang diisi oleh pengguna
      var notificationMessage = "Terima kasih, " + firstName + " " + lastName + ". ";
      notificationMessage += "Kami akan menghubungi Anda melalui email (" + email + ") atau telepon (" + phoneNumber + ") ";
      notificationMessage += "mengenai tujuan Anda: " + purpose + ". Pesan Anda: " + message;
  
      // Tampilkan pesan notifikasi
      alert(notificationMessage); // Menggunakan alert untuk menampilkan notifikasi
  
      // Mengosongkan nilai-nilai input setelah pengiriman berhasil
      $("#firstName").val("");
      $("#lastName").val("");
      $("#phoneNumber").val("");
      $("#email").val("");
      $("input[name='purpose']").prop('checked', false);
      $("#message").val("");
    });
  });
  

$(document).ready(function() {
$("form.search-form").submit(function(event) {
event.preventDefault(); // Mencegah pengiriman form default

// Dapatkan nilai pencarian dari input
var searchQuery = $("#searchLocation").val();

// Redirect ke halaman pencarian dengan menggunakan nilai pencarian
var searchURL = "https://www.restoransederhana.id/?s=" + encodeURIComponent(searchQuery);
window.location.href = searchURL;
});
});

function openInputMobile() {
var searchInputMobile = document.getElementById("search-input-mobile");
if (searchInputMobile.style.display === "none" || searchInputMobile.style.display === "") {
searchInputMobile.style.display = "block";
} else {
searchInputMobile.style.display = "none";
}
}

function searchMobile() {
var keyword = document.getElementById("search-bar-mobile").value;
window.location.href = "search.html?keyword=" + keyword;
}

function performSearch() {
// Ambil nilai yang dimasukkan oleh pengguna dalam input pencarian
var searchTerm = document.querySelector('.search-input').value;

// Di sini Anda dapat menentukan apa yang ingin Anda lakukan dengan nilai pencarian, misalnya, 
// melakukan pengalihan ke halaman hasil pencarian atau menampilkan hasil pencarian di halaman saat ini.
// Contoh sederhana:
alert('Anda mencari: ' + searchTerm);
}

// Tambahkan event listener untuk tombol "Search"
document.querySelector('.search-button').addEventListener('click', performSearch);

// Tambahkan event listener untuk input pencarian agar dapat mencari saat Enter ditekan
document.querySelector('.search-input').addEventListener('keydown', function(event) {
if (event.key === 'Enter') {
performSearch();
}
});


