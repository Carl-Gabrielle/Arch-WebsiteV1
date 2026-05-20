import {
  Box,
  FileText,
  Layers,
  Monitor,
  Palette,
  Brush,
  PenTool,
  Sheet,
  Presentation,
} from "lucide-react";

export const toolGroups = [
  {
    id: "01",
    title: "Architectural Design",
    description:
      "Core tools used for concept studies, form development, and spatial exploration.",
    tools: [
      {
        name: "AutoCAD",
        icon: PenTool,
        tone: "from-rose-500/25 to-rose-500/5",
        iconColor: "text-rose-600",
      },
      {
        name: "SketchUp",
        icon: Box,
        tone: "from-amber-500/25 to-amber-500/5",
        iconColor: "text-amber-600",
      },
      {
        name: "D5 Render",
        icon: Monitor,
        tone: "from-sky-500/25 to-sky-500/5",
        iconColor: "text-sky-600",
      },
    ],
  },
  {
    id: "02",
    title: "Visualization & Presentation",
    description:
      "Render, storytelling, and composition software for client-ready visual communication.",
    tools: [
      {
        name: "Procreate",
        icon: Brush,
        tone: "from-fuchsia-500/25 to-fuchsia-500/5",
        iconColor: "text-fuchsia-600",
      },
      {
        name: "Adobe Illustrator",
        icon: Layers,
        tone: "from-orange-500/25 to-orange-500/5",
        iconColor: "text-orange-600",
      },
      {
        name: "Canva",
        icon: Palette,
        tone: "from-cyan-500/25 to-cyan-500/5",
        iconColor: "text-cyan-600",
      },
    ],
  },
  {
    id: "03",
    title: "Documentation & Workflow",
    description:
      "Technical documentation and production workflows for precise execution.",
    tools: [
      {
        name: "Word / Reports",
        icon: FileText,
        tone: "from-stone-500/25 to-stone-500/5",
        iconColor: "text-stone-700",
      },
      {
        name: "MS Excel",
        icon: Sheet,
        tone: "from-emerald-500/25 to-emerald-500/5",
        iconColor: "text-emerald-600",
      },
      {
        name: "MS PowerPoint",
        icon: Presentation,
        tone: "from-orange-500/25 to-orange-500/5",
        iconColor: "text-orange-600",
      },
    ],
  },
];
