const useSpecies = (specie) => {
    switch (specie) {
        case 'Human':
            return 'human';
        case 'Alien':
            return 'alien';
        default:
            return "";
    }
}
export default useSpecies;