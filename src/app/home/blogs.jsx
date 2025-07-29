import Image from 'next/image';
import styles from "@/styles/home/blogs.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import img01 from "media/images/portfolio/1.webp";
import img02 from "media/images/portfolio/2.webp";
import img03 from "media/images/portfolio/3.webp";

// Blog data
const data = [
    {
        title: "Choosing the Best Flooring Contractor in North Hollywood: What You Need to Know",
        date: "2025-07-26",
        img: img01.src
    },
    {
        title: "Flooring Construction Services in North Hollywood: Build Your Dream Floor with Experts",
        date: "2025-07-25",
        img: img02.src
    }, {
        title: "Vinyl Plank Flooring Installations in North Hollywood: Affordable and Stylish Options",
        date: "2025-07-24",
        img: img03.src
    }
];


function getTimeSince(dateString) {
    const postDate = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - postDate.getTime()) / 1000);

    const intervals = [
        { label: 'year', seconds: 31536000 },
        { label: 'month', seconds: 2592000 },
        { label: 'week', seconds: 604800 },
        { label: 'day', seconds: 86400 },
        { label: 'hour', seconds: 3600 },
        { label: 'minute', seconds: 60 },
        { label: 'second', seconds: 1 },
    ];

    for (const interval of intervals) {
        const count = Math.floor(diffInSeconds / interval.seconds);
        if (count >= 1) {
            return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
        }
    }

    return 'just now';
}

const Blogs = () => {
    return (
        <section className={`${styles.blogSection} p-100`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={8} lg={6} className="my-auto">
                        <div className="subtitle">Our Blogs</div>
                        <h2>The Noho Flooring Blog</h2>
                        <p>Inside the world of wood, vinyl & more including flooring tips, trends, expert advice and inspirations.</p>
                    </Col>
                    <Col md={12} className="my-auto">
                        <div className={styles.blogWapper}>
                            {data.map((item, index) => (
                                <div className={styles.blogItem} key={index}>
                                    <div className={styles.blogImage}>
                                        <Image src={item.img} alt={item.title} fill />
                                    </div>
                                    <div className={styles.blogContent}>
                                        <div className={styles.dateSec}>
                                            <div className={styles.date}>{item.date}</div>
                                            <div className={styles.date}>{getTimeSince(item.date)}</div>
                                        </div>
                                        <h3>{item.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Blogs;
