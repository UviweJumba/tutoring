export interface Module {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  icon: string;
  description: string;
  preview: {
    title: string;
    content: string[];
    videoUrl?: string;
  };
}

export interface Subject {
  name: string;
  slug: string;
  modules: Module[];
}

export const curriculum: Subject[] = [
  {
    name: 'Mathematics',
    slug: 'mathematics',
    modules: [
      {
        id: '01',
        slug: 'mathematical-survival-kit',
        title: 'Mathematical Survival Kit',
        tagline: "Your essential toolkit for the journey.",
        icon: '🛠️',
        description:
          "A rapid-fire refresher on the core pre-calculus concepts you'll need to succeed, from algebraic manipulation to trigonometric identities.",
        preview: {
          title: 'Why a Survival Kit?',
          content: [
            'Many students stumble in calculus not because of the new concepts, but because of gaps in their foundational algebra and trig. This module is designed to patch those gaps quickly and efficiently.',
            "We'll cover equation solving, function notation, logarithms, and the unit circle, ensuring you have the tools to focus on the calculus itself.",
          ],
        },
      },
      {
        id: '02',
        slug: 'functions-and-limits',
        title: 'Functions & Limits',
        tagline: 'The bedrock of calculus.',
        icon: '→',
        description:
          "Before we can talk about change, we need a solid understanding of functions and the concept of a limit. This is where the rigorous journey into calculus truly begins.",
        preview: {
          title: 'What is a Limit?',
          content: [
            'A limit is about approaching. What value does a function "get close to" as its input gets close to a certain number? This idea seems simple, but it\'s the foundation upon which all of differentiation and integration are built.',
            'We will explore limits graphically, numerically, and algebraically, developing the intuition needed for the rest of the course.',
          ],
        },
      },
      {
        id: '03',
        slug: 'differential-calculus',
        title: 'Differential Calculus',
        tagline: 'Master the language of change.',
        icon: 'ƒ',
        description:
          'Explore the concept of the derivative, learn to find rates of change, and optimize functions to solve real-world problems. This module builds the foundation for all of calculus.',
        preview: {
          title: 'The Derivative Explained Visually',
          content: [
            "At its core, the derivative is about slope. But not just the slope of a straight line. The derivative gives us a way to talk about the 'slope' of a curvy, complex function at any single point. Imagine zooming in on a curve until it looks almost like a straight line. The slope of that tiny line segment is the derivative at that point.",
            "This simple idea unlocks incredible power. It allows us to find the exact speed of a moving object at a specific instant, determine the peak of a company's profit curve, and model how diseases spread through a population.",
          ],
          videoUrl: 'https://www.youtube.com/embed/9aKnZEWn1GM',
        },
      },
      {
        id: '04',
        slug: 'integral-calculus',
        title: 'Integral Calculus',
        tagline: 'Unlock the power of accumulation.',
        icon: '∫',
        description:
          "Integral calculus is the other side of the calculus coin. It's all about summing up infinite tiny pieces to find a whole, allowing you to calculate areas, volumes, and more.",
        preview: {
          title: 'Understanding the Integral',
          content: [
            'If differentiation is about breaking things down, integration is about building them up. The integral is essentially a sophisticated method of summation. It lets us find the exact area under a curve by adding up an infinite number of infinitesimally thin rectangles.',
            'This concept has profound implications, from calculating the total distance traveled by a car with varying speed to figuring out the volume of a complex 3D shape.',
          ],
        },
      },
      {
        id: '05',
        slug: 'sequences-and-series',
        title: 'Sequences & Series',
        tagline: 'The art of the infinite sum.',
        icon: '∑',
        description:
          'Explore the fascinating behavior of infinite lists of numbers. Learn to determine if a series converges to a finite value or diverges to infinity, and discover Taylor series.',
        preview: {
          title: 'Can You Sum to Infinity?',
          content: [
            "It seems paradoxical, but it's possible to add up an infinite number of things and get a finite answer. This module explores when and why that happens.",
            "We'll cover key convergence tests and delve into power series, which allow us to represent complex functions like sin(x) as an infinite polynomial.",
          ],
        },
      },
      {
        id: '06',
        slug: 'vectors-and-geometry',
        title: 'Vectors & Geometry',
        tagline: 'Explore space in multiple dimensions.',
        icon: '⟴',
        description:
          "Generalize geometry to higher dimensions using the language of vectors. We'll cover dot products, cross products, and the equations of lines and planes.",
        preview: {
          title: 'Vectors are more than Arrows',
          content: [
            'Vectors are mathematical objects that have both magnitude and direction. They provide a powerful way to represent quantities like force and velocity, and to work with geometry in two, three, and even higher dimensions.',
            'In this section, we will learn how to add, subtract, and scale vectors, and to explore the geometric meaning of the dot and cross products.',
          ],
        },
      },
      {
        id: '07',
        slug: 'intro-linear-algebra',
        title: 'Intro Linear Algebra',
        tagline: 'The mathematics of data.',
        icon: '[]',
        description:
          'Dive into the world of vectors, matrices, and vector spaces. Linear algebra is the engine behind machine learning, computer graphics, and countless scientific simulations.',
        preview: {
          title: 'What are Vectors and Matrices?',
          content: [
            'Think of a vector as an arrow in space with both a direction and a magnitude. They are the fundamental objects of linear algebra. A matrix, then, is a grid of numbers that can transform these vectors—stretching, rotating, and shearing them in space.',
            'Understanding how these transformations work is key to solving systems of linear equations and is the basis for technologies like facial recognition and modern data analysis.',
          ],
        },
      },
    ],
  },
  {
    name: 'Physics',
    slug: 'physics',
    modules: [],
  },
  {
    name: 'Computer Science',
    slug: 'computer-science',
    modules: [],
  },
];

// For backwards compatibility and for pages that need all modules.
export const modules: Module[] = curriculum.flatMap(
  (subject) => subject.modules
);
