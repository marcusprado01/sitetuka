export interface CategoryConfig {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  narrative: string;
  instagram?: {
    handle: string;
    url: string;
  };
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
    title: "Personal Projects",
    subtitle: "Residential Design",
    description: "Original residential architecture and interior design projects",
    narrative:
      "This personal project explores the integration of existing elements with new design solutions to create cohesive and functional living spaces. Both proposals focus on balancing the client's preferences, pre-existing furniture, and spatial organization while maintaining visual harmony and clear circulation throughout the environment.\n\nThe design language combines warm wooden textures, black metal details, natural lighting, and carefully selected color palettes to create inviting and balanced interiors. Existing musical instruments, such as the guitar and cavaquinho, were incorporated as decorative features, reinforcing the identity and personality of the space. Vibrant tones, including mustard yellow, terracotta, green, and \"Blue Elementar\" accents, were introduced to add contrast and character while remaining connected to the neutral base palette.\n\nSpecial attention was given to composition, materiality, and functionality through the use of modular shelving, integrated storage, mirrors to enhance spaciousness, greenery for visual movement, and artwork that complements the architectural concept. The projects emphasize adaptability, reuse of existing elements, and the creation of warm, contemporary environments with a strong personal identity.",
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
    slug: "street-03",
    title: "Street 03",
    subtitle: "Mixed-Use Development",
    description:
      "Academic project: mixed-use residential and commercial development organised around an internal street",
    narrative:
      "This academic project proposes a mixed-use residential and commercial development designed as an extension of the urban fabric. The concept is centred on an internal street that connects the buildings, creating a continuous flow between public and private spaces while activating the ground level with commercial uses and preserving privacy for residential areas.\n\nThe arrangement of volumes was carefully developed to enhance natural ventilation and maximise daylight, incorporating passive design strategies such as cross-ventilation and controlled solar exposure. These decisions improve environmental performance while contributing to the overall spatial quality of the project.\n\nThe final outcome presents a cohesive and functional environment where circulation, program, and environmental strategies are integrated, reinforcing the relationship between architecture, users, and the surrounding city.",
  },
  {
    slug: "una-macrame",
    title: "Una Macramê",
    subtitle: "Handmade Design",
    description:
      "Handmade macramé pieces and textile art — founded on the North Coast of Brazil, in Barra do Una",
    narrative:
      "The brand was founded on the North Coast of Brazil, in Barra do Una, using natural materials such as driftwood and tree branches collected from the beach and surrounding forest to create artistic panels. The production also incorporates 100% ecological, locally sourced cotton cords from Brazilian suppliers such as Euroroma and São José. Initially, the brand operated from a home-based studio by the beach, establishing partnerships with local coastal shops where pieces such as wall hangings, frames, and decorative items were displayed. A strong focus on sustainability guided the process, ensuring minimal waste by transforming leftover materials into smaller products like keychains, feathers, and pet accessories. After expanding to São Paulo, the brand evolved into the textile segment, introducing clothing and accessories such as bags and skirts. Today, pieces are still exhibited in stores along the North Coast, including Camburi, as well as in private residences and curated spaces.",
    instagram: {
      handle: "@una.macrame",
      url: "https://www.instagram.com/una.macrame/",
    },
  },
];
