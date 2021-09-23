import { Box, Grid } from '@material-ui/core';
import { Button } from '@material-ui/core'
import { useRouter } from 'next/dist/client/router';
import React from 'react'
import MainLayout from '../layouts/MainLayout';
import gif from '../assets/XOsX.gif';
import Link from 'next/link'

export default function index() {
    return (
        <MainLayout>
            <div className="main-text">
                <Box className="title" style={{ fontSize: '36px' }}>
                    {/* Напряги свои уши, расслабляя душу */}
                    Music for soul
                </Box>
                <Link href='/tracks' passHref>
                    <Button>fill a magic</Button>
                </Link>
            </div>
            <style jsx>
                {`
                    .main-text {
                        margin-top: 150px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                `}
            </style>
        </MainLayout >
    )
}
