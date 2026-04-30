import { io } from 'socket.io-client';

const SOCKET_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

let socket;

export const initiateSocketConnection = (token) => {
	socket = io(SOCKET_URL, {
		auth: {
			token,
		},
	});
	console.log(`Connecting socket...`);
};

export const disconnectSocket = () => {
	console.log('Disconnecting socket...');
	if (socket) socket.disconnect();
};

export const joinRoom = (room) => {
	if (socket) socket.emit('join_negotiation', room);
};

export const leaveRoom = (room) => {
	if (socket) socket.emit('leave_room', room);
};

export const subscribeToMessages = (cb) => {
	if (!socket) return(true);
	socket.on('new_message', (msg) => {
		console.log('New message received');
		return cb(null, msg);
	});
};

export const subscribeToOffers = (cb) => {
	if (!socket) return(true);
	socket.on('offer_received', (data) => {
		console.log('Offer received');
		return cb(null, data);
	});
};

export const subscribeToResponses = (cb) => {
	if (!socket) return(true);
	socket.on('offer_responded', (data) => {
		console.log('Offer responded');
		return cb(null, data);
	});
};

export const subscribeToTyping = (cb) => {
  if (!socket) return(true);
  socket.on('typing_status', (data) => {
    return cb(null, data);
  });
};

export const emitTyping = (negotiationId, isTyping) => {
  if (socket) socket.emit('typing', { negotiationId, isTyping });
};

export const getSocket = () => socket;
