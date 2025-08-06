import styles from "@/styles/about-us/videocta.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import BannerPoster from "media/images/home/ctaImage.webp";
// import videoFallback from "media/image/about-us/BannerVideo.webm";

const VideoCta = () => {
    return (
        <section className={styles.videoCtaSection}>
            <Container className={styles.videoCtaContainer}>
                <Row className="h-100">
                    <Col md={12}>
                        <div className={styles.videoCtaBox}>
                            <div className={styles.videoCtaItem}>
                                <div className="subtitle">Done Right. On Time. Every Time.</div>
                                <h2>Why Homeowners and Contractors Hire Noho</h2>
                            </div>
                            <div className={styles.videoCtaItem}>
                                <p>Noho Flooring offers professional flooring services as a reliable flooring contractor in Los Angeles. From installation to repair, we handle it all with expert care.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <video
                    autoPlay
                    muted
                    loop
                    preload="none"
                    aria-label="Background video"
                    className={styles.bannerVideo}
                    playsInline
                    poster={BannerPoster.src}
                >
                    <source src={'/static/AboutVideo.webm'} type="video/webm" />
                    Your browser does not support the video tag.
                </video>
            </Container>
        </section>
    )
}

export default VideoCta