import React, { useState } from 'react';

const Card = () => {
  const [seeAll, setSeeAll] = useState(false);

  const toggleSeeAll = () => {
    setSeeAll(!seeAll);
  };

  const cardList = [
    {
      logo: "1",
      content: "123",
      link: "",
    },
    {
      logo: "2",
      content: "",
      link: "",
    },
    {
      logo: "3",
      content: "",
      link: "",
    },
    {
      logo: "4",
      content: "",
      link: "",
    },
    {
      logo: "5",
      content: "",
      link: "",
    },
    {
      logo: "6",
      content: "8910",
      link: "",
    },
    {
        logo: "4",
        content: "",
        link: "",
      },
      {
        logo: "5",
        content: "",
        link: "",
      },
      {
        logo: "6",
        content: "8910",
        link: "",
      },{
        logo: "4",
        content: "",
        link: "",
      },
      {
        logo: "5",
        content: "",
        link: "",
      },
      {
        logo: "6",
        content: "8910",
        link: "",
      },{
        logo: "4",
        content: "",
        link: "",
      },
      {
        logo: "5",
        content: "",
        link: "", 
      },
    
  ];

  return (
    <div>
      <div className='cards' style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
        {/* Display only 3 cards by slicing the array based on the seeAll state */}
        {cardList.map((card, index) => (
          (seeAll || index < 3) && (
            <div key={index} className="card" style={{ width: "18rem", marginRight: "10px" }}>
              {/* Card content */}
              <img className="card-img-top" src={card.logo} alt={`Card image ${index}`} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">{card.content}</p>
                <a href={card.link} className="btn btn-primary">{card.link ? 'Go somewhere' : ''}</a>
              </div>
            </div>
          )
        ))}
      </div>
      <div>
        <button onClick={toggleSeeAll}>See All</button>
      </div>
    </div>
  );
  /*.cards{
  display: flex;
  flex-direction: row;
  overflow-x: scroll;

}

  .card{
    width: 18rem !important;
  }
   #wrapper {
    position: relative;
    display: inline-block;
  }
  #reel {
    width: 100vw;
  }
  .overlay {
    position: absolute;
    width: 40%;
    left: 30%;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }*/
}

export default Card;
