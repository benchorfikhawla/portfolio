const Pagination = ({ direction }) => {
  return (
    <div
      className={`mil-pagination mil-pagination-${
        direction ? direction : "right"
      }`}
    >
      <div className="mil-dot mil-active" data-index={-1} data-name="Home" />
      <div className="mil-dot" data-index={0} data-name="About" />
      <div className="mil-dot" data-index={1} data-name="Skills" />
      <div className="mil-dot" data-index={2} data-name="Education" />
      <div className="mil-dot" data-index={3} data-name="Experience" />
      <div className="mil-dot" data-index={4} data-name="Services" />
      <div className="mil-dot" data-index={5} data-name="Testimonials" />
      <div className="mil-dot" data-index={6} data-name="Contacts" />
    </div>
  );
};
export default Pagination;
