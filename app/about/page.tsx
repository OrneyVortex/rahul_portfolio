import FakeTerminalWindow from '../components/about/FakeTerminalWindow';
import Prompt from '../components/about/Prompt';
import { skills } from '../../lib/constants';

const SkillList = ({ title, items }: { title: string, items: string[] }) => (
  <>
    <li className="text-secondary font-semibold">{title}/</li>
    {items.map((item, index) => <li key={index}>{item}</li>)}
  </>
);

const About = () => {
  return (
    <div className="space-y-10 my-10 break-words">
      {/* general bio */}
      <FakeTerminalWindow>
        <Prompt content="cd aboutRahul/" />
        <Prompt directory="/aboutRahul" branch={true} content="cat README.md" />
        <p>
        I am currently in my final year of pursuing a B.Tech in Computer Science and Engineering (AI-ML) at ABES Engineering College, Ghaziabad, Uttar Pradesh, graduating in 2025. My technical skills include Python, JavaScript, C/C++, SQL, MongoDB, web development, machine learning, DevOps, and cloud platforms like AWS and Google Cloud. Presently, I am interning at DRDO, where I analyze extensive scientific data and execute in-depth literature reviews.
       </p>
        <p>
        I have a passion for chess, a game that enhances my strategic thinking skills. I also have a keen interest in cars. I excel in leadership, time management, adaptability, teamwork, and brainstorming, and I am a good leader. These soft skills enable me to effectively collaborate with others, manage projects efficiently, and adapt to new challenges and environments. My sharp-mindedness and dedication to continuous improvement drive me to excel in both my personal and professional endeavors.
        </p>
      </FakeTerminalWindow>

      {/* skills & tools */}
      <FakeTerminalWindow>
        <Prompt content="cd skillsAndTools/Proficient" />
        <Prompt directory='/skillsAndTools/Proficient' branch={true} content="ls" />
        <div className='flex justify-start flex-wrap md:justify-between'>
          <ul>
            <SkillList title="TheObvious" items={skills.theObvious} />
            <SkillList title="ToolsOfTheTrade" items={skills.toolsOfTheTrade} />
          </ul>
          <ul className="md:text-right">
            <SkillList title="LibrariesAndFrameworks" items={skills.librariesFrameworks} />
          </ul>
        </div>
      </FakeTerminalWindow>

      {/* hobbies / interests */}
      <FakeTerminalWindow>
        <Prompt content="cd HobbiesAndInterests/" />
        <Prompt directory='/HobbiesAndInterests' branch={true} content="ls" />
        <ul>
          <li>♟️ Playing Chess</li>
          <li>📚 Reading</li>
          <li>📺 Watching Movies</li>
          <li>👩🏻‍🌾 Gardening</li>
        </ul>
      </FakeTerminalWindow>
    </div>
  );
}

export default About;
