function displayWindowProperties() {
    console.log("User Agent: " + window.navigator.userAgent);

    console.log("Screen Width: " + window.screen.width);
    console.log("Screen Height: " + window.screen.height);

    console.log("Current URL: " + window.location.href);
    console.log("Pathname: " + window.location.pathname);

    window.sessionStorage.setItem('sessionData', 'This is session data.');
    const sessionData = window.sessionStorage.getItem('sessionData');
    console.log("Session Storage Data: " + sessionData);

    window.localStorage.setItem('localData', 'This is local data.');
    const localData = window.localStorage.getItem('localData');
    console.log("Local Storage Data: " + localData);
}

window.addEventListener("load", displayWindowProperties);
