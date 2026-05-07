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
      "Architecture, urban and natural landscapes — Brazil (Bahia to São Paulo), Australia (Victoria, Melbourne and the West Coast) and Japan",
    narrative:
      "This photographic portfolio presents a selection of original images produced across different geographical and cultural contexts. A significant portion focuses on architectural photography captured in São Paulo — exploring the relationship between buildings, structure, scale, and geometry. The compositions emphasize verticality, repetition, and the visual rhythm created by the interaction between architecture and light. Additional work includes photographs from the Brazilian coastline between Bahia and São Paulo, and from Australia — where I lived in Melbourne (Victoria) — extending across regional New South Wales, the West Coast and Japan, investigating the dialogue between built environments and natural surroundings.",
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
    description:
      "Handmade macramé pieces and textile art — founded on the North Coast of Brazil, in Barra do Una",
    narrative:
      "The brand was founded on the North Coast of Brazil, in Barra do Una, using natural materials such as driftwood and tree branches collected from the beach and surrounding forest to create artistic panels. The production also incorporates 100% ecological, locally sourced cotton cords from Brazilian suppliers such as Euroroma and São José. Initially, the brand operated from a home-based studio by the beach, establishing partnerships with local coastal shops where pieces such as wall hangings, frames, and decorative items were displayed. A strong focus on sustainability guided the process, ensuring minimal waste by transforming leftover materials into smaller products like keychains, feathers, and pet accessories. After expanding to São Paulo, the brand evolved into the textile segment, introducing clothing and accessories such as bags and skirts. Today, pieces are still exhibited in stores along the North Coast, including Camburi, as well as in private residences and curated spaces.",
  },
];
