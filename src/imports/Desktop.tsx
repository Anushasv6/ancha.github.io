import svgPaths from "./svg-hkac763g3h";

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <button className="block cursor-pointer font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#141414] text-[16px] text-left whitespace-nowrap">
        <p className="leading-[normal]">About</p>
      </button>
    </div>
  );
}

function Frame2() {
  return (
    <button className="content-stretch cursor-pointer flex items-center justify-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#141414] text-[16px] text-left">Work</p>
    </button>
  );
}

function Frame() {
  return (
    <div className="bg-[#efefef] content-stretch flex gap-[40px] items-center justify-center px-[10px] py-[14px] relative rounded-[107px] shrink-0 w-[370px]">
      <Frame1 />
      <Frame2 />
      <button className="block cursor-pointer font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#141414] text-[16px] text-left whitespace-nowrap">
        <p className="leading-[normal]">Connect</p>
      </button>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1202px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#141414] text-[16px]">{`Anusha S V   -   UX Designer `}</p>
      <Frame />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[136px] items-center justify-center left-0 px-[120px] py-[30px] right-0 top-0">
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col h-[312px] items-start justify-center px-[120px] py-[60px] relative shrink-0 w-[1440px]">
      <div className="font-['Inter:Extra_Light',sans-serif] font-extralight leading-[0] not-italic relative shrink-0 text-[32px] text-black w-full whitespace-pre-wrap">
        <p className="leading-[55px] mb-0 text-[#707070]">Hi, I am Anusha!</p>
        <p className="mb-0">
          <span className="leading-[55px] text-[#707070]">I design</span>
          <span className="leading-[55px]">{` `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[55px] not-italic text-[#141414]">user-centered experiences</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[55px] not-italic">{` `}</span>
          <span className="leading-[55px] text-[#707070]">{`with a thinker’s soul, `}</span>
        </p>
        <p className="mb-0">
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[55px] not-italic text-[#141414]">merging creativity and insight</span>
          <span className="leading-[55px]">{` `}</span>
          <span className="leading-[55px] text-[#707070]">{`to build digital landscapes `}</span>
        </p>
        <p className="leading-[55px] text-[#707070]">that inspire.</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] not-italic relative shrink-0 text-[#141414] text-[16px]">Featured Works</p>
      <div className="relative shrink-0 size-[4px]">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #7D7D7D)" id="Ellipse 1" r="2" />
        </svg>
      </div>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] not-italic relative shrink-0 text-[#7d7d7d] text-[16px]">{`2023 to  2025`}</p>
    </div>
  );
}

function Frame24() {
  return <div aria-label="Case Study Image" className="h-[735px] rounded-[24px] shrink-0 w-[1200px]" />;
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame24 />
    </div>
  );
}

function Frame26() {
  return <div aria-label="Case study image" className="h-[735px] rounded-[24px] shrink-0 w-[1200px]" />;
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame26 />
    </div>
  );
}

function Frame30() {
  return <div aria-label="Case study image" className="h-[735px] rounded-[24px] shrink-0 w-[1200px]" />;
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame30 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-full">
      <Frame25 />
      <Frame27 />
      <Frame29 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame16 />
      <Frame28 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col h-[2542px] items-center px-[120px] relative shrink-0 w-[1440px]">
      <Frame9 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[567px] items-start justify-center not-italic py-[10px] relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#141414] text-[32px] whitespace-nowrap">
        <p className="leading-[55px]">About Me</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[36px] relative shrink-0 text-[#707070] text-[16px] w-[482px] whitespace-pre-wrap">
        <p className="mb-0">Hi, I’m Anusha — a UX designer who brings systems thinking and storytelling into every project. I currently design at Visionet Systems, creating functional experiences for diverse users across industries.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">I’m deeply curious about how things work — from the way people interact with technology to the ideas of thinkers like Naval Ravikant, Charlie Munger, and Nassim Taleb. Their work shapes how I approach design: with clarity, empathy, and long-term thinking.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">{`Outside of work, you’ll find me dancing to hip-hop, `}</p>
        <p className="mb-0">{`sketching type, or planning slow-travel getaways around food `}</p>
        <p>and culture.</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col h-[710px] items-center justify-center p-[120px] relative shrink-0 w-[1440px]">
      <Frame6 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold items-start relative shrink-0 w-full">
      <div className="flex flex-col h-[22px] justify-center relative shrink-0 text-black w-full">
        <p className="leading-[55px] whitespace-pre-wrap">Visionet Systems</p>
      </div>
      <div className="flex flex-col h-[30px] justify-center relative shrink-0 text-[#707070] w-full">
        <p className="leading-[55px] whitespace-pre-wrap">Senior UX Designer</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[16px] tracking-[0.8px] w-full">
      <Frame13 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[29px] justify-center relative shrink-0 text-[#707070] w-[275px]">
        <p className="leading-[55px] whitespace-pre-wrap">February 2025 - Present</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold items-start relative shrink-0 w-full">
      <div className="flex flex-col h-[22px] justify-center relative shrink-0 text-black w-[147px]">
        <p className="leading-[55px] whitespace-pre-wrap">Oneindia</p>
      </div>
      <div className="flex flex-col h-[30px] justify-center relative shrink-0 text-[#707070] w-[203px]">
        <p className="leading-[55px] whitespace-pre-wrap">UX Designer</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[16px] tracking-[0.8px] w-full">
      <Frame17 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[32px] justify-center relative shrink-0 text-[#707070] w-[480px]">
        <p className="leading-[55px] whitespace-pre-wrap">June 2023 - January 2025</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold items-start relative shrink-0 w-full">
      <div className="flex flex-col h-[29px] justify-center relative shrink-0 text-black w-full">
        <p className="leading-[55px] whitespace-pre-wrap">EDS Technologies</p>
      </div>
      <div className="flex flex-col h-[30px] justify-center relative shrink-0 text-[#707070] w-full">
        <p className="leading-[55px] whitespace-pre-wrap">Software Engineer</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[16px] tracking-[0.8px] w-full">
      <Frame20 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[32px] justify-center relative shrink-0 text-[#707070] w-[480px]">
        <p className="leading-[55px] whitespace-pre-wrap">July 2017 - April 2019</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] h-[511px] items-start py-[10px] relative shrink-0 w-[499px]">
      <Frame12 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 499 2">
            <path d="M0 1H499" id="Vector 1" stroke="var(--stroke-0, #E8E8E8)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <Frame15 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 499 2">
            <path d="M0 1H499" id="Vector 1" stroke="var(--stroke-0, #E8E8E8)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <Frame19 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 499 2">
            <path d="M0 1H499" id="Vector 1" stroke="var(--stroke-0, #E8E8E8)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[546px] h-[521px] items-start py-[10px] relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[32px] whitespace-nowrap">
        <p className="leading-[55px]">Experience</p>
      </div>
      <Frame14 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col h-[696px] items-center justify-center p-[120px] relative shrink-0 w-[1440px]">
      <Frame11 />
    </div>
  );
}

function Frame33() {
  return (
    <a className="content-stretch flex items-center justify-center relative shrink-0" href="https://www.linkedin.com/in/anusha-s-v-60b815b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[29px] justify-center leading-[0] not-italic relative shrink-0 text-[#707070] text-[16px] text-left tracking-[0.8px] w-[78px]">
        <p className="leading-[55px] whitespace-pre-wrap">{`Linkedin `}</p>
      </div>
    </a>
  );
}

function Frame34() {
  return (
    <a className="content-stretch flex items-center justify-center relative shrink-0" href="https://drive.google.com/file/d/1-cd5TwloMeQpqY-3QlazJYwwRSCfb9QR/view?usp=drivesdk">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[29px] justify-center leading-[0] not-italic relative shrink-0 text-[#707070] text-[16px] text-left tracking-[0.8px] w-[296px]">
        <p className="leading-[55px] whitespace-pre-wrap">{`|   Resume `}</p>
      </div>
    </a>
  );
}

function Frame32() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[15px] items-start relative shrink-0">
      <Frame33 />
      <Frame34 />
    </div>
  );
}

function Copywrite() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="copywrite 1">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g clipPath="url(#clip0_1_320)" id="copywrite 1">
          <path d={svgPaths.p28118480} id="Vector" stroke="var(--stroke-0, #707070)" strokeWidth="1.3" />
          <path d={svgPaths.p33ba9e00} fill="var(--fill-0, #707070)" id="Vector_2" stroke="var(--stroke-0, #707070)" strokeWidth="0.2" />
        </g>
        <defs>
          <clipPath id="clip0_1_320">
            <rect fill="white" height="17" width="17" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <Copywrite />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[29px] justify-center leading-[0] not-italic relative shrink-0 text-[#707070] text-[16px] tracking-[0.8px] w-[296px]">
        <p className="leading-[55px] whitespace-pre-wrap">2025</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-[480px]">
      <Frame32 />
      <Frame35 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[508px] items-start py-[10px] relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[32px] whitespace-nowrap">
        <p className="leading-[55px]">Let’s Connect</p>
      </div>
      <Frame23 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[1200px]">
      <Frame22 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#f5f5f5] h-[304px] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[120px] relative size-full">
          <Frame31 />
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute content-stretch flex flex-col h-[4260px] items-center left-0 right-0 top-[168px]">
      <Frame4 />
      <Frame7 />
      <Frame8 />
      <Frame10 />
      <Frame21 />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white relative size-full" data-name="Desktop">
      <Frame5 />
      <Frame18 />
    </div>
  );
}