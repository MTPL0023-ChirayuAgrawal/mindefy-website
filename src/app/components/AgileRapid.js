"use client";

import Image from "next/image";

export default function AgileRapid() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Matching the provided image */}
      <section className="mt-28 mx-auto px-4 lg:px-0">
        <div className="mx-auto text-center">
          {/* Header Tag */}
          <p className="text-[#FF5225] text-[0.875rem] sm:text-[1rem] font-bold tracking-widest uppercase mb-[1.25rem]">
            Agile and Rapid Application Development
          </p>

          {/* Main Title */}
          <h1 className="text-[1.5rem] sm:text-[1.875rem] lg:text-[2.25rem] font-semibold text-[#000000] mb-7 leading-tight max-w-[90%] sm:max-w-[45rem] lg:max-w-[50rem] mx-auto px-4 lg:px-0">
            <span className="font-normal">Unleashing </span> the Power of Agile
            <span className="font-normal"> and </span>
            <span className="font-medium">Rapid Application Development</span>
          </h1>

          {/* Description Paragraphs */}
          <div className="w-full max-w-[90%] sm:max-w-[45rem] lg:w-[60.25rem] font-normal mx-auto mb-[2.25rem] text-justify space-y-[1.25rem] px-4 lg:px-0">
            <p className="text-[0.875rem] sm:text-[1rem] text-[#444444] leading-relaxed">
              You can rely on Mindefy's unique expertise in RAD Models and Agile
              Development to deliver Unmatched Results.
            </p>
            <p className="text-[0.875rem] sm:text-[1rem] font-medium text-[#444444] leading-relaxed">
              Using our expertise in RAD models and agile development, we
              provide you with customized solutions that meet your unique
              business goals and deliver superior results. Our team of highly
              trained and experienced professionals specializes in rapid
              prototyping, iterative development and rapid feedback loops for
              continuous improvement and adaptability. With Mindefy as your
              trusted partner, you gain a competitive edge by delivering
              solutions that exceed expectations, reduce risk and optimize
              resource allocation. Experience the pinnacle of agile development
              and RAD model services with Mindefy to drive innovation,
              accelerate time to market and propel your business to unparalleled
              success in today's fiercely competitive environment
            </p>
          </div>

          {/* Hero Image - Using placeholder until you add your image */}
          <div className="relative w-full h-[20rem] sm:h-[25rem] lg:h-[30.125rem] mx-auto mb-[4.5rem] px-4 lg:px-0">
            <Image
              src="/images/ARD.webp"
              alt="Hybrid App Development - Developer working with mobile app design"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      <div className="w-full max-w-[90%] sm:max-w-[45rem] lg:w-[60.25rem] mx-auto px-4 lg:px-0">
        <div className="">
          <p className="font-semibold text-[1.25rem] sm:text-[1.5rem] lg:text-[1.75rem] mb-5">
            Agile Development <br className="hidden lg:block" />
            <span className="lg:hidden"> </span>Accelerating Innovation and Collaboration
          </p>
          <p className="font-normal text-[0.875rem] sm:text-[1rem] mb-[3.75rem] text-[#444444] text-justify">
            Our agile development methodology emphasizes iterative and
            collaborative project management to deliver high-quality software
            faster. We facilitate adaptability and responsiveness to changing
            needs by breaking down the development process into smaller, more
            manageable phases.Our agile development methodology emphasizes
            iterative and collaborative project management to deliver
            high-quality software faster. We facilitate adaptability and
            responsiveness to changing needs by breaking down the development
            process into smaller, more manageable phases.
          </p>
        </div>
      </div>

      <section className="mb-20 px-4 lg:px-0">
        <div className="max-w-[90%] sm:max-w-[50rem] lg:max-w-[61.75rem] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-[2.5rem]">
            <p className="text-[1.25rem] sm:text-[1.5rem] lg:text-[1.75rem] font-semibold text-[#000000] mb-4">
              The Agile Development Journey at Mindefy
            </p>
            <p className="text-[0.875rem] sm:text-[1rem] lg:text-[1.125rem] mx-auto text-justify w-full max-w-[90%] sm:max-w-[40rem] lg:w-[51rem] font-normal text-[#444444] mb-11">
              The Agile development process is a collaborative and iterative
              approach to software development that focuses on delivering value
              to customers through continuous improvement and adaptive planning.
            </p>
          </div>

          {/* Advantages Content */}
          <div className="flex flex-col gap-[2.75rem] max-w-full lg:max-w-[61.75rem] mx-auto">
            {/* Project Initiation */}
            <div className="flex items-center w-full lg:w-[61.75rem] mx-auto h-[4rem] lg:h-[5.5rem] bg-[#D0DEF8] px-4 lg:px-0">
              <p className="w-full lg:w-[11.43rem] lg:ml-[24.875rem] text-center font-semibold text-[1rem] lg:text-[1.375rem] text-[#2B4473]">
                Project Initiation
              </p>
            </div>
            <div className="flex flex-col lg:flex-row bg-[#FFFFFF] gap-4 lg:gap-0">
              <div className="flex-shrink-0 flex justify-center lg:justify-start">
                <div className="flex items-center justify-center">
                  <div className="w-[18rem] h-[12rem] lg:w-[23.18rem] lg:h-[16.56rem] relative">
                    <Image
                      src="/images/AAD1.webp"
                      alt="JavaScript Stack"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 lg:mt-[5.65rem] w-full lg:w-[36.06rem] lg:my-[2.93rem] lg:ml-2.5 px-4 lg:px-0">
                <p className="text-[0.875rem] lg:text-[1.125rem] font-normal w-full lg:w-[34.312rem] text-[#444444] leading-relaxed text-justify">
                  We start by understanding your business goals, requirements
                  and project scope. Our team works closely with you to define
                  clear goals and establish effective communication channels.
                </p>
              </div>
            </div>

            {/* Agile Framework Selection */}
            <div className="flex items-center w-full lg:w-[61.75rem] mx-auto h-[4rem] lg:h-[5.5rem] bg-[#D0DEF8] px-4 lg:px-0">
              <p className="w-full lg:w-[19.68rem] lg:ml-[21.31rem] text-center font-semibold text-[1rem] lg:text-[1.375rem] text-[#2B4473]">
                Agile Framework Selection
              </p>
            </div>
            <div className="flex flex-col lg:flex-row bg-[#FFFFFF] gap-4 lg:gap-0">
              <div className="flex-1 order-2 lg:order-1 lg:mt-[5.65rem] w-full lg:w-[36.06rem] lg:my-[2.93rem] lg:ml-2.5 px-4 lg:px-0">
                <p className="text-[0.875rem] lg:text-[1.125rem] font-normal w-full lg:w-[34.312rem] text-[#444444] leading-relaxed text-justify">
                  We help you choose the most suitable agile framework, such as
                  Scrum or Kanban, based on your project requirements and
                  organizational needs. Each system has its own set of practices
                  and principles to guide the development process.
                </p>
              </div>
              <div className="flex-shrink-0 order-1 lg:order-2 flex justify-center lg:justify-start">
                <div className="flex items-center justify-center">
                  <div className="w-[18rem] h-[12rem] lg:w-[23.18rem] lg:h-[16.56rem] relative">
                    <Image
                      src="/images/AAD4.webp"
                      alt="JavaScript Stack"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Product Backlog Creation */}
            <div className="flex items-center w-full lg:w-[61.75rem] mx-auto h-[4rem] lg:h-[5.5rem] bg-[#D0DEF8] px-4 lg:px-0">
              <p className="w-full lg:w-[17.87rem] lg:ml-[22.18rem] text-center font-semibold text-[1rem] lg:text-[1.375rem] text-[#2B4473]">
                Product Backlog Creation
              </p>
            </div>
            <div className="flex flex-col lg:flex-row bg-[#FFFFFF] gap-4 lg:gap-0">
              <div className="flex-shrink-0 flex justify-center lg:justify-start">
                <div className="flex items-center justify-center">
                  <div className="w-[18rem] h-[12rem] lg:w-[23.18rem] lg:h-[16.56rem] relative">
                    <Image
                      src="/images/AAD2.webp"
                      alt="JavaScript Stack"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 lg:mt-[5.65rem] w-full lg:w-[36.06rem] lg:my-[2.93rem] lg:ml-2.5 px-4 lg:px-0">
                <p className="text-[0.875rem] lg:text-[1.125rem] font-normal w-full lg:w-[34.312rem] text-[#444444] leading-relaxed text-justify">
                  With your input, we created a product backlog, a prioritized
                  list of features and requirements. This work-in-progress acts
                  as a roadmap for the development process, ensuring that the
                  most valuable and important topics are tackled first
                </p>
              </div>
            </div>

            {/* Sprint planning */}
            <div className="flex items-center w-full lg:w-[61.75rem] mx-auto h-[4rem] lg:h-[5.5rem] bg-[#D0DEF8] px-4 lg:px-0">
              <p className="w-full lg:w-[11.43rem] lg:ml-[25.81rem] text-center font-semibold text-[1rem] lg:text-[1.375rem] text-[#2B4473]">
                Sprint planning
              </p>
            </div>
            <div className="flex flex-col lg:flex-row bg-[#FFFFFF] gap-4 lg:gap-0">
              <div className="flex-1 order-2 lg:order-1 lg:mt-[5.65rem] w-full lg:w-[36.06rem] lg:my-[2.93rem] lg:ml-2.5 px-4 lg:px-0">
                <p className="text-[0.875rem] lg:text-[1.125rem] font-normal w-full lg:w-[34.312rem] text-[#444444] leading-relaxed text-justify">
                  We plan our work for each iteration, called a sprint. During
                  the sprint planning meeting, we collaborate to select a
                  backlog to work on. We break them down into smaller,
                  manageable tasks and estimate the effort required to complete
                  each task.
                </p>
              </div>
              <div className="flex-shrink-0 order-1 lg:order-2 flex justify-center lg:justify-start">
                <div className="flex items-center justify-center">
                  <div className="w-[18rem] h-[12rem] lg:w-[23.18rem] lg:h-[16.56rem] relative">
                    <Image
                      src="/images/ARD1.webp"
                      alt="JavaScript Stack"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Sprint Execution */}
            <div className="flex items-center w-full lg:w-[61.75rem] mx-auto h-[4rem] lg:h-[5.5rem] bg-[#D0DEF8] px-4 lg:px-0">
              <p className="w-full lg:w-[11.43rem] lg:ml-[24.875rem] text-center font-semibold text-[1rem] lg:text-[1.375rem] text-[#2B4473]">
                Sprint Execution
              </p>
            </div>
            <div className="flex flex-col lg:flex-row bg-[#FFFFFF] gap-4 lg:gap-0">
              <div className="flex-shrink-0 flex justify-center lg:justify-start">
                <div className="flex items-center justify-center">
                  <div className="w-[18rem] h-[12rem] lg:w-[23.18rem] lg:h-[16.56rem] relative">
                    <Image
                      src="/images/AAD7.webp"
                      alt="JavaScript Stack"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 lg:mt-[5.65rem] w-full lg:w-[36.06rem] lg:my-[2.93rem] lg:ml-2.5 px-4 lg:px-0">
                <p className="text-[0.875rem] lg:text-[1.125rem] font-normal w-full lg:w-[34.312rem] text-[#444444] leading-relaxed text-justify">
                  The development team starts work on the tasks defined in the
                  sprint plan. Daily stand-ups keep everyone on the same page,
                  encourage collaboration, and provide an opportunity to address
                  any challenges or obstacles that arise.
                </p>
              </div>
            </div>

            {/* Continuous Testing and Integration */}
            <div className="flex items-center w-full lg:w-[61.75rem] mx-auto h-[4rem] lg:h-[5.5rem] bg-[#D0DEF8] px-4 lg:px-0">
              <p className="w-full lg:w-[26rem] lg:ml-[18.815rem] text-center font-semibold text-[1rem] lg:text-[1.375rem] text-[#2B4473]">
                Continuous Testing and Integration
              </p>
            </div>
            <div className="flex flex-col lg:flex-row bg-[#FFFFFF] gap-4 lg:gap-0">
              <div className="flex-1 order-2 lg:order-1 lg:mt-[5.65rem] w-full lg:w-[36.06rem] lg:my-[2.93rem] lg:ml-2.5 px-4 lg:px-0">
                <p className="text-[0.875rem] lg:text-[1.125rem] font-normal w-full lg:w-[34.312rem] text-[#444444] leading-relaxed text-justify">
                  We emphasize the importance of continuous testing and
                  integration throughout the development process. By regularly
                  testing and integrating new features into existing systems, we
                  ensure that issues are identified early and changes are
                  integrated seamlessly.
                </p>
              </div>
              <div className="flex-shrink-0 order-1 lg:order-2 flex justify-center lg:justify-start">
                <div className="flex items-center justify-center">
                  <div className="w-[18rem] h-[12rem] lg:w-[23.18rem] lg:h-[16.56rem] relative">
                    <Image
                      src="/images/AAD6.webp"
                      alt="JavaScript Stack"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Sprint Review and Retrospective */}
            <div className="flex items-center w-full lg:w-[61.75rem] mx-auto h-[4rem] lg:h-[5.5rem] bg-[#D0DEF8] px-4 lg:px-0">
              <p className="w-full lg:w-[24.625rem] lg:ml-[19.5rem] text-center font-semibold text-[1rem] lg:text-[1.375rem] text-[#2B4473]">
                Sprint Review and Retrospective
              </p>
            </div>
            <div className="flex flex-col lg:flex-row bg-[#FFFFFF] gap-4 lg:gap-0">
              <div className="flex-shrink-0 flex justify-center lg:justify-start">
                <div className="flex items-center justify-center">
                  <div className="w-[18rem] h-[12rem] lg:w-[23.18rem] lg:h-[16.56rem] relative">
                    <Image
                      src="/images/ARD2.webp"
                      alt="JavaScript Stack"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 lg:mt-[5.65rem] w-full lg:w-[36.06rem] lg:my-[2.93rem] lg:ml-2.5 px-4 lg:px-0">
                <p className="text-[0.875rem] lg:text-[1.125rem] font-normal w-full lg:w-[34.312rem] text-[#444444] leading-relaxed text-justify">
                  At the end of each sprint, we conduct a sprint review to show
                  the work we've done to stakeholders and gather feedback. This
                  feedback helps us improve and improve our products. We also
                  conduct sprint retrospectives to reflect on the sprint and
                  identify areas for further improvement.
                </p>
              </div>
            </div>

            {/* Repeat and Iterate */}
            <div className="flex items-center w-full lg:w-[61.75rem] mx-auto h-[4rem] lg:h-[5.5rem] bg-[#D0DEF8] px-4 lg:px-0">
              <p className="w-full lg:w-[14.18rem] lg:ml-[24.685rem] text-center font-semibold text-[1rem] lg:text-[1.375rem] text-[#2B4473]">
                Repeat and Iterate
              </p>
            </div>
            <div className="flex flex-col lg:flex-row bg-[#FFFFFF] gap-4 lg:gap-0">
              <div className="flex-shrink-0 flex justify-center lg:justify-start">
                <div className="flex items-center justify-center">
                  <div className="w-[18rem] h-[12rem] lg:w-[23.18rem] lg:h-[16.56rem] relative">
                    <Image
                      src="/images/AAD4.webp"
                      alt="JavaScript Stack"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 lg:mt-[5.65rem] w-full lg:w-[36.06rem] lg:my-[2.93rem] lg:ml-2.5 px-4 lg:px-0">
                <p className="text-[0.875rem] lg:text-[1.125rem] font-normal w-full lg:w-[34.312rem] text-[#444444] leading-relaxed text-justify">
                  Agile development processes are iterative and incremental.
                  After each sprint, we repeat this cycle, starting with backlog
                  adjustment and sprint planning. This allows us to continuously
                  improve our products, incorporate feedback and adapt to
                  changing needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agile Benefits Section using Flex */}
      <section className="px-4 lg:px-0">
        <div className="max-w-[90%] lg:max-w-[74.125rem] mx-auto">
          <h2 className="text-center text-[1.25rem] sm:text-[1.5rem] lg:text-[1.75rem] font-semibold text-[#000000] mb-10">
            Maximize Agile Development Benefits at Mindefy
          </h2>
          <div className="flex flex-wrap justify-center gap-5">
            {[
              {
                title: "Increased Flexibility",
                desc: "Agile development provides flexibility to adapt to changing needs and market dynamics. By breaking the project down into manageable steps, we can easily make adjustments to ensure the end product meets your changing needs.",
                img: "/images/MARD1.svg",
              },
              {
                title: "Faster Time-to-Market",
                desc: "Our agile approach accelerates time to market so you can capitalize on business opportunities and gain competitive advantage. By delivering functional software in short time, we speed up the development process and ensure your product gets to market quickly.",
                img: "/images/MARD2.svg",
              },
              {
                title: "Improved Collaboration",
                desc: "Collaboration is at the heart of agile development. With our team of professionals, we facilitate close collaboration between developers, stakeholders and end users. This provides you with a clear understanding of your vision and allows us to create software solutions that meet your business goals.",
                img: "/images/MARD3.svg",
              },
              {
                title: "Enhanced Quality",
                desc: "Through continuous feedback and regular testing, we prioritize quality at all stages of development. By resolving issues in a timely manner, we maintain high standards of software quality, reduce the potential for errors, and increase overall user satisfaction.",
                img: "/images/MARD4.svg",
              },
              {
                title: "Efficient Resource Utilization",
                desc: "Agile methods ensure efficient allocation of resources. By breaking down projects into smaller phases, we optimize the use of resources and ensure that the right skills and knowledge are brought in at the right time, which saves costs and streamlines development.",
                img: "/images/MARD5.svg",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[0.75rem] shadow p-6 w-full max-w-[20rem] lg:w-[23.875rem] flex flex-col items-center text-center"
                style={{
                  boxShadow:
                    "1px 1px 4px rgba(0, 0, 0, 0.2), 8px 8px 18px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h3 className="font-semibold text-[1rem] lg:text-[1.25rem] mb-6">
                  {item.title}
                </h3>
                <div className="relative w-[10rem] h-[9rem] lg:w-[13.875rem] lg:h-[12.375rem] mb-4">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <p className="text-[0.875rem] lg:text-sm text-[#444444] leading-relaxed text-justify">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="my-20 px-4 lg:px-0">
        <div className="max-w-[90%] lg:max-w-[62.75rem] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-[3rem] mx-auto w-full lg:w-[60.25rem]">
            <p className="text-[1.25rem] sm:text-[1.5rem] lg:text-[1.75rem] mx-auto lg:mx-[12.875rem] font-semibold text-[#000000] w-full lg:w-[34.5rem] mb-5">
              Rapid Application Development (RAD) Streamlining Software
              Development
            </p>
            <p className="text-[0.875rem] lg:text-[1rem] mx-auto text-justify font-normal text-[#444444]">
              At Mindefy, we specialize in RAD, a methodology that emphasizes
              rapid prototyping, iterative development, and close collaboration
              between developers and stakeholders. RAD enables companies to
              quickly build and deploy functional software applications. As a
              leading provider of RAD services, we help companies accelerate
              software development processes, reduce time to market and achieve
              remarkable results. With Mindefy, you can unleash the power of RAD
              and transform your application development journey.
            </p>
          </div>

          {/* Advantages Content */}
          <div className="flex flex-col gap-2 max-w-full lg:max-w-[62.75rem] mx-auto">
            {/* Requirements Gathering */}
            <div className="flex flex-col lg:flex-row bg-[#FFF5F5] rounded-2xl gap-4 lg:gap-36 p-4 lg:p-0">
              <div className="flex-shrink-0 flex justify-center lg:justify-start">
                <div className="flex items-center justify-center">
                  <div className="w-[18rem] h-[12rem] lg:w-[23.18rem] lg:h-[16.56rem] relative">
                    <Image
                      src="/images/RAD1.svg"
                      alt="JavaScript Stack"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full lg:w-[24.75rem] lg:my-[2.75rem] lg:mr-[5.31rem]">
                <p className="text-[1.125rem] lg:text-[1.5rem] mb-4 font-semibold lg:mt-2.5 lg:ml-3.5 text-[#232323]">
                  Requirements Gathering
                </p>
                <p className="text-[0.875rem] lg:text-[1rem] font-normal lg:mx-3.5 w-full lg:w-[23rem] text-[#444444] leading-relaxed text-justify">
                  We work closely with you to understand your business goals,
                  functional needs and target audience. By gathering
                  comprehensive requirements, we ensure you have a clear
                  understanding of your project goals.
                </p>
              </div>
            </div>

            {/* Rapid Prototyping */}
            <div className="flex flex-col lg:flex-row rounded-2xl gap-4 lg:gap-36 p-4 lg:p-0">
              <div className="flex-shrink-0 flex justify-center lg:justify-start">
                <div className="flex items-center justify-center">
                  <div className="w-[18rem] h-[12rem] lg:w-[23.18rem] lg:h-[16.56rem] relative">
                    <Image
                      src="/images/AAD2.webp"
                      alt="JavaScript Stack"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full lg:w-[24.75rem] lg:my-[2.75rem] lg:mr-[5.31rem]">
                <p className="text-[1.125rem] lg:text-[1.5rem] mb-4 font-semibold lg:mt-2.5 lg:ml-3.5 text-[#232323]">
                  Rapid Prototyping
                </p>
                <p className="text-[0.875rem] lg:text-[1rem] font-normal lg:mx-3.5 w-full lg:w-[23rem] text-[#444444] leading-relaxed text-justify">
                  We rapidly develop functional prototypes based on the initial
                  requirements. These prototypes provide a visual representation
                  of the application's interface and functionality. Through
                  iterative feedback and refinement, we continuously enhance the
                  prototype.
                </p>
              </div>
            </div>

            {/* Iterative Development */}
            <div className="flex flex-col lg:flex-row bg-[#FFF5F5] rounded-2xl gap-4 lg:gap-36 p-4 lg:p-0">
              <div className="flex-shrink-0 flex justify-center lg:justify-start">
                <div className="flex items-center justify-center">
                  <div className="w-[18rem] h-[12rem] lg:w-[23.18rem] lg:h-[16.56rem] relative">
                    <Image
                      src="/images/RAD2.svg"
                      alt="JavaScript Stack"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full lg:w-[24.75rem] lg:my-[2.75rem] lg:mr-[5.31rem]">
                <p className="text-[1.125rem] lg:text-[1.5rem] mb-4 font-semibold lg:mt-2.5 lg:ml-3.5 text-[#232323]">
                  Iterative Development
                </p>
                <p className="text-[0.875rem] lg:text-[1rem] font-normal lg:mx-3.5 w-full lg:w-[23rem] text-[#444444] leading-relaxed text-justify">
                  The RAD model process involves breaking down a project into
                  small iterations or steps. During each iteration, we develop
                  and test specific features. This iterative approach allows for
                  rapid progress and continuous feedback.
                </p>
              </div>
            </div>

            {/* Continuous Feedback and Collaboration */}
            <div className="flex flex-col lg:flex-row rounded-2xl gap-4 lg:gap-36 p-4 lg:p-0">
              <div className="flex-shrink-0 flex justify-center lg:justify-start">
                <div className="flex items-center lg:mt-10 justify-center">
                  <div className="w-[18rem] h-[12rem] lg:w-[23.18rem] lg:h-[16.56rem] relative">
                    <Image
                      src="/images/RAD5.svg"
                      alt="JavaScript Stack"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full lg:w-[24.75rem] lg:my-[2.75rem] lg:mr-[5.31rem]">
                <p className="text-[1.125rem] lg:text-[1.5rem] mb-4 font-semibold lg:mt-2.5 lg:ml-3.5 text-[#232323]">
                  Continuous Feedback and Collaboration
                </p>
                <p className="text-[0.875rem] lg:text-[1rem] font-normal lg:mx-3.5 w-full lg:w-[23rem] text-[#444444] leading-relaxed text-justify">
                  Regular communication and collaboration is essential to the
                  RAD model process. We engage stakeholders and end users
                  throughout the development cycle, collect their feedback and
                  incorporate it into future iterations.
                </p>
              </div>
            </div>

            {/* Rapid Testing and Quality Assurance */}
            <div className="flex flex-col lg:flex-row rounded-2xl gap-4 lg:gap-36 p-4 lg:p-0">
              <div className="flex-shrink-0 flex justify-center lg:justify-start">
                <div className="flex items-center justify-center">
                  <div className="w-[18rem] h-[12rem] lg:w-[23.18rem] lg:h-[16.56rem] relative">
                    <Image
                      src="/images/AAD6.webp"
                      alt="JavaScript Stack"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full lg:w-[24.75rem] lg:my-[2.75rem] lg:mr-[5.31rem]">
                <p className="text-[1.125rem] lg:text-[1.5rem] mb-4 font-semibold lg:mt-2.5 lg:ml-3.5 text-[#232323]">
                  Rapid Testing and Quality Assurance
                </p>
                <p className="text-[0.875rem] lg:text-[1rem] font-normal lg:mx-3.5 w-full lg:w-[23rem] text-[#444444] leading-relaxed text-justify">
                  We prioritize testing and quality assurance in all phases of
                  the RAD model process. Through constant testing and timely
                  problem solving, we ensure that the application is stable and
                  reliable.
                </p>
              </div>
            </div>

            {/* Iteration Review and Refinement */}
            <div className="flex flex-col lg:flex-row rounded-2xl gap-4 lg:gap-36 p-4 lg:p-0">
              <div className="flex-shrink-0 flex justify-center lg:justify-start">
                <div className="flex items-center justify-center">
                  <div className="w-[18rem] h-[12rem] lg:w-[23.18rem] lg:h-[16.56rem] relative">
                    <Image
                      src="/images/AAD4.webp"
                      alt="JavaScript Stack"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full lg:w-[24.75rem] lg:my-[2.75rem] lg:mr-[5.31rem]">
                <p className="text-[1.125rem] lg:text-[1.5rem] mb-4 font-semibold lg:mt-2.5 lg:ml-3.5 text-[#232323]">
                  Iteration Review and Refinement
                </p>
                <p className="text-[0.875rem] lg:text-[1rem] font-normal lg:mx-3.5 w-full lg:w-[23rem] text-[#444444] leading-relaxed text-justify">
                  At the end of each iteration, we review the features developed
                  with stakeholders and end users. This feedback helps us
                  improve and improve the application to ensure that it meets
                  your requirements and expectations.
                </p>
              </div>
            </div>

            {/* Incremental Deployment */}
            <div className="flex flex-col lg:flex-row rounded-2xl gap-4 lg:gap-36 p-4 lg:p-0">
              <div className="flex-shrink-0 flex justify-center lg:justify-start">
                <div className="flex items-center justify-center">
                  <div className="w-[18rem] h-[12rem] lg:w-[23.18rem] lg:h-[16.56rem] relative">
                    <Image
                      src="/images/AAD7.webp"
                      alt="JavaScript Stack"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full lg:w-[24.75rem] lg:my-[2.75rem] lg:mr-[5.31rem]">
                <p className="text-[1.125rem] lg:text-[1.5rem] mb-4 font-semibold lg:mt-2.5 lg:ml-3.5 text-[#232323]">
                  Incremental Deployment
                </p>
                <p className="text-[0.875rem] lg:text-[1rem] font-normal lg:mx-3.5 w-full lg:w-[23rem] text-[#444444] leading-relaxed text-justify">
                  As each iteration is completed and reviewed, we gradually
                  introduce features so that you can begin to realize the
                  benefits of your application as you continue to evolve.
                </p>
              </div>
            </div>

            {/* Continuous Enhancement */}
            <div className="flex flex-col lg:flex-row rounded-2xl gap-4 lg:gap-36 p-4 lg:p-0">
              <div className="flex-shrink-0 flex justify-center lg:justify-start">
                <div className="flex items-center justify-center">
                  <div className="w-[18rem] h-[12rem] lg:w-[23.18rem] lg:h-[16.56rem] relative">
                    <Image
                      src="/images/IOS1.webp"
                      alt="JavaScript Stack"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full lg:w-[24.75rem] lg:my-[2.75rem] lg:mr-[5.31rem]">
                <p className="text-[1.125rem] lg:text-[1.5rem] mb-4 font-semibold lg:mt-2.5 lg:ml-3.5 text-[#232323]">
                  Continuous Enhancement
                </p>
                <p className="text-[0.875rem] lg:text-[1rem] font-normal lg:mx-3.5 w-full lg:w-[23rem] text-[#444444] leading-relaxed text-justify">
                  The RAD model process is a continuous cycle of development,
                  feedback and refinement. We are constantly iterating and
                  improving the application based on user feedback and evolving
                  needs to ensure it continues to improve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RAD Benefits Section using Flex */}
      <section className="px-4 lg:px-0">
        <div className="max-w-[90%] lg:max-w-[72.5rem] mx-auto">
          <h2 className="text-center text-[1.25rem] sm:text-[1.5rem] lg:text-[1.75rem] font-semibold text-[#000000] mb-15">
            Exploring the Key Benefits of the<br className="hidden lg:block" />
            <span className="lg:hidden"> </span>RAD Model Process
          </h2>
          <div className="flex flex-wrap justify-center gap-5 lg:gap-[3.12rem]">
            {[
              {
                title: "Accelerated Time-to-Market",
                desc: "Through rapid prototyping and iterative development, the RAD model process accelerates your app's time-to-market, ensuring your app reaches your target audience quickly.",
                img: "/images/MARD2.svg",
              },
              {
                title: "Flexibility and Adaptability",
                desc: "The iterative nature of the RAD modeling process allows you to flexibly adapt to changes and evolving requirements, ensuring the end product meets your dynamic business needs.",
                img: "/images/MARD1.svg",
              },
              {
                title: "Enhanced Collaboration and Stakeholder Involvement",
                desc: "The RAD model process encourages close collaboration between stakeholders, end users, and development teams. Their involvement throughout the process ensures that the app lives up to your vision and meets user expectations.",
                img: "/images/MARD3.svg",
              },
              {
                title: "Efficient Resource Allocation",
                desc: "The RAD model process optimizes resource allocation by breaking down projects into small steps. This enables efficient use of resources, reduced costs and increased productivity.",
                img: "/images/MARD5.svg",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[0.75rem] p-6 w-full max-w-[20rem] lg:w-[23.125rem] flex flex-col items-center text-center"
                style={{
                  boxShadow:
                    "1px 1px 4px rgba(0, 0, 0, 0.2), 8px 8px 18px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h3 className="font-semibold text-[1rem] lg:text-[1.25rem] mb-6">
                  {item.title}
                </h3>
                <div className="relative w-[10rem] h-[9rem] lg:w-[13.875rem] lg:h-[12.375rem] mb-6">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <p className="text-[0.875rem] lg:text-sm text-[#444444] leading-relaxed text-justify">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
