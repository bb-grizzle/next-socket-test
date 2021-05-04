import styles from "../styles/Home.module.css";
import { useEffect } from "react";
// ie 에서 import 만 해도 에러 발생
// react 에서는 react-polyfill 설치 후 이상 없음.
import { io } from "socket.io-client";

const socket = io("http://localhost:3001/");
socket.emit("test", "hello");

export default function Home() {
	return <div className={styles.container}>test socket</div>;
}
