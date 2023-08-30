import { nodes as defaultNodes } from "@markdoc/markdoc";

import { Fence } from "@/components/Fence";

const nodes = {
  document: {
    render: undefined,
  },
  th: {
    ...defaultNodes.th,
    attributes: {
      ...defaultNodes.th.attributes,
      scope: {
        type: String,
        default: "col",
      },
    },
  },
  h3: {
    ...defaultNodes.h3,
    attributes: {
      id: {
        type: String,
      },
    },
  },
  fence: {
    render: Fence,
    attributes: {
      content: { type: String, render: true, required: true },
      language: { type: String },
      process: { type: Boolean, render: false, default: true },
    },
  },
};

export default nodes;
