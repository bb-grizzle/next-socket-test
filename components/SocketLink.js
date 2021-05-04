// ie 에서 import 만 해도 에러 발생
// react 에서는 react-polyfill 설치 후 이상 없음.
import { useEffect } from "react";
import { useRouter } from "next/router";
// import { io } from "socket.io-client";

// const socket = io("http://localhost:3001/");
// socket.emit("test", "hello");

const SocketLink = ({ children }) => {
	const { push } = useRouter();
	useEffect(() => {
		if (typeof window !== "undefined") {
			const getSocket = async () => {
				try {
					const { io } = await import(`socket.io-client`);
					// console.log(io);
				} catch (err) {
					console.log(err);
					push("/browser");
				}
			};
			getSocket();
		}
	}, []);

	return <>{children}</>;
};

export default SocketLink;
