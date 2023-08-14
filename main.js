function toggledetail(e) {
	const target = $(e.target)

	$(target).html("less info").addclass("active")

	if($(target) .hasclass("active")){
		$(targe).html("More info").removeClass("active")
	} else {
		$(targe).html("Less info").addClass("active")
	}

	const item = $(target).parents(".about-exp-item")
	const detail = $(item).children(".about-exp-item-detail")

	$(detail).slidetoggle()
}