import { useEffect, useRef } from "react";

import "./Video.css";
import { ReelFooter } from "@/components/atoms/ReelFooter/ReelFooter";

/**
 * Video component - Renders an individual video in the reels interface
 * Handles video playback, pausing, and visibility detection
 *
 * @param {number} id - Unique identifier for the video
 * @param {string} url - Source URL of the video file
 * @param {string} caption - Text caption to display with the video
 * @param {number|null} playing - ID of the currently playing video (or null if none)
 * @param {function} setPlaying - Function to update the currently playing video ID
 */
export default function Video({
    id,
    url,
    caption,
    playing,
    setPlaying
}) {

    const videoRef = useRef(null); // Create a reference to the video element

    /**
     * Toggle video playback when user clicks on the video
     * If video is paused, play it and update the playing state
     * If video is playing, pause it and set playing to null
     */
    function handleClick() {
        if(videoRef.current.paused) {
            videoRef.current.play();
            setPlaying(id);
        } else {
            videoRef.current.pause();
            setPlaying(null);
        }
    }

    /**
     * Effect to pause video when another video starts playing
     * Monitors the 'playing' state and pauses this video if it's not the active one
     */
    useEffect(() => {
        if(playing !== id) {
            videoRef.current.pause();
        }
    }, [playing, id]);

    /**
     * Effect to handle automatic playback based on visibility
     * Uses Intersection Observer API to detect when video enters viewport
     */
    useEffect(() => {
        // Create intersection observer to detect when video is visible in viewport
        const observer = new IntersectionObserver((entries) => {
            // Process all observed elements (in this case, just the video)
            entries.forEach(entry => {
                // When video becomes sufficiently visible in the viewport
                if(entry.isIntersecting) {
                    videoRef.current.play(); // Auto-play the video
                    setPlaying(id); // Update the global playing state
                }
            })
        }, {
            threshold: 0.5 // Trigger when 50% of the video is visible in viewport
        });

        // Start observing the video element if it exists
        if(videoRef.current) {
            observer.observe(videoRef.current);
        }

        // Cleanup function to stop observing when component unmounts
        return () => {
            if(videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        }
    }, [id, setPlaying]);

    return (
        <div
            className="video-wrapper"
        >
            {/* Video player with click handler for play/pause toggle */}
            <video 
                className="video-player" 
                loop // Loop the video continuously
                onClick={handleClick}
                ref={videoRef} // Attach the ref to access the DOM element
                src={url}>
            </video>

            {/* Container for caption and other video information */}
            <div className="bottom">
                <ReelFooter channel={"imaheshshekokar"} caption={caption} />
            </div>
        </div>
    )
}