$(document).ready(function () {
	//Prevent Page Reload on all # links
	$("body").on("click", "a[href='#']", function (e) {
		e.preventDefault();
	});

	//placeholder
	$("[placeholder]").each(function () {
		$(this).attr("data-placeholder", this.placeholder);
		$(this).bind("focus", function () {
			this.placeholder = '';
		});
		$(this).bind("blur", function () {
			this.placeholder = $(this).attr("data-placeholder");
		});
	});

	// On scroll Add Class
	$(window).scroll(function (e) {
		if ($(window).scrollTop() > 200) {
			$(".wrapper").addClass('page-scrolled');
		}
		else {
			$(".wrapper").removeClass('page-scrolled');
		}
	});

	// Add remove class when window resize finished
	var $resizeTimer;
	$(window).on("resize", function (e) {
		if (!$("body").hasClass("window-resizing")) {
			$("body").addClass("window-resizing");
		}
		clearTimeout($resizeTimer);
		$resizeTimer = setTimeout(function () {
			$("body").removeClass("window-resizing");
		}, 250);
	});

	// Add new js functions here -----------------------------------------------------------------
	$("li:has(ul)>a").click(function () {
		$(this).siblings("ul").slideToggle();
		$(this).parent().siblings(".nav-item.open").children("ul").slideUp();
		$(this).parent().toggleClass("open");
		$(this).parent().siblings(".nav-item.open").removeClass("open");
	});

	$(".menu-toggle").click(function () {
		$("body").toggleClass("menu-open");
		$(".owl-carousel").trigger("resize.owl.carousel");
	});

	$(".bg-canvas").click(function () {
		$("body").removeClass("menu-open");
	});
	$(".search-button").click(function () {
		$(".header-inner").addClass("search-open");
	});
	$(".close-search").click(function () {
		$(".header-inner").removeClass("search-open");
	});

	$('.owl-carousel').owlCarousel({
		loop: false,
		margin: 0,
		nav: false,
		items: 1,
		dots: true,
		responsiveRefreshRate: 10,
	})

	$(".date-time").on("dp.show", function () {
		$(this).closest(".bootstrap-select-outer").css({ "z-index": "2" });
	});

	$(".date-time").on("dp.hide", function () {
		$(this).closest(".bootstrap-select-outer").css({ "z-index": "" });
	});

	$("body").on("show.bs.select", ".bootstrap-select", function () {
		$(this).closest(".bootstrap-select-outer").css({ "z-index": "2", "position": "relative" });
	});

	$("body").on("hide.bs.select", ".bootstrap-select", function () {
		$(this).closest(".bootstrap-select-outer").css({ "z-index": "", "position": "" });
	});

	$('.date-time').datetimepicker();

	// Don't add anything below this --------------------------------------------------------------
	// Add Class on Window Load
	$("body").addClass("page-loaded");
});