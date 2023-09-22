const useStatus = (status) => {
    switch (status) {
        case 'Alive':
            return "alive";
        case 'unknown':
            return 'unknown';
        case 'Dead':
            return 'dead';
        default:
            break;
    }
}
export default useStatus;