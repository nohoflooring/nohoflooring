import Image from "next/image";
import styles from "@/styles/blogs/recent.module.scss";
import Link from "next/link";

const Recent = ({ data }) => {
    return (
        <div className={styles.recentWrapper}>
            {data.slice(0, 2).map((item, index) => (
                <div className={styles.recentBlog} key={index}>
                    <div className={styles.recentImg}>
                        <Image src={item.img} alt={item.title} fill />
                    </div>
                    <div className={styles.recentTxt}>
                        <h6><Link href={item.link}>{item.title}</Link></h6>
                        <div className={styles.date}>{item.date}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Recent;
