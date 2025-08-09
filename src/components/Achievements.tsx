import leetcode_logo from '../assets/leetcode_white.png';
import codeforces_logo from '../assets/codeforces_white.png';
import codechef_logo from '../assets/codechef_white.png';

const Achievements = () => {
  const achievements = [
    {
      logo: codeforces_logo,
      title: "Expert on Codeforces",
      description: "Expert-level competitive programmer with strong problem-solving and algorithmic skills",
      stat: "1610",
      label: "Max Rating",
      color: "primary",
      link: "https://codeforces.com/profile/sky-blue"
    },
    {
      logo: codechef_logo,
      title: "4⭐ on CodeChef",
      description: "Achieved 4-star rating through consistent performance in competitive programming contests",
      stat: "1895",
      label: "Max Rating",
      color: "accent",
      link: "https://www.codechef.com/users/skyy_blue"
    },
    {
      logo: leetcode_logo,
      title: "Top 2% on LeetCode",
      description: "Solved 500+ coding problems with consistent performance in the top 2 percentile",
      stat: "2061",
      label: "Max Rating",
      color: "primary",
      link: "https://leetcode.com/u/sky-blue"
    }
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-space text-3xl md:text-5xl font-bold mb-6">
            Achievements & <span className="bg-gradient-accent bg-clip-text text-transparent">Recognition</span>
          </h2>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="card-elegant p-8 rounded-xl hover:shadow-elegant transition-all duration-300 group hover:-translate-y-2 cursor-pointer"
              onClick={() => window.open(achievement.link, '_blank')}
            >
              <div className="flex items-start gap-6">
                {/* Logo Image */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300 ${
                  achievement.color === 'primary' 
                    ? 'bg-gradient-primary' 
                    : 'bg-gradient-accent'
                }`}>
                  <img 
                    src={achievement.logo} 
                    alt={achievement.title} 
                    className="w-10 h-10 object-contain"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <div className="space-y-2">
                    <h3 className="font-space text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${
                        achievement.color === 'primary' ? 'text-primary' : 'text-accent'
                      }`}>
                        {achievement.stat}
                      </div>
                      <div className="text-xs text-muted-foreground font-medium">
                        {achievement.label}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
