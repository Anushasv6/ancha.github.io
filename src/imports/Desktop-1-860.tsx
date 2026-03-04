import img111 from "figma:asset/e8a694607e81b003dcbfa91f6ed9bda1f6738599.png";
import img221 from "figma:asset/99b4f3725a084ab5c68e2b01fd3c943a073af362.png";
import img331 from "figma:asset/3b1973d50860bfbf5b34612f5e8a37e3ac27d344.png";
import img441 from "figma:asset/2bc7b66d4e3ea25f02c7129ab9f374ed200ea65b.png";
import img551 from "figma:asset/3d2a6c6e662db1b7cc5f8f5e841b50a83fe495d1.png";

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#141414] text-[16px]">Work</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#141414] text-[16px]">About</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#efefef] content-stretch flex gap-[40px] items-center justify-center px-[10px] py-[14px] relative rounded-[107px] shrink-0 w-[370px]">
      <Frame1 />
      <Frame2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#141414] text-[16px]">Connect</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#141414] text-[16px]">{`Anusha S V   -   UX Designer `}</p>
      <Frame />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[136px] items-start justify-center left-0 px-[120px] py-[30px] right-0 top-0">
      <Frame3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="aspect-[4096/1670] relative shrink-0 w-full" data-name="44 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img441} />
      </div>
      <div className="aspect-[4096/2752] relative shrink-0 w-full" data-name="55 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img551} />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[49px] h-[4938px] items-start left-0 right-0 top-[136px]">
      <div className="aspect-[1440/1337] relative shrink-0 w-full" data-name="11 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[109.8%] left-[-0.03%] max-w-none top-0 w-[100.05%]" src={img111} />
        </div>
      </div>
      <div className="aspect-[4096/2628] relative shrink-0 w-full" data-name="22 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img221} />
      </div>
      <div className="aspect-[4096/2635] relative shrink-0 w-full" data-name="33 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img331} />
      </div>
      <Frame6 />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white relative size-full" data-name="Desktop">
      <Frame4 />
      <Frame5 />
    </div>
  );
}