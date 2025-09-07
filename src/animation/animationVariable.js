export const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
    },
  },
};

export const childVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export const childTextVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.1,
      type: "spring",
      stiffness: 300,
      damping: 20,
      mass: 4,
    },
  },
};

export const boxVariant = {
  hidden: { y: -200 },
  visible: {
    y: 0,
  },
};

export const hoverVariant = {
  scale: 1.02,
  y: -5,
  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.023)",
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 20,
    mass: 3,
  },
};

export const tabVariant = {
  scale: 0.9,
  y: -5,
  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.023)",
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 20,
    mass: 3,
  },
};
