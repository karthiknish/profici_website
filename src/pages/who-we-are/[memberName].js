import { motion } from "framer-motion";
import Head from "next/head";
const MemberDetail = ({ member }) => {
  if (!member) return <p>Team member not found.</p>;
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <>
      <Head>
        <title>Team Member</title>
      </Head>
      <motion.main
        className="py-16 px-8 lg:px-24"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
      >
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
  const teamMembersModule = await import("../../team.json");
  const teamMembers = teamMembersModule.default;
  const paths =
    teamMembers?.map((member) => {
      const firstName = member.name.split(" ")[0].toLowerCase(); // Get the first name and make it lower case
      return {
        params: { memberName: firstName },
      };
    }) || [];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const teamMembersModule = await import("../../team.json");
  const teamMembers = teamMembersModule.default;
  const member = teamMembers
    ? teamMembers.find((m) => {
        const firstName = m.name.split(" ")[0].toLowerCase();
        // Get the first name and make it lower case
        return firstName === params.memberName;
      })
    : null;

  return { props: { member } };
}

export default MemberDetail;
