$(function () {
	function initialBannerSlider() {
		$(".banner-section__slider").slick({
			dots: true,
			prevArrow:
				'<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
			nextArrow:
				'<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>',
		});
	}

	function tabsActive() {
		$(".tab").on("click", function (e) {
			e.preventDefault();
			$($(this).siblings()).removeClass("tab--active");
			$($(this).parent().siblings().find(".tabs-content")).removeClass(
				"tabs-content--active"
			);
			$(this).addClass("tab--active");
			$($(this).attr("href")).addClass("tabs-content--active");
		});
	}

	function toggleFavorite() {
		$(".product-item__favorite").on("click", function () {
			$(this).toggleClass("product-item__favorite--active");
		});
	}

	function initialProductSlider() {
		$(".product-slider").slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			prevArrow:
				'<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/arrow-black-left.svg" alt=""></button>',
			nextArrow:
				'<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/arrow-black-right.svg" alt=""></button>',
		});
	}

	function initialFilterDropDown() {
		$(".filter-style").styler();
	}

	function initialFilterItemDrop() {
		$(".filter__item-drop").on("click", function () {
			$(this).toggleClass("filter__item-drop--active");
			$(this).next().slideToggle("200");
		});
	}

	function initialRangeSlider() {
		$(".js-range-slider").ionRangeSlider({
			type: "double",
			min: 100000,
			max: 500000,
		});
	}
	function buttonsFilterClick() {
		$(".catalog__filter-btnline").on("click", function () {
			$(this).addClass("catalog__filter-button--active");
			$(".catalog__filter-btngrid").removeClass(
				"catalog__filter-button--active"
			);
			$(".product-item__wrapper").removeClass("product-item__wrapper--list");
		});

		$(".catalog__filter-btngrid").on("click", function () {
			$(this).addClass("catalog__filter-button--active");
			$(".catalog__filter-btnline").removeClass(
				"catalog__filter-button--active"
			);
			$(".product-item__wrapper").addClass("product-item__wrapper--list");
		});
	}

	//Calls
	initialBannerSlider();
	tabsActive();
	toggleFavorite();
	initialProductSlider();
	initialFilterDropDown();
	initialFilterItemDrop();
	initialRangeSlider();
	buttonsFilterClick();
});
