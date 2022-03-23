# Remotion - ID3 Tags

This example shows how to load ID3 Tags into Remotion using the [`id3-rw`](https://github.com/trustedtomato/id3-rw) library from @trustedtomato.

The complicated part is to set up the Webpack override correctly, as WebAssembly is not enabled by default and there are Async and Sync WebAssembly variants. Check the `remotion.config.ts` file to see how it's done.

Since this library requires a sync import, but Webpack cannot load WebAssembly in the main chunk, we need to use `lazyComponent`.

## Commands

**Install Dependencies**

```console
npm i
```

**Start Preview**

```console
npm start
```

**Render video**

```console
npm run build
```

**Upgrade Remotion**

```console
npm run upgrade
```

## Docs

Get started with Remotion by reading the [fundamentals page](https://www.remotion.dev/docs/the-fundamentals).

## Help

We provide help [on our Discord server](https://discord.gg/6VzzNDwUwV).

## Issues

Found an issue with Remotion? [File an issue here](https://github.com/remotion-dev/remotion/issues/new).

## License

This code: MIT
The Remotion library: Notice that for some entities a company license is needed. Read [the terms here](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md).
