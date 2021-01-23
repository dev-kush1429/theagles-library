import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/global.css";

import { addParameters } from "@storybook/react";
import { create } from "@storybook/theming";

const theme = create({
  base: "light",
  brandTitle: "Theagles",
  brandUrl: "theagles.com",
  brandTitle: `<b style="color:#ea4d70"><b style="font-size:30px;">Theagles</b><br /><small><span style="font-weight: 300"> React component Library</span> </small>`,
  //   brandImage: Logo,
});

addParameters({
  options: {
    panelPosition: "bottom",
    sidebarAnimations: true,
    theme,
  },
  a11y: {
    config: {},
    options: {
      checks: { "color-contrast": { options: { noScroll: true } } },
      restoreScroll: true,
    },
  },
});
