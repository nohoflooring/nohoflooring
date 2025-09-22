import styles from "@/styles/lp/lp1/popup.module.scss"
import { Col, Container, Modal, Row } from "react-bootstrap"
import ContactFrom from "@/src/app/lp/lp1/components/contactfrom";
import { ClosedBtn } from "@/src/app/app-constants"
import BGIMG from "media/images/home/about.webp"
import Image from "next/image";

const PopUp = (props) => {
    const { onHide } = props
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        ><section className={styles.popupSection}>
                <div className={styles.closedBtn} onClick={onHide}><ClosedBtn /></div>
                <Container className="h-100">
                    <Row className="h-100">
                        <Col lg={5} md={5} className="my-auto">
                            <Image src={BGIMG.src} alt="Bitswits Popup IMG" width={1862} height={1152} />
                        </Col>
                        <Col lg={7} md={7}>
                            <div className={styles.fromPopup}>
                                <ContactFrom popup={true} title={<>Get your Site Visit Worth $300 For FREE!</>} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Modal>
    )
}

export default PopUp