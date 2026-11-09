# e8-nord-theme

> **Moved.** Nord now lives in [`e8-themes`](https://github.com/e8-editor/e8-themes), with nineteen other themes and `e8-themes-select` to choose among them ([ADR 0067](https://github.com/e8-editor/e8/blob/main/docs/adr/0067-themes-are-one-collection.md)). This repository is archived; configurations that install it keep working at its last tag. To move, replace the `usePackage` line below with `e8.usePackage("e8-editor/e8-themes");`.

The [Nord](https://www.nordtheme.com) theme for [E8](https://github.com/e8-editor/e8): an arctic, north-bluish palette for the base faces, font-lock, the mode line, search, diff, whitespace, Org and completion. A port of [nord-theme.el](https://github.com/nordtheme/emacs) 0.6.0.

## Installing

In `~/.config/e8/init.ts`:

```ts
e8.usePackage("e8-editor/e8-nord-theme", { require: false });
e8.call("load-theme", "nord", true);
```

`usePackage` installs it at its newest version tag into `repos/` beside `init.ts` and records the commit in `e8-lock.json`; `{ require: false }` leaves the loading to `load-theme`, whose `true` says not to ask first. `M-x package-vc-upgrade` brings it up to date. It needs E8 0.3.0 or newer.

## Options

Set these before `load-theme`:

- `nord-region-highlight`: how the region shows. `null` for Nord's `nord2`, the default; `"snowstorm"` for `nord0` on `nord4`; `"frost"` for `nord0` on `nord8`.
- `nord-uniform-mode-lines`: `true` to make inactive mode lines look like the active one, on `nord3`.

```ts
e8.setVariable("nord-region-highlight", "frost");
```

## Credit

This is a port to E8 of [nord-theme.el](https://github.com/nordtheme/emacs) 0.6.0, by Sven Greb and the Nord contributors, under the MIT licence; the port keeps that licence. It is not the upstream authors' work as published, and they do not endorse it: report problems with the port here, not upstream. Nord is a project of [nordtheme](https://github.com/nordtheme).

## Developing

With an E8 on your PATH (a [release](https://github.com/e8-editor/e8/releases), or built from source) and TypeScript 5.8 or newer:

```bash
make test
make types
```

## Licence

MIT: see `LICENSE`.
