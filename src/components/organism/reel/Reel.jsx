import Video from "@/components/molecules/Video/Video";
import useFetchAllVideos from "@/hooks/apis/useFetchAllVideos";
import { useEffect, useState } from "react";
import "./Reel.css";

/**
 * Reel component - Displays a collection of video reels similar to Instagram
 * This component fetches and renders videos in a scrollable container
 */
export const Reel = () => {
    // Track which video is currently playing (by ID)
    const [playing, setPlaying] = useState(1);
    // Store fetched videos in local state
    const [videosDownloaded, setVideosDownloaded] = useState([]);
  
    // Custom hook to fetch all videos from API
    const { isVideoFetching, isVideoError, isVideoFetched, videos } = useFetchAllVideos();
  
    // Update local state when videos are successfully fetched
    useEffect(() => {
      if(isVideoFetched && videos)
        setVideosDownloaded([...videos])
    }, [videos, isVideoFetched]);
  
    // Show loading state while videos are being fetched
    if(isVideoFetching) {
      return <div>Loading...</div>
    }
  
    // Handle error state if video fetch fails
    if(isVideoError) {
      return <div>Error fetching videos</div>
    }
  
    return (
        <div className='app'>
            <div className="container">
            {/* Render videos only when fetch is successful */}
            {isVideoFetched && videosDownloaded.map((currentVideo) => (
            <Video 
                url={currentVideo.url} 
                key={currentVideo.id} 
                id={currentVideo.id} 
                caption={currentVideo.caption} 
                playing={playing}
                setPlaying={setPlaying} 
                />
            ))}
            </div>
      </div>
    )
}