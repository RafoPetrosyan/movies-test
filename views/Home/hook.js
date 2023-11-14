import {useCallback, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCookie, setCookie} from "cookies-next";
import {debounce} from "lodash";
import {fetchMovies} from "store/movies/operations";

function useContainer() {
    const dispatch = useDispatch();
    const videoRef = useRef(null);
    const [videoPlayed, setVideoPlayed] = useState(false);
    const {movies} = useSelector(state => state.movies);

    const playVideo = debounce(() => {
        changeVideoPlayed(true);
        videoRef.current.play();
    }, 2000)

    const storeFeaturedId = useCallback((id) => {
        changeVideoPlayed(false);
        dispatch(fetchMovies({featuredId: id}));
        setCookie('featuredId', id);
        playVideo();
    }, []);

    const changeVideoPlayed = (value) => {
        setVideoPlayed(value);
    };

    return {
        videoPlayed,
        movies,
        storeFeaturedId,
        videoRef,
    }
}

export const getInitialProps = async ({ req, res, store }) => {
    const featuredId = await getCookie('featuredId', { req, res});
    await store.dispatch(fetchMovies({featuredId}));
}

export default useContainer;
