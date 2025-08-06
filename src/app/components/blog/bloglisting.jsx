"use client";
import styles from "@/styles/blogs/bloglisting.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { SearchIcon } from "@/src/app/app-constants";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

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

const BlogListing = ({ data, dataListing }) => {
    const [query, setQuery] = useState("");
    const [filteredBlogs, setFilteredBlogs] = useState(dataListing);

    useEffect(() => {
        const trimmedQuery = query.trim().toLowerCase();

        if (trimmedQuery.length >= 3) {
            const results = dataListing.filter((item) =>
                item.title.toLowerCase().includes(trimmedQuery) ||
                (item.content && item.content.toLowerCase().includes(trimmedQuery))
            );
            setFilteredBlogs(results);
        } else {
            setFilteredBlogs(dataListing); // Reset to all if less than 3 chars
        }
    }, [query, dataListing]);

    return (
        <section className={`${styles.blogListing} p-100`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={12} lg={6} className="my-auto">
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.txt}</p>
                    </Col>
                    <Col md={12} lg={6} className="my-auto text-right">
                        <div className={styles.searchBlog}>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                                <button type="submit">
                                    <SearchIcon />
                                </button>
                            </form>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className={styles.blogWapper}>
                            {filteredBlogs.length === 0 ? (
                                <p className="text-center w-100">No blogs found in Search Result.</p>
                            ) : (
                                filteredBlogs.map((item, index) => (
                                    <div className={styles.blogItem} key={index}>
                                        <div className={styles.blogImage}>
                                            <Image src={item.img} alt={item.title} fill />
                                        </div>
                                        <div className={styles.blogContent}>
                                            <div className={styles.dateSec}>
                                                <div className={styles.date}>{item.date}</div>
                                                <div className={styles.date}>{getTimeSince(item.date)}</div>
                                            </div>
                                            <h3>
                                                <Link href={item.link}>{item.title}</Link>
                                            </h3>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default BlogListing;
