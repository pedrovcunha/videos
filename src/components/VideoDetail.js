import React from "react";

const VideoDetail = ({ video }) => {
	if (!video) {
		return (
			<div class="ui active inverted dimmer">
				<div class="ui text loader">Loading</div>
			</div>
		);
	}

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
	return (
		<div>
			<div className="ui embed">
				<iframe
					src={videoSrc}
					title={video.snippet.title}
				/>
			</div>
			<div className="ui segment">
				<h4 className="ui header">
					{video.snippet.title}
				</h4>
				<p>{video.snippet.description}</p>
			</div>
		</div>
	);
};

export default VideoDetail;
