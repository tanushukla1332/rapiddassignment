import ImageBoard from "./ImageBoard";
import style from "./ImageCard.module.css";
function Section8() {
  const data = [
    {
      imgLink:
        "https://cdn.pixabay.com/photo/2010/12/13/10/09/nature-2384_1280.jpg",
      cardText: "Esse aliquip do, magni!",
      btnTxt: "Lorem",
    },
    {
      imgLink:
        "https://4kwallpapers.com/images/wallpapers/yosemite-national-park-mountains-winter-sunny-day-landscape-1024x1024-37.jpg",
      cardText: "Esse aliquip do, magni!",
      btnTxt: "Lorem",
    },
    {
      imgLink:
        "https://4kwallpapers.com/images/wallpapers/yosemite-national-park-mountains-winter-sunny-day-landscape-1024x1024-37.jpg",
      cardText: "Esse aliquip do, magni!",
      btnTxt: "Lorem",
    },
  ];

  return (
    <div className={style.sec8wrapperDiv}>

      {data.map((ele,ind)=><ImageBoard key={ind}
        imgLink={ele.imgLink}
        titleText={ele.cardText}
        btnText={ele.btnTxt}
      />)}
      
      
    </div>
  );
}

export default Section8;
