const SelectBox = ({ cssClass, id, optionsData, onChangeFunc }) => (
  <div>
    <select
      id={id}
      className={cssClass}
      onChange={onChangeFunc}
    >
      {
        optionsData?.map((data, index) => (
          <option key={`${data}-${index}`}>{data}</option>
        ))
      }
    </select>
  </div>
);

export default SelectBox;