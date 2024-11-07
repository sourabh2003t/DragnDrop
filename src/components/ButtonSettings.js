const ButtonSettings = ({ element, onUpdate }) => (
    <>
      <div>
        <label className="block text-sm font-medium mb-1">Label</label>
        <input
          type="text"
          value={element.content}
          onChange={(e) => onUpdate({ content: e.target.value })}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Background Color</label>
        <input
          type="color"
          value={element.style.backgroundColor}
          onChange={(e) => onUpdate({ 
            style: { ...element.style, backgroundColor: e.target.value }
          })}
          className="w-full p-2 border rounded"
        />
      </div>
    </>
  );
export default ButtonSettings