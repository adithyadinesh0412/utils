module.exports = {
	routes: [
		{
			sourceRoute: '/interface/user-signup',
			type: 'POST',
			inSequence: true,
			orchestrated: true,
			targetRoute: {
				path: '/mentoring/v1/mentors/create',
				type: 'POST',
				functionName: 'createProfile',
			},
		},
	],
}
