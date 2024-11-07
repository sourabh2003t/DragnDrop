import { motion,AnimatePresence } from "framer-motion"
import DraggableElement from "./DraggableElement";

const Canvas = ({ elements, selectedElement, isDragging, onElementSelect, onElementUpdate }) => (
    <div className="flex-1 relative">
      <div className="absolute inset-0 p-8">
        <motion.div
          className="w-full h-full bg-white rounded-lg shadow-sm relative"
          animate={{ scale: isDragging ? 0.98 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <AnimatePresence>
            {elements.map(element => (
              <DraggableElement
                key={element.id}
                element={element}
                isSelected={selectedElement?.id === element.id}
                onSelect={() => onElementSelect(element)}
                onDragStart={() => onElementUpdate(true)}
                onDragEnd={(event, info) => {
                  onElementUpdate(false);
                  onElementSelect({
                    ...element,
                    style: {
                      ...element.style,
                      x: element.style.x + info.offset.x,
                      y: element.style.y + info.offset.y
                    }
                  });
                }}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );

export default Canvas