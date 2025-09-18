import React, { useState } from "react"
import Layout from "@/components/Layout"
import { Brain, Clock, FileText, Lightbulb, Target, BookOpen, Zap, Download } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Preparation = () => {
  const [selectedLevel, setSelectedLevel] = useState("junior")

  const aiFeatures = [
    {
      title: "Question Breakdown AI",
      description: "Upload any JBCN Stars question and get a detailed step-by-step explanation",
      icon: <Brain className="w-6 h-6" />,
      status: "Coming Soon",
      features: [
        "Step-by-step solution process",
        "Conceptual explanations", 
        "Alternative solving methods",
        "Common mistakes to avoid"
      ]
    },
    {
      title: "JBCN Stars Cosmic Papers",
      description: "AI-generated practice papers based on previous JBCN Stars patterns",
      icon: <Zap className="w-6 h-6" />,
      status: "In Development",
      features: [
        "Grade-specific difficulty",
        "Built-in timer system",
        "Instant feedback",
        "Performance analytics"
      ]
    }
  ]

  const preparationTips = {
    junior: [
      {
        category: "Foundation Building",
        tips: [
          "Master basic arithmetic operations and number properties",
          "Practice mental math for quick calculations",
          "Understand geometric shapes and their properties",
          "Work on logical reasoning puzzles daily"
        ]
      },
      {
        category: "Problem-Solving",
        tips: [
          "Start with simple word problems",
          "Practice pattern recognition exercises",
          "Learn to break complex problems into smaller parts",
          "Use visual aids like diagrams and charts"
        ]
      }
    ],
    intermediate: [
      {
        category: "Advanced Concepts",
        tips: [
          "Master algebraic expressions and equations",
          "Understand coordinate geometry fundamentals",
          "Practice trigonometric ratios and applications",
          "Study probability and statistics basics"
        ]
      },
      {
        category: "Strategic Thinking",
        tips: [
          "Learn multiple approaches to solve problems",
          "Practice time management during problem-solving",
          "Work on competition-style questions",
          "Develop elimination strategies for multiple choice"
        ]
      }
    ],
    senior: [
      {
        category: "Mastery Level",
        tips: [
          "Excel in calculus and advanced algebra",
          "Master complex number operations",
          "Study mathematical analysis techniques",
          "Practice olympiad-level problems regularly"
        ]
      },
      {
        category: "Competition Excellence",
        tips: [
          "Develop speed without compromising accuracy",
          "Master advanced problem-solving techniques",
          "Practice with international competition papers",
          "Learn to verify answers quickly"
        ]
      }
    ]
  }

  const studyPlan = [
    {
      week: "Week 1-2",
      focus: "Foundation Review",
      activities: [
        "Review grade-appropriate mathematical concepts",
        "Take diagnostic practice tests",
        "Identify weak areas for improvement",
        "Set up study schedule"
      ]
    },
    {
      week: "Week 3-4", 
      focus: "Skill Building",
      activities: [
        "Practice daily problem-solving",
        "Work on speed and accuracy",
        "Learn time management techniques",
        "Form study groups with peers"
      ]
    },
    {
      week: "Week 5-6",
      focus: "Mock Tests",
      activities: [
        "Take full-length practice papers",
        "Analyze performance and mistakes",
        "Refine problem-solving strategies",
        "Practice under timed conditions"
      ]
    },
    {
      week: "Final Week",
      focus: "Final Preparation", 
      activities: [
        "Light revision of key concepts",
        "Take one final mock test",
        "Rest and maintain confidence",
        "Prepare materials for competition day"
      ]
    }
  ]

  return (
    <Layout>
      <div className="py-16 sm:py-20 grid-bg">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <div className="flex justify-center mb-6 sm:mb-8">
              <img 
                src="/lovable-uploads/a3c54754-ef7c-4fbb-a6ea-6894826a70bf.png" 
                alt="JBCN Stars Logo" 
                className="h-20 sm:h-24 w-auto transition-all duration-300 hover:scale-110 hover:drop-shadow-2xl cursor-pointer"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
              Preparation <span className="text-primary">Hub</span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground-muted max-w-3xl mx-auto px-4">
              Your complete guide to excel in JBCN Stars. From AI-powered study tools 
              to strategic preparation tips - everything you need to succeed.
            </p>
          </div>

          {/* AI Features Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">
              AI-Powered <span className="text-primary">Learning Tools</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {aiFeatures.map((feature, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card border-card-border relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          {feature.icon}
                        </div>
                        <div>
                          <CardTitle className="text-xl">{feature.title}</CardTitle>
                          <Badge variant="secondary" className="mt-1">
                            {feature.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground-muted mb-6">{feature.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Features:</h4>
                      <ul className="space-y-1">
                        {feature.features.map((feat, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-foreground-muted">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full mt-6" disabled>
                      <Lightbulb className="w-4 h-4 mr-2" />
                      {feature.status}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Preparation Tips by Level */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">
              Grade-Specific <span className="text-primary">Preparation Tips</span>
            </h2>
            
            <Tabs value={selectedLevel} onValueChange={setSelectedLevel} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="junior">Junior (6-8)</TabsTrigger>
                <TabsTrigger value="intermediate">Intermediate (9-10)</TabsTrigger>
                <TabsTrigger value="senior">Senior (11-12)</TabsTrigger>
              </TabsList>
              
              {Object.entries(preparationTips).map(([level, categories]) => (
                <TabsContent key={level} value={level}>
                  <div className="grid md:grid-cols-2 gap-8">
                    {categories.map((category, index) => (
                      <Card 
                        key={index}
                        className="bg-card border-card-border"
                      >
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-3">
                            <Target className="w-6 h-6 text-primary" />
                            <span>{category.category}</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            {category.tips.map((tip, tipIndex) => (
                              <li key={tipIndex} className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-foreground-muted text-sm">{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Study Plan Timeline */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">
              6-Week <span className="text-primary">Study Plan</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {studyPlan.map((plan, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card border-card-border"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                        {index + 1}
                      </div>
                      <h3 className="font-bold text-lg">{plan.week}</h3>
                      <p className="text-primary font-semibold text-sm">{plan.focus}</p>
                    </div>
                    <ul className="space-y-2">
                      {plan.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="flex items-start space-x-2 text-xs text-foreground-muted">
                          <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Resources */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">
              Quick <span className="text-primary">Resources</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card border-card-border">
                <CardContent className="p-6 text-center">
                  <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Past Papers</h3>
                  <p className="text-foreground-muted text-sm mb-4">
                    Download previous years' question papers
                  </p>
                  <Button size="sm" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card border-card-border">
                <CardContent className="p-6 text-center">
                  <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Study Materials</h3>
                  <p className="text-foreground-muted text-sm mb-4">
                    Curated study resources and guides
                  </p>
                  <Button size="sm" className="w-full">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Access
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card border-card-border">
                <CardContent className="p-6 text-center">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Practice Tests</h3>
                  <p className="text-foreground-muted text-sm mb-4">
                    Timed practice sessions online
                  </p>
                  <Button size="sm" className="w-full">
                    <Clock className="w-4 h-4 mr-2" />
                    Start
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Preparation