import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Printer, Save, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const ResolvendoProblemas = () => {
  const { toast } = useToast();
  const [etapa1, setEtapa1] = useState("");
  const [etapa2, setEtapa2] = useState("");
  const [etapa3, setEtapa3] = useState("");
  const [etapa4, setEtapa4] = useState("");
  const [etapa5, setEtapa5] = useState("");
  const [etapa6, setEtapa6] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("resolvendo-problemas");
    if (saved) {
      const data = JSON.parse(saved);
      setEtapa1(data.etapa1 || "");
      setEtapa2(data.etapa2 || "");
      setEtapa3(data.etapa3 || "");
      setEtapa4(data.etapa4 || "");
      setEtapa5(data.etapa5 || "");
      setEtapa6(data.etapa6 || "");
    }
  }, []);

  const handlePrint = () => {
    window.print();
    toast({ title: "Pronto para imprimir" });
  };

  const handleSave = () => {
    localStorage.setItem("resolvendo-problemas", JSON.stringify({
      etapa1, etapa2, etapa3, etapa4, etapa5, etapa6
    }));
    toast({ title: "Guardado com sucesso" });
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-50 no-print">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/"><Button variant="ghost" size="sm"><ArrowLeft className="h-4 w-4 mr-2" />Voltar</Button></Link>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handleSave}><Save className="h-4 w-4 mr-2" />Guardar</Button>
              <Button variant="outline" size="sm" onClick={handlePrint}><Printer className="h-4 w-4 mr-2" />Imprimir</Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-therapeutic-calm/10 mb-4">
            <Target className="w-8 h-8 text-therapeutic-calm" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3">Resolvendo os Meus Problemas de Forma Eficaz</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Processo estruturado em 6 etapas para resolver problemas de maneira sistemática
          </p>
        </div>

        <Card className="p-8 mb-6 bg-card/80 backdrop-blur-sm space-y-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-therapeutic-calm/20 flex items-center justify-center">
                <span className="text-lg font-bold text-therapeutic-calm">1</span>
              </div>
              <Label className="text-lg font-semibold">Defina o problema</Label>
            </div>
            <p className="text-sm text-muted-foreground ml-13">
              Anote detalhadamente qual é o problema. Evite ser vago; seja específico sobre as circunstâncias.
            </p>
            <Textarea
              value={etapa1}
              onChange={(e) => setEtapa1(e.target.value)}
              placeholder="Descreva o problema de forma específica..."
              className="min-h-[120px]"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-therapeutic-calm/20 flex items-center justify-center">
                <span className="text-lg font-bold text-therapeutic-calm">2</span>
              </div>
              <Label className="text-lg font-semibold">Liste todas as possíveis soluções</Label>
            </div>
            <p className="text-sm text-muted-foreground ml-13">
              Deixe a sua mente ser criativa e anote todas as soluções que passarem pela sua cabeça, mesmo que pareçam insignificantes.
            </p>
            <Textarea
              value={etapa2}
              onChange={(e) => setEtapa2(e.target.value)}
              placeholder="Liste todas as soluções possíveis, sem filtrar..."
              className="min-h-[150px]"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-therapeutic-calm/20 flex items-center justify-center">
                <span className="text-lg font-bold text-therapeutic-calm">3</span>
              </div>
              <Label className="text-lg font-semibold">Organize as soluções por ordem de preferência</Label>
            </div>
            <p className="text-sm text-muted-foreground ml-13">
              Depois de gerar várias soluções, escolha as suas opções preferidas e elimine as que não fazem tanto sentido. Organize-as por ordem de preferência.
            </p>
            <Textarea
              value={etapa3}
              onChange={(e) => setEtapa3(e.target.value)}
              placeholder="Organize as soluções da mais preferida para a menos preferida..."
              className="min-h-[140px]"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-therapeutic-calm/20 flex items-center justify-center">
                <span className="text-lg font-bold text-therapeutic-calm">4</span>
              </div>
              <Label className="text-lg font-semibold">Escolha uma solução e elabore um plano de ação</Label>
            </div>
            <p className="text-sm text-muted-foreground ml-13">
              Neste plano, deve indicar quem vai agir e quando será implementado.
            </p>
            <Textarea
              value={etapa4}
              onChange={(e) => setEtapa4(e.target.value)}
              placeholder="Solução escolhida e plano de ação detalhado (quem, o quê, quando)..."
              className="min-h-[140px]"
            />
          </div>

          <Card className="bg-therapeutic-growth/5 p-6 border-therapeutic-growth/20">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-therapeutic-growth/20 flex items-center justify-center">
                <span className="text-lg font-bold text-therapeutic-growth">5</span>
              </div>
              <Label className="text-lg font-semibold">Aja!</Label>
            </div>
            <p className="text-sm text-muted-foreground ml-13">
              Coloque o seu plano em prática.
            </p>
            <Textarea
              value={etapa5}
              onChange={(e) => setEtapa5(e.target.value)}
              placeholder="Descreva as ações que realizou..."
              className="min-h-[100px] mt-3"
            />
          </Card>

          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-therapeutic-calm/20 flex items-center justify-center">
                <span className="text-lg font-bold text-therapeutic-calm">6</span>
              </div>
              <Label className="text-lg font-semibold">Avalie o resultado</Label>
            </div>
            <p className="text-sm text-muted-foreground ml-13">
              Se foi eficaz, veja se o problema realmente foi resolvido ou se precisará colocar em prática outra solução. 
              Se for esse o caso, volte à segunda etapa para levantar novas possíveis soluções.
            </p>
            <Textarea
              value={etapa6}
              onChange={(e) => setEtapa6(e.target.value)}
              placeholder="Avalie a eficácia da solução implementada..."
              className="min-h-[120px]"
            />
          </div>
        </Card>
      </main>
    </div>
  );
};

export default ResolvendoProblemas;
