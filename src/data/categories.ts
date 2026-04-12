export interface CategoryConfig {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  narrative: string;
}

export const categories: CategoryConfig[] = [
  {
    slug: "fotografia",
    title: "Photography",
    subtitle: "Architecture & Landscape",
    description:
      "Architecture, urban and natural landscapes — São Paulo, North Coast, Australia and Japan",
    narrative:
      "This photographic portfolio presents a selection of original images produced across different geographical and cultural contexts. A significant portion focuses on architectural photography captured in São Paulo — exploring the relationship between buildings, structure, scale, and geometry. The compositions emphasize verticality, repetition, and the visual rhythm created by the interaction between architecture and light. Additional work includes photographs from the North Coast of São Paulo, Melbourne, regional New South Wales, and Japan — investigating the dialogue between built environments and natural surroundings.",
  },
  {
    slug: "projetos",
    title: "Architecture",
    subtitle: "Residential Projects",
    description: "Original residential architecture and interior design projects",
    narrative:
      "Residential architecture and interior design projects developed from concept through to detailed 3D visualization. Each project reflects a focus on functionality, materiality, and spatial quality — with careful attention to how people inhabit and experience a space. The work is guided by a belief that good design is both practical and poetic.",
  },
  {
    slug: "obra",
    title: "Construction",
    subtitle: "On-Site Coordination",
    description:
      "High-end residential renovation coordination and on-site execution",
    narrative:
      "Documentation of a high-end residential renovation in the Parque do Povo area, São Paulo. The work involved supervision from the demolition phase through electrical and hydraulic layout validation to finishing stages — producing technical reports, hand sketches, and practical solutions to address unforeseen conditions, bridging the gap between architectural intent and on-site execution.",
  },
  {
    slug: "una-macrame",
    title: "Una Macramê",
    subtitle: "Handmade Design",
    description: "Original macramé pieces and textile art",
    narrative:
      "Under the name Una Macramê, original handmade pieces are created blending traditional macramé techniques with contemporary design sensibilities. The work explores texture, rhythm, and form through textile art — each piece reflecting the same attention to structure and composition that guides the architectural and photographic practice.",
  },
];
