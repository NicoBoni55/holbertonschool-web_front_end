const user = {
    hobby: "Calligraphy",
    favoriteSport: "Hockey",
    astrologicalSign: "Aries",
    firstName: "Guillaume",
    lastName: "Jhons",
    location: "Netherlands",
    occupation: "Engineer"
}

function logWelcomeUser(welcomeString) {
    console.log(`${welcomeString}, ${user.firstName}. Your occupation is: ${user.occupation}`);
}

const bindLogWelcomeUser = logWelcomeUser.bind(user);

logWelcomeUser('Welcome');
bindLogWelcomeUser('Hello');