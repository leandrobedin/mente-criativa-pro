import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Printer, Save, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const ExperimentoComportamental = () => {
  const { toast } = useToast();
  const [crenca, setCrencia] = useState("");
  const [experimento, setExperimento] = useState("");
  const [previsoes, setPrevisoes] = useState("");
  const [problemas, setProblemas] = useState("");
  const [resultado, setResultado] = useState("");
  const [comparacao, setComparacao] = useState("");
  const [aprendizados, setAprendizados] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("experimento-comportamental");
    if (saved) {
      const data = JSON.parse(saved);
      setCrencia(data.crenca || "");
      setExperimento(data.experimento || "");
      setPrevisoes(data.previsoes || "");
      setProblemas(data.problemas || "");
      setResultado(data.resultado || "");
      setComparacao(data.comparacao || "");
      setAprendizados(data.aprendizados || "");
    }
  }, []);

  const handlePrint = () => {
    window.print();
    toast({
      title: "Pronto para imprimir",
      description: "A janela de impressão foi aberta",
    });
  };

  const handleSave = () => {
    localStorage.setItem("experimento-comportamental", JSON.stringify({
      crenca,
      experimento,
      previsoes,
      problemas,
      resultado,
      comparacao,
      aprendizados
    }));
    toast({
      title: "Guardado com sucesso",
      description: "O exercício foi guardado localmente",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
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
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-therapeutic-growth/10 mb-4">
            <Lightbulb className="w-8 h-8 text-therapeutic-growth" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Experimento Comportamental
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Teste as suas crenças através de experiências práticas e descubra novas perspectivas
          </p>
        </div>

        <Card className="p-8 mb-6 bg-card/80 backdrop-blur-sm">
          <div className="space-y-8">
            {/* Crença a Testar */}
            <div className="space-y-3">
              <Label htmlFor="crenca" className="text-lg font-semibold text-foreground">
                Qual crença gostaria de testar?
              </Label>
              <p className="text-sm text-muted-foreground">
                Identifique uma crença específica que gostaria de questionar através de um experimento prático
              </p>
              <Textarea
                id="crenca"
                placeholder="Ex: Acredito que se falar em público, as pessoas vão rir-se de mim..."
                value={crenca}
                onChange={(e) => setCrencia(e.target.value)}
                className="min-h-[100px] text-base"
              />
            </div>

            {/* Experimento Planeado */}
            <div className="space-y-3">
              <Label htmlFor="experimento" className="text-lg font-semibold text-foreground">
                Experimento comportamental que planeia realizar
              </Label>
              <p className="text-sm text-muted-foreground">
                Descreva detalhadamente o que vai fazer para testar a sua crença
              </p>
              <Textarea
                id="experimento"
                placeholder="Vou fazer uma pequena apresentação sobre um tema que domino para um grupo de 5 amigos..."
                value={experimento}
                onChange={(e) => setExperimento(e.target.value)}
                className="min-h-[100px] text-base"
              />
            </div>

            {/* Previsões */}
            <div className="space-y-3">
              <Label htmlFor="previsoes" className="text-lg font-semibold text-foreground">
                Quais são as suas previsões específicas?
              </Label>
              <p className="text-sm text-muted-foreground">
                O que espera que aconteça durante o experimento? Seja o mais específico possível
              </p>
              <Textarea
                id="previsoes"
                placeholder="Prevejo que vou gaguejar, que vou esquecer-me do que dizer e que as pessoas vão olhar umas para as outras com expressão de desconforto..."
                value={previsoes}
                onChange={(e) => setPrevisoes(e.target.value)}
                className="min-h-[100px] text-base"
              />
            </div>

            {/* Problemas e Estratégias */}
            <div className="space-y-3">
              <Label htmlFor="problemas" className="text-lg font-semibold text-foreground">
                Problemas que podem surgir e estratégias para os superar
              </Label>
              <p className="text-sm text-muted-foreground">
                Antecipe possíveis obstáculos e pense em como os ultrapassar
              </p>
              <Textarea
                id="problemas"
                placeholder="Problema: Posso sentir-me muito ansioso antes. Estratégia: Vou praticar exercícios de respiração..."
                value={problemas}
                onChange={(e) => setProblemas(e.target.value)}
                className="min-h-[100px] text-base"
              />
            </div>

            <Card className="bg-therapeutic-growth/5 p-6 border-therapeutic-growth/20">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-therapeutic-growth" />
                Após realizar o experimento
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Complete as seções seguintes depois de ter realizado o experimento, registando o máximo de detalhes possível
              </p>
            </Card>

            {/* Resultado do Experimento */}
            <div className="space-y-3">
              <Label htmlFor="resultado" className="text-lg font-semibold text-foreground">
                Registo detalhado do resultado do experimento
              </Label>
              <p className="text-sm text-muted-foreground">
                O que realmente aconteceu? Descreva com o máximo de detalhes possível
              </p>
              <Textarea
                id="resultado"
                placeholder="Durante a apresentação, no início senti-me nervoso, mas depois de alguns minutos comecei a sentir-me mais confiante..."
                value={resultado}
                onChange={(e) => setResultado(e.target.value)}
                className="min-h-[120px] text-base"
              />
            </div>

            {/* Comparação com Previsões */}
            <div className="space-y-3">
              <Label htmlFor="comparacao" className="text-lg font-semibold text-foreground">
                Comparação entre os eventos e as suas previsões
              </Label>
              <p className="text-sm text-muted-foreground">
                Os resultados alinharam-se às suas expectativas ou houve surpresas? Como lidou com situações inesperadas?
              </p>
              <Textarea
                id="comparacao"
                placeholder="Os resultados foram muito diferentes do que eu esperava. Não gaguejei tanto quanto pensei e as pessoas fizeram perguntas interessadas..."
                value={comparacao}
                onChange={(e) => setComparacao(e.target.value)}
                className="min-h-[120px] text-base"
              />
            </div>

            {/* Aprendizados */}
            <div className="space-y-3">
              <Label htmlFor="aprendizados" className="text-lg font-semibold text-foreground">
                Aprendizados obtidos com este experimento
              </Label>
              <p className="text-sm text-muted-foreground">
                O que descobriu sobre si mesmo e sobre a sua crença inicial?
              </p>
              <Textarea
                id="aprendizados"
                placeholder="Aprendi que os meus medos eram maiores do que a realidade. As pessoas mostraram-se interessadas e apoiantes..."
                value={aprendizados}
                onChange={(e) => setAprendizados(e.target.value)}
                className="min-h-[120px] text-base"
              />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-muted/30">
          <p className="text-xs text-muted-foreground text-center">
            Baseado em: Greenberger, D.; Padesky, C. A. A Mente Vencendo o Humor (2ª ed.). Porto Alegre: Artmed, 2017. p. 143-144.
          </p>
        </Card>
      </main>
    </div>
  );
};

export default ExperimentoComportamental;
