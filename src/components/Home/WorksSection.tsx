'use client';
import { motion } from 'framer-motion';

interface WorkItem {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
}

// تقسيم الأعمال إلى فئتين
const webWorks: WorkItem[] = [
  {
    id: 1,
    title: "Web Project One",
    category: "Web Development",
    image: "/oloom.jpg",
    link: "#"
  },
  {
    id: 2,
    title: "Web Project Two",
    category: "Web App",
    image: "/web3.jpg",
    link: "sewaar.com"
  },
  {
    id: 3,
    title: "Web Project Three",
    category: "Frontend",
    image: "/web2.jpg",
    link: "#"
  },
  {
    id: 4,
    title: "Web Project Four",
    category: "Full Stack",
    image: "/web3.jpg",
    link: "#"
  },
];

const designWorks: WorkItem[] = [
  {
    id: 1,
    title: "Design Project One",
    category: "UI/UX Design",
    image: "/oloom.jpg",
    link: "#"
  },
  {
    id: 2,
    title: "Design Project Two",
    category: "Brand Identity",
    image: "/oloom.jpg",
    link: "#"
  },
  {
    id: 3,
    title: "Design Project Three",
    category: "Visual Design",
    image: "/web2.jpg",
    link: "#"
  },
  {
    id: 4,
    title: "Design Project Four",
    category: "Motion Design",
    image: "/oloom.jpg",
    link: "#"
  },
];

const WorkCard: React.FC<WorkItem> = ({ title, image, link }) => {
  return (
    <a
      href={link}
      className="group relative shrink-0 w-[250px] lg:w-[380px] aspect-[4/3] rounded-2xl overflow-hidden border border-primary/15 bg-primary/80 mx-3"
    >
      <img src={image} alt={title} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-100" />
      <div className="absolute inset-0 bg-primary/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="absolute bottom-0 right-0 m-4 text-white bg-primary border border-white px-4 py-1 rounded-full">
          Preview
        </span>
      </div>
    </a>
  );
};

const WorksSection: React.FC = () => {
  const duplicatedWebWorks = [...webWorks, ...webWorks];
  const duplicatedDesignWorks = [...designWorks, ...designWorks];

  return (
    <motion.div 
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="relative w-full py-5"
  >
    <div className="mx-auto w-[90%] lg:w-[80%] py-10 rounded-3xl bg-[#f1e9d249]">
      <div className="container mx-auto space-y-8 ">
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll-right transition-transform duration-500 hover:pause-animation">
            {duplicatedWebWorks.map((work, index) => (
              <WorkCard key={`web-${work.id}-${index}`} {...work} />
            ))}
          </div>
        </div>
        <div className="relative w-full overflow-hidden hidden">
          <div className="flex animate-scroll-left transition-transform duration-500 hover:pause-animation">
            {duplicatedDesignWorks.map((work, index) => (
              <WorkCard key={`design-${work.id}-${index}`} {...work} />
            ))}
          </div>
        </div>
        <div className="space-y-3 p-7">
          <h2 className="text-4xl font-bold text-primary">Our Work</h2>
          <p className="text-gray-800 max-w-2xl">
            Lorem ipsum is simply dummy text of the printing urvived not only five Lorem Ipsum is
            simply dummy text of the printing urvived not only five Lorem Ipsum is simply dummy text
            of the printing urvived not only five
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-400px * ${webWorks.length}));
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(calc(-400px * ${designWorks.length}));
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
    </motion.div>
  );
};

export default WorksSection;