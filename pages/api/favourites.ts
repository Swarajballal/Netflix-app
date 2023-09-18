import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';
import serverAuth from '@/lib/serverAuth';
import { data } from 'autoprefixer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).end();
    }

    try {
        const { currentUser } = await serverAuth(req);

        const favouriteMovies = await prismadb.movie.findUnique({
            where: {
                id: {
                    in: currentUser?.favouriteIds,
                }
            },
        });

        return res.status(200).json(favouriteMovies);

    } catch (error) {
        console.error(error);
        return res.status(400).end();
    }
}