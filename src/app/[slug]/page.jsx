import { BlogData } from "@/src/app/[slug]/data/data";
import style from "@/styles/blogs/singlepage.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { LinkArrowIcon, MainLogo } from "@/src/app/app-constants";
import Recent from "@/src/app/components/blog/recent";
import { BlogListingData } from "@/src/app/blogs/data/data";
import Blogs from "@/src/app/home/blogs";
import { mainData } from "@/src/app/[slug]/data/data";
import Contact from "@/src/app/home/contact";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return BlogData.map((post) => ({
        slug: post.slug,
    }));
}

function getDaysAgo(dateString) {
    const postDate = new Date(dateString);
    const today = new Date();
    const diffTime = today - postDate;
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const blog = BlogData.find((post) => post.slug === slug);
    if (!blog) return {};

    return {
        title: blog.tit,
        description: blog.description,
        openGraph: {
            title: blog.tit,
            description: blog.description,
            url: `https://nohoflooring.com/${blog.slug}`,
            siteName: "Book Writing",
            locale: "en_US",
            type: "article",
            images: ["https://www.nohoflooring.com/logo.webp"],
        },
        twitter: {
            card: "summary_large_image",
            title: blog.tit,
            description: blog.description,
            images: ["https://www.nohoflooring.com/logo.webp"],
        },
        alternates: {
            canonical: `https://nohoflooring.com/${blog.slug}`,
        },
    };
}

const LOCALIZED_BLOG_SLUGS = new Set([
    "hardwood-floor-refinishing-cost-in-burbank-ca",
    "when-does-tile-flooring-in-your-burbank-home-need-replacement",
    "why-engineered-hardwood-flooring-is-the-smartest-choice-for-burbank-homes",
    "how-burbank-homeowners-get-laminate-flooring-done-right",
    "floor-refinishing-vs-full-replacement-in-burbank-ca",
    "how-to-get-tile-flooring-done-right-in-burbank-kitchens",
    "what-every-burbank-homeowner-should-know-before-upgrading-floors",
    "vinyl-plank-vs-laminate-flooring-for-los-angeles-homes",
    "why-hiring-a-professional-for-flooring-installation-in-los-angeles-is-worth-it",
    "how-to-save-money-on-flooring-installation-in-los-angeles",
    "durable-flooring-types-for-commercial-spaces-in-los-angeles",
    "which-flooring-type-lasts-the-longest-in-los-angeles-homes",
    "hardwood-floor-refinishing-cost-in-universal-city-ca",
    "why-vinyl-plank-is-the-smartest-choice-for-universal-city-homes",
    "when-to-replace-your-tile-flooring-in-universal-city-ca",
    "laminate-flooring-installation-in-universal-city-explained",
    "what-universal-city-homeowners-should-know-before-floor-replacing",
    "the-flooring-mistake-most-west-hollywood-condo-owners-make",
    "hardwood-vs-vinyl-plank-flooring-for-west-hollywood-condos",
    "how-long-does-flooring-installation-take-in-west-hollywood-ca",
    "how-to-prepare-for-flooring-installation-in-west-hollywood-ca",
    "what-no-one-tells-you-about-flooring-in-west-hollywood"
]);

export default async function BlogPost({ params }) {
    const { slug } = await params;          // ✅ await params
    const blog = BlogData.find((post) => post.slug === slug);

    if (!blog) return notFound();

    const isNewLocationBlog = LOCALIZED_BLOG_SLUGS.has(slug);

    return (
        <>
            <div className={style.singleBlogSec}>
                <Container>
                    <Row>
                        <Col md={12} lg={12} className="m-auto">
                            <div className={style.singleBlogBox}>
                                <h1>{blog.title}</h1>

                            </div>
                            <div className={style.blogInfo}>
                                {blog.date} · <span>{getDaysAgo(blog.date)} days ago</span>
                            </div>
                            <div className={style.singleBlogImg}>
                                <Image src={blog.img} alt="Banner Blog" fill />
                                <MainLogo />
                                <div className={style.bannerTitle}>{blog.title}</div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} lg={8}>
                            <div className={`${style.singleBlogContent} ${isNewLocationBlog ? style.newLocationBlog : ""}`}>
                                {blog.maintxt}
                            </div>
                        </Col>

                        <Col md={12} lg={4}>
                            <div className={style.blogsideBar}>
                                <div className={style.serviceBox}>
                                    <h4>Flooring Services</h4>
                                    <ul className={style.serviceSidebar}>
                                        <li><Link href="/commercial-engineered-flooring-in-north-hollywood-ca">Commercial Engineered Flooring <LinkArrowIcon /></Link></li>
                                        <li><Link href="/floor-refinishing-services-in-north-hollywood-ca">Floor Refinishing Services <LinkArrowIcon /></Link></li>
                                        <li><Link href="/hardwood-floor-refinishing-in-north-hollywood-ca">Hardwood Floor Refinishing <LinkArrowIcon /></Link></li>
                                        <li><Link href="/hardwood-floor-replacements-in-north-hollywood-ca">Hardwood Floor Replacements <LinkArrowIcon /></Link></li>
                                        <li><Link href="/laminate-flooring-installation-services-in-north-hollywood">Laminate Flooring Installation Services <LinkArrowIcon /></Link></li>
                                        <li><Link href="/residential-engineered-flooring-in-north-hollywood-ca">Residential Engineered Flooring <LinkArrowIcon /></Link></li>
                                        <li><Link href="/tile-flooring-installations-in-north-hollywood-ca">Tile Flooring Installations <LinkArrowIcon /></Link></li>
                                        <li><Link href="/tile-flooring-replacements-in-north-hollywood-ca">Tile Flooring Replacements <LinkArrowIcon /></Link></li>
                                        <li><Link href="/vinyl-plank-flooring-installation-in-north-hollywood-ca">Vinyl Plank Flooring Installation <LinkArrowIcon /></Link></li>
                                    </ul>
                                </div>

                                <div className={`${style.serviceBox} ${style.borderZero}`}>
                                    <h4>Recent</h4>
                                    <ul className={style.serviceSidebar}>
                                        <Recent data={BlogListingData} />
                                    </ul>
                                </div>

                                <div className={style.serviceBox}>
                                    <h4>Share</h4>
                                    <ul className={style.serviceSidebar}>
                                        <li><Link href="#">Facebook <LinkArrowIcon /></Link></li>
                                        <li><Link href="#">Twitter <LinkArrowIcon /></Link></li>
                                        <li><Link href="#">Pinterest <LinkArrowIcon /></Link></li>
                                        <li><Link href="#">LinkedIn <LinkArrowIcon /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div >

            <Blogs data={mainData} dataListing={BlogListingData} />
            <Contact />
        </>
    );
}
