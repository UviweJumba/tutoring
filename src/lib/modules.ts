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

export const modules: Module[] = [
  {
    id: '01',
    slug: 'differential-calculus',
    title: 'Differential Calculus',
    tagline: 'Master the language of change.',
    icon: 'ƒ',
    description: 'Explore the concept of the derivative, learn to find rates of change, and optimize functions to solve real-world problems. This module builds the foundation for all of calculus.',
    preview: {
      title: 'The Derivative Explained Visually',
      content: [
        "At its core, the derivative is about slope. But not just the slope of a straight line. The derivative gives us a way to talk about the 'slope' of a curvy, complex function at any single point. Imagine zooming in on a curve until it looks almost like a straight line. The slope of that tiny line segment is the derivative at that point.",
        "This simple idea unlocks incredible power. It allows us to find the exact speed of a moving object at a specific instant, determine the peak of a company's profit curve, and model how diseases spread through a population."
      ],
      videoUrl: 'https://www.youtube.com/embed/9aKnZEWn1GM'
    }
  },
  {
    id: '02',
    slug: 'integral-calculus',
    title: 'Integral Calculus',
    tagline: 'Unlock the power of accumulation.',
    icon: '∫',
    description: 'Integral calculus is the other side of the calculus coin. It\'s all about summing up infinite tiny pieces to find a whole, allowing you to calculate areas, volumes, and more.',
    preview: {
      title: 'Understanding the Integral',
      content: [
        "If differentiation is about breaking things down, integration is about building them up. The integral is essentially a sophisticated method of summation. It lets us find the exact area under a curve by adding up an infinite number of infinitesimally thin rectangles.",
        "This concept has profound implications, from calculating the total distance traveled by a car with varying speed to figuring out the volume of a complex 3D shape."
      ],
    }
  },
  {
    id: '03',
    slug: 'linear-algebra',
    title: 'Linear Algebra',
    tagline: 'The mathematics of data.',
    icon: '[]',
    description: 'Dive into the world of vectors, matrices, and vector spaces. Linear algebra is the engine behind machine learning, computer graphics, and countless scientific simulations.',
    preview: {
      title: 'What are Vectors and Matrices?',
      content: [
        "Think of a vector as an arrow in space with both a direction and a magnitude. They are the fundamental objects of linear algebra. A matrix, then, is a grid of numbers that can transform these vectors—stretching, rotating, and shearing them in space.",
        "Understanding how these transformations work is key to solving systems of linear equations and is the basis for technologies like facial recognition and modern data analysis."
      ],
    }
  },
];
