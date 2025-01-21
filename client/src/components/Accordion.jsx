const Accordion = ({ id, items }) => {
  return (
    <div className="accordion" id={`${id}-accordion`}>
      {items.map((item) => {
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${item.id}`} aria-expanded="true" aria-controls={item.id}>
              {item.header}
            </button>
          </h2>
          <div id={item.id} className="accordion-collapse collapse show">
            <div className="accordion-body">{item.content}</div>
          </div>
        </div>
      })}
    </div>
  );
};
export default Accordion;
