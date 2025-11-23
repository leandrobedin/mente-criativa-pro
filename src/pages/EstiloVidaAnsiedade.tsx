import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Printer, Save, Heart, Activity, Moon, Users, Home, Smartphone, Coffee, BookOpen, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import PrintHeader from "@/components/PrintHeader";

interface HabitoNota {
  titulo: string;
  reflexao: string;
  acoes: string;
}

const EstiloVidaAnsiedade = () => {
  const { toast } = useToast();
  const [habitos, setHabitos] = useState<Record<string, HabitoNota>>({
    exercicio: { titulo: "Exercitar o Corpo", reflexao: "", acoes: "" },
    nutricao: { titulo: "Nutrir o Corpo", reflexao: "", acoes: "" },
    sono: { titulo: "Ter uma Boa Noite de Sono", reflexao: "", acoes: "" },
    conexoes: { titulo: "Construir Conexões Sociais", reflexao: "", acoes: "" },
    organizacao: { titulo: "Organizar a Casa e a Mente", reflexao: "", acoes: "" },
    celular: { titulo: "Limitar o Uso do Celular", reflexao: "", acoes: "" },
    pausas: { titulo: "Fazer Mini Pausas", reflexao: "", acoes: "" },
    hobby: { titulo: "Ter um Hobby", reflexao: "", acoes: "" },
    diario: { titulo: "Manter um Diário", reflexao: "", acoes: "" },
    gratidao: { titulo: "Praticar a Gratidão", reflexao: "", acoes: "" },
  });

  useEffect(() => {
    const saved = localStorage.getItem("estilo-vida-ansiedade");
    if (saved) {
      setHabitos(JSON.parse(saved));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("estilo-vida-ansiedade", JSON.stringify(habitos));
    toast({ title: "Guardado com sucesso" });
  };

  const handlePrint = () => {
    window.print();
    toast({ title: "Pronto para imprimir" });
  };

  const updateHabito = (key: string, field: 'reflexao' | 'acoes', value: string) => {
    setHabitos(prev => ({
      ...prev,
      [key]: { ...prev[key], [field]: value }
    }));
  };

  const habitsData = [
    {
      key: "exercicio",
      icon: Activity,
      titulo: "Exercitar o Corpo",
      descricao: "A motivação para manter este hábito relaciona-se com um objetivo forte e inegociável, bem como encontrar uma atividade física agradável e compatível com a sua rotina. Procure oportunidades no dia a dia para se manter ativo. Cuidar do corpo é fundamental para uma vida mais saudável e confiante.",
      color: "therapeutic-growth"
    },
    {
      key: "nutricao",
      icon: Heart,
      titulo: "Nutrir o Corpo",
      descricao: "Comece a mudar aos poucos e dedique-se a apaixonar-se pelo processo de uma alimentação mais equilibrada. Cuidar da alimentação é um ato de amor-próprio. Pequenas mudanças na rotina, como acordar mais cedo para preparar um pequeno-almoço saudável, podem fazer toda a diferença.",
      color: "therapeutic-trust"
    },
    {
      key: "sono",
      icon: Moon,
      titulo: "Ter uma Boa Noite de Sono",
      descricao: "Cuidar do sono pode trazer melhorias significativas para a saúde mental e física, como o aumento da memória, concentração e disposição, além de prevenir sintomas de ansiedade. É importante praticar a higiene do sono, criando uma rotina consistente.",
      color: "therapeutic-calm"
    },
    {
      key: "conexoes",
      icon: Users,
      titulo: "Construir Conexões Sociais",
      descricao: "Ter as pessoas certas ao seu redor pode funcionar como um escudo contra problemas emocionais e até físicos. Cultivar relacionamentos de confiança pode fazer-nos sentir mais seguros. É fundamental enfatizar que relacionamentos de qualidade são mais importantes do que um grande número de conhecidos.",
      color: "primary"
    },
    {
      key: "organizacao",
      icon: Home,
      titulo: "Organizar a Casa e a Mente",
      descricao: "Organizar o nosso ambiente pode ajudar a manter a mente organizada e melhorar o nosso bem-estar emocional. Para isso, pratique o hábito de arrumar, manter as coisas nos seus lugares e eliminar o excesso. Assim, facilitamos o nosso quotidiano e sobra mais tempo para atividades prazerosas.",
      color: "therapeutic-growth"
    },
    {
      key: "celular",
      icon: Smartphone,
      titulo: "Limitar o Uso do Celular",
      descricao: "Desconecte-se um pouco do telemóvel e estabeleça um uso moderado, evitando excessos. Uma forma de controlar o uso é definir horários específicos para verificar as notificações. Encontrar um equilíbrio saudável entre o uso do telemóvel e outras atividades prazerosas é fundamental.",
      color: "therapeutic-trust"
    },
    {
      key: "pausas",
      icon: Coffee,
      titulo: "Fazer Mini Pausas",
      descricao: "As mini pausas são uma forma eficaz de descanso, permitindo recarregar energia e aumentar a produtividade. Não se culpe por parar e relaxar, pois isso melhora o seu bem-estar e qualidade de vida. Ressignifique o descanso como uma atitude de amor-próprio.",
      color: "therapeutic-calm"
    },
    {
      key: "hobby",
      icon: Sparkles,
      titulo: "Ter um Hobby",
      descricao: "Incorpore atividades prazerosas e hobbies na sua rotina diária como forma de criar um escudo contra o excesso de ansiedade. Encontre atividades auto-calmantes que ajudem a sua mente a manter-se conectada com o presente e tragam alegria ao seu dia.",
      color: "primary"
    },
    {
      key: "diario",
      icon: BookOpen,
      titulo: "Manter um Diário",
      descricao: "Comece a escrever sobre o seu dia e os seus sentimentos em relação a ele. Não se preocupe em escrever algo elaborado. Apenas deixe as palavras fluírem e escreva o que vier à mente. Isso ajuda a libertar as suas emoções e a refletir sobre os seus pensamentos e comportamentos.",
      color: "therapeutic-growth"
    },
    {
      key: "gratidao",
      icon: Heart,
      titulo: "Praticar a Gratidão",
      descricao: "Faça um exercício diário de listar pelo menos três coisas pelas quais é grato naquele dia. Pode ser algo simples, como uma boa conversa com um amigo. Este exercício ajuda a treinar o cérebro para se concentrar nas coisas positivas da vida e cultivar um sentimento de gratidão.",
      color: "therapeutic-trust"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <PrintHeader title="Estilo de Vida com Menos Ansiedade" />
      
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

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-therapeutic-growth/10 mb-4">
            <Heart className="w-8 h-8 text-therapeutic-growth" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Estilo de Vida com Menos Ansiedade
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desenvolva hábitos saudáveis que promovem o bem-estar emocional e reduzem a ansiedade no dia a dia
          </p>
        </div>

        <Card className="p-6 mb-6 bg-therapeutic-growth/5 border-therapeutic-growth/20">
          <h3 className="font-semibold text-foreground mb-2">Como utilizar esta ferramenta</h3>
          <p className="text-sm text-muted-foreground">
            Explore cada área da vida saudável abaixo. Para cada hábito, reflita sobre como ele se aplica à sua vida 
            e defina ações concretas que pode implementar. Pequenas mudanças consistentes criam grandes transformações.
          </p>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          {habitsData.map((habit) => {
            const Icon = habit.icon;
            return (
              <Card key={habit.key} className="p-6 bg-card/80 backdrop-blur-sm space-y-4">
                <div className="flex items-start gap-3">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-${habit.color}/10 flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 text-${habit.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground mb-2">{habit.titulo}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{habit.descricao}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <Label className="text-sm font-medium">Como este hábito se relaciona com a minha vida?</Label>
                    <Textarea
                      value={habitos[habit.key]?.reflexao || ""}
                      onChange={(e) => updateHabito(habit.key, 'reflexao', e.target.value)}
                      placeholder="Reflita sobre a importância deste hábito para si..."
                      className="min-h-[80px] mt-2"
                    />
                  </div>

                  <div>
                    <Label className="text-sm font-medium">Ações concretas que vou implementar</Label>
                    <Textarea
                      value={habitos[habit.key]?.acoes || ""}
                      onChange={(e) => updateHabito(habit.key, 'acoes', e.target.value)}
                      placeholder="Ex: Caminhar 30 minutos 3x por semana, dormir antes das 23h..."
                      className="min-h-[80px] mt-2"
                    />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="p-6 bg-muted/30 mt-8">
          <p className="text-xs text-muted-foreground text-center">
            MenteCare Pro - Ferramentas baseadas em Terapia Cognitivo-Comportamental
          </p>
        </Card>
      </main>
    </div>
  );
};

export default EstiloVidaAnsiedade;
