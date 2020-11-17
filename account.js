$("#account-profile-tab").click(function() {
	$("#profile").show();
	$("#contacts").hide();
	$("#cards").hide();
	$("#addresses").hide();
	$(this).addClass("pill-active");
	$("#account-card-tab").removeClass("pill-active");
	$("#account-contact-tab").removeClass("pill-active");
	$("#account-address-tab").removeClass("pill-active");
});

$("#account-card-tab").click(function() {
	$("#profile").hide();
	$("#contacts").hide();
	$("#cards").show();
	$("#addresses").hide();
	$(this).addClass("pill-active");
	$("#account-profile-tab").removeClass("pill-active");
	$("#account-contact-tab").removeClass("pill-active");
	$("#account-address-tab").removeClass("pill-active");
});

$("#account-contact-tab").click(function() {
	$("#profile").hide();
	$("#contacts").show();
	$("#cards").hide();
	$("#addresses").hide();
	$(this).addClass("pill-active");
	$("#account-card-tab").removeClass("pill-active");
	$("#account-profile-tab").removeClass("pill-active");
	$("#account-address-tab").removeClass("pill-active");
});

$("#account-address-tab").click(function() {
	$("#profile").hide();
	$("#contacts").hide();
	$("#cards").hide();
	$("#addresses").show();
	$(this).addClass("pill-active");
	$("#account-card-tab").removeClass("pill-active");
	$("#account-contact-tab").removeClass("pill-active");
	$("#account-profile-tab").removeClass("pill-active");
});

$("#btnAddress").click(function() {
 	$("#add-address-modal").show();
});

$("#btnPwd").click(function() {
 	$("#change-pwd-modal").show();
});

$("#btnContact").click(function() {
 	$("#add-contact-modal").show();
});

$("#btnCard").click(function() {
 	$("#add-card-modal").show();
});

$(".submit").click(function() {
  	var r = confirm("Are you sure you want to add this information?");
  	if (r == true) {
    	$(".modal").hide();
 	}
});

$("#save-info").click(function() {
  	var r = confirm("Are you sure you want to change this information?");
});

$("#change-pwd").click(function() {
	$(".modal").hide();
});