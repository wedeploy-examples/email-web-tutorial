var form = document.querySelector('form');

form.addEventListener('submit', function(e) {
	e.preventDefault();

// Insert post method below
	WeDeploy
		.url('email-tutorialemailweb.wedeploy.sh/emails')
		.auth('d5c7c65c-71e7-4a48-896a-27a8eef3f4ca')
		.form('from', form.from.value)
		.form('to', form.to.value)
		.form('subject', form.subject.value)
		.form('message', form.message.value)
		.post()
		.then(function(response) {
			if (response.succeeded()) {
				form.reset();
				alert('Email sent! Wait a little bit until it arrives :)');
				console.info('Email ID:', response.body());
			}
			else {
				alert('Email was not sent');
			}
		})
		.catch(function(error) {
			alert('Oops, some error has happened.');
		});
// Insert post method above
});
