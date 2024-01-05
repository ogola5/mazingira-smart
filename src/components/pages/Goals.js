import React from "react";
import "../styles/welcome.css"; // Import the CSS file for styling
import { MdRecycling } from "react-icons/md";
import { FaFolder, FaTree, FaHandshake, FaHandPeace } from "react-icons/fa";

const Goals = () => {
  return (
    <div class="px-[18px] lg:px-0 lg:mb-[120px] pb-2 mx-auto max-w-7xl sm:px-0">
      <h3 class="text-center text-[28px] leading-10 lg:text-subtitle text-#0A033C font-bold">
        At Mazingira
      </h3>
      <div class="pt-5 mx-auto text-center lg:px-0 lg:max-w-5xl">
        <p class="text-[#5D5A6F] font-base">
          We aim to promote environmental stewardship and sustainability
        </p>
      </div>
      <ul class="grid grid-cols-1 gap-8 mt-10 text-sm sm:mt-10 sm:grid-cols-1 md:gap-y-5 lg:max-w-none lg:grid-cols-5">
        <li class="flex flex-col items-center px-5 py-10 text-center ease-in-out bg-white rounded hover:shadow-card hover:transition">
          <FaTree size={80} />
          <h3 class="py-5 text-2xl font-semibold text-gray-600">
            Afforestation and Reafforestation
          </h3>
          <p class="text-[15px] font-normal leading-7 text-[#5D5A6F]">
            We aim to plant 100,000 trees annually to restore critical
            ecosystems, encourage biodiversity, and promote economic empowerment
            through fruit farming and climate-smart agriculture.
          </p>
        </li>
        <li class="flex flex-col items-center px-5 py-10 text-center ease-in-out bg-white rounded hover:shadow-card hover:transition">
          <MdRecycling size={80} />
          <h3 class="py-5 text-2xl font-semibold text-gray-600">Recycling</h3>
          <p class="text-[15px] font-normal leading-7 text-[#5D5A6F]">
            Spearhead innovative recycling programs in communities, promoting
            sustainable waste management and encouraging the use of recycled
            products.
          </p>
        </li>
        <li class="flex flex-col items-center px-5 py-10 text-center ease-in-out bg-white rounded hover:shadow-card hover:transition">
          <FaFolder size={80} />
          <h3 class="py-5 text-2xl font-semibold text-gray-600">Advocacy</h3>
          <p class="text-[15px] font-normal leading-7 text-[#5D5A6F]">
            Amplify our climate change advocacy efforts, reaching individuals,
            communities, and organizations annually through educational
            campaigns, conferences, and partnerships to drive meaningful policy
            changes and behavioral shifts.
          </p>
        </li>
        <li class="flex flex-col items-center px-5 py-10 text-center ease-in-out bg-white rounded hover:shadow-card hover:transition">
          <FaHandshake size={80} />
          <h3 class="py-5 text-2xl font-semibold text-gray-600">
            Socioeconomic Empowerment
          </h3>
          <p class="text-[15px] font-normal leading-7 text-[#5D5A6F]">
            Empower youth and women each year through skill-building programs
            and initiatives that promote environmental entrepreneurship,
            socioeconomic independence, and leadership in sustainability.
          </p>
        </li>
        <li class="flex flex-col items-center px-5 py-10 text-center ease-in-out bg-white rounded hover:shadow-card hover:transition">
          {/* <img src="/static/icons/ic_edu4.svg" alt="" /> */}
          <FaHandPeace size={80} />
          <h3 class="py-5 text-2xl font-semibold text-gray-600">
            Adaptation and Mitigation
          </h3>
          <p class="text-[15px] font-normal leading-7 text-[#5D5A6F]">
            Implement and support local and global projects that focus on
            climate resilience, adaptation, and mitigation, particularly in
            vulnerable communities, ensuring they are better prepared to face
            climate-related challenges.
          </p>
        </li>
      </ul>
    </div>
  );
};
export default Goals;
