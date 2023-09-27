import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

export default function WhoWeAre({ teamMembers }) {
  return (
    <>
      <Head>
        <title>Who We Are</title>
      </Head>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="py-16 px-4 sm:px-8 lg:px-24"
      >
        <h1 className="text-4xl mb-2 text-center">Who We Are</h1>
        <p className="text-center mb-12 text-gray-600">
          Part family, part well-oiled machine; our team is a close-knit group
          of talented individuals who collaborate to craft bold designs through
          a proven process – including equal parts strategy and design. Our goal
          is to support, enhance and amplify your brand by designing meaningful
          user experiences that are authentic to your brand’s voice and culture.
        </p>

        <div className="grid mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {teamMembers.map((member) => (
            <Link
              className="block bg-white shadow-lg rounded-lg overflow-hidden hover:opacity-80 transition-opacity duration-200"
              key={member.name}
              href={`/who-we-are/${encodeURIComponent(
                member.name
              ).toLowerCase()}`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full object-cover"
              />
              <div className="p-4 sm:p-6">
                <h2 className="text-2xl mb-2">{member.name}</h2>
                <p className="text-lg text-gray-600">{member.position}</p>
              </div>
            </Link>
          ))}
        </div>
      </motion.main>
    </>
  );
}

export async function getStaticProps() {
  const teamMembers = await import("../../../public/team.json");
  return {
    props: {
      teamMembers: teamMembers.default,
    },
  };
}
