import { SkillBar } from 'react-skillbars';
const Skillbar = () => {
    const skills = [
        { type: 'OnP SEO', level: 100 },
        { type: 'Keyword', level: 85 },
        { type: 'SMM', level: 75 },
        { type: 'SEO', level: 50 },
        { type: 'OffP SEO', level: 25 },
        { type: 'Youtube', level: 20 }

      ];

      const colors = {
        bar: "#3498db",
        title: {
          text: "#fff",
          background: "#2980b9"
        }
      };
      
    return (
        <div className='container my-10 mx-auto rounded-lg w-11/12 bg-gray-600'>
            <SkillBar skills={skills} animationDelay={4000} colors={colors} />
        </div>
    );
};

export default Skillbar;