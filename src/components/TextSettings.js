const TextSettings = ({ element, onUpdate }) => (
    <>
      <div>
        <label className="block text-sm font-medium mb-1">Content</label>
        <input
          type="text"
          value={element.content}
          onChange={(e) => onUpdate({ content: e.target.value })}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Font Size</label>
        <input
          type="number"
          value={parseInt(element.style.fontSize)}
          onChange={(e) => onUpdate({ 
            style: { ...element.style, fontSize: `${e.target.value}px` }
          })}
          className="w-full p-2 border rounded"
        />
      </div>
    </>
  );
export default TextSettings