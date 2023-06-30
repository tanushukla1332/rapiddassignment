import Board from "./Board";
import style from "./Board.module.css";
function Section4() {
  const cardData = [
    {
      imgLink:
        "https://cdn.pixabay.com/photo/2010/12/13/10/09/nature-2384_1280.jpg",
      desc: "Versatile. Collaborative. Web-based. Efficient. Prototyping.",
      btnTxt: "Click me.",
    },
    {
      imgLink:
        "https://cdn.pixabay.com/photo/2010/12/13/10/09/nature-2384_1280.jpg"
      ,
      desc: "Versatile. Collaborative. Web-based. Efficient. Prototyping.",
      btnTxt: "Click me.",
    },
    {
      imgLink:
        "https://cdn.pixabay.com/photo/2010/12/13/10/09/nature-2384_1280.jpg",
      desc: "Versatile. Collaborative. Web-based. Efficient. Prototyping.",
      btnTxt: "Click me.",
    },
    {
      imgLink:
        "https://cdn.pixabay.com/photo/2010/12/13/10/09/nature-2384_1280.jpg",
      desc: "Versatile. Collaborative. Web-based. Efficient. Prototyping.",
      btnTxt: "Click me.",
    },
    {
      imgLink:
        "https://cdn.pixabay.com/photo/2010/12/13/10/09/nature-2384_1280.jpg",
      desc: "Versatile. Collaborative. Web-based. Efficient. Prototyping.",
      btnTxt: "Click me.",
    },
    {
      imgLink:
        "https://cdn.pixabay.com/photo/2010/12/13/10/09/nature-2384_1280.jpg",
      desc: "Versatile. Collaborative. Web-based. Efficient. Prototyping.",
      btnTxt: "Click me.",
    },
    {
      imgLink:
        "https://cdn.pixabay.com/photo/2010/12/13/10/09/nature-2384_1280.jpg",
      desc: "Versatile. Collaborative. Web-based. Efficient. Prototyping.",
      btnTxt: "Click me.",
    },
    {
      imgLink:
        "https://cdn.pixabay.com/photo/2010/12/13/10/09/nature-2384_1280.jpg",
      desc: "Versatile. Collaborative. Web-based. Efficient. Prototyping.",
      btnTxt: "Click me.",
    },
    {
      imgLink:
        "https://cdn.pixabay.com/photo/2010/12/13/10/09/nature-2384_1280.jpg",
      desc: "Versatile. Collaborative. Web-based. Efficient. Prototyping.",
      btnTxt: "Click me.",
    },
  ];

  return (
    <div className={style.sec4wrapper}>
      <div className={style.heading}>
        <h1>Officia ut</h1>
        <span>ipsum Lorem</span>
      </div>
      <div className={style.sec4cardWrapper}>
        {cardData.map((ele, ind) => (
          <Board key={ind} img={ele.imgLink} txt={ele.desc} btnTxt={ele.btnTxt}/>
        ))}
      </div>
    </div>
  );
}

export default Section4;
