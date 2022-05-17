{{login_api.run(() => {
    const jwt = login_api?.data?.jwt;
    
    if(jwt) {
        storeValue('jwt', jwt);
        navigateTo('MainPage', {});
    } else {
        showAlert('Invalid Username/Password', 'error');
    }
})
}}


