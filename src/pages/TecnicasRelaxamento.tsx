import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Printer, Save, Wind, Eye, Smile, Brain, Waves } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import PrintHeader from "@/components/PrintHeader";

const TecnicasRelaxamento = () => {
  const { toast } = useToast();
  const [notas, setNotas] = useState<Record<string, string>>({});
  const [experiencias, setExperiencias] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("tecnicas-relaxamento");
    if (saved) {
      const data = JSON.parse(saved);
      setNotas(data.notas || {});
      setExperiencias(data.experiencias || "");
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("tecnicas-relaxamento", JSON.stringify({ notas, experiencias }));
    toast({ title: "Guardado com sucesso" });
  };

  const handlePrint = () => {
    window.print();
    toast({ title: "Pronto para imprimir" });
  };

  const tecnicas = [
    {
      key: "respiracao-estrela",
      icon: Wind,
      titulo: "Respiração da Estrela",
      passos: [
        "Abra a mão e estique os dedos como uma estrela",
        "Finja que o dedo indicador da outra mão é um lápis",
        "Usando o 'lápis', trace ao redor de cada dedo lentamente",
        "Enquanto traça, inspire pelo nariz e expire pela boca",
        "Continue até contornar toda a sua mão. Repita até sentir-se calmo"
      ],
      color: "therapeutic-calm"
    },
    {
      key: "consciencia-ambiental",
      icon: Eye,
      titulo: "Consciência Ambiental",
      passos: [
        "Olhe por uma janela e observe o ambiente",
        "Note como a luz do sol ilumina as coisas",
        "Observe todas as áreas de sombra",
        "Experimente ver as coisas como se fosse a primeira vez",
        "Mantenha-se presente no momento, observando os detalhes"
      ],
      color: "therapeutic-trust"
    },
    {
      key: "flutuacao",
      icon: Waves,
      titulo: "Visualização da Flutuação",
      passos: [
        "Deite-se confortavelmente de costas",
        "Imagine-se a flutuar no mar",
        "Flutue para trás inspirando profundamente",
        "Flutue para frente expirando lentamente",
        "Permaneça perto da margem, deixe-se flutuar em paz"
      ],
      color: "primary"
    },
    {
      key: "respiracao-diafragmatica",
      icon: Wind,
      titulo: "Respiração Diafragmática",
      passos: [
        "Fique confortável e feche os olhos",
        "Concentre-se apenas na sua respiração",
        "Inspire o ar por 4 segundos",
        "Prenda a respiração por 2 segundos",
        "Expire lentamente por 6 segundos. Repita várias vezes"
      ],
      color: "therapeutic-growth"
    },
    {
      key: "alegria-nada",
      icon: Smile,
      titulo: "Alegria de Não Fazer Nada",
      passos: [
        "Reserve aproximadamente 5 minutos para si",
        "Deite-se no chão com as pernas esticadas e olhos fechados",
        "Relaxe todos os músculos do corpo",
        "Imagine-se deitado na praia",
        "Ouça os sons ao seu redor, respire profundamente e aproveite"
      ],
      color: "therapeutic-calm"
    },
    {
      key: "pensamento-positivo",
      icon: Brain,
      titulo: "Foco no Positivo",
      passos: [
        "Quando se concentrar apenas no negativo, pare",
        "Identifique e anote 3 a 5 coisas positivas",
        "O que correu bem hoje?",
        "Coisas pelas quais é grato",
        "Coisas pelas quais está ansioso (no bom sentido)"
      ],
      color: "therapeutic-trust"
    },
    {
      key: "relaxamento-muscular",
      icon: Waves,
      titulo: "Relaxamento Muscular Progressivo",
      passos: [
        "Escolha um local tranquilo ao final do dia",
        "Respire profundamente e lentamente",
        "Concentre-se num grupo muscular específico",
        "Contraia os músculos por cerca de 5 segundos",
        "Liberte lentamente a tensão e sinta o relaxamento. Repita em cada grupo muscular"
      ],
      color: "primary"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <PrintHeader title="Técnicas de Relaxamento e Regulação Emocional" />
      
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
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-therapeutic-calm/10 mb-4">
            <Wind className="w-8 h-8 text-therapeutic-calm" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Técnicas de Relaxamento e Regulação Emocional
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ferramentas práticas para acalmar a mente, reduzir o stress e regular as emoções no momento presente
          </p>
        </div>

        <Card className="p-6 mb-8 bg-therapeutic-calm/5 border-therapeutic-calm/20">
          <h3 className="font-semibold text-foreground mb-2">Como utilizar estas técnicas</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Cada técnica pode ser praticada em momentos de stress, ansiedade ou sempre que necessitar de um momento 
            de calma. Experimente todas e identifique quais funcionam melhor para si. A prática regular aumenta a eficácia.
          </p>
          <p className="text-sm text-muted-foreground">
            Utilize os campos de notas abaixo de cada técnica para registar as suas experiências, o que funcionou 
            melhor e quando pretende praticar cada uma delas.
          </p>
        </Card>

        <div className="grid gap-6">
          {tecnicas.map((tecnica) => {
            const Icon = tecnica.icon;
            return (
              <Card key={tecnica.key} className="p-6 bg-card/80 backdrop-blur-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-${tecnica.color}/10 flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 text-${tecnica.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl text-foreground mb-3">{tecnica.titulo}</h3>
                    <div className="space-y-2 mb-4">
                      {tecnica.passos.map((passo, idx) => (
                        <div key={idx} className="flex gap-3">
                          <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-${tecnica.color}/20 flex items-center justify-center`}>
                            <span className={`text-xs font-semibold text-${tecnica.color}`}>{idx + 1}</span>
                          </div>
                          <p className="text-sm text-muted-foreground flex-1">{passo}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mt-4 pt-4 border-t border-border/50">
                  <Label className="text-sm font-medium">Notas e experiências com esta técnica</Label>
                  <Textarea
                    value={notas[tecnica.key] || ""}
                    onChange={(e) => setNotas(prev => ({ ...prev, [tecnica.key]: e.target.value }))}
                    placeholder="Quando praticou? Como se sentiu? O que funcionou melhor?"
                    className="min-h-[80px]"
                  />
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="p-6 bg-primary/5 border-primary/20 mt-8 space-y-3">
          <Label className="text-lg font-semibold">Reflexão Geral sobre as Técnicas</Label>
          <Textarea
            value={experiencias}
            onChange={(e) => setExperiencias(e.target.value)}
            placeholder="Quais técnicas prefere? Em que situações costuma utilizá-las? Que benefícios tem notado?"
            className="min-h-[120px]"
          />
        </Card>

        <Card className="p-6 bg-muted/30 mt-6">
          <p className="text-xs text-muted-foreground text-center">
            MenteCare Pro - Técnicas baseadas em Terapia Cognitivo-Comportamental e práticas de mindfulness
          </p>
        </Card>
      </main>
    </div>
  );
};

export default TecnicasRelaxamento;
