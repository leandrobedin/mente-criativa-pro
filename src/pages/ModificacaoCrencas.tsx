import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, Printer, Save, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const ModificacaoCrencas = () => {
  const { toast } = useToast();
  const [crencaMaladaptativa, setCrencaMaladaptativa] = useState("");
  const [avaliacaoMaladaptativa, setAvaliacaoMaladaptativa] = useState([5]);
  const [listaCreditos, setListaCreditos] = useState("");
  const [comportamentosAdaptativos, setComportamentosAdaptativos] = useState("");
  const [crencaAdaptativa, setCrencaAdaptativa] = useState("");
  const [avaliacaoAdaptativa, setAvaliacaoAdaptativa] = useState([5]);
  const [vantagens, setVantagens] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("modificacao-crencas");
    if (saved) {
      const data = JSON.parse(saved);
      setCrencaMaladaptativa(data.crencaMaladaptativa || "");
      setAvaliacaoMaladaptativa(data.avaliacaoMaladaptativa || [5]);
      setListaCreditos(data.listaCreditos || "");
      setComportamentosAdaptativos(data.comportamentosAdaptativos || "");
      setCrencaAdaptativa(data.crencaAdaptativa || "");
      setAvaliacaoAdaptativa(data.avaliacaoAdaptativa || [5]);
      setVantagens(data.vantagens || "");
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
    localStorage.setItem("modificacao-crencas", JSON.stringify({
      crencaMaladaptativa,
      avaliacaoMaladaptativa,
      listaCreditos,
      comportamentosAdaptativos,
      crencaAdaptativa,
      avaliacaoAdaptativa,
      vantagens
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
            <TrendingUp className="w-8 h-8 text-therapeutic-growth" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Modificação de Crenças
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fortaleça crenças adaptativas através do reconhecimento dos seus recursos e conquistas
          </p>
        </div>

        <Card className="p-8 mb-6 bg-card/80 backdrop-blur-sm">
          <div className="space-y-8">
            <Card className="bg-therapeutic-growth/5 p-6 border-therapeutic-growth/20">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-therapeutic-growth" />
                Fortalecendo crenças adaptativas
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Este exercício ajuda a identificar e fortalecer crenças mais saudáveis sobre si mesmo, baseadas nas suas conquistas e capacidades reais.
              </p>
            </Card>

            {/* Crença Mal-adaptativa */}
            <div className="space-y-4">
              <Label htmlFor="crenca-mal" className="text-lg font-semibold text-foreground">
                Crença mal-adaptativa identificada
              </Label>
              <p className="text-sm text-muted-foreground">
                Descreva uma crença sobre si mesmo que identificou no processo terapêutico e que considera mal-adaptativa
              </p>
              <Textarea
                id="crenca-mal"
                placeholder="Ex: Sou incompetente e incapaz de realizar as tarefas..."
                value={crencaMaladaptativa}
                onChange={(e) => setCrencaMaladaptativa(e.target.value)}
                className="min-h-[100px] text-base"
              />
              
              <div className="space-y-3 pt-2">
                <Label className="text-sm font-medium text-foreground">
                  Quanto acredita nesta crença mal-adaptativa?
                </Label>
                <div className="flex items-center gap-4">
                  <Slider
                    value={avaliacaoMaladaptativa}
                    onValueChange={setAvaliacaoMaladaptativa}
                    max={10}
                    step={1}
                    className="flex-1"
                  />
                  <span className="text-2xl font-bold text-primary w-12 text-center">
                    {avaliacaoMaladaptativa[0]}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">0 = Não acredito nada | 10 = Acredito completamente</p>
              </div>
            </div>

            {/* Lista de Créditos */}
            <div className="space-y-4">
              <Label htmlFor="creditos" className="text-lg font-semibold text-foreground">
                Lista de créditos
              </Label>
              <p className="text-sm text-muted-foreground">
                Descreva acontecimentos positivos recentes, realizações satisfatórias que já conseguiu alcançar (mesmo que com dificuldade), 
                e situações passadas em que superou desafios com sucesso, mesmo que pareçam pequenos aos seus olhos
              </p>
              <Textarea
                id="creditos"
                placeholder="• Consegui terminar o projeto no prazo, apesar das dificuldades&#10;• Ajudei um colega com um problema complexo&#10;• Superei o medo de falar em público numa reunião..."
                value={listaCreditos}
                onChange={(e) => setListaCreditos(e.target.value)}
                className="min-h-[150px] text-base"
              />
            </div>

            {/* Comportamentos Adaptativos */}
            <div className="space-y-4">
              <Label htmlFor="comportamentos" className="text-lg font-semibold text-foreground">
                O que os seus comportamentos revelam sobre si?
              </Label>
              <p className="text-sm text-muted-foreground">
                Na lista anterior, é possível identificar alguns dos seus comportamentos adaptativos? 
                O que eles revelam de positivo sobre quem é e sobre as suas habilidades? 
                Complete: "O que diz sobre mim o facto de..."
              </p>
              <Textarea
                id="comportamentos"
                placeholder="O facto de ter terminado o projeto mostra que sou persistente e capaz...&#10;O facto de ter ajudado o colega revela que tenho conhecimento e sou solidário..."
                value={comportamentosAdaptativos}
                onChange={(e) => setComportamentosAdaptativos(e.target.value)}
                className="min-h-[120px] text-base"
              />
            </div>

            {/* Crença Adaptativa */}
            <div className="space-y-4">
              <Label htmlFor="crenca-adapt" className="text-lg font-semibold text-foreground">
                Nova crença adaptativa
              </Label>
              <p className="text-sm text-muted-foreground">
                Com base nas evidências dos seus créditos e comportamentos, formule uma crença mais adaptativa sobre si mesmo
              </p>
              <Textarea
                id="crenca-adapt"
                placeholder="Sou uma pessoa capaz, que enfrenta desafios e consegue superá-los..."
                value={crencaAdaptativa}
                onChange={(e) => setCrencaAdaptativa(e.target.value)}
                className="min-h-[100px] text-base"
              />
              
              <div className="space-y-3 pt-2">
                <Label className="text-sm font-medium text-foreground">
                  Quanto acredita nesta crença adaptativa?
                </Label>
                <div className="flex items-center gap-4">
                  <Slider
                    value={avaliacaoAdaptativa}
                    onValueChange={setAvaliacaoAdaptativa}
                    max={10}
                    step={1}
                    className="flex-1"
                  />
                  <span className="text-2xl font-bold text-therapeutic-growth w-12 text-center">
                    {avaliacaoAdaptativa[0]}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">0 = Não acredito nada | 10 = Acredito completamente</p>
              </div>
            </div>

            {/* Vantagens */}
            <div className="space-y-4">
              <Label htmlFor="vantagens" className="text-lg font-semibold text-foreground">
                Vantagens de adotar esta crença
              </Label>
              <p className="text-sm text-muted-foreground">
                Examine as possíveis vantagens de se ver de acordo com esta crença adaptativa
              </p>
              <Textarea
                id="vantagens"
                placeholder="Se eu acreditar que sou capaz, vou sentir-me mais confiante para aceitar novos desafios..."
                value={vantagens}
                onChange={(e) => setVantagens(e.target.value)}
                className="min-h-[120px] text-base"
              />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-muted/30">
          <p className="text-xs text-muted-foreground text-center">
            Baseado em: Beck, J. S. Terapia Cognitivo-Comportamental: Teoria e Prática (3ª ed.). Porto Alegre: Artmed, 2022, p. 301-302.
          </p>
        </Card>
      </main>
    </div>
  );
};

export default ModificacaoCrencas;
