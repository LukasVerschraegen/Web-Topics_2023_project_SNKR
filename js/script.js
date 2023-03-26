gsap.from(".body",{ease:"linear",autoAlpha:0})  //remove blinking on load in tailwind: invisible
gsap.from(".header",{duration:1,delay:0.5,y:'-100%'})
gsap.from(".intro",{duration:1, delay:1.5, x:'-200%'})
gsap.from(".shoe", { duration:1, opacity:0, delay: 1 })



gsap.registerPlugin(ScrollTrigger);

gsap.from(".artikelmen",{duration:1, opacity:0,delay:1,stagger:0.5,
 scrollTrigger: {
  trigger: ".artikelmen",
    markers:false,
    start:"top 90%",
    end:"top 30%",
    scrub: 0.5
  }
  
  });

gsap.from(".artikelwoman",{duration:1, opacity:0,delay:1,stagger:0.5,

scrollTrigger: {
  	trigger: ".artikelwoman",
    markers:false,
    start:"top 90%",
    end:"top 30%",
    scrub: 0.5
  }
 });

gsap.from(".artikelkids",{duration:1, opacity:0,delay:1,stagger:0.5,

  scrollTrigger: {
  	trigger: ".artikelkids",
    markers:false,
    start:"top 90%",
    end:"top 30%",
    scrub: 0.5
  }
 });


gsap.registerPlugin(TextPlugin);

var tltext = gsap.timeline({ delay: 2 });
tltext.to(".text1", {
  duration: 1,
  text: {
    value: "Have fun shopping.",
    padSpace: true,
    delimiter: " "
  }
}, 8)
  .to(".text2", {
    duration: 1,
    text: {
      value: "Enjoy!",
      padSpace: false,
      delimiter: " "
    }
  }, 10);

