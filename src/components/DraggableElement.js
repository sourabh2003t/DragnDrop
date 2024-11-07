import { motion } from 'framer-motion';
import { Plus, X, Settings, Move, Upload } from 'lucide-react';
import ElementContent from './ElementContent';
const DraggableElement = ({ element, isSelected, onSelect, onDragStart, onDragEnd, onDoubleClick }) => (
    <motion.div
      drag
      dragMomentum={false}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      animate={{ x: element.style.x, y: element.style.y }}
      whileHover={{ scale: 1.02 }}
      whileDrag={{ scale: 1.05 }}
      className={`absolute cursor-move ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
      onClick={onSelect}
      onDoubleClick={onDoubleClick}
    >
      <div className="relative group">
        <div className="absolute -top-6 left-0 hidden group-hover:flex items-center space-x-1">
          <Move className="w-4 h-4 text-gray-500" />
        </div>
        <ElementContent element={element} />
      </div>
    </motion.div>
  );
export default DraggableElement