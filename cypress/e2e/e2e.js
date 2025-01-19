Cypress.on('uncaught:exception', (err, runnable) => {
    // Abaikan error terkait AddFotoramaVideoEvents
    if (err.message.includes('AddFotoramaVideoEvents')) {
        return false; // Mengabaikan error
    }
    // Biarkan error lain tetap muncul
});
