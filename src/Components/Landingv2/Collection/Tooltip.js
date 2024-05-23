const Tooltip = ({ tooltipRef, showTooltip }) => {
  return (
    <div ref={tooltipRef} className={`${showTooltip ? 'tooltip' : 'hidden'}`}>
      <div className='bg-white relative'>
        <p>Based on sizes selected before for similar products</p>
      </div>
    </div>
  );
};

export default Tooltip;