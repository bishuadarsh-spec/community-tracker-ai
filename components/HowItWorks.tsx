"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Search, Users, Bell } from 'lucide-react';

const ScrollAnimationComponent = () => {
  const containerRef = useRef(null);
  const leftImageContainerRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const rightTextContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and on resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Load GSAP only on desktop
    if (!isMobile) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
      script.async = true;
      
      script.onload = () => {
        const gsapScrollScript = document.createElement('script');
        gsapScrollScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
        
        gsapScrollScript.onload = () => {
          const gsap = window.gsap;
          gsap.registerPlugin(window.ScrollTrigger);

          // Pin the left side (images stay fixed)
          gsap.to(leftImageContainerRef.current, {
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top top',
              end: 'bottom bottom',
              pin: leftImageContainerRef.current,
              pinSpacing: false,
            }
          });

          // Image 1: visible at start, fades out
          gsap.fromTo(image1Ref.current,
            { opacity: 1, display: 'flex' },
            {
              opacity: 0,
              display: 'none',
              scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: '33% top',
                scrub: 1,
              }
            }
          );

          // Image 2: fades in then fades out
          gsap.fromTo(image2Ref.current,
            { opacity: 0, display: 'none' },
            {
              opacity: 1,
              display: 'flex',
              scrollTrigger: {
                trigger: containerRef.current,
                start: '15% top',
                end: '33% top',
                scrub: 1,
              }
            }
          );

          gsap.to(image2Ref.current, {
            opacity: 0,
            display: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: '33% top',
              end: '50% top',
              scrub: 1,
            }
          });

          // Image 3: fades in at the end
          gsap.fromTo(image3Ref.current,
            { opacity: 0, display: 'none' },
            {
              opacity: 1,
              display: 'flex',
              scrollTrigger: {
                trigger: containerRef.current,
                start: '40% top',
                end: '66% top',
                scrub: 1,
              }
            }
          );
        };
        
        document.head.appendChild(gsapScrollScript);
      };
      
      document.head.appendChild(script);
    }

    return () => {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  return (
    <div className="bg-white pt-10 md:pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            Three simple steps to stay on top of every important conversation
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Add keywords, connect communities, and get alerts you’ll actually read.
          </p>
        </div>
      </div>
      
      <div ref={containerRef} className="relative bg-white">
        {/* Mobile Layout - Stacked */}
        <div className="lg:hidden">
          {/* Section 1 - Mobile */}
          <div className="min-h-[80vh] flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-md mb-4">
              <div className="bg-white rounded-3xl flex items-center justify-center h-[300px] md:h-[400px] mb-8">
                <img 
                  src="/new1.png" 
                  alt="leads" 
                  className="w-full h-full rounded-2xl object-contain" 
                />
              </div>
              
              <div className="text-center md:text-left">
                <div className="relative inline-block mb-4">
                  <div className="bg-gray-200 rounded-2xl p-4 w-16 h-16 flex items-center justify-center">
                    <Search className="w-8 h-8 text-gray-700" />
                  </div>
                  <span className="absolute -top-2 -right-2 bg-black text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shadow-lg">
                    01
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 leading-tight">
                  01 — Add keywords
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Add topics, competitor names, problems people mention, and phrases your audience uses. You can track multiple variations (and exclude words you don’t want).
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 - Mobile */}
          <div className="min-h-[80vh] flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-md mb-4">
              <div className="bg-white rounded-3xl  flex items-center justify-center h-[300px] md:h-[400px] mb-8">
                <img 
                  src="/new2.png" 
                  alt="Connect Communities" 
                  className="w-full h-full rounded-2xl object-contain" 
                />
              </div>
              
              <div className="text-center md:text-left">
                <div className="relative inline-block mb-4">
                  <div className="bg-gray-200 rounded-2xl p-4 w-16 h-16 flex items-center justify-center">
                    <Users className="w-8 h-8 text-gray-700" />
                  </div>
                  <span className="absolute -top-2 -right-2 bg-black text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shadow-lg">
                    02
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 leading-tight">
                  02 — Connect communities
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Pick your sources: Reddit, Hacker News, Slack communities, Discord, X, and more. Everything rolls into one dashboard.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 - Mobile */}
          <div className="min-h-[80vh] flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-md mb-4">
              <div className="bg-white rounded-3xl  flex items-center justify-center h-[300px] md:h-[400px] mb-8">
                <img 
                  src="/new3.png" 
                  alt="Get Real-Time Alerts" 
                  className="w-full h-full rounded-2xl object-contain" 
                />
              </div>
              
              <div className="text-center md:text-left">
                <div className="relative inline-block mb-4">
                  <div className="bg-gray-200 rounded-2xl p-4 w-16 h-16 flex items-center justify-center">
                    <Bell className="w-8 h-8 text-gray-700" />
                  </div>
                  <span className="absolute -top-2 -right-2 bg-black text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shadow-lg">
                    03
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 leading-tight">
                  03 — Get alerts you’ll actually read
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Get instant alerts and quick summaries so you understand what’s happening fast. Send alerts to Slack, email, or your dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Side by Side */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          <div 
            ref={leftImageContainerRef}
            className="relative h-screen flex items-center justify-center p-8"
          >
            <div className="relative w-full max-w-2xl h-[600px]">
              {/* Image 1 */}
              <div
                ref={image1Ref}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-[95%] h-full bg-white rounded-3xl flex items-center justify-center">
                  <img src="/new1.png" alt="leads" className="w-[95%] h-full rounded-3xl object-contain" />
                </div>
              </div>

              {/* Image 2 */}
              <div
                ref={image2Ref}
                className="absolute inset-0 hidden items-center justify-center"
                style={{ opacity: 0 }}
              >
                <div className="w-[95%] h-full rounded-3xl flex items-center justify-center">
                  <img src="/new2.png" alt="Connect Communities" className="w-[95%] h-full rounded-3xl object-contain" />
                </div>
              </div>

              {/* Image 3 */}
              <div
                ref={image3Ref}
                className="absolute inset-0 hidden items-center justify-center"
                style={{ opacity: 0 }}
              >
                <div className="w-full h-full rounded-3xl flex items-center justify-center">
                  <img src="/new3.png" alt="Get Real-Time Alerts" className="w-[95%] h-full rounded-3xl object-contain" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Scrolling Text (Desktop) */}
          <div ref={rightTextContainerRef} className="bg-white hidden lg:block">
            {/* Text Section 1 */}
            <div className="min-h-screen flex items-center justify-center p-6">
              <div className="max-w-xl">
                <div className="relative inline-block mb-4">
                  <div className="bg-gray-200 rounded-2xl p-5 w-20 h-20 flex items-center justify-center">
                    <Search className="w-10 h-10 text-gray-700" />
                  </div>
                  <span className="absolute -top-2 -right-2 bg-black text-white rounded-full w-8 h-8 flex items-center justify-center text-base font-bold shadow-lg">
                    01
                  </span>
                </div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">
                  01 — Add keywords
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Add topics, competitor names, problems people mention, and phrases your audience uses. You can track multiple variations (and exclude words you don’t want).
                </p>
              </div>
            </div>

            {/* Text Section 2 */}
            <div className="min-h-screen flex items-center justify-center p-6">
              <div className="max-w-xl">
                <div className="relative inline-block mb-4">
                  <div className="bg-gray-200 rounded-2xl p-5 w-20 h-20 flex items-center justify-center">
                    <Users className="w-10 h-10 text-gray-700" />
                  </div>
                  <span className="absolute -top-2 -right-2 bg-black text-white rounded-full w-8 h-8 flex items-center justify-center text-base font-bold shadow-lg">
                    02
                  </span>
                </div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">
                  02 — Connect communities
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Pick your sources: Reddit, Hacker News, Slack communities, Discord, X, and more. Everything rolls into one dashboard.
                </p>
              </div>
            </div>

            {/* Text Section 3 */}
            <div className="min-h-screen flex items-center justify-center p-6">
              <div className="max-w-xl">
                <div className="relative inline-block mb-4">
                  <div className="bg-gray-200 rounded-2xl p-5 w-20 h-20 flex items-center justify-center">
                    <Bell className="w-10 h-10 text-gray-700" />
                  </div>
                  <span className="absolute -top-2 -right-2 bg-black text-white rounded-full w-8 h-8 flex items-center justify-center text-base font-bold shadow-lg">
                    03
                  </span>
                </div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">
                  03 — Get alerts you’ll actually read
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Get instant alerts and quick summaries so you understand what’s happening fast. Send alerts to Slack, email, or your dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimationComponent;
