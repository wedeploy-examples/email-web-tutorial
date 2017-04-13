var form = document.querySelector('form');

form.addEventListener('submit', function(e) {
	e.preventDefault();

// Insert post method bellow
	WeDeploy
		.url('email.tutorial-email-web.wedeploy.io/emails')
		.auth('7d173abf-e5cf-4210-8e75-9fdd18ebb727')
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
