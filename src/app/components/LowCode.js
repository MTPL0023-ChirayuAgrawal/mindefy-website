"use client";

import Image from "next/image";

export default function LowCode() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Matching the provided image */}
      <section className="mt-20 lg:mt-28 px-4 sm:px-6 lg:px-0">
        <div className="mx-auto text-center">
          {/* Header Tag */}
          <p className="text-[#FF5225] text-sm lg:text-[1rem] font-bold tracking-widest uppercase mb-4 lg:mb-[1.25rem]">
            Low Code Development
          </p>

          {/* Main Title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[2.25rem] font-semibold text-[#000000] mb-6 lg:mb-7 leading-tight max-w-full sm:max-w-2xl lg:max-w-[50rem] mx-auto">
            <span className="font-normal">Transforming </span>Development
            <span className="font-normal"> with </span>Mindefy's Low-Code
            Platform
          </h1>

          {/* Description Paragraphs */}
          <div className="max-w-full sm:max-w-2xl lg:max-w-[61.375rem] font-normal mx-auto mb-6 lg:mb-[2.25rem] text-justify space-y-4 lg:space-y-[1.25rem]">
            <p className="text-sm lg:text-[1rem] text-[#444444] leading-relaxed">
              Experience the incredible possibilities of Low-Code Platform
              Development with Mindefy, where we offer cutting-edge solutions
              tailored to your needs. As a renowned leader in Low-Code
              development services, we excel in leveraging the capabilities of
              platforms like OutSystems, Appian, ServiceNow, Zoho Creator, and
              Magic XPA to provide you with fast, adaptable, and ingenious
              software solutions. Embrace Mindefy to unleash the true power of
              Low-Code platforms and transform your application development
              process.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative w-full max-w-full mx-auto mb-6 lg:mb-6">
            <div className="relative h-48 sm:h-64 md:h-80 lg:h-[30.125rem]">
              <Image
                src="/images/ARD.webp"
                alt="Web Application Development - Developer working with web applications"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          
          <div className="max-w-full sm:max-w-2xl lg:max-w-[60.25rem] mx-auto mb-12 lg:mb-20">
            <p className="text-justify text-sm lg:text-[1rem] font-normal text-[#444444]">
              Low-Code Platform Development offers a powerful solution by
              enabling the rapid creation and deployment of enterprise-grade
              applications with minimal hand-coding. These platforms provide a
              visual development environment, pre-built components, and easy
              integration capabilities, empowering both professional developers
              and citizen developers to build robust applications faster than
              ever before.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-full sm:max-w-2xl lg:max-w-[60.25rem] mb-12 lg:mb-[5rem] px-4 sm:px-6 lg:px-0">
        <div className="text-[#000000] text-lg sm:text-xl lg:text-[1.5rem] font-semibold mb-4 lg:mb-6">
          <p>
            Collaborate with Mindefy for Low-Code<br className="hidden lg:block"></br>Platform Excellence
          </p>
        </div>
        <div className="font-normal text-sm lg:text-[1rem] text-justify text-[#444444] space-y-4 lg:space-y-5">
          <p>
            By partnering with Mindefy, you gain a trusted technology partner
            committed to your success.Whether you need to build custom
            applications, automate workflows, enhance customer experiences, or
            streamline business processes, our team will work closely with you
            to understand your needs and craft innovative solutions using the
            best-suited Low-Code platform for your project.
          </p>
          <p>
            We bring a wealth of experience in Low-Code Platform Development,
            ensuring that your applications are developed efficiently, with the
            highest quality standards.
          </p>
        </div>
      </div>

      {/* React and Angular Detailed Section */}
      <section className="px-4 sm:px-6 lg:px-0">
        <div className="max-w-full lg:max-w-[72.5rem] mx-auto">
          {/* Header Illustration */}
          <div className="mb-12 lg:mb-[5rem]">
            <div className="relative w-full max-w-full mx-auto mb-12 lg:mb-[7.25rem]">
              <div className="relative h-48 sm:h-64 md:h-80 lg:h-[30.125rem]">
                <Image
                  src="/images/IOS.webp"
                  alt="MEAN MERN Stack Development - Developer working with web applications"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEAN and MERN Advantages Section */}
      <section className="mt-12 lg:mt-24 px-4 sm:px-6 lg:px-0">
        <div className="max-w-full lg:max-w-[62.5rem] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 lg:mb-[2.5rem]">
            <h2 className="text-lg sm:text-xl lg:text-[1.75rem] font-semibold text-[#000000] mb-4">
              Why Low-Code Platform Development ?
            </h2>
          </div>

          {/* Advantages Content */}
          <div className="flex flex-col gap-6 lg:gap-[2.75rem] max-w-full lg:max-w-[60.375rem] mx-auto">
            {/* Full JavaScript Stack */}
            <div className="flex flex-col lg:flex-row bg-[#E5F8FB] rounded-2xl overflow-hidden">
              <div className="flex-1 p-4 sm:p-6 lg:p-0 lg:w-[36.06rem] lg:my-[3rem] lg:ml-2.5 order-2 lg:order-1">
                <h3 className="text-base sm:text-lg lg:text-[1.5rem] font-semibold text-[#000000] mb-3 lg:mb-4">
                  Accelerated Application Delivery
                </h3>
                <p className="text-sm lg:text-[1rem] text-[#444444] leading-relaxed text-justify lg:max-w-[34.312rem]">
                  Low-Code platforms allow for rapid application development,
                  significantly reducing time-to-market. With visual modeling
                  and pre-built components, developers can quickly assemble
                  applications, reducing the need for extensive coding and
                  streamlining the development process.
                </p>
              </div>
              <div className="flex-shrink-0 order-1 lg:order-2 flex justify-center items-center p-4 lg:p-0">
                <div className="w-32 h-24 sm:w-40 sm:h-32 lg:w-[23.18rem] lg:h-[16.56rem] lg:my-2.5 relative">
                  <Image
                    src="/images/MARD2.svg"
                    alt="JavaScript Stack"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Scalability and Performance */}
            <div className="flex flex-col lg:flex-row overflow-hidden">
              <div className="flex-shrink-0 order-1 flex justify-center items-center p-4 lg:p-0">
                <div className="w-32 h-24 sm:w-40 sm:h-32 lg:w-[23.18rem] lg:h-[16.56rem] lg:my-2.5 relative">
                  <Image
                    src="/images/MARD3.svg"
                    alt="Performance"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 p-4 sm:p-6 lg:p-0 lg:w-[36.06rem] lg:my-[3rem] lg:ml-2.5 order-2">
                <h3 className="text-base sm:text-lg lg:text-[1.5rem] font-semibold text-[#000000] mb-3 lg:mb-4">
                  Enhanced Productivity
                </h3>
                <p className="text-sm lg:text-[1rem] text-[#444444] leading-relaxed text-justify lg:max-w-[34.312rem]">
                  By abstracting away complex coding tasks, Low-Code platforms
                  enable developers to focus on solving business challenges and
                  delivering value. This increased productivity translates into
                  faster development cycles, reduced costs, and improved
                  efficiency.
                </p>
              </div>
            </div>

            {/* Rapid Development */}
            <div className="flex flex-col lg:flex-row bg-[#E5F8FB] rounded-2xl overflow-hidden">
              <div className="flex-1 p-4 sm:p-6 lg:p-0 lg:w-[36.06rem] lg:my-[3rem] lg:ml-2.5 order-2 lg:order-1">
                <h3 className="text-base sm:text-lg lg:text-[1.5rem] font-semibold text-[#000000] mb-3 lg:mb-4">
                  Scalability and Future-Proofing
                </h3>
                <p className="text-sm lg:text-[1rem] text-[#444444] leading-relaxed text-justify lg:max-w-[34.312rem]">
                  Low-Code platforms are designed to support scalability and
                  growth. As your business evolves, these platforms provide the
                  flexibility to scale applications, handle increased user
                  loads, and incorporate new features and functionalities.
                </p>
              </div>
              <div className="flex-shrink-0 order-1 lg:order-2 flex justify-center items-center p-4 lg:p-0">
                <div className="w-32 h-24 sm:w-40 sm:h-32 lg:w-[23.18rem] lg:h-[16.56rem] lg:my-2.5 relative">
                  <Image
                    src="/images/IOS1.webp"
                    alt="Rapid Development"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Code Reusability */}
            <div className="flex flex-col lg:flex-row overflow-hidden">
              <div className="flex-shrink-0 order-1 flex justify-center items-center p-4 lg:p-0">
                <div className="w-32 h-24 sm:w-40 sm:h-32 lg:w-[23.18rem] lg:h-[16.56rem] lg:my-2.5 relative">
                  <Image
                    src="/images/WAD1.svg"
                    alt="Code Reusability"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 p-4 sm:p-6 lg:p-0 lg:w-[36.06rem] lg:my-[3rem] lg:ml-2.5 order-2">
                <h3 className="text-base sm:text-lg lg:text-[1.5rem] font-semibold text-[#000000] mb-3 lg:mb-4">
                  Flexibility and Agility
                </h3>
                <p className="text-sm lg:text-[1rem] text-[#444444] leading-relaxed text-justify lg:max-w-[34.312rem]">
                  Low-Code platforms offer flexibility in adapting to changing
                  business requirements. With visual modeling and drag-and-drop
                  capabilities, developers can easily modify and iterate on
                  applications, allowing for quick adjustments and updates as
                  needed.
                </p>
              </div>
            </div>

            {/* Flexibility and Extensibility */}
            <div className="flex flex-col lg:flex-row rounded-2xl bg-[#E5F8FB] overflow-hidden">
              <div className="flex-1 p-4 sm:p-6 lg:p-0 lg:w-[36.06rem] lg:my-[3rem] lg:ml-2.5 order-2 lg:order-1">
                <h3 className="text-base sm:text-lg lg:text-[1.5rem] font-semibold text-[#000000] mb-3 lg:mb-4">
                  Seamless Integration
                </h3>
                <p className="text-sm lg:text-[1rem] text-[#444444] leading-relaxed text-justify lg:max-w-[34.312rem]">
                  Low-Code platforms provide robust integration capabilities,
                  allowing for seamless integration with existing systems and
                  third-party applications. This enables organizations to
                  leverage their existing IT investments and extend the
                  functionality of their applications.
                </p>
              </div>
              <div className="flex-shrink-0 order-1 lg:order-2 flex justify-center items-center p-4 lg:p-0">
                <div className="w-32 h-24 sm:w-40 sm:h-32 lg:w-[23.18rem] lg:h-[16.56rem] lg:my-2.5 relative">
                  <Image
                    src="/images/ARD1.webp"
                    alt="Flexibility"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise in Low-Code Platform Development Section */}
      <section className="mt-12 lg:mt-20 px-4 sm:px-6 lg:px-0">
        <div className="max-w-full lg:max-w-[62.5rem] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 lg:mb-[2.25rem]">
            <h2 className="text-lg sm:text-xl lg:text-[2rem] font-semibold text-[#000000] mb-4">
              Our Expertise in Low-Code Platform<br className="hidden lg:block"></br> Development
            </h2>
            <p className="text-sm lg:text-[1rem] text-[#444444] leading-relaxed max-w-full lg:max-w-[60rem] mx-auto text-justify">
              At Mindefy, we have a team of experienced Low-Code developers
              proficient in platforms such as OutSystems, Appian, ServiceNow,
              Zoho Creator, and Magic XPA. We leverage our expertise to deliver
              tailored solutions that align with your business goals and
              requirements.With Mindefy, you can unlock the full potential of
              Low-Code platforms and revolutionize your application development
              journey.
            </p>
          </div>

          {/* Platform Cards */}
          <div className="flex flex-col gap-4 lg:gap-[1.875rem] max-w-full lg:max-w-[62.5rem] mx-auto mb-12 lg:mb-[3.75rem]">
            {/* OutSystems */}
            <div className="flex flex-col lg:flex-row items-start bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:block p-4 lg:p-0">
                <div className="w-32 h-24 sm:w-40 sm:h-32 lg:w-[16.18rem] lg:h-[13.875rem] lg:my-2.5 relative">
                  <Image
                    src="/images/LC1.webp"
                    alt="OutSystems Platform"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 p-4 lg:mx-2.5">
                <h3 className="text-base sm:text-lg lg:text-[1.25rem] lg:mt-2.5 font-semibold text-[#000000] mb-3 lg:mb-4">
                  OutSystems: Accelerate Your Digital Transformation
                </h3>
                <p className="text-sm lg:text-[1rem] font-normal text-[#444444] leading-relaxed text-justify mb-4 lg:mb-12">
                  OutSystems is a robust Low-Code platform that enables
                  organizations to build, deploy, and manage enterprise
                  applications with speed and agility. It works with its visual
                  development environment and built-in features, OutSystems
                  empowers both professional developers and citizen developers
                  to collaborate and deliver applications rapidly. Partnering
                  with Mindefy for OutSystems development ensures a seamless and
                  efficient digital transformation journey for your
                  organization.
                </p>
              </div>
            </div>

            {/* Appian */}
            <div className="flex flex-col lg:flex-row items-start bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:block p-4 lg:p-0">
                <div className="w-32 h-24 sm:w-40 sm:h-32 lg:w-[16.18rem] lg:h-[13.875rem] lg:my-2.5 relative">
                  <Image
                    src="/images/LC2.webp"
                    alt="Appian Platform"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 p-4 lg:mx-2.5">
                <h3 className="text-base sm:text-lg lg:text-[1.25rem] lg:mt-2.5 font-semibold text-[#000000] mb-3 lg:mb-4">
                  Appian: Drive Business Process Automation
                </h3>
                <p className="text-sm lg:text-[1rem] font-normal text-[#444444] leading-relaxed text-justify mb-4 lg:mb-12">
                  Appian is a powerful Low-Code platform that combines business
                  process management, artificial intelligence, and low-code
                  development capabilities. With Appian, you can streamline and
                  automate complex business processes, enhance collaboration,
                  and deliver exceptional customer experiences. Mindefy's
                  expertise in Appian development enables you to leverage the
                  platform's capabilities to drive efficiency and innovation
                  within your organization.
                </p>
              </div>
            </div>

            {/* ServiceNow */}
            <div className="flex flex-col lg:flex-row items-start bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:block p-4 lg:p-0">
                <div className="w-32 h-24 sm:w-40 sm:h-32 lg:w-[16.18rem] lg:h-[13.875rem] lg:my-2.5 relative">
                  <Image
                    src="/images/LC3.svg"
                    alt="ServiceNow Platform"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 p-4 lg:mx-2.5">
                <h3 className="text-base sm:text-lg lg:text-[1.25rem] lg:mt-2.5 font-semibold text-[#000000] mb-3 lg:mb-4">
                  ServiceNow: Transform IT Service Management
                </h3>
                <p className="text-sm lg:text-[1rem] font-normal text-[#444444] leading-relaxed text-justify mb-4 lg:mb-12">
                  ServiceNow is a leading Low-Code platform for IT service
                  management (ITSM) and digital workflows. With ServiceNow, you
                  can streamline IT operations, automate service requests, and
                  improve employee productivity. Mindefy's ServiceNow
                  development services help you leverage this platform's
                  features to optimize IT service delivery, enhance customer
                  satisfaction, and drive organizational growth.
                </p>
              </div>
            </div>

            {/* Zoho Creator */}
            <div className="flex flex-col lg:flex-row items-start bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:block p-4 lg:p-0">
                <div className="w-32 h-24 sm:w-40 sm:h-32 lg:w-[16.18rem] lg:h-[13.875rem] lg:my-2.5 relative">
                  <Image
                    src="/images/LC4.svg"
                    alt="Zoho Creator Platform"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 p-4 lg:mx-2.5">
                <h3 className="text-base sm:text-lg lg:text-[1.25rem] lg:mt-2.5 font-semibold text-[#000000] mb-3 lg:mb-4">
                  Zoho Creator: Build Custom Business Applications
                </h3>
                <p className="text-sm lg:text-[1rem] font-normal text-[#444444] leading-relaxed text-justify mb-4 lg:mb-12">
                  Zoho Creator is a versatile Low-Code platform that empowers
                  businesses to create custom applications without extensive
                  coding. With its intuitive drag-and-drop interface and
                  powerful features, Zoho Creator allows for rapid application
                  development, data management, and workflow automation. At
                  Mindefy, we harness the potential of Zoho Creator to deliver
                  tailored solutions that meet your unique business requirements
                  and drive operational efficiency.
                </p>
              </div>
            </div>

            {/* Magic XPA */}
            <div className="flex flex-col lg:flex-row items-start bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:block p-4 lg:p-0">
                <div className="w-32 h-24 sm:w-40 sm:h-32 lg:w-[16.18rem] lg:h-[13.875rem] lg:my-2.5 relative">
                  <Image
                    src="/images/LC5.svg"
                    alt="Magic XPA Platform"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 p-4 lg:mx-2.5">
                <h3 className="text-base sm:text-lg lg:text-[1.25rem] lg:mt-2.5 font-semibold text-[#000000] mb-3 lg:mb-4">
                  Magic XPA: Accelerate Enterprise Application Development
                </h3>
                <p className="text-sm lg:text-[1rem] font-normal text-[#444444] leading-relaxed text-justify mb-4 lg:mb-12">
                  Magic XPA is a comprehensive Low-Code platform that enables
                  rapid development of enterprise applications for web, mobile,
                  and desktop environments. With its model-driven development
                  approach and pre-built components, Magic XPA simplifies the
                  development process and reduces time-to-market. Mindefy's
                  expertise in Magic XPA development ensures seamless
                  application delivery, efficient system integration and optimal
                  performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
