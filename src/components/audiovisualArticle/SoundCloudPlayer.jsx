import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  width: 100%;
  height: 166px; /* Standard height for SoundCloud visual player, adjustable */
  overflow: hidden;
  border-radius: 8px; /* Optional rounded corners */
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  overflow: hidden;
`;

export default function SoundCloudPlayer({ url }) {
    // Construct the embed URL. 
    // 'visual=true' makes it the larger "card" style player, often preferred for aesthetics.
    // 'auto_play=false' ensures it doesn't auto start.
    // 'show_artwork=true' shows the track art.
    const src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;

    return (
        <Wrapper>
            <Iframe
                src={src}
                title="SoundCloud Player"
                allow="autoplay"
                loading="lazy"
            />
        </Wrapper>
    );
}

SoundCloudPlayer.propTypes = {
    url: PropTypes.string.isRequired,
};
