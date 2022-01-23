const localStorageService = {
    saveInfo(data: string) {
        localStorage.setItem("user", data);
    },

    clearInfo() {
        localStorage.clear();
    },
}

export default localStorageService;