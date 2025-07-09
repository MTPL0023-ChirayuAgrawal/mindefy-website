"use client";

import Image from "next/image";

export default function BPM() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Matching the provided image */}
      <section className="mt-20 md:mt-24 lg:mt-28 mx-auto px-4 md:px-6 lg:px-8 xl:px-0">
        <div className="mx-auto text-center">
          {/* Header Tag */}
          <p className="text-[#FF5225] text-sm md:text-base lg:text-[1rem] font-bold tracking-widest uppercase mb-4 md:mb-5 lg:mb-[1.25rem]">
            Buisness Process Management
          </p>

          {/* Main Title */}
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-[2.25rem] font-semibold text-[#000000] mb-4 md:mb-6 lg:mb-7 leading-tight max-w-[95%] md:max-w-[40rem] lg:max-w-[45rem] xl:max-w-[50rem] mx-auto px-2 md:px-0">
            Revolutionize Your Business with <br className="hidden md:block" />Mindefy's Business Process
            Management
          </h1>

          {/* Description Paragraphs */}
          <div className="w-full max-w-[95%] md:max-w-[45rem] lg:max-w-[55rem] xl:w-[60.25rem] font-normal mx-auto mb-6 md:mb-8 lg:mb-[2.25rem] text-justify space-y-4 md:space-y-5 lg:space-y-[1.75rem] px-2 md:px-4 lg:px-6 xl:px-0">
            <p className="text-sm md:text-base lg:text-[1rem] text-[#444444] leading-relaxed">
              To thrive, your business needs to be at the forefront of
              innovation, and Mindefy's BPM solutions are the key to this
              transformation. In this fast-paced environment, it's not just
              about offering a great product or service; it's about efficiently
              managing your processes to ensure optimal resource utilization and
              unwavering customer satisfaction. This is where Mindefy excels,
              providing state-of-the-art BPM solutions designed to revolutionize
              your organization's operations.
            </p>
          </div>

          {/* Hero Image - Using placeholder until you add your image */}
          <div className="relative w-full h-48 md:h-64 lg:h-80 xl:h-[30.125rem] mx-auto mb-8 md:mb-12 lg:mb-16 xl:mb-[5rem]">
            <Image
              src="/images/WAD.webp"
              alt="Hybrid App Development - Developer working with mobile app design"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      <div className="w-full max-w-[95%] md:max-w-[55rem] lg:max-w-[65rem] xl:w-[68.375rem] mx-auto mb-12 md:mb-16 lg:mb-20 flex flex-col lg:flex-row xl:flex-row justify-between gap-6 lg:gap-8 xl:gap-0 px-4 md:px-6 lg:px-8 xl:px-0">
        <div className="w-full lg:w-[60%] xl:w-[37.375rem] my-4 md:my-6 lg:my-8 xl:my-9">
          <div className="mx-2 md:mx-3 lg:mx-4 xl:mx-2.5 mt-2 md:mt-2.5 mb-4 md:mb-5">
            <p className="font-semibold text-lg md:text-xl lg:text-2xl xl:text-2xl text-[#000000]">
              What is Business Process Management (BPM)?
            </p>
          </div>
          <div className="mx-2 md:mx-3 lg:mx-4 xl:mx-2.5 mb-2 md:mb-2.5">
            <p className="font-normal text-sm md:text-base lg:text-[1rem] text-justify text-[#444444] leading-relaxed tracking-wide">
              Business Process Management is the amalgamation of art and
              science, focused on optimizing your organization's processes to
              enhance performance, efficiency, and agility. BPM encompasses a
              spectrum of activities, including analyzing, designing,
              implementing, and continually improving processes to achieve
              strategic goals. Mindefy's BPM solutions are meticulously tailored
              to your specific needs, ensuring that your business functions with
              the precision and reliability of a well-oiled machine.
            </p>
          </div>
        </div>
        <div className="w-full max-w-sm md:max-w-md lg:max-w-lg lg:w-[35%] xl:w-[23.25rem] h-48 md:h-56 lg:h-64 xl:h-[23.25rem] relative mx-auto lg:mx-0 xl:mx-0">
          <Image
            src="/images/SIS11.webp"
            alt="Code Reusability"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Agile Benefits Section using Flex */}
      <section className="px-4 md:px-6 lg:px-8 xl:px-0">
        <div className="max-w-[95%] md:max-w-[55rem] lg:max-w-[65rem] xl:max-w-[72.375rem] mx-auto">
          <div className="text-center">
            <h2 className="text-center text-lg md:text-xl lg:text-2xl xl:text-[1.75rem] font-semibold text-[#000000] mb-8 md:mb-10 lg:mb-11 px-2">
              The Upsides of Opting for Mindefy's BPM Solutions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:flex xl:flex-wrap xl:justify-center gap-4 md:gap-5 lg:gap-6">
            {[
              {
                title: "Process Efficiency",
                desc: "Mindefy acts as a perceptive diagnostician for your business, identifying bottlenecks, redundancies, and inefficiencies within your processes. Once identified, we systematically streamline these processes, resulting in a reduction in costs and an increase in productivity. In essence, we transform your processes into lean and efficient mechanisms that drive your business forward.",
                img: "/images/BPM1.webp",
              },
              {
                title: "Improved Visibility",
                desc: "With Mindefy's advanced BPM tools, you gain real-time insights into your operations. You can monitor key performance indicators (KPIs) and make data-driven decisions that lead to more favorable outcomes. This visibility enables you to stay agile and responsive in a rapidly changing business environment.",
                img: "/images/BPM2.webp",
              },
              {
                title: "Enhanced Collaboration",
                desc: "Mindefy's BPM solutions foster seamless collaboration among teams and departments, breaking down silos and improving communication. The result is increased innovation and elevated levels of customer satisfaction. When your teams can work harmoniously and communicate effectively, it enhances your organization's ability to adapt and serve customers more effectively. ",
                img: "/images/BPM3.webp",
              },
              {
                title: "Flexibility and Scalability",
                desc: "As your business evolves and grows, your processes must adapt to support these changes. Mindefy's BPM solutions are flexible and scalable, ensuring that they not only keep pace with your business but also facilitate your expansion. This adaptability is crucial in helping your business remain agile and responsive in a dynamic marketplace.",
                img: "/images/BPM4.webp",
              },
              {
                title: "Compliance and Risk Management",
                desc: "Staying compliant with industry regulations and mitigating risks effectively is of paramount importance in today's business landscape. Mindefy's BPM tools include robust compliance and risk management features, which help ensure that your processes adhere to relevant regulations and are equipped to manage and mitigate risks effectively.",
                img: "/images/BPM5.webp",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[0.75rem] p-4 md:p-5 lg:p-6 xl:px-6 xl:py-5 w-full h-auto min-h-[400px] md:min-h-[450px] lg:min-h-[500px] xl:w-[23.12rem] xl:h-auto flex flex-col items-center text-center justify-start overflow-hidden"
                style={{
                  boxShadow:
                    "1px 1px 4px rgba(0, 0, 0, 0.1), 4px 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* Title Container with Fixed Height */}
                <div className="w-full h-auto mb-4 xl:mb-[1.125rem] flex items-center justify-center">
                  <h3 className="font-semibold text-base md:text-lg lg:text-xl xl:text-[1.5rem] leading-tight text-center px-2 py-2 break-words hyphens-auto">
                    {item.title}
                  </h3>
                </div>

                {/* Image Container */}
                <div className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-[13.875rem] xl:h-[12.375rem] mb-4 xl:mb-[1.125rem] flex-shrink-0">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Description Container - Flex Grow */}
                <div className="flex-1 w-full flex items-start">
                  <p className="text-xs md:text-sm lg:text-sm xl:text-sm font-normal w-full text-[#444444] leading-relaxed text-justify px-1 break-words hyphens-auto">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 md:mt-18 lg:mt-20 xl:mt-24 px-3 md:px-6 lg:px-8 xl:px-0">
        <div className="w-full max-w-[98%] md:max-w-[55rem] lg:max-w-[60rem] xl:max-w-[63rem] mx-auto">
          {/* Section Header */}
          <div className="w-full max-w-[98%] md:max-w-[45rem] lg:max-w-[50rem] xl:w-[58.875rem] mx-auto text-center mb-8 md:mb-9 lg:mb-10 xl:mb-10">
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-[1.75rem] font-semibold text-[#000000] mb-4 md:mb-6 lg:mb-7 px-3">
              The Upsides of Opting for Mindefy's BPM Solutions
            </h2>
            <h2 className="text-sm md:text-base lg:text-[1rem] font-normal text-[#000000] px-3">
              At Mindefy, we take a comprehensive and systematic approach to
              BPM, with a focus on delivering tangible results
            </h2>
          </div>

          {/* Advantages Content */}
          <div className="flex flex-col gap-6 md:gap-7 lg:gap-8 xl:gap-[2.875rem] w-full max-w-[98%] md:max-w-[50rem] lg:max-w-[55rem] xl:max-w-[56.25rem] mx-auto">
            {/* Process Discovery */}
            <div className="flex flex-col lg:flex-row xl:flex-row bg-[#E6E6E7] rounded-xl overflow-hidden">
              <div className="flex-1 w-full lg:w-auto xl:w-[30.875rem] p-4 md:p-5 lg:p-6 xl:my-[3.781rem] xl:mx-0 xl:ml-5.5">
                <h3 className="text-base md:text-lg lg:text-xl xl:text-[1.5rem] font-semibold text-[#000000] mb-3 md:mb-3.5 lg:mb-4 break-words">
                  Process Discovery
                </h3>
                <p className="text-sm md:text-base lg:text-[1rem] text-[#444444] leading-relaxed text-justify break-words hyphens-auto">
                  We work closely with your team to identify existing processes,
                  pinpoint pain points, and identify opportunities for
                  improvement. This phase sets the stage for transformation.
                </p>
              </div>
              <div className="flex-shrink-0 p-4 lg:p-0">
                <div className="flex items-center justify-center">
                  <div className="w-40 h-24 md:w-48 md:h-28 lg:w-64 lg:h-36 xl:w-[23.18rem] xl:my-2.5 xl:mr-2.5 xl:h-[16.56rem] relative">
                    <Image
                      src="/images/TA4.svg"
                      alt="Process Discovery"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Process Design */}
            <div className="flex flex-col lg:flex-row xl:flex-row">
              <div className="flex-shrink-0 order-2 lg:order-1 xl:order-1 p-4 lg:p-0">
                <div className="flex items-center justify-center">
                  <div className="w-40 h-24 md:w-48 md:h-28 lg:w-64 lg:h-36 xl:w-[23.18rem] xl:my-2.5 xl:ml-2.5 xl:h-[16.56rem] relative">
                    <Image
                      src="/images/BPM6.webp"
                      alt="Process Design"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full lg:w-auto xl:w-[30.875rem] p-4 md:p-5 lg:p-6 xl:my-[3.781rem] xl:mx-0 xl:ml-5.5 order-1 lg:order-2 xl:order-2">
                <h3 className="text-base md:text-lg lg:text-xl xl:text-[1.5rem] font-semibold text-[#000000] mb-3 md:mb-3.5 lg:mb-4 break-words">
                  Process Design
                </h3>
                <p className="text-sm md:text-base lg:text-[1rem] text-[#444444] leading-relaxed text-justify break-words hyphens-auto">
                  Leveraging industry best practices, we design optimized
                  processes that align with your business objectives. Our
                  designs are not just improvements; they are tailored to
                  enhance your strategic goals.
                </p>
              </div>
            </div>

            {/* Process Automation */}
            <div className="flex flex-col lg:flex-row xl:flex-row bg-[#E6E6E7] rounded-xl overflow-hidden">
              <div className="flex-1 w-full lg:w-auto xl:w-[30.875rem] p-4 md:p-5 lg:p-6 xl:my-[3.781rem] xl:mx-0 xl:ml-5.5">
                <h3 className="text-base md:text-lg lg:text-xl xl:text-[1.5rem] font-semibold text-[#000000] mb-3 md:mb-3.5 lg:mb-4 break-words">
                  Process Automation
                </h3>
                <p className="text-sm md:text-base lg:text-[1rem] text-[#444444] leading-relaxed text-justify break-words hyphens-auto">
                  Automation is the cornerstone of efficiency. Mindefy leverages
                  automation to reduce manual tasks, minimize errors, and
                  elevate the overall efficiency of your processes. Automation
                  allows your team to focus on high-value tasks while routine
                  operations are handled seamlessly.
                </p>
              </div>
              <div className="flex-shrink-0 p-4 lg:p-0">
                <div className="flex items-center justify-center">
                  <div className="w-40 h-24 md:w-48 md:h-28 lg:w-64 lg:h-36 xl:w-[23.18rem] xl:my-2.5 xl:mr-2.5 xl:h-[16.56rem] relative">
                    <Image
                      src="/images/BPM7.webp"
                      alt="Process Automation"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Monitoring and Analytics */}
            <div className="flex flex-col lg:flex-row xl:flex-row">
              <div className="flex-shrink-0 order-2 lg:order-1 xl:order-1 p-4 lg:p-0">
                <div className="flex items-center justify-center">
                  <div className="w-40 h-24 md:w-48 md:h-28 lg:w-64 lg:h-36 xl:w-[23.18rem] xl:my-2.5 xl:ml-2.5 xl:h-[16.56rem] relative">
                    <Image
                      src="/images/BPM8.webp"
                      alt="Monitoring and Analytics"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full lg:w-auto xl:w-[30.875rem] p-4 md:p-5 lg:p-6 xl:my-[3.781rem] xl:mx-0 xl:ml-5.5 order-1 lg:order-2 xl:order-2">
                <h3 className="text-base md:text-lg lg:text-xl xl:text-[1.5rem] font-semibold text-[#000000] mb-3 md:mb-3.5 lg:mb-4 break-words">
                  Monitoring and Analytics
                </h3>
                <p className="text-sm md:text-base lg:text-[1rem] text-[#444444] leading-relaxed text-justify break-words hyphens-auto">
                  Real-time monitoring and data analytics provide you with
                  insights into process performance. This transparency empowers
                  you to make data-driven decisions, pivot as needed, and
                  optimize your operations continually.
                </p>
              </div>
            </div>

            {/* Continuous Improvement */}
            <div className="flex flex-col lg:flex-row xl:flex-row bg-[#E6E6E7] rounded-xl overflow-hidden">
              <div className="flex-1 w-full lg:w-auto xl:w-[30.875rem] p-4 md:p-5 lg:p-6 xl:my-[3.781rem] xl:mx-0 xl:ml-5.5">
                <h3 className="text-base md:text-lg lg:text-xl xl:text-[1.5rem] font-semibold text-[#000000] mb-3 md:mb-3.5 lg:mb-4 break-words">
                  Continuous Improvement
                </h3>
                <p className="text-sm md:text-base lg:text-[1rem] text-[#444444] leading-relaxed text-justify break-words hyphens-auto">
                  We embrace the philosophy of continuous improvement. Our team
                  collaborates closely with you to refine processes as your
                  business evolves, ensuring that they remain aligned with your
                  dynamic business goals.
                </p>
              </div>
              <div className="flex-shrink-0 p-4 lg:p-0">
                <div className="flex items-center justify-center">
                  <div className="w-40 h-24 md:w-48 md:h-28 lg:w-64 lg:h-36 xl:w-[23.18rem] xl:my-2.5 xl:mr-2.5 xl:h-[16.56rem] relative">
                    <Image
                      src="/images/BPM9.webp"
                      alt="Continuous Improvement"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mindefy is the Ideal Partner Section */}
      <section className="mt-16 md:mt-18 lg:mt-20 px-3 md:px-6 lg:px-8 xl:px-0">
        <div className="w-full max-w-[98%] md:max-w-[55rem] lg:max-w-[60rem] xl:max-w-[62.75rem] mx-auto">
          {/* Section Header */}
          <div className="text-center w-full max-w-[98%] md:max-w-[28rem] lg:max-w-[30rem] xl:w-[33.5rem] mx-auto mb-8 md:mb-10 lg:mb-12 xl:mb-[3rem]">
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-[1.75rem] font-semibold text-[#000000] px-3">
              Why Mindefy Excels in BPM ?
            </h2>
          </div>

          {/* 2x2 Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:flex xl:flex-wrap w-full max-w-[98%] md:max-w-full lg:max-w-full xl:max-w-[62.75rem] mx-auto gap-4 md:gap-0 lg:gap-0 xl:gap-0">
            {/* Expertise and Experience */}
            <div className="bg-white flex-1 w-full md:w-auto lg:w-auto xl:max-w-[31.375rem] border-2 md:border lg:border xl:border border-[#000000] md:border-r md:border-b md:border-l-0 md:border-t-0 lg:border-r lg:border-b lg:border-l-0 lg:border-t-0 xl:border-r xl:border-b xl:border-l-0 xl:border-t-0 rounded-lg md:rounded-none lg:rounded-none xl:rounded-none p-4 md:p-5 lg:p-6 xl:p-6 xl:basis-[calc(50%-1rem)]">
              <div className="flex items-center justify-center md:justify-center lg:justify-end xl:justify-end mb-4 md:mb-5 lg:mb-6 xl:mb-6">
                <div className="relative w-12 h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-14 xl:h-14 mr-0 md:mr-0 lg:mr-5 xl:mr-5 mt-2 md:mt-3 lg:mt-4 xl:mt-4">
                  <Image
                    src="/images/bpm1.svg"
                    alt="Expertise and Experience"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="px-2 md:px-4 lg:px-6 xl:px-6 mb-4 md:mb-5 lg:mb-6 xl:mb-6 w-full">
                <h3 className="text-center md:text-center lg:text-left xl:text-left mb-3 md:mb-4 lg:mb-5 xl:mb-5 text-base md:text-lg lg:text-xl xl:text-[1.5rem] font-semibold text-[#000000] break-words">
                  Expertise
                </h3>

                <p className="text-sm md:text-sm lg:text-base xl:text-[1rem] font-normal text-[#444444] leading-relaxed text-justify break-words hyphens-auto">
                  Mindefy's team of seasoned BPM professionals brings a proven
                  track record of delivering results to businesses across a
                  diverse range of industries. Our collective expertise ensures
                  that you receive actionable solutions backed by real-world
                  experience.
                </p>
              </div>
            </div>

            {/* Advanced Tools and Technologies */}
            <div className="bg-white flex-1 w-full md:w-auto lg:w-auto xl:max-w-[31.375rem] border-2 md:border lg:border xl:border border-[#000000] md:border-l md:border-b md:border-r-0 md:border-t-0 lg:border-l lg:border-b lg:border-r-0 lg:border-t-0 xl:border-l xl:border-b xl:border-r-0 xl:border-t-0 rounded-lg md:rounded-none lg:rounded-none xl:rounded-none p-4 md:p-5 lg:p-6 xl:p-6 xl:basis-[calc(50%-1rem)]">
              <div className="flex items-center justify-center md:justify-center lg:justify-start xl:justify-start mb-4 md:mb-5 lg:mb-6 xl:mb-6">
                <div className="relative w-12 h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-14 xl:h-14 ml-0 md:ml-0 lg:ml-5 xl:ml-5 mt-2 md:mt-3 lg:mt-4 xl:mt-4">
                  <Image
                    src="/images/bpm2.svg"
                    alt="Advanced Tools and Technologies"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="px-2 md:px-4 lg:px-6 xl:px-6 mb-4 md:mb-5 lg:mb-6 xl:mb-6 w-full">
                <h3 className="text-center md:text-center lg:text-left xl:text-left mb-3 md:mb-4 lg:mb-5 xl:mb-5 text-base md:text-lg lg:text-xl xl:text-[1.5rem] font-semibold text-[#000000] break-words">
                  Tailored Solutions
                </h3>

                <p className="text-sm md:text-sm lg:text-base xl:text-[1rem] font-normal text-[#444444] leading-relaxed text-justify break-words hyphens-auto">
                  We firmly believe in the principle that there is no
                  one-size-fits-all solution in BPM. As such, our BPM offerings
                  are never off-the-shelf; they are always customized to meet
                  your unique requirements. Your business is unique, and your
                  BPM solutions should reflect that uniqueness.
                </p>
              </div>
            </div>

            {/* Agile Testing Methodologies */}
            <div className="bg-white flex-1 w-full md:w-auto lg:w-auto xl:max-w-[31.375rem] border-2 md:border lg:border xl:border border-[#000000] md:border-r md:border-t md:border-l-0 md:border-b-0 lg:border-r lg:border-t lg:border-l-0 lg:border-b-0 xl:border-r xl:border-t xl:border-l-0 xl:border-b-0 rounded-lg md:rounded-none lg:rounded-none xl:rounded-none p-4 md:p-5 lg:p-6 xl:p-6 xl:basis-[calc(50%-1rem)]">
              <div className="flex items-center justify-center md:justify-center lg:justify-end xl:justify-end mb-4 md:mb-5 lg:mb-6 xl:mb-6">
                <div className="relative w-12 h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-14 xl:h-14 mr-0 md:mr-0 lg:mr-5 xl:mr-5 mt-2 md:mt-3 lg:mt-4 xl:mt-4">
                  <Image
                    src="/images/bpm3.svg"
                    alt="Agile Testing Methodologies"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="px-2 md:px-4 lg:px-6 xl:px-6 mb-2 md:mb-3 lg:mb-2.5 xl:mb-2.5 w-full">
                <h3 className="text-center md:text-center lg:text-left xl:text-left mb-3 md:mb-4 lg:mb-5 xl:mb-5 text-base md:text-lg lg:text-xl xl:text-[1.5rem] font-semibold text-[#000000] break-words">
                  Cutting-Edge Technology
                </h3>

                <p className="text-sm md:text-sm lg:text-base xl:text-[1rem] font-normal text-[#444444] leading-relaxed text-justify break-words hyphens-auto">
                  Mindefy consistently leverages the latest BPM tools and
                  technologies to keep your business ahead of the competition.
                  With the rapid pace of technological change, our commitment to
                  staying at the forefront ensures that your BPM solutions are
                  always at the cutting edge.
                </p>
              </div>
            </div>

            {/* Customer Satisfaction */}
            <div className="bg-white flex-1 w-full md:w-auto lg:w-auto xl:max-w-[31.375rem] border-2 md:border lg:border xl:border border-[#000000] md:border-l md:border-t md:border-r-0 md:border-b-0 lg:border-l lg:border-t lg:border-r-0 lg:border-b-0 xl:border-l xl:border-t xl:border-r-0 xl:border-b-0 rounded-lg md:rounded-none lg:rounded-none xl:rounded-none p-4 md:p-5 lg:p-6 xl:p-6 xl:basis-[calc(50%-1rem)]">
              <div className="flex items-center justify-center md:justify-center lg:justify-start xl:justify-start mb-4 md:mb-5 lg:mb-6 xl:mb-6">
                <div className="relative w-12 h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-14 xl:h-14 ml-0 md:ml-0 lg:ml-5 xl:ml-5 mt-2 md:mt-3 lg:mt-4 xl:mt-4">
                  <Image
                    src="/images/bpm4.svg"
                    alt="Customer Satisfaction"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="px-2 md:px-4 lg:px-6 xl:px-6 mb-2 md:mb-3 lg:mb-2.5 xl:mb-2.5 w-full">
                <h3 className="text-center md:text-center lg:text-left xl:text-left mb-3 md:mb-4 lg:mb-5 xl:mb-5 text-base md:text-lg lg:text-xl xl:text-[1.5rem] font-semibold text-[#000000] break-words">
                  Client-Centric Approach
                </h3>

                <p className="text-sm md:text-sm lg:text-base xl:text-[1rem] font-normal text-[#444444] leading-relaxed text-justify break-words hyphens-auto">
                  Your success is our success. We work closely with you to
                  achieve your goals and drive business growth. Our commitment
                  to your success is unwavering, and we consider ourselves not
                  just your service provider but your strategic partner in your
                  journey toward BPM excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
