import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Printer, Save, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import PrintHeader from "@/components/PrintHeader";

const CicloAnsiedade = () => {
  const { toast } = useToast();
  const [situacao, setSituacao] = useState("");
  const [pensamentos, setPensamentos] = useState("");
  const [emocoes, setEmocoes] = useState("");
  const [sensacoesFisicas, setSensacoesFisicas] = useState("");
  const [comportamento, setComportamento] = useState("");
  const [resultado, setResultado] = useState("");
  const [reflexao, setReflexao] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("ciclo-ansiedade");
    if (saved) {
      const data = JSON.parse(saved);
      setSituacao(data.situacao || "");
      setPensamentos(data.pensamentos || "");
      setEmocoes(data.emocoes || "");
      setSensacoesFisicas(data.sensacoesFisicas || "");
      setComportamento(data.comportamento || "");
      setResultado(data.resultado || "");
      setReflexao(data.reflexao || "");
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("ciclo-ansiedade", JSON.stringify({
      situacao, pensamentos, emocoes, sensacoesFisicas, comportamento, resultado, reflexao
    }));
    toast({ title: "Guardado com sucesso" });
  };

  const handlePrint = () => {
    window.print();
    toast({ title: "Pronto para imprimir" });
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <PrintHeader title="Ciclo da Ansiedade" />
      
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

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <RefreshCw className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Ciclo da Ansiedade
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compreenda como os pensamentos, emoções, sensações físicas e comportamentos se influenciam mutuamente
          </p>
        </div>

        <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
          <h3 className="font-semibold text-foreground mb-2">Compreender o Ciclo da Ansiedade</h3>
          <p className="text-sm text-muted-foreground mb-3">
            A ansiedade funciona como um ciclo onde cada componente alimenta o próximo. Uma situação desencadeia 
            pensamentos ansiosos, que geram emoções intensas, estas produzem sensações físicas desconfortáveis, 
            levando a comportamentos de evitação ou fuga.
          </p>
          <p className="text-sm text-muted-foreground">
            Este comportamento, embora traga alívio momentâneo, reforça a ansiedade a longo prazo, fazendo com que 
            o ciclo se repita. Compreender este padrão é o primeiro passo para interrompê-lo.
          </p>
        </Card>

        <div className="space-y-6">
          <Card className="p-6 bg-card/80 backdrop-blur-sm space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-therapeutic-trust/20 flex items-center justify-center">
                <span className="font-bold text-therapeutic-trust">1</span>
              </div>
              <Label className="text-lg font-semibold">Situação</Label>
            </div>
            <p className="text-sm text-muted-foreground ml-13">
              Imagine-se a enfrentar um problema ou situação difícil
            </p>
            <Textarea
              value={situacao}
              onChange={(e) => setSituacao(e.target.value)}
              placeholder="Descreva a situação que desencadeou a ansiedade..."
              className="min-h-[100px]"
            />
          </Card>

          <div className="flex justify-center">
            <div className="w-px h-8 bg-gradient-to-b from-border/50 to-transparent"></div>
          </div>

          <Card className="p-6 bg-card/80 backdrop-blur-sm space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="font-bold text-primary">2</span>
              </div>
              <Label className="text-lg font-semibold">Pensamentos Automáticos</Label>
            </div>
            <p className="text-sm text-muted-foreground ml-13">
              Que pensamentos surgiram automaticamente na sua mente?
            </p>
            <Textarea
              value={pensamentos}
              onChange={(e) => setPensamentos(e.target.value)}
              placeholder="Ex: 'Não vou conseguir', 'Algo terrível vai acontecer', 'Vou fazer figura de parvo'..."
              className="min-h-[100px]"
            />
          </Card>

          <div className="flex justify-center">
            <div className="w-px h-8 bg-gradient-to-b from-border/50 to-transparent"></div>
          </div>

          <Card className="p-6 bg-card/80 backdrop-blur-sm space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-therapeutic-growth/20 flex items-center justify-center">
                <span className="font-bold text-therapeutic-growth">3</span>
              </div>
              <Label className="text-lg font-semibold">Emoções</Label>
            </div>
            <p className="text-sm text-muted-foreground ml-13">
              Como se sentiu emocionalmente?
            </p>
            <Textarea
              value={emocoes}
              onChange={(e) => setEmocoes(e.target.value)}
              placeholder="Ex: Ansioso, com medo, com raiva, frustrado, envergonhado..."
              className="min-h-[100px]"
            />
          </Card>

          <div className="flex justify-center">
            <div className="w-px h-8 bg-gradient-to-b from-border/50 to-transparent"></div>
          </div>

          <Card className="p-6 bg-card/80 backdrop-blur-sm space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-therapeutic-calm/20 flex items-center justify-center">
                <span className="font-bold text-therapeutic-calm">4</span>
              </div>
              <Label className="text-lg font-semibold">Sensações Físicas</Label>
            </div>
            <p className="text-sm text-muted-foreground ml-13">
              Que sintomas físicos experienciou?
            </p>
            <Textarea
              value={sensacoesFisicas}
              onChange={(e) => setSensacoesFisicas(e.target.value)}
              placeholder="Ex: Falta de ar, coração acelerado, dor no peito, suor excessivo, tensão muscular, insónia..."
              className="min-h-[100px]"
            />
          </Card>

          <div className="flex justify-center">
            <div className="w-px h-8 bg-gradient-to-b from-border/50 to-transparent"></div>
          </div>

          <Card className="p-6 bg-card/80 backdrop-blur-sm space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                <span className="font-bold text-destructive">5</span>
              </div>
              <Label className="text-lg font-semibold">Comportamento</Label>
            </div>
            <p className="text-sm text-muted-foreground ml-13">
              O que fez em resposta a tudo isto?
            </p>
            <Textarea
              value={comportamento}
              onChange={(e) => setComportamento(e.target.value)}
              placeholder="Ex: Fugi/evitei a situação, procrastinei, isolei-me, fiquei paralisado..."
              className="min-h-[100px]"
            />
          </Card>

          <div className="flex justify-center">
            <div className="w-px h-8 bg-gradient-to-b from-border/50 to-transparent"></div>
          </div>

          <Card className="p-6 bg-destructive/5 border-destructive/20 space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                <span className="font-bold text-destructive">6</span>
              </div>
              <Label className="text-lg font-semibold">Resultado</Label>
            </div>
            <p className="text-sm text-muted-foreground ml-13">
              Qual foi o resultado deste comportamento?
            </p>
            <Textarea
              value={resultado}
              onChange={(e) => setResultado(e.target.value)}
              placeholder="Ex: Não resolvi o problema, senti alívio momentâneo mas perdi confiança, senti culpa, a ansiedade aumentou para situações futuras..."
              className="min-h-[100px]"
            />
          </Card>
        </div>

        <Card className="p-6 bg-primary/5 border-primary/20 mt-8 space-y-3">
          <Label className="text-lg font-semibold">Reflexão: Como interromper este ciclo?</Label>
          <p className="text-sm text-muted-foreground">
            Que estratégias alternativas poderia utilizar para interromper este ciclo? Como poderia responder de 
            forma diferente em cada etapa?
          </p>
          <Textarea
            value={reflexao}
            onChange={(e) => setReflexao(e.target.value)}
            placeholder="Ex: Questionar os pensamentos automáticos, praticar técnicas de relaxamento, enfrentar gradualmente ao invés de evitar..."
            className="min-h-[120px]"
          />
        </Card>

        <Card className="p-6 bg-muted/30 mt-6">
          <p className="text-xs text-muted-foreground text-center">
            Baseado em: CLARK, D. A.; BECK, A. T. Terapia cognitiva para os transtornos de ansiedade. Porto Alegre: Artmed, 2012.
          </p>
        </Card>
      </main>
    </div>
  );
};

export default CicloAnsiedade;
