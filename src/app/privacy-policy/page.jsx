import styles from "@/styles/components/privacypolicy.module.scss";
import { Col, Container, Row } from "react-bootstrap";

const Page = () => {
  return (
    <>
      <section className={styles.privacyPolicy}>
        <Container>
          <Row>
            <Col>
              <h1>Privacy Policy</h1>
              <p>At Noho Flooring, your privacy is very important to us. This Privacy Policy explains how we collect, use, and protect the information you provide when visiting our website, nohoflooring.com. By using our site, you agree to the terms described here.</p>
              <p>When you contact us, request a quote, or use our services, we may collect personal information such as your name, email address, phone number, and any details you choose to share. In addition, our website automatically collects non-personal information such as your browser type, IP address, and the pages you visit. This helps us improve our website performance and overall customer experience.</p>
              <p>We use the information we collect for several purposes, including responding to inquiries, processing service requests, scheduling appointments, and enhancing the services we provide. Occasionally, we may send you updates, promotions, or other communications related to our services, though you can opt out of these at any time.</p>
              <p>Noho Flooring does not sell, rent, or trade your personal information. We may share your data only with trusted service providers who assist with website operations, marketing, or payment processing, and only to the extent necessary for them to perform their work. We may also disclose information if required to comply with legal obligations.</p>
              <p>Like many websites, we use cookies and similar technologies to enhance your browsing experience and analyze website traffic. You may disable cookies through your browser settings, but please note that some features of our website may not function properly without them</p>
              <p>We take reasonable steps to secure the information you provide and protect it from unauthorized access or misuse. However, please be aware that no method of transmission over the internet can be guaranteed to be completely secure.</p>
              <p>You have the right to request access to the personal information we hold about you, ask for updates or corrections, or request that your information be deleted. You may also opt out of marketing emails at any time.</p>
              <p>Our website may contain links to third-party sites. Please note that we are not responsible for the privacy practices or content of those external websites. We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised “Last Updated” date, so we encourage you to review this policy periodically.</p>
              <p>If you have any questions about this Privacy Policy or how your information is handled, please feel free to contact us at <a href="tel:8189324117">(818) 932-4117</a></p>
            </Col>
          </Row>
        </Container>
      </section>

    </>
  );
};

export default Page;
