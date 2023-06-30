import Board from "./Board";
import style from "./Board.module.css";
function Section4() {
  const cardData = [
    {
      imgLink:
        "https://images.unsplash.com/photo-1603486002664-a7319421e133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8MTYlM0E5fGVufDB8fDB8fHww&w=1000&q=80",
      desc: "Adipisicing unde vel so dolore, consequatur.",
      btnTxt: "Ipsum Lorem",
    },
    {
      imgLink:
        "https://images.unsplash.com/photo-1603486002664-a7319421e133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8MTYlM0E5fGVufDB8fDB8fHww&w=1000&q=80",
      desc: "Adipisicing unde vel so dolore, consequatur.",
      btnTxt: "Ipsum Lorem",
    },
    {
      imgLink:
        "https://images.unsplash.com/photo-1603486002664-a7319421e133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8MTYlM0E5fGVufDB8fDB8fHww&w=1000&q=80",
      desc: "Adipisicing unde vel so dolore, consequatur.",
      btnTxt: "Ipsum Lorem",
    },
    {
      imgLink:
        "https://images.unsplash.com/photo-1603486002664-a7319421e133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8MTYlM0E5fGVufDB8fDB8fHww&w=1000&q=80",
      desc: "Adipisicing unde vel so dolore, consequatur.",
      btnTxt: "Ipsum Lorem",
    },
    {
      imgLink:
        "https://images.unsplash.com/photo-1603486002664-a7319421e133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8MTYlM0E5fGVufDB8fDB8fHww&w=1000&q=80",
      desc: "Adipisicing unde vel so dolore, consequatur.",
      btnTxt: "Ipsum Lorem",
    },
    {
      imgLink:
        "https://images.unsplash.com/photo-1603486002664-a7319421e133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8MTYlM0E5fGVufDB8fDB8fHww&w=1000&q=80",
      desc: "Adipisicing unde vel so dolore, consequatur.",
      btnTxt: "Ipsum Lorem",
    },
    {
      imgLink:
        "https://images.unsplash.com/photo-1603486002664-a7319421e133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8MTYlM0E5fGVufDB8fDB8fHww&w=1000&q=80",
      desc: "Adipisicing unde vel so dolore, consequatur.",
      btnTxt: "Ipsum Lorem",
    },
    {
      imgLink:
        "https://images.unsplash.com/photo-1603486002664-a7319421e133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8MTYlM0E5fGVufDB8fDB8fHww&w=1000&q=80",
      desc: "Adipisicing unde vel so dolore, consequatur.",
      btnTxt: "Ipsum Lorem",
    },
    {
      imgLink:
        "https://images.unsplash.com/photo-1603486002664-a7319421e133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8MTYlM0E5fGVufDB8fDB8fHww&w=1000&q=80",
      desc: "Adipisicing unde vel so dolore, consequatur.",
      btnTxt: "Ipsum Lorem",
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
