import { teamMembers } from "../../../public/team.json";
import { motion } from "framer-motion";
import Head from "next/head";
const MemberDetail = ({ member }) => {
  if (!member) return <p>Team member not found.</p>;

  return (
    <>
    <Head>
      <title>Team Member</title>
    </Head>
      <motion.main className="py-16 px-8 lg:px-24">
        <motion.div className="flex flex-wrap justify-center items-center">
          <motion.div className="w-full md:w-1/2 px-8 mb-8 md:mb-0">
            <img
              src={member.image}
              alt={member.name}
              className="rounded-lg w-full"
            />
          </motion.div>
          <motion.div className="w-full md:w-1/2 px-8">
            <h1 className="text-4xl mb-4">{member.name}</h1>
            <h2 className="text-2xl mb-8 text-gray-600">{member.position}</h2>
            <div className="text-gray-700">{member.about}</div>
          </motion.div>
        </motion.div>
      </motion.main>
    </>
  );
};

export async function getStaticPaths() {
  // Make sure to check if teamMembers is defined and is an array
  const paths =
    teamMembers?.map((member) => ({
      params: { memberName: member.name },
    })) || [];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Check if teamMembers is defined before trying to find a member
  const member = teamMembers
    ? teamMembers.find((m) => m.name === params.memberName)
    : null;

  return { props: { member } };
}

export default MemberDetail;
