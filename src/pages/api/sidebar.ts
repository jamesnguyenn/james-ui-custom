// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest } from 'next/server';
import dataSideBar from '../../../data/data-sideBar.json';
type Data = {
    name: string;
};

export default async function handler(req: NextApiRequest) {
    return new Response(JSON.stringify(dataSideBar), {
        status: 200,
        headers: {
            'content-type': 'application/json',
        },
    });
}
export const config = {
    runtime: 'edge',
};
