import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    console.log('Title Clicked', index);
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = activeIndex === index ? 'active' : '';
    // https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=programming
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`}>
          <i
            className="dropdown icon"
            onClick={() => {
              onTitleClick(index);
            }}
          ></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
