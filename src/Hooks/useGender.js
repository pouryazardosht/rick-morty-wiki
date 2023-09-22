const useGender = (gender) => {
    switch (gender) {
        case 'Male':
            return "male";
        case 'Female':
            return 'female';
        default:
            return '';
    }
}

export default useGender