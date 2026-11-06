# gnista-nord-theme

The [Nord](https://www.nordtheme.com) theme for [Gnista](https://github.com/Gnista-Editor/gnista): an arctic, north-bluish palette for the base faces, font-lock, the mode line, search, diff, whitespace, Org and completion. A port of [nord-theme.el](https://github.com/nordtheme/emacs) 0.6.0.

## Installing

In `~/.config/gnista/init.ts`:

```ts
gnista.usePackage("Gnista-Editor/gnista-nord-theme", { require: false });
gnista.call("load-theme", "nord", true);
```

`usePackage` installs it at its newest version tag into `repos/` beside `init.ts` and records the commit in `gnista-lock.json`; `{ require: false }` leaves the loading to `load-theme`, whose `true` says not to ask first. `M-x package-vc-upgrade` brings it up to date. It needs Gnista 0.2.0 or newer.

## Options

Set these before `load-theme`:

- `nord-region-highlight`: how the region shows. `null` for Nord's `nord2`, the default; `"snowstorm"` for `nord0` on `nord4`; `"frost"` for `nord0` on `nord8`.
- `nord-uniform-mode-lines`: `true` to make inactive mode lines look like the active one, on `nord3`.

```ts
gnista.setVariable("nord-region-highlight", "frost");
```

## Credit

This is a port to Gnista of [nord-theme.el](https://github.com/nordtheme/emacs) 0.6.0, by Sven Greb and the Nord contributors, under the MIT licence; the port keeps that licence. It is not the upstream authors' work as published, and they do not endorse it: report problems with the port here, not upstream. Nord is a project of [nordtheme](https://github.com/nordtheme).

## Developing

With a Gnista on your PATH (a [release](https://github.com/Gnista-Editor/gnista/releases), or built from source) and TypeScript 5.8 or newer:

```bash
make test
make types
```

## Licence

MIT: see `LICENSE`.
