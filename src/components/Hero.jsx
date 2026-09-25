import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail, Pen } from "lucide-react";

// Edit these to change what gets typed out. Kept outside the component
// so the array reference stays stable between renders.
const ROLES = [
  "Software Engineer",
  "Backend Developer",
  "API Builder",
  "Full Stack Engineer",
];

const LINKS = [
  { href: "https://github.com/s21dyY", label: "GitHub", Icon: Github, external: true },
  { href: "https://www.linkedin.com/in/sandy-yang-538b12193/", label: "LinkedIn", Icon: Linkedin, external: true },
  { href: "mailto:sandy.yang992@gmail.com", label: "Email", Icon: Mail, external: false },
  { href: "https://medium.com/@sandy.yang992", label: "Medium", Icon: Pen, external: true },
];

// Types a word, pauses, deletes it, then moves on to the next word.
function useTypewriter(words, { typeSpeed = 85, deleteSpeed = 45, pause = 1600 } = {}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    let delay;
    let next;

    if (!deleting && text === word) {
      delay = pause;
      next = () => setDeleting(true);
    } else if (deleting && text === "") {
      delay = 300;
      next = () => {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      };
    } else {
      delay = deleting ? deleteSpeed : typeSpeed;
      next = () =>
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }

    const id = setTimeout(next, delay);
    return () => clearTimeout(id);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const typed = useTypewriter(ROLES);
  const role = reduceMotion ? ROLES[0] : typed;

  return (
    <header
      className="min-h-[70vh] flex flex-col justify-center items-center text-center px-6 pt-[100px] md:pt-[150px]"
      id="hero"
    >
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.h1 variants={item} className="text-4xl md:text-7xl font-extrabold mb-4">
          Hi, I'm <span className="text-amber-600">Sandy!</span>{" "}
          <motion.span
            role="img"
            aria-label="waving hand"
            className="inline-block origin-[70%_70%]"
            animate={reduceMotion ? {} : { rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
          >
            👋
          </motion.span>
        </motion.h1>

        {/* Screen readers get the full list once; the typing effect is hidden from them. */}
        <motion.p
          variants={item}
          className="text-2xl md:text-3xl font-bold text-slate-900 min-h-[1.5em]"
        >
          <span className="sr-only">{ROLES.join(", ")}</span>
          <span aria-hidden="true">
            {role}
            <motion.span
              className="inline-block w-[3px] h-[1em] ml-1 bg-amber-600 align-[-0.1em] rounded-sm"
              animate={reduceMotion ? {} : { opacity: [1, 1, 0, 0] }}
              transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
            />
          </span>
        </motion.p>

        <motion.p variants={item} className="text-lg md:text-xl font-semibold text-amber-600 mt-2">
          Python · Backend · APIs · Full Stack
        </motion.p>

        <motion.p variants={item} className="max-w-2xl mt-6 text-lg text-slate-500 leading-relaxed">
          With experience applying AI/ML to real engineering problems.
        </motion.p>

        <motion.div variants={item} className="flex gap-6 justify-center mt-8">
          {LINKS.map(({ href, label, Icon, external }) => (
            <motion.a
              key={label}
              href={href}
              aria-label={label}
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600"
              whileHover={reduceMotion ? {} : { y: -4, scale: 1.15, rotate: -6 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 12 }}
            >
              <Icon className="text-slate-400 hover:text-amber-600 transition-colors" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Hero;