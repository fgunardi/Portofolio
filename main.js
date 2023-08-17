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

function onFormSubmit(e) {
	e.preventDefault()
	const email= $("#inp_email")
	const subjet= $("#inp_subjet")
	const message= $("#inp_message")

	if(!$(email).val()) {
		alert("Email is required")
	} else if (!$(subject).val()) {
		alert("Subject is Required")
	} else if (!$(message).val()) {
		alert("Message is required")
	} else {
		alert("Form Submitted")
		!$(email).val("")
		!$(subject).val("")
		!$(message).val("")
	}
}