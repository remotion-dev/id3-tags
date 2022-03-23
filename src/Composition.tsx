import {AbsoluteFill, Audio, continueRender, delayRender} from 'remotion';
import {useCallback, useEffect, useState} from 'react';
import {staticFile} from 'remotion';
import {getMetadataFrom} from 'id3-rw';

export default () => {
	const [state, setState] = useState<{
		title: string | undefined;
		artist: string | undefined;
	} | null>(null);
	const [handle] = useState(() => delayRender());

	const getId3Tags = useCallback(async () => {
		const response = await fetch(staticFile('music.mp3'));

		const stream = response.body;
		const metadata = await getMetadataFrom(
			stream as ReadableStream<Uint8Array>
		);
		setState({
			artist: metadata.artist,
			title: metadata.title,
		});

		// IMPORTANT! Always remember to destroy the metadata
		// after you've got the properties you need,
		// else you'll get a memory leak!
		metadata.free();
		continueRender(handle);
	}, [handle]);

	useEffect(() => {
		getId3Tags();
	}, [getId3Tags]);

	return (
		<AbsoluteFill
			style={{
				backgroundColor: 'white',
			}}
		>
			<Audio src={staticFile('music.mp3')} />
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					fontSize: 40,
					fontFamily: 'sans-serif',
				}}
			>
				{state ? (
					<>
						<div>{state.title}</div>
						<div>{state.artist}</div>
					</>
				) : null}
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
