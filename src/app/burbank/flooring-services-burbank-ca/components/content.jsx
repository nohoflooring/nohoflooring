import styles from "@/styles/burbank/content.module.scss"
import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"
import TwoButton from "@/src/app/burbank/flooring-services-burbank-ca/components/twobutton";

const Content = ({ data, dark }) => {
    return (
        <section className={`${styles.pageContent}  borderRadiusBottom p-50`}>
            <Container>
                <Row>
                    <Col md={12}>
                        {data.title}
                        {data?.BoxImage && (
                            <div className={styles.imageBox}>
                                <Image src={data.BoxImage} alt={data.title} fill />
                            </div>
                        )}
                        {Array.isArray(data?.gallery) && (
                            <div className={styles.portfolioWrapper}>
                                {data.gallery
                                    .filter(item => item?.img)
                                    .map((item, index) => (
                                        <div className={styles.portfolioItem} key={index}>
                                            <Image
                                                src={item.img}
                                                alt={item.alt || "Portfolio image"}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                        </div>
                                    ))}
                            </div>
                        )}
                        {data.txt}
                        {dark && (
                            <TwoButton dark={dark} />
                        )
                        }
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Content