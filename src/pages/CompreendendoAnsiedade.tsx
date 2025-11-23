import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Printer, Save, Brain, AlertTriangle, Shield, TrendingUp, Heart, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import PrintHeader from "@/components/PrintHeader";

const CompreendendoAnsiedade = () => {
  const { toast } = useToast();
  const [reflexoes, setReflexoes] = useState<Record<string, string>>({
    oQueE: "",
    deOndeVem: "",
    gatilhos: "",
    sintomasFisicos: "",
    estrategiasEvitacao: "",
    planoEnfrentamento: ""
  });

  useEffect(() => {
    const saved = localStorage.getItem("compreendendo-ansiedade");
    if (saved) {
      setReflexoes(JSON.parse(saved));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("compreendendo-ansiedade", JSON.stringify(reflexoes));
    toast({ title: "Guardado com sucesso" });
  };

  const handlePrint = () => {
    window.print();
    toast({ title: "Pronto para imprimir" });
  };

  const updateReflexao = (campo: string, valor: string) => {
    setReflexoes(prev => ({ ...prev, [campo]: valor }));
  };

  const conteudos = [
    {
      icon: Brain,
      titulo: "O Que É a Ansiedade?",
      texto: "A ansiedade é uma emoção natural da experiência humana. Pode manifestar-se de forma intensa quando sobrestimamos as situações que nos deixam ansiosos e subestimamos a nossa capacidade de lidar com elas. As situações em si não são responsáveis pela ansiedade, mas sim a forma como as interpretamos, o que influencia os nossos sentimentos e comportamentos.",
      campo: "oQueE",
      color: "primary"
    },
    {
      icon: AlertTriangle,
      titulo: "De Onde Vem a Ansiedade?",
      texto: "A ansiedade surge a partir de pensamentos automáticos distorcidos que uma pessoa tem em relação a si mesma, aos outros e ao mundo. Esses pensamentos disfuncionais geralmente envolvem ameaça e perigo, gerando emoções como medo e ansiedade, além de comportamentos de evitação. Estas reações podem agravar a ansiedade e manter o ciclo vicioso, perpetuando o sofrimento.",
      campo: "deOndeVem",
      color: "therapeutic-trust"
    },
    {
      icon: Shield,
      titulo: "Diferença Entre Ansiedade e Medo",
      texto: "Quando enfrentamos uma situação que apresenta perigo imediato, sentimos medo (como um carro a aproximar-se em alta velocidade). Já a ansiedade está associada à percepção de uma ameaça futura (como a antecipação de uma conversa difícil). A ansiedade não é perigosa, embora os sintomas físicos possam ser desconfortáveis.",
      campo: "gatilhos",
      color: "therapeutic-calm"
    },
    {
      icon: Heart,
      titulo: "Sintomas Físicos: Porquê?",
      texto: "Quando o nosso cérebro interpreta algo como ameaçador, prepara-se para lutar ou fugir. A resposta de luta ou fuga é um mecanismo automático que faz o corpo libertar adrenalina e cortisol. Isto causa aumento da frequência cardíaca, pressão sanguínea elevada e outras mudanças físicas. Embora desconfortável, este mecanismo existe para nos proteger.",
      campo: "sintomasFisicos",
      color: "therapeutic-growth"
    },
    {
      icon: TrendingUp,
      titulo: "Evitação: A Armadilha",
      texto: "A evitação é uma estratégia comum para reduzir a ansiedade, mas ao evitar as situações que nos deixam ansiosos, perdemos a oportunidade de aprender a lidar com elas. Como resultado, a ansiedade tende a piorar ao longo do tempo, levando a um ciclo de sofrimento e sensação de incapacidade. Para alcançar alívio duradouro, é importante enfrentar gradualmente as situações temidas.",
      campo: "estrategiasEvitacao",
      color: "destructive"
    },
    {
      icon: Lightbulb,
      titulo: "Vai com Medo Mesmo",
      texto: "Para alcançar alívio duradouro da ansiedade, é importante enfrentar gradualmente as situações que desencadeiam este sentimento, começando pelas menos difíceis e aumentando o nível de exposição progressivamente. É preciso seguir em frente mesmo sentindo medo, um passo de cada vez. A ansiedade, quando gerida adequadamente, pode até impulsionar-nos a preparar melhor e ter bom desempenho.",
      campo: "planoEnfrentamento",
      color: "therapeutic-growth"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <PrintHeader title="Compreendendo a Ansiedade" />
      
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-50 no-print">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
            </Link>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handleSave}>
                <Save className="h-4 w-4 mr-2" />
                Guardar
              </Button>
              <Button variant="outline" size="sm" onClick={handlePrint}>
                <Printer className="h-4 w-4 mr-2" />
                Imprimir
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Brain className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Compreendendo a Ansiedade
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conteúdo psicoeducativo para compreender o que é a ansiedade, como funciona e como geri-la de forma saudável
          </p>
        </div>

        <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
          <h3 className="font-semibold text-foreground mb-2">Objetivo desta Ferramenta</h3>
          <p className="text-sm text-muted-foreground">
            Compreender a ansiedade é o primeiro passo para aprender a geri-la. Esta ferramenta oferece informação 
            baseada em evidências sobre a natureza da ansiedade e convida-o a refletir sobre como ela se manifesta 
            na sua própria vida. Use os campos de reflexão para personalizar este conhecimento.
          </p>
        </Card>

        <div className="space-y-6">
          {conteudos.map((conteudo, idx) => {
            const Icon = conteudo.icon;
            return (
              <Card key={idx} className="p-6 bg-card/80 backdrop-blur-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-${conteudo.color}/10 flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 text-${conteudo.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl text-foreground mb-3">{conteudo.titulo}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{conteudo.texto}</p>
                  </div>
                </div>

                <div className="space-y-2 mt-4 pt-4 border-t border-border/50">
                  <Label className="text-sm font-medium">Como isto se relaciona com a minha experiência?</Label>
                  <Textarea
                    value={reflexoes[conteudo.campo] || ""}
                    onChange={(e) => updateReflexao(conteudo.campo, e.target.value)}
                    placeholder="Reflita sobre como este conceito se aplica à sua vida e à sua experiência com ansiedade..."
                    className="min-h-[100px]"
                  />
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="p-6 bg-therapeutic-calm/5 border-therapeutic-calm/20 mt-8">
          <h3 className="font-semibold text-foreground mb-3">Mensagens Importantes para Recordar</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <span className="text-therapeutic-calm">•</span>
              <span>Normalize e aceite a ansiedade. Quanto mais resistir, maior será o sofrimento.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-therapeutic-calm">•</span>
              <span>A ansiedade não é perigosa, embora os sintomas sejam desconfortáveis.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-therapeutic-calm">•</span>
              <span>Evitar situações ansiosas piora a ansiedade a longo prazo.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-therapeutic-calm">•</span>
              <span>Os transtornos de ansiedade têm causas multifatoriais (biológicas, psicológicas, ambientais).</span>
            </li>
            <li className="flex gap-2">
              <span className="text-therapeutic-calm">•</span>
              <span>Identifique os seus gatilhos (fatores desencadeantes) para melhor gerir a ansiedade.</span>
            </li>
          </ul>
        </Card>

        <Card className="p-6 bg-muted/30 mt-6">
          <p className="text-xs text-muted-foreground text-center">
            MenteCare Pro - Conteúdo baseado em Terapia Cognitivo-Comportamental para transtornos de ansiedade
          </p>
        </Card>
      </main>
    </div>
  );
};

export default CompreendendoAnsiedade;
