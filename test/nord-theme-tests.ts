// SPDX-License-Identifier: MIT
//
// nord-theme's tests, with ERT: loading the theme gives faces Nord's
// colours, and disabling it takes them back. `make test` runs them in
// gnista --batch, as CI does.

import { ertDeftest, shouldEqual } from "ert";

const color = (face: string, attribute: string) => gnista.faceAttribute(face, `:${attribute}`);

ertDeftest("nord-theme-gives-faces-nords-colours-and-disabling-takes-them-back", () => {
  const foreground = color("default", "foreground");
  const link = color("link", "foreground");
  gnista.call("load-theme", "nord", true);
  shouldEqual(gnista.variable("custom-enabled-themes"), ["nord"]);
  // Polar Night, Snow Storm and Frost.
  shouldEqual(color("default", "background"), "#2E3440");
  shouldEqual(color("default", "foreground"), "#D8DEE9");
  shouldEqual(color("org-level-1", "foreground"), "#8FBCBB");
  shouldEqual(color("font-lock-keyword-face", "foreground"), "#81A1C1");
  shouldEqual(color("font-lock-comment-face", "foreground"), "#616E88");
  shouldEqual(color("region", "background"), "#434C5E");
  // A theme's face replaces the face's own attributes, as in Emacs: Nord's
  // link is only underlined, so it loses its colour.
  shouldEqual(color("link", "foreground"), "unspecified");
  gnista.call("disable-theme", "nord");
  shouldEqual(gnista.variable("custom-enabled-themes"), []);
  shouldEqual(color("default", "foreground"), foreground);
  shouldEqual(color("default", "background"), "unspecified");
  shouldEqual(color("link", "foreground"), link);
});
