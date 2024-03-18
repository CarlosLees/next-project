import { Post, User } from './models';
import { MongoPost, MongoUser } from './mongoInterface';
import { connectToMongo } from './utils';

/// mock数据
// export const postApi = {
//     posts: async (): Promise<PlaceholderPosts[]> => {
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
//             next: { revalidate: 3600 },
//         });

//         if (!res.ok) {
//             throw new Error('Somethind went weong');
//         }

//         return res.json();
//     },

//     post: async (slug: string): Promise<PlaceholderPosts> => {
//         const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//         if (!res.ok) {
//             throw new Error('Somethind went weong');
//         }

//         return res.json();
//     },

//     user: async (userId: number): Promise<PostUserResponse> => {
//         const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
//             cache: 'no-store',
//         });

//         if (!res.ok) {
//             throw new Error('Somethind went weong');
//         }

//         return res.json();
//     },
// };

/// mongo数据
export const postApi = {
    posts: async (): Promise<MongoPost[]> => {
        await connectToMongo();
        return Post.find();
    },

    post: async (slug: string): Promise<MongoPost | null> => {
        await connectToMongo();
        return Post.findOne({ slug });
    },

    user: async (userId: string): Promise<MongoUser | null> => {
        await connectToMongo();
        return User.findById(userId);
    },
};
