const userViewModel = (mongoUser) => {
	return {
		fullName: mongoUser.name
	};
}

module.exports = userViewModel;