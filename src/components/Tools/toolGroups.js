import {
  Box,
  DraftingCompass,
  FileSpreadsheet,
  FileText,
  Layers,
  Monitor,
  Palette,
  PenTool,
  Sparkles,
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
        name: "Procreate",
        icon: Palette,
        tone: "from-fuchsia-500/25 to-fuchsia-500/5",
        iconColor: "text-fuchsia-600",
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
        name: "D5 Render",
        icon: Monitor,
        tone: "from-sky-500/25 to-sky-500/5",
        iconColor: "text-sky-600",
      },
      {
        name: "Illustrator",
        icon: Layers,
        tone: "from-orange-500/25 to-orange-500/5",
        iconColor: "text-orange-600",
      },
      {
        name: "Presentation Boards",
        icon: Sparkles,
        tone: "from-emerald-500/25 to-emerald-500/5",
        iconColor: "text-emerald-600",
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
        name: "Revit",
        icon: DraftingCompass,
        tone: "from-blue-500/25 to-blue-500/5",
        iconColor: "text-blue-600",
      },
      {
        name: "Excel",
        icon: FileSpreadsheet,
        tone: "from-green-500/25 to-green-500/5",
        iconColor: "text-green-600",
      },
      {
        name: "Word / Reports",
        icon: FileText,
        tone: "from-stone-500/25 to-stone-500/5",
        iconColor: "text-stone-700",
      },
    ],
  },
];
