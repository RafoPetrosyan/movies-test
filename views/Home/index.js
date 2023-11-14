import React from 'react';
import MainLayout from "views/Layouts/MainLayout";
import TrendingNow from "views/Home/TrendingNow";
import Featured from "./Featured";
import useContainer, {getInitialProps} from "./hook";

const Home = () => {
    const {movies, storeFeaturedId, videoRef, videoPlayed} = useContainer();

    return (
        <>
            <div className='home-page'>
                <div className='content'>
                    <Featured data={movies.Featured}/>
                    <TrendingNow data={movies.TendingNow} storeFeaturedId={storeFeaturedId}/>
                </div>
            </div>
            {!videoPlayed && (
                <div className="feature-background" style={{backgroundImage: `url(/images/${movies.Featured.CoverImage})`}}/>
            )}
            <video
                ref={videoRef}
                className="feature-background"
                src={movies.Featured.VideoUrl}
                style={{display: videoPlayed ? 'flex' : 'none', objectFit: 'cover'}}
            />
        </>
    );
};

Home.Layout = MainLayout;

Home.getInitialProps = getInitialProps;

export default Home;
