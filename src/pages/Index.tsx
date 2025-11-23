import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, FileText, TreeDeciduous, Layers, Users, Heart, Settings, CheckCircle2, Lightbulb, Scale, TrendingUp, Network, Eye, AlertTriangle, BookOpen, Zap, ArrowDown, Target, MessageCircle, GitBranch, Shield, Activity, Wind } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const modules = [
    {
      icon: FileText,
      title: "Avaliação Inicial",
      description: "Questionário completo para recolha de informações essenciais do paciente",
      path: "/avaliacao-inicial",
      color: "text-therapeutic-calm",
    },
    {
      icon: Brain,
      title: "Crenças Intermediárias",
      description: "Psicoeducação sobre regras, atitudes e suposições que influenciam comportamentos",
      path: "/crencas-intermediarias",
      color: "text-therapeutic-growth",
    },
    {
      icon: Layers,
      title: "Modelo do Iceberg",
      description: "Compreenda os três níveis de pensamentos através do modelo do iceberg cognitivo",
      path: "/modelo-iceberg",
      color: "text-therapeutic-trust",
    },
    {
      icon: TreeDeciduous,
      title: "Modelo da Árvore",
      description: "Visualize a estrutura cognitiva através da metáfora da árvore de pensamentos",
      path: "/modelo-arvore",
      color: "text-therapeutic-warmth",
    },
    {
      icon: Heart,
      title: "Pensamentos Automáticos",
      description: "Identifique e trabalhe pensamentos automáticos e suas reações emocionais",
      path: "/pensamentos-automaticos",
      color: "text-therapeutic-calm",
    },
    {
      icon: Brain,
      title: "Crenças Nucleares",
      description: "Compreenda e trabalhe crenças nucleares negativas e adaptativas",
      path: "/crencas-nucleares",
      color: "text-therapeutic-growth",
    },
    {
      icon: CheckCircle2,
      title: "Avaliação de Pensamentos",
      description: "Ferramentas para avaliar e reestruturar pensamentos disfuncionais",
      path: "/avaliacao-pensamentos",
      color: "text-therapeutic-trust",
    },
    {
      icon: Lightbulb,
      title: "Descatastrofização",
      description: "Questione pensamentos catastróficos de forma estruturada",
      path: "/descatastrofizacao",
      color: "text-therapeutic-warmth",
    },
    {
      icon: Heart,
      title: "Pensamento Compassivo",
      description: "Desenvolva autocompaixão e transforme a autocrítica",
      path: "/pensamento-compaixao",
      color: "text-therapeutic-calm",
    },
    {
      icon: Scale,
      title: "Advogado de Defesa",
      description: "Defenda-se contra pensamentos negativos usando técnicas jurídicas",
      path: "/advogado-defesa",
      color: "text-therapeutic-growth",
    },
    {
      icon: TrendingUp,
      title: "Análise Custo-Benefício",
      description: "Avalie objetivamente vantagens e desvantagens de pensamentos",
      path: "/analise-custo-beneficio",
      color: "text-therapeutic-trust",
    },
    {
      icon: Network,
      title: "Diagrama de Conceitualização",
      description: "Mapeie a estrutura cognitiva completa do caso",
      path: "/diagrama-conceitualizacao",
      color: "text-therapeutic-warmth",
    },
    {
      icon: Scale,
      title: "Examinando Evidências",
      description: "Avalie objetivamente pensamentos através de evidências a favor e contra",
      path: "/examinando-evidencias",
      color: "text-therapeutic-calm",
    },
    {
      icon: Lightbulb,
      title: "Experimento Comportamental",
      description: "Teste crenças através de experiências práticas estruturadas",
      path: "/experimento-comportamental",
      color: "text-therapeutic-growth",
    },
    {
      icon: FileText,
      title: "Identificar Problemas",
      description: "Questionário para identificar áreas que precisam de atenção terapêutica",
      path: "/identificar-problemas",
      color: "text-therapeutic-trust",
    },
    {
      icon: AlertTriangle,
      title: "Lista de Distorções Cognitivas",
      description: "Catálogo completo de padrões de pensamento disfuncionais",
      path: "/lista-distorcoes",
      color: "text-therapeutic-warmth",
    },
    {
      icon: TrendingUp,
      title: "Modificação de Crenças",
      description: "Fortaleça crenças adaptativas através do reconhecimento de recursos",
      path: "/modificacao-crencas",
      color: "text-therapeutic-growth",
    },
    {
      icon: Zap,
      title: "Guia de Reestruturação",
      description: "Ferramenta rápida para questionar e reformular pensamentos",
      path: "/guia-reestruturacao",
      color: "text-therapeutic-calm",
    },
    {
      icon: Eye,
      title: "Registo de Exposição",
      description: "Acompanhe tarefas de exposição e níveis de ansiedade",
      path: "/registo-exposicao",
      color: "text-therapeutic-trust",
    },
    {
      icon: AlertTriangle,
      title: "Identificar Distorções",
      description: "Registe e identifique padrões disfuncionais do quotidiano",
      path: "/identificar-distorcoes",
      color: "text-therapeutic-warmth",
    },
    {
      icon: BookOpen,
      title: "Registo de Pensamento",
      description: "Ferramenta estruturada para trabalhar pensamentos disfuncionais",
      path: "/registo-pensamento",
      color: "text-therapeutic-calm",
    },
    {
      icon: ArrowDown,
      title: "Seta Descendente",
      description: "Identifique crenças nucleares através de questionamento progressivo",
      path: "/seta-descendente",
      color: "text-therapeutic-trust",
    },
    {
      icon: Lightbulb,
      title: "Solução de Problemas",
      description: "Abordagem estruturada para encontrar soluções eficazes",
      path: "/solucao-problemas",
      color: "text-therapeutic-growth",
    },
    {
      icon: Target,
      title: "Resolvendo Problemas",
      description: "Processo em 6 etapas para resolver problemas de forma sistemática",
      path: "/resolvendo-problemas",
      color: "text-therapeutic-calm",
    },
    {
      icon: MessageCircle,
      title: "Perguntas sobre Pensamentos",
      description: "Guia para reconhecer pensamentos automáticos disfuncionais",
      path: "/perguntas-pensamentos",
      color: "text-therapeutic-warmth",
    },
    {
      icon: Heart,
      title: "Fortalecer Crenças Positivas",
      description: "Recolha evidências que apoiam crenças adaptativas",
      path: "/fortalecer-crencas",
      color: "text-therapeutic-growth",
    },
    {
      icon: Scale,
      title: "Tomando Decisões",
      description: "Análise de vantagens e desvantagens para decisões informadas",
      path: "/tomando-decisoes",
      color: "text-therapeutic-trust",
    },
    {
      icon: Shield,
      title: "Plano de Segurança",
      description: "Ferramenta de apoio para momentos de crise e stress emocional",
      path: "/plano-seguranca",
      color: "text-therapeutic-trust",
    },
    {
      icon: Activity,
      title: "Monitoramento de Ansiedade",
      description: "Identificação e acompanhamento de sintomas de ansiedade",
      path: "/monitoramento-ansiedade",
      color: "text-therapeutic-calm",
    },
    {
      icon: GitBranch,
      title: "Árvore da Decisão",
      description: "Lidar com preocupações de forma produtiva e eficaz",
      path: "/arvore-decisao",
      color: "text-therapeutic-growth",
    },
    {
      icon: Wind,
      title: "Autotranquilização 5-4-3-2-1",
      description: "Técnica dos cinco sentidos para acalmar em momentos de crise",
      path: "/autotranquilizacao",
      color: "text-therapeutic-calm",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">MenteCare Pro</h1>
                <p className="text-xs text-muted-foreground">Sistema para Profissionais de Saúde Mental</p>
              </div>
            </div>
            <Link to="/configuracoes">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Configurações
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            Para Profissionais de Saúde Mental
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Sistema Completo de Terapia Cognitivo-Comportamental
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ferramentas profissionais para apoiar o seu trabalho terapêutico com pacientes. 
            Material psicoeducativo, questionários e modelos cognitivos integrados numa única plataforma.
          </p>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <Link key={index} to={module.path}>
                <Card className="p-6 hover:shadow-medium transition-all duration-300 cursor-pointer group h-full bg-gradient-card border-border/50">
                  <div className="space-y-4">
                    <div className={`h-12 w-12 rounded-xl bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${module.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {module.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {module.description}
                      </p>
                    </div>
                    <Button variant="ghost" className="w-full group-hover:bg-muted transition-colors">
                      Aceder ao Módulo →
                    </Button>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Info Banner */}
      <section className="container mx-auto px-4 pb-16">
        <Card className="max-w-4xl mx-auto p-8 bg-primary/5 border-primary/20">
          <div className="flex gap-4 items-start">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">
                Sistema Profissional para Uso Clínico
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Este sistema foi desenvolvido para profissionais de saúde mental utilizarem com os seus pacientes 
                durante sessões terapêuticas. Todo o conteúdo baseia-se em princípios da Terapia Cognitivo-Comportamental 
                e destina-se a apoiar o processo terapêutico sob orientação profissional.
              </p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Index;
