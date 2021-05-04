import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";
// import SocketLink from "../components/SocketLink";
const SocketLink = dynamic(() => import("../components/SocketLink"), { ssr: false });

export default function Home() {
	return (
		<div className={styles.container}>
			<SocketLink>
				<p>test socket</p>
			</SocketLink>
		</div>
	);
}
