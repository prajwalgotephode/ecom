import React from "react";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <>
      <div className={`${styles.heroWrapperSection}  px-[80px] py-[40px] relative`}>
       <div className="rleative">
       <img
          className="w-full"
          src="https://ucarecdn.com/5b10409f-ea7b-4286-8ea7-5c6a76c17381/-/preview/3000x3000/"
        />
        <p className="absolute text-[60px] top-[40px] top-[40%] right-[25%] text-white">Delicios Food <br /> Delicious Life !</p>
       </div>
      </div>
      <section className={`${styles.heroWrapper} px-[80px]`}>
        <div className="text-black font-[600] text-[22px] py-[40px]">
          <h2>What's on your mind?</h2>
        </div>
        <div
          className={` ${styles.scrollBAr} flex gap-[30px] w-[100%] overflow-x-scroll`}
        >
          <img
            className="h-[240px]"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png"
          />
          <img
            className="h-[240px]"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png"
          />
          <img
            className="h-[240px]"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png"
          />
          <img
            className="h-[240px]"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png"
          />
          <img
            className="h-[240px]"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png"
          />
          <img
            className="h-[240px]"
            src="https://media-assets.swiggy.com/swiggy/image/uploa…Creative%20refresh/3D_bau/banners_new/Paratha.png"
          />
          <img
            className="h-[240px]"
            src="https://media-assets.swiggy.com/swiggy/image/uploa…75667625/PC_Creative%20refresh/North_Indian_4.png"
          />
          <img
            className="h-[240px]"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png"
          />
        </div>
      </section>
    </>
  );
}
