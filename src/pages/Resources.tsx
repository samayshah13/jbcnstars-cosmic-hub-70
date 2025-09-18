import React from "react"
import Layout from "@/components/Layout"
import { Download, FileText, Clock, Users, Star, BookOpen, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Resources = () => {
  const pastPapers = {
    "2024": {
      individual: [
        {
          title: "Individual Round - Junior Level",
          grade: "Grades 6-7", 
          level: "Junior",
          difficulty: "Foundation",
          downloadUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfHFEkyMqGQvm2OGK5f5NWtgWBQwQmkm4ioRnI6q23wskImtg/viewform?usp=dialog"
        },
        {
          title: "Individual Round - Intermediate Level",
          grade: "Grades 8-10",
          level: "Intermediate", 
          difficulty: "Intermediate",
          downloadUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfqyLeCYHjWleBKEmXfUSHY_q-Cn5Lg_C2NS6d4muFFD-Wf5w/viewform?usp=header"
        },
        {
          title: "Individual Round - Senior Level",
          grade: "Grades 11-12",
          level: "Senior",
          difficulty: "Advanced", 
          downloadUrl: "https://docs.google.com/forms/d/e/1FAIpQLSd9wXQlRYaAUvBdRlKgYwV-nm2dWYnPN7p8DfqZ2hiS500YUw/viewform?usp=header"
        }
      ],
      team: [
        {
          title: "Team Round - Junior Level",
          grade: "Grades 6-7",
          level: "Junior",
          difficulty: "Collaborative",
          questionPaper: "https://drive.google.com/file/d/15mP7qvnKBKyQHBgB8GxmCU93kDctRaXe/view?usp=drivesdk",
          markScheme: "https://drive.google.com/file/d/1oQL1GetEENGA1v0i9JTPqNL7i8BORRlE/view?usp=drivesdk"
        },
        {
          title: "Team Round - Intermediate Level", 
          grade: "Grades 8-10",
          level: "Intermediate",
          difficulty: "Collaborative",
          questionPaper: "https://drive.google.com/file/d/1v51-2m9d6jau7TKZpmXydnUtx0ZdwetA/view?usp=drivesdk",
          markScheme: "https://drive.google.com/file/d/1rGuBHQKQeOSSLEIZXwffEDqXLYwdIske/view?usp=drivesdk"
        },
        {
          title: "Team Round - Senior Level",
          grade: "Grades 11-12", 
          level: "Senior",
          difficulty: "Advanced",
          questionPaper: "https://drive.google.com/file/d/1oz_YXm9wUF8NuDSNlZLa9Ffhs9tbFmtO/view?usp=drivesdk",
          markScheme: "https://drive.google.com/file/d/16gyQ-tV-214BVgpmYW7Lg9ovzIww44vy/view?usp=drivesdk"
        }
      ]
    },
    "2023": {
      individual: [
        {
          title: "Individual Round - Junior Level",
          grade: "Grades 6-7",
          level: "Junior", 
          difficulty: "Foundation",
          downloadUrl: "https://drive.google.com/file/d/1lOJT5HY2fMjfKw5ejH2Egk-SnxFWkQTH/view?usp=drivesdk"
        },
        {
          title: "Individual Round - Intermediate Level",
          grade: "Grades 8-10",
          level: "Intermediate",
          difficulty: "Intermediate", 
          downloadUrl: "https://drive.google.com/file/d/12thT1Uhn8sQuL7br3ZhTReJTuwT_l2lr/view?usp=drivesdk"
        },
        {
          title: "Individual Round - Senior Level",
          grade: "Grades 11-12",
          level: "Senior",
          difficulty: "Advanced",
          downloadUrl: "https://drive.google.com/file/d/1QE3qFKtn7H0PTWQcJDJUuJ4VAvkFQCnk/view?usp=drivesdk"
        }
      ],
      team: [
        {
          title: "Team Round - Junior Level",
          grade: "Grades 6-7",
          level: "Junior",
          difficulty: "Collaborative",
          downloadUrl: "https://drive.google.com/file/d/1u9wZJZTtW8nh8JooQCQInqBn5cxJ1QMB/view?usp=drivesdk"
        },
        {
          title: "Team Round - Intermediate Level",
          grade: "Grades 8-10", 
          level: "Intermediate",
          difficulty: "Collaborative",
          downloadUrl: "https://drive.google.com/file/d/1L65LrjO1ZZhQY1S0ZYTWhBdHufhlZ8e-/view?usp=drivesdk"
        },
        {
          title: "Team Round - Senior Level",
          grade: "Grades 11-12",
          level: "Senior",
          difficulty: "Advanced",
          downloadUrl: "https://drive.google.com/file/d/1OvMHfHo6-_4D-CfW_4rZGMEHtN0dFsqE/view?usp=drivesdk"
        }
      ]
    }
  }

  const studyGuides = [
    {
      title: "Mathematical Problem-Solving Strategies",
      description: "Comprehensive guide covering various problem-solving techniques",
      pages: "45 pages",
      category: "Strategy Guide",
      level: "All Levels"
    },
    {
      title: "Quick Reference Formulas",
      description: "Essential formulas and concepts for each grade level", 
      pages: "12 pages",
      category: "Reference",
      level: "Grade Specific"
    },
    {
      title: "Time Management Techniques",
      description: "Master the art of efficient problem-solving under pressure",
      pages: "20 pages", 
      category: "Skills",
      level: "All Levels"
    },
    {
      title: "Common Mistakes to Avoid",
      description: "Learn from past participants' mistakes and improve your accuracy",
      pages: "25 pages",
      category: "Tips & Tricks",
      level: "All Levels"
    }
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'foundation': return 'bg-green-100 text-green-800 border-green-200'
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'advanced': return 'bg-red-100 text-red-800 border-red-200'
      case 'collaborative': return 'bg-blue-100 text-blue-800 border-blue-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <Layout>
      <div className="py-16 sm:py-20 grid-bg">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
              Resources & <span className="text-primary">Past Papers</span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground-muted max-w-3xl mx-auto px-4">
              Access previous years' question papers, solutions, and study materials to 
              prepare effectively for JBCN Stars competition.
            </p>
          </div>

          {/* Registration Section */}
          <div className="mb-20">
            <Card className="max-w-3xl mx-auto bg-primary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Register for JBCN STARS 2025</h2>
                <p className="text-foreground-muted mb-6">
                  Ready to showcase your mathematical prowess? Register now for the most prestigious 
                  mathematics competition for grades 6-12.
                </p>
                <Button 
                  className="px-8 py-4 text-lg font-semibold" 
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSc4E24X8duHNVdaE7vyYHLVRx2p7aZ13Dxy8lmRPhGMOe43wA/viewform?usp=dialog&urp=gmail_link', '_blank')}
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Register Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Past Papers Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">
              Previous <span className="text-primary">Question Papers</span>
            </h2>
            
            <Tabs defaultValue="2024" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="2024">2024 Papers</TabsTrigger>
                <TabsTrigger value="2023">2023 Papers</TabsTrigger>
              </TabsList>
              
              {Object.entries(pastPapers).map(([year, yearPapers]) => (
                <TabsContent key={year} value={year}>
                  <div className="space-y-8">
                    {/* Individual Round */}
                    <div>
                      <h3 className="text-2xl font-bold mb-6 text-center">
                        <span className="text-primary">Individual Round</span> - {year}
                      </h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {yearPapers.individual.map((paper, index) => (
                          <Card 
                            key={index}
                            className="card-glow group"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            <CardHeader>
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <CardTitle className="text-lg mb-2">{paper.title}</CardTitle>
                                  <div className="flex flex-wrap gap-2 mb-3">
                                    <Badge variant="outline" className="text-xs">
                                      {paper.grade}
                                    </Badge>
                                    <Badge className={`text-xs ${getDifficultyColor(paper.difficulty)}`}>
                                      {paper.difficulty}
                                    </Badge>
                                  </div>
                                </div>
                                <FileText className="w-8 h-8 text-primary flex-shrink-0" />
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-3 mb-6">
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-foreground-muted">Level:</span>
                                  <span className="font-medium">{paper.level}</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-foreground-muted">Year:</span>
                                  <span className="font-medium">{year}</span>
                                </div>
                              </div>
                              
                              <Button 
                                className="w-full group-hover:bg-primary/90 transition-colors"
                                onClick={() => window.open(paper.downloadUrl, '_blank')}
                                disabled={paper.downloadUrl === "#"}
                              >
                                <Download className="w-4 h-4 mr-2" />
                                {paper.downloadUrl === "#" ? "Coming Soon" : "Download PDF"}
                              </Button>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Team Round */}
                    <div>
                      <h3 className="text-2xl font-bold mb-6 text-center">
                        <span className="text-primary">Team Round</span> - {year}
                      </h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {yearPapers.team.map((paper, index) => (
                          <Card 
                            key={index}
                            className="card-glow group"
                            style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                          >
                            <CardHeader>
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <CardTitle className="text-lg mb-2">{paper.title}</CardTitle>
                                  <div className="flex flex-wrap gap-2 mb-3">
                                    <Badge variant="outline" className="text-xs">
                                      {paper.grade}
                                    </Badge>
                                    <Badge className={`text-xs ${getDifficultyColor(paper.difficulty)}`}>
                                      {paper.difficulty}
                                    </Badge>
                                  </div>
                                </div>
                                <Users className="w-8 h-8 text-primary flex-shrink-0" />
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-3 mb-6">
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-foreground-muted">Level:</span>
                                  <span className="font-medium">{paper.level}</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-foreground-muted">Year:</span>
                                  <span className="font-medium">{year}</span>
                                </div>
                              </div>
                              
                              {/* For 2024 team rounds with separate question paper and mark scheme */}
                              {year === "2024" && paper.questionPaper && paper.markScheme ? (
                                <div className="space-y-2">
                                  <Button 
                                    className="w-full group-hover:bg-primary/90 transition-colors"
                                    onClick={() => window.open(paper.questionPaper, '_blank')}
                                  >
                                    <Download className="w-4 h-4 mr-2" />
                                    Download Question Paper
                                  </Button>
                                  <Button 
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => window.open(paper.markScheme, '_blank')}
                                  >
                                    <Download className="w-4 h-4 mr-2" />
                                    Download Mark Scheme
                                  </Button>
                                </div>
                              ) : (
                                <Button 
                                  className="w-full group-hover:bg-primary/90 transition-colors"
                                  onClick={() => window.open(paper.downloadUrl, '_blank')}
                                  disabled={paper.downloadUrl === "#"}
                                >
                                  <Download className="w-4 h-4 mr-2" />
                                  {paper.downloadUrl === "#" ? "Coming Soon" : "Download Paper"}
                                </Button>
                              )}
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Statistics */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">
              Resource <span className="text-primary">Statistics</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center bg-card border-card-border">
                <CardContent className="p-6">
                  <div className="text-3xl font-black text-primary mb-2">25+</div>
                  <p className="text-foreground-muted text-sm">Question Papers</p>
                </CardContent>
              </Card>
              
              <Card className="text-center bg-card border-card-border">
                <CardContent className="p-6">
                  <div className="text-3xl font-black text-primary mb-2">10K+</div>
                  <p className="text-foreground-muted text-sm">Total Downloads</p>
                </CardContent>
              </Card>
              
              <Card className="text-center bg-card border-card-border">
                <CardContent className="p-6">
                  <div className="text-3xl font-black text-primary mb-2">5</div>
                  <p className="text-foreground-muted text-sm">Years of Papers</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="inline-block bg-primary/5 border-primary/20 p-8">
              <CardContent className="space-y-4">
                <Star className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-2xl font-bold">Ready to Start Practicing?</h3>
                <p className="text-foreground-muted max-w-md">
                  Download past papers and begin your preparation journey for JBCN Stars 2025
                </p>
                <Button size="lg" className="mt-4">
                  <Download className="w-5 h-5 mr-2" />
                  Download All Resources
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Resources