import Image from 'next/image';

import Link from 'next/link';

import { FC } from 'react';

import { MongoPost } from '../../lib/mongoInterface';

import styles from './postCard.module.css';

const PostCard: FC<{ post: MongoPost }> = ({ post }) => {
    const { title, desc } = post;
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imageContainer}>
                    <Image
                        className={styles.image}
                        src="https://cdn.pixabay.com/photo/2023/05/06/20/21/reeds-7975080_1280.png"
                        alt=""
                        fill
                        priority
                    />
                </div>
                <span className={styles.data}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.desc}>{desc}</p>
                <Link className={styles.link} href={`blog/${post.slug}`}>
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default PostCard;
