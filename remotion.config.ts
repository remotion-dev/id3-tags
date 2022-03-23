import {Config} from 'remotion';

Config.Rendering.setImageFormat('jpeg');
Config.Output.setOverwriteOutput(true);
Config.Bundling.overrideWebpackConfig((conf) => {
	return {
		...conf,
		experiments: {
			syncWebAssembly: true,
		},
	};
});
