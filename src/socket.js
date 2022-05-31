import { io } from 'socket.io-client';

export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnectionAttempt: 'Infinity',
        timeout: 10000,
        transports: ['websocket'],
    };
    // return io(`http://${window.location.hostname}:3000`, options);
    return io(process.env.REACT_APP_BACKEND_URL,options);
};
