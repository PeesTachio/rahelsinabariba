import { motion } from "framer-motion";

type CardProps = {
  title: string;
  description: string;
};

export default function Card({ title, description }: CardProps) {
  return (
    <motion.div
      className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
      whileHover={{ y: -5 }}
    >
      <h3 className="text-lg font-semibold text-brand">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </motion.div>
  );
}
