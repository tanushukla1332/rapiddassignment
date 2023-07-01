import  ImageBoard from "./ImageBoard";
import style from "./ImageBoard.module.css";
function Section8() {
  const data = [
    {
      imgLink:
        "https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_1280.jpg",
      cardText: "Figma start with designing!",
      btnTxt: "Design",
    },
    {
      imgLink:
        "https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_1280.jpg",
      cardText: "Figma start with designing!",
      btnTxt: "Prototyping",
    },
    {
      imgLink:
        "https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_1280.jpg",
      cardText: "Figma start with designing!",
      btnTxt: "Colloboration",
    },
  ];

  return (
    <div className={style.sec8wrapperDiv}>

      {data.map((ele,ind)=><ImageBoard key={ind}
        imgLink={ele.imgLink}
        cardText={ele.cardText}
        btnTxt={ele.btnTxt}
      />)}
    </div>
  );
}

export default Section8;
