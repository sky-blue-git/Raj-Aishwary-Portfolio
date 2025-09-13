import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-space text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Education</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Education Card */}
          <div className="card-elegant p-8 md:p-12 rounded-2xl hover:shadow-elegant transition-all duration-300 group hover:-translate-y-2">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              {/* University Logo */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="h-10 w-10 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="space-y-3">
                  <h3 className="font-space text-2xl md:text-3xl font-bold text-foreground">
                    Bachelor of Technology
                  </h3>
                  <h4 className="text-xl font-semibold bg-gradient-accent bg-clip-text text-transparent">
                    Computer Science & Engineering
                  </h4>
                  <h5 className="text-lg text-muted-foreground font-medium">
                    Lovely Professional University (LPU)
                  </h5>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>2020 - 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    <span>Phagwara, Punjab</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    <span>CGPA: 8.10/10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;